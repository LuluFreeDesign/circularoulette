import { useState } from "react";
import { Wheel } from "./components/Wheel";
import { Quiz } from "./components/Quiz";
import { quizDataByCategory } from "./data/quizData";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleCategorySelected = (category: string) => {
    // Cas spécial : "et ça repart !" relance automatiquement la roue
    if (category === "et ça repart !") {
      // Pas besoin de changer de vue, juste garder la roue visible
      return;
    }
    
    // Cas spécial : "mystère ???" sélectionne une question aléatoire
    if (category === "mystère ???") {
      const allCategories = Object.keys(quizDataByCategory).filter(
        cat => cat !== "et ça repart !" && cat !== "mystère ???" && quizDataByCategory[cat].length > 0
      );
      const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
      setCurrentCategory(randomCategory);
      return;
    }
    
    setCurrentCategory(category);
  };

  const handleQuizComplete = () => {
    setCurrentCategory(null);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      {/* Contenu principal : roue ou quiz */}
      {!currentCategory ? (
        <Wheel 
          onCategorySelected={handleCategorySelected}
          isSpinning={isSpinning}
          setIsSpinning={setIsSpinning}
        />
      ) : (
        <Quiz 
          category={currentCategory}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
}