import { motion } from "motion/react";
import { useEffect, useState } from "react";
import wheelBg from "../../assets/f7d057cb466662ed0ddabd1d2e04b69c99e0bf0d.png";
import caVaOuImg from "../../assets/beb8267362c4693d1b1421f7966c27af31c8b4b5.png";
import bonPlanImg from "../../assets/4bdf10f7341b556e2379fb2e2be9eaa2be4d1c23.png";
import etCaRepartImg from "../../assets/a6bc7752a367206b9e9cd64f4c894bdacc2fd319.png";
import challengeImg from "../../assets/ad998f0abcf9f1ea6d1230c158c3cf7aaaaf533b.png";
import jAgisImg from "../../assets/8483358a2a40fbc031cd63fde31042dc703c5e1e.png";
import maConsoImg from "../../assets/a3b96f3a8adf8bb0039e500023e4b00b44a69a4d.png";
import mystereImg from "../../assets/259a3d7fe1600591fd6988b6539df8deaf560504.png";
import onEnParleImg from "../../assets/1892438245813fa8869d6842cca9464445a729e6.png";

interface WheelProps {
  onCategorySelected: (category: string) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
}

const categories = [
  "ma conso",
  "bon plan",
  "et ça repart !",
  "j'agis !!",
  "on en parle !?",
  "ça va où ?",
  "mystère ???",
  "challenge !!!"
];

// Images pour chaque catégorie (à compléter au fur et à mesure)
const categoryImages: Record<string, string | null> = {
  "ma conso": maConsoImg,
  "bon plan": bonPlanImg,
  "et ça repart !": etCaRepartImg,
  "j'agis !!": jAgisImg,
  "on en parle !?": onEnParleImg,
  "ça va où ?": caVaOuImg,
  "mystère ???": mystereImg,
  "challenge !!!": challengeImg
};

export function Wheel({ onCategorySelected, isSpinning, setIsSpinning }: WheelProps) {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détection de la taille d'écran
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    
    // Calcul de la rotation aléatoire : plusieurs tours + angle final
    const minSpins = 5;
    const maxSpins = 8;
    const spins = Math.floor(Math.random() * (maxSpins - minSpins + 1)) + minSpins;
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (spins * 360) + extraDegrees;
    
    setRotation(totalRotation);
    
    // Calculer la catégorie sélectionnée après l'animation
    setTimeout(() => {
      const normalizedRotation = totalRotation % 360;
      const sectionAngle = 360 / 8; // 45 degrés par section
      // La flèche au départ est entre challenge et ma conso
      // Calcul direct sans ajustement supplémentaire
      const categoryIndex = Math.floor((360 - normalizedRotation) / sectionAngle) % 8;
      
      onCategorySelected(categories[categoryIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Flèche indicatrice au-dessus de la roue */}
      <div 
        className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-[#F2793D]"
        aria-hidden="true"
      />
      
      {/* Conteneur de la roue */}
      <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px]">
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ 
            duration: 2,
            ease: [0.25, 0.1, 0.25, 1] // Courbe d'accélération réaliste
          }}
          className="relative rounded-full overflow-hidden w-full h-full"
        >
          <img 
            src={wheelBg} 
            alt="Roue de la CirculaRoulette avec 8 sections" 
            className="w-full h-full rounded-full object-cover aspect-square"
          />
          
          {/* Images des catégories */}
          <div className="absolute inset-0">
            {categories.map((category, index) => {
              const angle = (index * 45) + 22.5; // Centré dans la part colorée (+ 22.5° pour décaler au milieu de la section)
              const radius = isMobile ? 120 : 180; // Distance du centre adaptée selon la taille d'écran
              const radians = (angle * Math.PI) / 180;
              const x = radius * Math.sin(radians);
              const y = -radius * Math.cos(radians);
              
              const categoryImage = categoryImages[category];
              
              if (!categoryImage) return null;
              
              return (
                <div
                  key={`img-${category}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle}deg)`,
                  }}
                >
                  <img 
                    src={categoryImage} 
                    alt={category}
                    className="w-16 h-auto md:w-20"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Bouton central pour faire tourner la roue */}
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-20 h-20 shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-[#F2793D] focus:ring-opacity-50"
          aria-label={isSpinning ? "La roue tourne" : "Tourner la roue"}
        >
          <span className="text-2xl" aria-hidden="true">↻</span>
        </button>
      </div>
      
      {/* Instructions */}
      <p className="text-center text-base md:text-lg text-gray-700" aria-live="polite">
        {isSpinning ? "La roue tourne..." : "Cliquez au centre pour tourner la roue !"}
      </p>
    </div>
  );
}
