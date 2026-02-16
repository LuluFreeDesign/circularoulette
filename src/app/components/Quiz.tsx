import { useState, useMemo } from "react";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import { quizDataByCategory, Question } from "../data/quizData";

// Images des catégories (mêmes que sur la roue)
import bonPlanImg from "../../assets/bon-plan.jpg";
import caVaOuImg from "../../assets/ca-va-ou.jpg";
import challengeImg from "../../assets/challenge.jpg";
import jagisImg from "../../assets/j-agis.jpg";
import maConsoImg from "../../assets/ma-conso.jpg";
import mystereImg from "../../assets/mystere.jpg";

const categoryLabelImages: Record<string, string> = {
  "ça va où ?": caVaOuImg,
  "j'agis !!": jagisImg,
  "challenge !!!": challengeImg,
  "bon plan": bonPlanImg,
  "ma conso": maConsoImg,
  "mystère !!": mystereImg,
};

/**
 * Parse le texte d'explication pour convertir les liens markdown [texte](url)
 * en éléments <a> cliquables et les \n en <br />
 */
function renderExplanation(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const result: React.ReactNode[] = [];

  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      result.push(<br key={`br-${lineIndex}`} />);
    }

    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        result.push(line.slice(lastIndex, match.index));
      }
      result.push(
        <a
          key={`link-${lineIndex}-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#0084d4] hover:text-[#003865] transition-colors"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < line.length) {
      result.push(line.slice(lastIndex));
    }
  });

  return result;
}

/** Helpers pour gérer correctAnswer: number | number[] */
function getCorrectAnswers(correctAnswer: number | number[]): number[] {
  return Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
}

function isAnswerCorrect(index: number, correctAnswer: number | number[]): boolean {
  return getCorrectAnswers(correctAnswer).includes(index);
}

/**
 * Système de "deck" (paquet de cartes) par catégorie.
 * On mélange toutes les questions, on les pioche une par une,
 * et on ne re-mélange que quand toutes ont été posées.
 * Garantit zéro doublon tant que le paquet n'est pas épuisé.
 */
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const categoryDecks: Record<string, Question[]> = {};

function pickNextQuestion(category: string): Question | null {
  const allQuestions = quizDataByCategory[category];
  if (!allQuestions || allQuestions.length === 0) return null;

  // Si le deck est vide ou n'existe pas, on le (re)mélange
  if (!categoryDecks[category] || categoryDecks[category].length === 0) {
    categoryDecks[category] = shuffleArray(allQuestions);
  }

  // Piocher la première carte du deck
  return categoryDecks[category].shift()!;
}

interface QuizProps {
  category: string;
  isMystery?: boolean;
  onComplete: () => void;
}

export function Quiz({ category, isMystery = false, onComplete }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  
  const currentQuestion = useMemo(() => {
    return pickNextQuestion(category);
  }, [category]);
  
  if (!currentQuestion) {
    return <div>Aucune question disponible pour cette catégorie.</div>;
  }

  const isMultiAnswer = Array.isArray(currentQuestion.correctAnswer);
  const correctAnswers = getCorrectAnswers(currentQuestion.correctAnswer);
  const isDiscussionQuestion = currentQuestion.options.length === 0;

  // L'usager a trouvé au moins une bonne réponse parmi ses sélections
  const hasAtLeastOneCorrect = selectedAnswers.some(a => correctAnswers.includes(a));

  const handleAnswerClick = (index: number) => {
    if (showResult) return;

    if (isMultiAnswer) {
      // Mode multi-réponses : toggle la sélection
      setSelectedAnswers(prev =>
        prev.includes(index)
          ? prev.filter(a => a !== index)
          : [...prev, index]
      );
    } else {
      // Mode simple : remplace la sélection
      setSelectedAnswers([index]);
    }
  };

  const handleValidate = () => {
    if (selectedAnswers.length === 0) return;
    setShowResult(true);
  };

  const handleNext = () => {
    onComplete();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      {/* Catégorie */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          {isMystery && categoryLabelImages["mystère !!"] && (
            <img
              src={categoryLabelImages["mystère !!"]}
              alt="Mystère !!"
              className="h-10 object-contain"
            />
          )}
          {categoryLabelImages[category] ? (
            <img
              src={categoryLabelImages[category]}
              alt={category}
              className="h-10 object-contain"
            />
          ) : (
            <span className={`inline-block px-4 py-2 rounded-full ${isMystery ? "bg-[#00205b] text-white" : "bg-[#0084d4] text-white"}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          )}
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl mb-3 text-[#00205b]">
        {currentQuestion.question}
      </h2>

      {/* Indice */}
      {currentQuestion.hint && (() => {
        // Extraire l'URL depuis le hint (format markdown [texte](url) ou URL brute)
        const markdownMatch = currentQuestion.hint.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
        const bareUrlMatch = currentQuestion.hint.match(/(https?:\/\/[^\s)]+)/);
        const hintUrl = markdownMatch ? markdownMatch[2] : bareUrlMatch ? bareUrlMatch[1] : null;

        return (
          <div className="mb-5 p-4 bg-[#a4c8e1]/40 border-l-4 border-[#0084d4] rounded-lg">
            <p className="text-[#00205b] flex items-start gap-2">
              <span className="text-lg shrink-0" aria-hidden="true">💡</span>
              <span>
                <strong className="text-[#00205b]">Indice</strong>
                <br />
                <span className="text-sm">
                  Pour en savoir plus,{" "}
                  {hintUrl ? (
                    <a
                      href={hintUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0084d4] underline hover:text-[#003865] transition-colors"
                    >
                      rendez-vous par ici !
                    </a>
                  ) : (
                    "rendez-vous par ici !"
                  )}
                </span>
              </span>
            </p>
          </div>
        );
      })()}

      {/* Indication multi-réponses */}
      {isMultiAnswer && !isDiscussionQuestion && (
        <p className="mb-5 text-sm text-[#003865] bg-[#a4c8e1]/30 border border-[#0084d4]/30 rounded-lg px-4 py-2 italic">
          Plusieurs réponses sont possibles. Trouvez-en au moins une !
        </p>
      )}

      {/* Options de réponse OU message de réflexion pour questions de discussion */}
      {isDiscussionQuestion ? (
        <div className="mb-6 p-6 bg-[#a4c8e1]/40 border-2 border-[#0084d4] rounded-lg">
          <p className="text-[#00205b] text-center font-medium text-lg">
            C'est une question de réflexion personnelle. Prenez un moment pour y penser...
          </p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers.includes(index);
            const isCorrectOption = isAnswerCorrect(index, currentQuestion.correctAnswer);
            const showCorrect = showResult && isCorrectOption;
            const showIncorrect = showResult && isSelected && !isCorrectOption;

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all focus:outline-none focus:ring-4 focus:ring-[#0084d4]/50 ${
                  showCorrect
                    ? "border-green-500 bg-green-50"
                    : showIncorrect
                    ? "border-[#f2827f] bg-[#f2827f]/30"
                    : isSelected
                    ? "border-[#0084d4] bg-[#a4c8e1]/30"
                    : "border-gray-300 hover:border-[#0084d4] hover:bg-gray-50"
                } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                aria-pressed={isSelected}
                aria-label={`Option ${index + 1}: ${option}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base md:text-lg">{option}</span>
                  {showCorrect && <Check className="text-green-600 shrink-0" aria-label="Bonne réponse" />}
                  {showIncorrect && <X className="text-[#651c32] shrink-0" aria-label="Mauvaise réponse" />}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Résultat et explication */}
      {showResult || isDiscussionQuestion ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-6"
        >
          <div className={`p-4 rounded-lg ${ isDiscussionQuestion ? "bg-[#a4c8e1]/40 border-2 border-[#0084d4]" : hasAtLeastOneCorrect ? "bg-green-500/10 border-2 border-green-500" : "bg-[#f2827f]/30 border-2 border-[#f2827f]" }`}>
            {!isDiscussionQuestion && (
              <h3 className={`font-bold text-lg mb-2 flex items-center gap-2 ${hasAtLeastOneCorrect ? "text-green-700" : "text-[#651c32]"}`}>
                {hasAtLeastOneCorrect ? (
                  <>
                    <Check aria-hidden="true" /> Bonne réponse !
                  </>
                ) : (
                  <>
                    <X aria-hidden="true" /> Mauvaise réponse
                  </>
                )}
              </h3>
            )}
            {isDiscussionQuestion && (
              <h3 className="font-bold text-lg mb-2 text-[#00205b]">
                Piste de réflexion
              </h3>
            )}
            <p className="text-[#00205b] leading-relaxed">
              {renderExplanation(currentQuestion.explanation)}
            </p>
          </div>
        </motion.div>
      ) : null}

      {/* Boutons d'action */}
      <div className="flex gap-4">
        {!showResult && !isDiscussionQuestion ? (
          <button
            onClick={handleValidate}
            disabled={selectedAnswers.length === 0}
            className="flex-1 bg-[#00205b] text-white py-3 px-6 rounded-lg transition-all hover:bg-[#003865] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-[#00205b]/50"
          >
            Valider ma réponse
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 bg-[#e8854a] text-white py-3 px-6 rounded-lg transition-all hover:bg-[#d0743e] focus:outline-none focus:ring-4 focus:ring-[#e8854a]/50"
          >
            Rejouer
          </button>
        )}
      </div>
    </motion.div>
  );
}
