import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, CheckCircle2, XCircle, ArrowLeft, BarChart3 } from 'lucide-react';
import { QUESTIONS } from '../data/questions';

interface QuizResult {
  date: string;
  score: number;
  total: number;
  answers: { questionId: number; isCorrect: boolean }[];
}

interface StatsDashboardProps {
  onBack: () => void;
}

const StatsDashboard: React.FC<StatsDashboardProps> = ({ onBack }) => {
  // In a real app, this would come from a database (Firebase).
  // For now, we use localStorage to demonstrate the feature.
  const [results, setResults] = React.useState<QuizResult[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('quiz_results');
    if (saved) {
      try {
        setResults(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse results', e);
      }
    }
  }, []);

  const totalAttempts = results.length;
  const avgScore = totalAttempts > 0 
    ? (results.reduce((acc, curr) => acc + curr.score, 0) / totalAttempts).toFixed(1)
    : 0;

  // Question specific stats
  const questionStats = QUESTIONS.map(q => {
    const attempts = results.filter(r => r.answers.some(a => a.questionId === q.id));
    const corrects = results.filter(r => r.answers.find(a => a.questionId === q.id)?.isCorrect);
    const ratio = attempts.length > 0 ? (corrects.length / attempts.length) * 100 : 0;
    return { id: q.id, ratio, total: attempts.length, corrects: corrects.length };
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-4xl glass-panel p-8 rounded-3xl border-system-blue/30"
    >
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-system-blue/10 border border-system-blue/30 rounded-xl flex items-center justify-center glow-blue">
            <BarChart3 className="text-system-blue w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">System Status Report</h2>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Hub
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-black/40 border border-white/5 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <Users className="text-system-blue/60 w-5 h-5" />
            <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Total Active Hunters</span>
          </div>
          <div className="text-4xl font-black text-white italic tracking-tighter">{totalAttempts}</div>
          <div className="text-[10px] text-system-blue font-bold uppercase mt-2">Completed Quests</div>
        </div>

        <div className="bg-black/40 border border-white/5 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="text-green-500/60 w-5 h-5" />
            <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Avg Clearance Rate</span>
          </div>
          <div className="text-4xl font-black text-white italic tracking-tighter">{avgScore}</div>
          <div className="text-[10px] text-green-500 font-bold uppercase mt-2">Points Per Session</div>
        </div>

        <div className="bg-black/40 border border-white/5 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle2 className="text-yellow-500/60 w-5 h-5" />
            <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">Success Probability</span>
          </div>
          <div className="text-4xl font-black text-white italic tracking-tighter">
            {totalAttempts > 0 ? ((parseFloat(avgScore as string) / QUESTIONS.length) * 100).toFixed(0) : 0}%
          </div>
          <div className="text-[10px] text-yellow-500 font-bold uppercase mt-2">Overall Accuracy</div>
        </div>
      </div>

      {/* Per Question Analysis */}
      <div className="space-y-4">
        <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-white/10" />
          Combat Data Analysis
          <span className="w-8 h-px bg-white/10" />
        </h3>
        
        <div className="grid gap-3">
          {questionStats.map((stat, idx) => (
            <div key={stat.id} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-system-blue/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="text-xs font-mono text-white/20">#{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
                <div className="text-[11px] font-bold text-white/80 uppercase tracking-widest">Question Segment {stat.id}</div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[9px] text-white/40 uppercase font-black tracking-widest">Accuracy</span>
                    <span className={`text-xs font-mono font-bold ${stat.ratio > 70 ? 'text-green-400' : stat.ratio > 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {stat.ratio.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-24 h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={`h-full transition-all duration-1000 ${stat.ratio > 70 ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : stat.ratio > 40 ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'}`}
                      style={{ width: `${stat.ratio}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 min-w-[60px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500/60" />
                  <span className="text-xs font-mono text-white/60">{stat.corrects}</span>
                </div>
                <div className="flex items-center gap-2 min-w-[60px]">
                  <XCircle className="w-3.5 h-3.5 text-red-500/60" />
                  <span className="text-xs font-mono text-white/60">{stat.total - stat.corrects}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {totalAttempts === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-2xl mt-8">
          <p className="text-white/20 text-xs font-black uppercase tracking-widest">No Combat Data Logged Yet</p>
        </div>
      )}
    </motion.div>
  );
};

export default StatsDashboard;
