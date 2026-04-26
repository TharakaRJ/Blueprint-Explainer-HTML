import React from "react";
import { RefreshCcw } from "lucide-react";
import { stepOneData } from "../data/stepOneData";
import { stepThreeOverviewFlow } from "../data/stepThreeData";
import { cn } from "@/lib/utils";

export function CoreProcessFlowPane({ currentStep = 1, onStepSelect }) {
  const stepDescriptions = {
    1: "Brief authentic prompt to test readiness.",
    2: "Live OSCE-style performance without pre-teaching.",
    3: "Uncorrected reflection before feedback.",
  };

  if (currentStep === 3) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950/60 px-6 py-5 border-l border-slate-800/50 overflow-hidden">
        <div className="flex items-center gap-2 mb-5 shrink-0">
          <RefreshCcw className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Core Process Flow</h2>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2 shrink-0">
          {stepOneData.processSteps.slice(0, 3).map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => onStepSelect?.(step.id)}
              className={cn(
                "rounded-full border px-2 py-1.5 text-[10px] font-mono transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70",
                step.id === currentStep
                  ? "border-blue-400/70 bg-blue-950/40 text-blue-100"
                  : "border-slate-700 bg-slate-950/60 text-slate-500 hover:text-slate-200"
              )}
            >
              Step {step.id}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-0 flex flex-col justify-between max-w-sm mx-auto w-full">
          <div className="grid gap-2">
            {stepThreeOverviewFlow.map((item, index) => (
              <div key={item.title} className="grid grid-cols-[34px_1fr] gap-3 rounded-xl border border-purple-500/20 bg-purple-950/10 p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-400/50 bg-slate-950 text-xs font-mono text-purple-100">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight text-slate-100">{item.title}</p>
                  <p className="mt-1 text-xs leading-snug text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 text-center shrink-0">
            <p className="text-[10px] tracking-widest text-slate-500 uppercase flex items-center justify-center gap-2">
              <RefreshCcw className="w-3 h-3" />
              Step 4 performs correction later
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            <div 
              key={step.id} 
              onClick={() => step.id <= 3 && onStepSelect?.(step.id)}
              className={cn(
                "flex items-start gap-4 transition-all duration-300",
                step.id <= 3 ? "cursor-pointer" : "",
                step.id === currentStep ? "opacity-100" : "opacity-40 hover:opacity-70"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-mono border z-10 bg-slate-950",
                step.id === currentStep 
                  ? "border-blue-400 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.4)]" 
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
                  {step.title}
                </span>
                {step.id === currentStep && (
                  <span className="text-xs text-blue-200/70 mt-1 leading-snug">{step.description || stepDescriptions[step.id]}</span>
                )}
              </div>
            </div>
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
