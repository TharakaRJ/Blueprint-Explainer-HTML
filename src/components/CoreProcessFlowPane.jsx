import { RefreshCcw } from "lucide-react";
import { stepOneData } from "../data/stepOneData";
import { cn } from "@/lib/utils";

export function CoreProcessFlowPane({ currentStep = 1, onStepSelect }) {
  const stepDescriptions = {
    1: "Brief authentic prompt to test readiness.",
    2: "Live OSCE-style performance without pre-teaching.",
    3: "Uncorrected reflection before feedback.",
    4: "Corrects the learner’s self-model using evidence.",
    5: "Chooses the learning format most likely to repair the corrected internal process.",
    6: "Learner uses the selected format while experience evidence is interpreted cautiously.",
    7: "Short low-stakes check of immediate target accessibility.",
    8: "Short varied station-like moment to test transfer.",
    9: "Closes the loop and selects the next highest-value station pathway.",
  };

  return (
    <div className="flex flex-col h-full min-h-0 bg-slate-950/60 px-6 py-5 border-l border-slate-800/50 overflow-hidden">
      <div className="flex items-center gap-2 mb-5 shrink-0">
        <RefreshCcw className="w-5 h-5 text-slate-400" />
        <h2 className="text-sm tracking-widest text-slate-300 uppercase">Core Process Flow</h2>
      </div>

      <div className="flex-1 min-h-0 flex flex-col justify-between max-w-sm mx-auto w-full relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[15px] top-3 bottom-9 w-px bg-slate-800/80 z-0"></div>
        
        {/* Active line overlay for step 1 */}
        <div className="absolute left-[15px] top-3 h-11 w-px bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] z-0"></div>

        <div className="flex flex-col justify-between flex-1 min-h-0 relative z-10">
          {stepOneData.processSteps.map((step) => (
            (() => {
              const title =
                step.id === 6
                  ? "Learning-Format Consumption"
                  : step.id === 7
                    ? "Quick Check"
                  : step.id === 8
                    ? "Re-Entry Station"
                  : step.id === 9
                    ? "Adaptive Station Scheduling"
                  : step.id === 3
                    ? "Self-Evaluation & Rationale Inquiry"
                    : step.title;
              const description = step.description || stepDescriptions[step.id];
              return (
            <div 
              key={step.id} 
              onClick={() => step.id <= 9 && onStepSelect?.(step.id)}
              className={cn(
                "flex items-start gap-4 transition-all duration-300",
                step.id <= 9 ? "cursor-pointer" : "",
                step.id === currentStep ? "opacity-100" : step.id < currentStep ? "opacity-75 hover:opacity-90" : "opacity-40 hover:opacity-70"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-mono border z-10 bg-slate-950",
                step.id === currentStep 
                  ? "border-blue-400 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.4)]" 
                  : step.id < currentStep
                  ? "border-teal-500/55 text-teal-200/80"
                  : "border-slate-700 text-slate-500"
              )}>
                {step.id}
              </div>
              
              <div className={cn(
                "flex flex-col min-w-0",
                step.id === currentStep ? "bg-blue-950/20 border border-blue-500/30 rounded-lg px-3 py-2 -mt-1 -ml-2" : "pt-1.5"
              )}>
                <span className={cn(
                  "text-sm font-medium leading-snug",
                  step.id === currentStep ? "text-blue-200" : "text-slate-300"
                )}>
                  {title}
                </span>
                {step.id === currentStep && (
                  <span className="text-xs text-blue-200/70 mt-1 leading-snug">{description}</span>
                )}
              </div>
            </div>
              );
            })()
          ))}
        </div>

        <div className="pt-3 text-center shrink-0">
          <p className="text-[10px] tracking-widest text-slate-500 uppercase flex items-center justify-center gap-2">
            <RefreshCcw className="w-3 h-3" />
            Loops back to step 1 / Next optimal station
          </p>
        </div>
      </div>
    </div>
  );
}
