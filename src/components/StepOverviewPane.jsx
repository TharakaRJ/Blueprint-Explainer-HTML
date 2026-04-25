import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export function StepOverviewPane({ currentStep = 1, onNavigate }) {
  if (currentStep === 2) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950/40 px-10 py-5 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-5 shrink-0">
          <BookOpen className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Step Overview</h2>
        </div>

        <div className="flex-1 min-h-0 flex flex-col max-w-3xl">
          <div>
            <h1 className="text-[2rem] leading-tight font-light text-slate-100 mb-4 tracking-wide">Cold Station Performance</h1>

            <div className="space-y-3 text-slate-300 leading-6 text-[0.92rem] xl:text-[0.98rem]">
              <p>
                Step 2 places the learner into a live OSCE-style station without pre-teaching, hints, or corrective framing. The system observes what the learner actually does under realistic pressure: what they do first, what they delay, what they miss, what they repeat, how they respond to cues, and whether accessible knowledge becomes clinical action.
              </p>
              <p>
                This step produces the observed performance layer of the adaptive cycle. It compares the learner’s Step 1 internal model with their real station behaviour, creating the evidence needed for later self-evaluation, metacognitive correction, targeted learning, and station scheduling.
              </p>
              <p>
                The station remains authentic. Patient, relative, and nurse speech is not simplified for learner comfort. Ambiguity, distress, hesitation, confusion, and deterioration may be part of the clinical signal.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-3 backdrop-blur-sm">
              <h4 className="text-blue-400 font-semibold mb-1.5 uppercase tracking-wider text-xs">Key principle</h4>
              <p className="text-blue-200/80 text-[0.86rem] leading-5">
                No teaching. No hints. No checklist correction during the station. Step 2 records live behaviour under pressure, then uses that evidence later for reflection, correction, adaptive support, and future station planning.
              </p>
            </div>
          </div>

          <div className="mt-4 shrink-0">
            <button 
              onClick={onNavigate}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-teal-600/20 border border-teal-500/50 rounded-full hover:bg-teal-600/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
            >
              Continue to Intelligence Map
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full min-h-0 bg-slate-950/40 px-10 py-5 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-5 shrink-0">
        <BookOpen className="w-5 h-5 text-slate-400" />
        <h2 className="text-sm tracking-widest text-slate-300 uppercase">Step Overview</h2>
      </div>

      <div className="flex-1 min-h-0 flex flex-col max-w-3xl">
        <div>
          <h1 className="text-[2rem] leading-tight font-light text-slate-100 mb-4 tracking-wide">Initial Problem Framing</h1>
        
          <div className="space-y-3 text-slate-300 leading-6 text-[0.92rem] xl:text-[0.98rem]">
            <p>
              Step 1 captures the learner’s internal operating model before the cold station begins. The learner receives a brief authentic prompt and answers from their own current understanding, without teaching, hints, or corrective framing.
            </p>
            
            <p>
              The system uses this response to form the pre-station baseline: how the learner frames the task, what knowledge is currently accessible, how uncertain they are, how much cognitive room they have, and what prior learner-state context is relevant.
            </p>

            <p>
              This baseline is later compared with station performance and post-station reflection to support metacognitive correction, adaptive learning, and future station scheduling.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-3 backdrop-blur-sm">
            <h4 className="text-blue-400 font-semibold mb-1.5 uppercase tracking-wider text-xs">Key principle</h4>
            <p className="text-blue-200/80 text-[0.86rem] leading-5">
              No pre-teaching. No checklist correction. No final decisions yet. Step 1 creates the first reference point for the adaptive cycle.
            </p>
          </div>
        </div>

        <div className="mt-4 shrink-0 xl:mt-6">
          <button 
            onClick={onNavigate}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-teal-600/20 border border-teal-500/50 rounded-full hover:bg-teal-600/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
          >
            Continue to Intelligence Map
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
