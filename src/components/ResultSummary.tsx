import React from 'react';
import { motion } from 'motion/react';
import { Award, RotateCcw, ShieldCheck, Swords } from 'lucide-react';

interface ResultSummaryProps {
  score: number;
  total: number;
  onRestart: () => void;
  onShowStats?: () => void;
}

const ResultSummary: React.FC<ResultSummaryProps> = ({ score, total, onRestart, onShowStats }) => {
  const percentage = Math.round((score / total) * 100);

  let rank = "E";
  let color = "text-gray-400";
  let message = "魔力值極低，建議重新覺醒。";

  if (percentage === 100) {
    rank = "S";
    color = "text-system-blue";
    message = "醫學奇才！你的臨床判斷精準無誤，堪稱傳說級獵人。";
  } else if (percentage >= 80) {
    rank = "A";
    color = "text-purple-400";
    message = "卓越的急診醫師，具備處理最危急病況的能力。";
  } else if (percentage >= 60) {
    rank = "B";
    color = "text-emerald-400";
    message = "合格的臨床戰士，已掌握大部分感染症核心知識。";
  } else if (percentage >= 40) {
    rank = "C";
    color = "text-yellow-400";
    message = "實習階段，仍需更多實戰磨練。";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="glass-panel rounded-3xl border-system-blue/30 flex flex-col p-8 items-center text-center">
        <div className="inline-flex px-4 py-1 bg-system-blue/10 border border-system-blue/20 rounded-full text-system-blue text-[10px] font-black tracking-[0.3em] mb-8">
          FINAL RANK EVALUATION
        </div>

        {/* Rank Badge */}
        <div className="relative mb-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10 }}
            className={`text-[120px] font-black italic leading-none ${color} tracking-tighter drop-shadow-[0_0_20px_currentColor]`}
          >
            {rank}
          </motion.div>
          <div className="absolute -top-4 -right-4 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/10 group">
            <Award className={`w-8 h-8 ${color}`} />
          </div>
        </div>

        <h2 className="text-white text-2xl font-bold mb-2 italic tracking-tight uppercase">獵人等級認定：{rank} 級</h2>
        <p className="text-white/50 text-sm mb-12 font-medium">{message}</p>

        <div className="w-full grid grid-cols-2 gap-4 mb-12">
          <div className="glass-panel p-4 rounded-2xl bg-white/5 border-white/5">
            <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
              <Swords className="w-3 h-3 text-emerald-400" />
              擊破數
            </div>
            <div className="text-3xl font-black text-white tracking-tighter">{score} <span className="text-xs text-white/40">/ {total}</span></div>
          </div>
          <div className="glass-panel p-4 rounded-2xl bg-white/5 border-white/5">
            <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-system-blue" />
              同步率
            </div>
            <div className="text-3xl font-black text-white tracking-tighter">{percentage}%</div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full flex items-center justify-center gap-4 py-5 bg-system-blue text-system-dark rounded-2xl font-black italic text-lg tracking-[0.2em] shadow-[0_0_30px_#00e5ff66] hover:brightness-110 active:scale-95 transition-all mb-4"
        >
          <RotateCcw className="w-6 h-6" />
          重新挑戰系統
        </button>

        {onShowStats && (
          <button
            onClick={onShowStats}
            className="w-full flex items-center justify-center gap-4 py-4 bg-white/5 border border-white/10 text-white/50 rounded-2xl font-black italic text-sm tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all"
          >
            查看歷史戰績 (HISTORY)
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ResultSummary;
