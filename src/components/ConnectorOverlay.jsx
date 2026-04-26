import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

function getOrthogonalPath(startX, startY, endX, endY, routeType = "curve") {
  const controlPointY = startY + (endY - startY) / 2;
  
  if (routeType === "straight") {
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  }
  
  if (routeType === "curve" || routeType === "fork") {
    return `M ${startX} ${startY} C ${startX} ${controlPointY}, ${endX} ${controlPointY}, ${endX} ${endY}`;
  }

  return `M ${startX} ${startY} L ${endX} ${endY}`;
}

export function ConnectorOverlay({ connectors, hoveredId, activeConnectorIds, containerRef }) {
  const [paths, setPaths] = useState([]);

  const updatePaths = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newPaths = connectors.map((conn) => {
      const sourceEl = document.querySelector(`[data-node-id="${conn.source}"]`);
      const targetEl = document.querySelector(`[data-node-id="${conn.target}"]`);

      if (!sourceEl || !targetEl) return null;

      const sourceRect = sourceEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      const startX = sourceRect.left + sourceRect.width / 2 - containerRect.left;
      const startY = sourceRect.bottom - containerRect.top;

      const endX = targetRect.left + targetRect.width / 2 - containerRect.left;
      const endY = targetRect.top - containerRect.top;

      let isActive = false;
      let colorClass = "stroke-teal-500/20";
      
      if (hoveredId) {
        if (activeConnectorIds.has(conn.id)) {
          isActive = true;
          if (conn.source.includes('current')) colorClass = "stroke-purple-400";
          else if (conn.source.includes('analytic')) colorClass = "stroke-blue-400";
          else if (conn.source.includes('profile')) colorClass = "stroke-teal-400";
          else if (conn.source.includes('station') || conn.source.includes('simulation') || conn.source.includes('ledger')) colorClass = "stroke-cyan-400";
          else if (conn.source.includes('safety') || conn.source.includes('friction') || conn.source.includes('validity')) colorClass = "stroke-amber-400";
          else if (conn.source.includes('rationale') || conn.source.includes('inquiry') || conn.source.includes('register')) colorClass = "stroke-violet-400";
          else if (conn.source.includes('momentum')) colorClass = "stroke-fuchsia-400";
          else if (conn.source.includes('communication')) colorClass = "stroke-cyan-300";
          else if (conn.source.includes('adaptive')) colorClass = "stroke-emerald-300";
          else colorClass = "stroke-emerald-400";
        }
      }

      return {
        id: conn.id,
        d: getOrthogonalPath(startX, startY, endX, endY, conn.routeType),
        isActive,
        colorClass
      };
    }).filter(Boolean);

    setPaths(newPaths);
  }, [connectors, hoveredId, activeConnectorIds, containerRef]);

  useEffect(() => {
    updatePaths();
    
    const observer = new ResizeObserver(() => {
      updatePaths();
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    window.addEventListener("resize", updatePaths);
    const timer = setTimeout(updatePaths, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePaths);
      clearTimeout(timer);
    };
  }, [updatePaths, containerRef]);

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      style={{ minHeight: '100%' }}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <style>
          {`
            @keyframes electric-flow {
              from { stroke-dashoffset: 28; }
              to { stroke-dashoffset: 0; }
            }
          `}
        </style>
      </defs>
      {paths.map((p) => (
        <path
          key={p.id}
          d={p.d}
          fill="none"
          strokeWidth={p.isActive ? "2" : "1"}
          className={cn(
            "transition-all duration-300",
            p.isActive ? p.colorClass : "stroke-slate-600/30",
            p.isActive ? "opacity-100" : "opacity-40"
          )}
          style={p.isActive ? { animation: "electric-flow 700ms linear infinite" } : undefined}
          filter={p.isActive ? "url(#glow)" : ""}
          strokeDasharray={p.isActive ? "10 6" : "4 4"}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
