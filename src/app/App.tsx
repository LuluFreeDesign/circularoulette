import { useState, useEffect, useRef } from "react";
import { Wheel } from "./components/Wheel";
import { Quiz } from "./components/Quiz";
import { quizDataByCategory } from "./data/quizData";

// Catégories actives pour le quiz (exclure "et ça repart !", "mystère !!", "on en parle !?" et "en train !!!")
const quizCategories = Object.keys(quizDataByCategory).filter(
  (cat) => cat !== "et ça repart !" && cat !== "mystère !!" && cat !== "on en parle !?" && cat !== "en train !!!"
);

export default function App() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [mysteryResolvedCategory, setMysteryResolvedCategory] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Détecter si on est dans une iframe
  const isInIframe = window.parent !== window;

  // Auto-resize pour iframe : envoyer la hauteur au parent
  useEffect(() => {
    if (!isInIframe) return;

    const sendHeight = () => {
      // Mesurer le wrapper de contenu réel, pas document.documentElement
      // Cela évite la boucle infinie causée par min-h-screen / 100vh
      const contentEl = contentRef.current;
      if (!contentEl) return;

      const height = contentEl.scrollHeight;
      window.parent.postMessage(
        {
          type: 'iframe-resize',
          height: height
        },
        '*'
      );
    };

    // Petit délai pour laisser le DOM se stabiliser après un changement de vue
    const initialTimeout = setTimeout(sendHeight, 50);

    // Observer les changements de taille du contenu
    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    // MutationObserver pour détecter les changements de contenu internes
    // (ex: affichage de l'explication, bloc jeu concours, etc.)
    const mutationObserver = new MutationObserver(() => {
      sendHeight();
    });

    if (contentRef.current) {
      mutationObserver.observe(contentRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style'],
      });
    }

    // Polling de secours réduit (toutes les 1s au lieu de 500ms)
    const interval = setInterval(sendHeight, 1000);

    return () => {
      clearTimeout(initialTimeout);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      clearInterval(interval);
    };
  }, [currentCategory, isInIframe]);

  const handleCategorySelected = (category: string) => {
    // Cas spécial : "et ça repart !" relance automatiquement la roue
    if (category === "et ça repart !") {
      // Pas besoin de changer de vue, juste garder la roue visible
      return;
    }

    // Cas spécial : "mystère !!" sélectionne une catégorie au hasard
    if (category === "mystère !!") {
      const randomIndex = Math.floor(Math.random() * quizCategories.length);
      const randomCategory = quizCategories[randomIndex];
      setMysteryResolvedCategory(randomCategory);
      setCurrentCategory("mystère !!");
      return;
    }

    setMysteryResolvedCategory(null);
    setCurrentCategory(category);
  };

  const handleQuizComplete = () => {
    setCurrentCategory(null);
    setMysteryResolvedCategory(null);
  };

  return (
    <div
      ref={contentRef}
      className={`bg-white flex items-center justify-center p-4 md:p-8 ${
        isInIframe ? '' : 'min-h-screen'
      }`}
    >
      {/* Contenu principal : roue ou quiz */}
      {!currentCategory ? (
        <Wheel 
          onCategorySelected={handleCategorySelected}
          isSpinning={isSpinning}
          setIsSpinning={setIsSpinning}
        />
      ) : (
        <Quiz 
          category={currentCategory === "mystère !!" ? mysteryResolvedCategory! : currentCategory}
          isMystery={currentCategory === "mystère !!"}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
}
