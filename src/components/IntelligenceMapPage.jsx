import { useEffect, useRef, useState } from "react";
import { BehindScenesPane } from "./BehindScenesPane";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";

export function IntelligenceMapPage({ currentStep = 1, onNavigate }) {
  const pageRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === pageRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await pageRef.current?.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  };

  return (
    <div ref={pageRef} className="w-screen h-screen bg-[#050B14] text-slate-200 overflow-hidden font-sans flex flex-col">
      {/* Header Area */}
      <div className="shrink-0 border-b border-slate-800/50 bg-slate-950/80 px-8 py-4 flex items-center justify-between z-20 shadow-md">
        <div>
          <h1 className="text-xl font-light tracking-wide text-slate-100">BEHIND-THE-SCENES INTELLIGENCE MAP</h1>
          <p className="text-sm text-slate-400 mt-1 tracking-wider uppercase">
            {currentStep === 9
              ? "Step 9 Intelligence Map — Adaptive Station Scheduling"
              : currentStep === 8
              ? "Step 8 — Re-Entry Station"
              : currentStep === 7
              ? "Step 7 — Quick Check"
              : currentStep === 6
              ? "Step 6 — Learning-Format Consumption and Learning-Experience Analytics"
              : currentStep === 5
              ? "Step 5 — Adaptive Learning-Format Selection"
              : currentStep === 4
              ? "Step 4 — Metacognitive Correction and Evidence-Based Self-Recalibration"
              : currentStep === 3
                ? "Step 3 — Self-Evaluation & Rationale Inquiry"
                : currentStep === 2
                  ? "Step 2 — Cold Station Performance"
                  : "Step 1 — Initial Problem Framing"}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-blue-400/70 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_16px_rgba(59,130,246,0.18)]"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>
          <button 
            onClick={onNavigate}
            className="group flex items-center px-6 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Step Overview
          </button>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-grow overflow-hidden relative">
        <BehindScenesPane currentStep={currentStep} />
      </div>
    </div>
  );
}
