import React from "react";
import { LearnerExperiencePane } from "./LearnerExperiencePane";
import { CoreProcessFlowPane } from "./CoreProcessFlowPane";
import { StepOverviewPane } from "./StepOverviewPane";
import { Maximize2, Minimize2 } from "lucide-react";

export function OverviewPage({ currentStep, onStepSelect, onNavigate }) {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    } else {
      await document.documentElement.requestFullscreen?.();
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#050B14] text-slate-200 overflow-hidden font-sans">
      <button
        type="button"
        aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
        onClick={toggleFullscreen}
        className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-300 backdrop-blur transition hover:border-blue-400/70 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
      >
        {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
      </button>
      <div className="grid grid-cols-[25%_25%_50%] h-full">
        
        {/* Left Pane */}
        <div className="h-full min-h-0">
          <LearnerExperiencePane currentStep={currentStep} />
        </div>
        
        {/* Center Pane */}
        <div className="h-full min-h-0 border-r border-slate-800/50">
          <CoreProcessFlowPane currentStep={currentStep} onStepSelect={onStepSelect} />
        </div>
        
        {/* Right Pane */}
        <div className="h-full min-h-0">
          <StepOverviewPane currentStep={currentStep} onNavigate={onNavigate} />
        </div>
        
      </div>
    </div>
  );
}
