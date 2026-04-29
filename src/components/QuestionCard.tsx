import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, Zap } from 'lucide-react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (key: string) => void;
  showExplanation: boolean;
  onNext: () => void;
  isLast: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showExplanation,
  onNext,
  isLast,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Category Tags */}
      <div className="flex justify-center gap-3">
        <span className="px-4 py-1 glass-panel text-system-blue text-[10px] font-black uppercase tracking-widest rounded-full border-system-blue/30 glow-blue">
          {question.topic}
        </span>
        <span className="px-4 py-1 glass-panel text-white/40 text-[10px] font-black uppercase tracking-widest rounded-full border-white/5">
          {question.chapter}
        </span>
      </div>

      {/* Question Window */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden border-system-blue/10">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-system-blue shadow-[0_0_20px_rgba(0,229,255,0.8)]" />
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="text-5xl font-black italic text-system-blue/5 select-none leading-none -ml-2 -mt-2">Q</div>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed tracking-tight whitespace-pre-wrap">
              {question.scenario}
            </h2>
          </div>

          {/* Image Display */}
          {question.imageUrl && (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 group shadow-2xl min-h-[100px] flex items-center justify-center font-mono"
            >
              <img 
                src={question.imageUrl} 
                alt="System Analysis Data" 
                className="w-full h-auto object-contain mx-auto max-h-[400px] hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('p-12', 'bg-white/5');
                    parent.innerHTML = `
                      <div class="text-center">
                        <div class="text-system-blue/40 mb-2 text-xs uppercase tracking-widest">[ 影像鑑定資料缺失 ]</div>
                        <div class="text-white/20 text-[10px] italic">請確保圖片已上傳至 public 資料夾並命名為 q1.png 與 q10.png</div>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid gap-4">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.key;
          const isCorrect = option.key === question.correctAnswer;
          const showCorrectness = showExplanation;

          let btnClass = "system-button w-full glass-panel group p-5 rounded-2xl flex items-center border transition-all ";
          
          if (!showCorrectness) {
            btnClass += isSelected 
              ? "border-system-blue bg-system-blue/20 scale-[1.02] shadow-[0_0_20px_rgba(0,229,255,0.2)]" 
              : "border-white/10 hover:border-white/30 hover:bg-white/5";
          } else {
            if (isCorrect) {
              btnClass += "border-emerald-500 bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
            } else if (isSelected && !isCorrect) {
              btnClass += "border-red-500 bg-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]";
            } else {
              btnClass += "border-white/5 opacity-20 grayscale";
            }
          }

          return (
            <button
              key={option.key}
              onClick={() => !showExplanation && onSelectAnswer(option.key)}
              disabled={showExplanation}
              className={btnClass}
            >
              <span className={`w-12 h-12 flex items-center justify-center rounded-xl font-black italic text-xl transition-colors border ${
                isSelected ? 'bg-system-blue text-system-dark border-system-blue' : 'bg-white/5 text-white/60 border-white/10'
              }`}>
                {option.key}
              </span>
              <span className="ml-6 text-lg font-medium text-white/90">{option.text}</span>
              
              {showCorrectness && (
                <div className="ml-auto">
                  {isCorrect ? (
                    <Check className="w-6 h-6 text-emerald-400" />
                  ) : isSelected ? (
                    <X className="w-6 h-6 text-red-400" />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Window */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 rounded-3xl border-system-blue/20 bg-blue-900/10"
          >
            <div className="flex items-start gap-5">
              <div className="mt-1 p-3 bg-system-blue/20 rounded-xl text-system-blue">
                <Zap className="w-6 h-6 glow-blue" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-2 ${selectedAnswer === question.correctAnswer ? 'text-emerald-400' : 'text-red-400'}`}>
                    {selectedAnswer === question.correctAnswer ? '挑戰成功 (Success)' : `挑戰失敗：正確回答為 (${question.correctAnswer})`}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {question.explanation}
                  </p>
                </div>
                
                <div className="flex justify-end pt-4">
                  <button
                    onClick={onNext}
                    className="flex items-center px-8 py-3 bg-system-blue text-system-dark rounded-xl font-black italic text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_#00e5ff44]"
                  >
                    {isLast ? '查看最終等級' : '下一個挑戰'}
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
