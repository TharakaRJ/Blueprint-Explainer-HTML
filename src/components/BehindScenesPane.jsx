import { useEffect, useMemo, useRef, useState } from "react";
import { ArchitectureCard } from "./ArchitectureCard";
import { CrossCheckNode } from "./CrossCheckNode";
import { ConnectorOverlay } from "./ConnectorOverlay";
import { ExplanationModal } from "./ExplanationModal";
import { stepOneData } from "../data/stepOneData";
import { stepTwoData } from "../data/stepTwoData";
import { stepThreeData } from "../data/stepThreeData";
import { stepFourData } from "../data/stepFourData";
import { stepFiveData } from "../data/stepFiveData";
import { stepSixData } from "../data/stepSixData";
import { stepSevenData } from "../data/stepSevenData";
import { stepEightData } from "../data/stepEightData";
import { stepNineData } from "../data/stepNineData";
import { explanationCards } from "../data/explanationCards";
import { cn } from "@/lib/utils";

export function BehindScenesPane({ currentStep = 1 }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [returnFocusTo, setReturnFocusTo] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [lockedId, setLockedId] = useState(null);
  const [activeExplanationId, setActiveExplanationId] = useState(null);
  const isStepTwo = currentStep === 2;
  const isStepThree = currentStep === 3;
  const isStepFour = currentStep === 4;
  const isStepFive = currentStep === 5;
  const isStepSix = currentStep === 6;
  const isStepSeven = currentStep === 7;
  const isStepEight = currentStep === 8;
  const isStepNine = currentStep === 9;
  const mapData = isStepNine ? stepNineData : isStepEight ? stepEightData : isStepSeven ? stepSevenData : isStepSix ? stepSixData : isStepFive ? stepFiveData : isStepFour ? stepFourData : isStepThree ? stepThreeData : stepTwoData;
  const currentConnectors = isStepNine ? stepNineData.connectors : isStepEight ? stepEightData.connectors : isStepSeven ? stepSevenData.connectors : isStepSix ? stepSixData.connectors : isStepFive ? stepFiveData.connectors : isStepFour ? stepFourData.connectors : isStepThree ? stepThreeData.connectors : isStepTwo ? stepTwoData.connectors : stepOneData.connectors;

  const handleMouseEnter = (id) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);
  const handleToggleSelection = (id) => {
    setLockedId((current) => (current === id ? null : id));
  };
  const handleInfoClick = (id, event) => {
    if (!explanationCards[id]) return;
    setReturnFocusTo(event.currentTarget);
    setActiveExplanationId(id);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activeExplanationId || !scrollRef.current) return;

      const scrollAmount = 80;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        scrollRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        scrollRef.current.scrollBy({ top: -scrollAmount, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeExplanationId]);

  const activeFlow = useMemo(() => {
    const activeId = hoveredId || lockedId;

    if (!activeId) {
      return {
        nodeIds: new Set(),
        connectorIds: new Set(),
      };
    }

    const upstream = new Set([activeId]);
    const downstream = new Set([activeId]);
    let changed = true;

    while (changed) {
      changed = false;

      currentConnectors.forEach((connector) => {
        if (upstream.has(connector.target) && !upstream.has(connector.source)) {
          upstream.add(connector.source);
          changed = true;
        }

        if (downstream.has(connector.source) && !downstream.has(connector.target)) {
          downstream.add(connector.target);
          changed = true;
        }
      });
    }

    const nodeIds = new Set([...upstream, ...downstream]);
    const reachedJunctions = [...downstream].filter((id) => id.startsWith("node."));

    reachedJunctions.forEach((junctionId) => {
      currentConnectors.forEach((connector) => {
        if (connector.source === junctionId || connector.target === junctionId) {
          nodeIds.add(connector.source);
          nodeIds.add(connector.target);
        }
      });
    });

    const connectorIds = new Set(
      currentConnectors
        .filter((connector) => nodeIds.has(connector.source) && nodeIds.has(connector.target))
        .map((connector) => connector.id)
    );

    return { nodeIds, connectorIds };
  }, [hoveredId, lockedId, currentConnectors]);

  const isFaded = (id) => {
    if (!hoveredId && !lockedId) return false;
    return !activeFlow.nodeIds.has(id);
  };

  const isActive = (id) => {
    if (!hoveredId && !lockedId) return false;
    return activeFlow.nodeIds.has(id);
  };

  const renderStructuredMap = (data) => (
    <>
      <ConnectorOverlay 
        connectors={data.connectors} 
        hoveredId={hoveredId || lockedId} 
        activeConnectorIds={activeFlow.connectorIds}
        containerRef={containerRef} 
      />
      {data.sections.map((section) => (
        <section
          key={section.id}
          className={cn(
            "relative z-10 flex flex-col gap-5 mx-auto",
            section.width === "full" ? "w-full" : "w-11/12"
          )}
        >
          <h3 className="text-sm font-mono tracking-widest text-slate-400 uppercase text-center">{section.title}</h3>
          <div
            className={cn(
              "grid gap-5",
              section.columns === 2 && "grid-cols-1 md:grid-cols-2",
              section.columns === 3 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
              section.columns === 4 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
              section.columns === 5 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-5"
            )}
          >
            {section.items.map((item) => (
              <ArchitectureCard
                key={item.id}
                {...item}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onToggleSelection={handleToggleSelection}
                onInfoClick={handleInfoClick}
                hasExplanation={Boolean(explanationCards[item.id])}
                isActive={isActive(item.id)}
                isFaded={isFaded(item.id)}
              />
            ))}
          </div>
          {section.note && (
            <p className="mx-auto max-w-3xl rounded-full border border-slate-700/70 bg-slate-950/70 px-4 py-2 text-center text-xs italic text-slate-500">
              {section.note}
            </p>
          )}
        </section>
      ))}
    </>
  );

  return (
    <div ref={scrollRef} className="scrollbar-none flex flex-col h-full w-full bg-slate-950/40 p-8 relative overflow-y-auto">
      
      <div ref={containerRef} className="relative flex-grow flex flex-col gap-16 max-w-6xl mx-auto w-full pt-8 pb-16">
        {isStepTwo || isStepThree || isStepFour || isStepFive || isStepSix || isStepSeven || isStepEight || isStepNine ? renderStructuredMap(mapData) : (
        <>
        <ConnectorOverlay 
          connectors={stepOneData.connectors} 
          hoveredId={hoveredId || lockedId} 
          activeConnectorIds={activeFlow.connectorIds}
          containerRef={containerRef} 
        />

        {/* SECTION 1: LIVE ANALYTIC CAPTURE */}
        <section className="relative z-10 flex flex-col gap-6 w-3/4 mx-auto">
          <h3 className="text-sm font-mono tracking-widest text-blue-400/80 uppercase text-center mb-2">Live Analytic Capture</h3>
          <div className="grid grid-cols-2 gap-8">
            {stepOneData.analytics.map((item) => (
              <ArchitectureCard 
                key={item.id} 
                {...item} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onToggleSelection={handleToggleSelection}
                onInfoClick={handleInfoClick}
                hasExplanation={Boolean(explanationCards[item.id])}
                isActive={isActive(item.id)}
                isFaded={isFaded(item.id)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 2 & 3 CONTAINER */}
        <div className="grid grid-cols-[1fr_min-content_1fr] gap-12 relative z-10">
          
          {/* LEFT: Learner Dynamic State Variables */}
          <section className="flex flex-col gap-6">
            <h3 className="text-sm font-mono tracking-widest text-purple-400/80 uppercase mb-2">Learner Dynamic State Variables</h3>
            <div className="grid grid-cols-2 gap-6">
              {stepOneData.dynamicVariables.map((item) => (
                <ArchitectureCard 
                  key={item.id} 
                  {...item} 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleSelection={handleToggleSelection}
                  onInfoClick={handleInfoClick}
                  hasExplanation={Boolean(explanationCards[item.id])}
                  isActive={isActive(item.id)}
                  isFaded={isFaded(item.id)}
                />
              ))}
            </div>
          </section>

          {/* MIDDLE: Cross-Check Node */}
          <div className="flex flex-col items-center justify-center pt-16">
            <CrossCheckNode 
              {...stepOneData.crossCheckNode}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onToggleSelection={handleToggleSelection}
              onInfoClick={handleInfoClick}
              hasExplanation={Boolean(explanationCards[stepOneData.crossCheckNode.id])}
              isActive={isActive(stepOneData.crossCheckNode.id)}
              isFaded={isFaded(stepOneData.crossCheckNode.id)}
            />
          </div>

          {/* RIGHT: Profile Context */}
          <section className="flex flex-col gap-6">
            <h3 className="text-sm font-mono tracking-widest text-teal-400/80 uppercase mb-2">Profile Context</h3>
            <div className="flex flex-col gap-6 h-full justify-center">
              {stepOneData.profiles.map((item) => (
                <ArchitectureCard 
                  key={item.id} 
                  {...item} 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggleSelection={handleToggleSelection}
                  onInfoClick={handleInfoClick}
                  hasExplanation={Boolean(explanationCards[item.id])}
                  isActive={isActive(item.id)}
                  isFaded={isFaded(item.id)}
                />
              ))}
              <p className="text-xs text-slate-500 italic text-center mt-2">Additional background profiles available in detail view</p>
            </div>
          </section>

        </div>

        {/* SECTION 4: CORE ENGINES */}
        <section className="relative z-10 flex flex-col gap-6 mt-8 w-3/4 mx-auto">
          <h3 className="text-sm font-mono tracking-widest text-emerald-400/80 uppercase text-center mb-2">Core Engines</h3>
          <div className="grid grid-cols-2 gap-8">
            {stepOneData.engines.map((item) => (
              <ArchitectureCard 
                key={item.id} 
                {...item} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onToggleSelection={handleToggleSelection}
                onInfoClick={handleInfoClick}
                hasExplanation={Boolean(explanationCards[item.id])}
                isActive={isActive(item.id)}
                isFaded={isFaded(item.id)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 5: LEARNER-FACING REGULATION LAYERS */}
        <section className="relative z-10 flex flex-col gap-6 mt-8 w-3/4 mx-auto">
          <h3 className="text-sm font-mono tracking-widest text-emerald-500/80 uppercase text-center mb-2">Learner-Facing Regulation Layers</h3>
          <div className="grid grid-cols-2 gap-8">
            {stepOneData.regulationLayers.map((item) => (
              <ArchitectureCard 
                key={item.id} 
                {...item} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onToggleSelection={handleToggleSelection}
                onInfoClick={handleInfoClick}
                hasExplanation={Boolean(explanationCards[item.id])}
                isActive={isActive(item.id)}
                isFaded={isFaded(item.id)}
              />
            ))}
          </div>
        </section>

        </>
        )}
      </div>
      <ExplanationModal
        card={explanationCards[activeExplanationId]}
        onClose={() => setActiveExplanationId(null)}
        returnFocusTo={returnFocusTo}
      />
    </div>
  );
}
