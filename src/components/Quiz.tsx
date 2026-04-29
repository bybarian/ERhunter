import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { QUESTIONS } from '../data/questions';
import QuestionCard from './QuestionCard';
import ResultSummary from './ResultSummary';
import { Swords, ShieldAlert, Lock, ShieldCheck, GraduationCap, LayoutGrid } from 'lucide-react';

const Quiz: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthError, setIsAuthError] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAuthenticate = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (passwordInput === 'cgh888') {
      setIsAuthenticated(true);
      setIsAuthError(false);
    } else {
      setIsAuthError(true);
      setTimeout(() => setIsAuthError(false), 500);
      setPasswordInput('');
    }
  };

  const handleSelectAnswer = (key: string) => {
    setSelectedAnswer(key);
    setShowExplanation(true);
    if (key === QUESTIONS[currentIdx].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsFinished(false);
  };

  const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 md:py-12 relative">
      {/* Background Decor */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Panel */}
      <header className="w-full max-w-3xl mb-12 glass-panel p-6 rounded-2xl flex items-center justify-between border-system-blue/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-system-blue/20 border border-system-blue/40 rounded-xl flex items-center justify-center glow-blue">
            <Swords className="text-system-blue w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white italic tracking-tighter glow-blue uppercase">Solo Leveling: Medical Quest</h1>
            <p className="text-system-blue/60 text-[10px] font-bold uppercase tracking-[0.3em]">急診專科：暗影等級鑑定測試</p>
          </div>
        </div>
        
        <div className="hidden sm:flex flex-col items-end gap-2 px-4">
          <span className="text-[10px] text-system-blue/50 font-bold uppercase tracking-widest flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" />
            System Progression
          </span>
          <div className="w-40 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-system-blue shadow-[0_0_10px_#00e5ff]"
            />
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl flex-1 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            <motion.div
              key="auth"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`glass-panel p-10 rounded-3xl text-center max-w-md w-full border-system-blue/30 relative transition-all duration-300 ${isAuthError ? 'border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.2)]' : ''}`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#020205] border border-system-blue/30 rounded-2xl flex items-center justify-center glow-blue">
                <Lock className={`w-8 h-8 transition-colors ${isAuthError ? 'text-red-500' : 'text-system-blue'}`} />
              </div>
              
              <div className="mt-8 mb-6">
                <h2 className="text-xl font-black text-white italic tracking-tighter mb-2 uppercase">System Authentication</h2>
                <p className="text-white/40 text-xs font-bold tracking-widest uppercase">Enter SG Access Code</p>
              </div>

              <form onSubmit={handleAuthenticate} className="space-y-4">
                <div className="relative group">
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="ACCESS CODE"
                    className={`w-full bg-black/40 border-b-2 outline-none py-3 px-4 text-center font-mono text-xl tracking-[0.5em] text-system-blue placeholder:text-system-blue/20 transition-all ${isAuthError ? 'border-red-500 text-red-500' : 'border-system-blue/30 focus:border-system-blue group-hover:border-system-blue/60'}`}
                    autoFocus
                  />
                  {isAuthError && (
                    <motion.div 
                      key="error-hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-[10px] font-black uppercase mt-2 tracking-widest"
                    >
                      Authentication Failed
                    </motion.div>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-system-blue/10 border border-system-blue/30 text-system-blue rounded-xl font-black italic tracking-[0.2em] shadow-[0_0_40px_rgba(0,229,255,0.1)] hover:bg-system-blue hover:text-system-dark transition-all"
                >
                  VERIFY IDENTITY
                </button>
              </form>

              <div className="mt-10 flex justify-center items-center gap-4 text-white/10 uppercase text-[9px] font-black tracking-widest">
                <div className="h-px flex-1 bg-white/5" />
                <span>Restricted Area</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
            </motion.div>
          ) : !started ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="glass-panel p-10 rounded-3xl text-center max-w-lg border-system-blue/30"
            >
              <div className="w-20 h-20 bg-system-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-system-blue/30 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <Swords className="text-system-blue w-10 h-10 glow-blue" />
              </div>
              <h2 className="text-2xl font-black text-white italic tracking-tighter mb-4">SYSTEM NOTIFICATION</h2>
              <p className="text-white/80 leading-relaxed text-lg mb-10">
                您可以開始進行這場<span className="text-system-blue font-bold px-1 underline decoration-system-blue/40">「急診專科獵人」</span>等級鑑定測試了！
              </p>
              <button
                onClick={handleStart}
                className="w-full py-4 bg-system-blue text-system-dark rounded-xl font-black italic tracking-[0.2em] shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:brightness-110 active:scale-95 transition-all"
              >
                開始鑑定 (START)
              </button>
            </motion.div>
          ) : !isFinished ? (
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <QuestionCard
                question={QUESTIONS[currentIdx]}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                showExplanation={showExplanation}
                onNext={handleNext}
                isLast={currentIdx === QUESTIONS.length - 1}
              />
            </motion.div>
          ) : (
            <ResultSummary
              score={score}
              total={QUESTIONS.length}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Aesthetic Footer */}
      <footer className="mt-12 text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] flex flex-col items-center gap-3">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-system-blue/50 to-transparent" />
        S-Rank Hunter Exam &copy; 2026
      </footer>
    </div>
  );
};

export default Quiz;
