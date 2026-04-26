import { useState } from 'react'
import { OverviewPage } from './components/OverviewPage'
import { IntelligenceMapPage } from './components/IntelligenceMapPage'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('overview')
  const [currentStep, setCurrentStep] = useState(1)
  const [hasEntered, setHasEntered] = useState(false)

  const enterExperience = async () => {
    setHasEntered(true)
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.()
      }
    } catch {
      // Browsers may block fullscreen; the in-page fullscreen button remains available.
    }
  }

  if (!hasEntered) {
    return (
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-[#050B14] px-6 text-slate-100 font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_42%)]" />
        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          <div className="rounded-full border border-blue-300/30 bg-blue-950/20 px-5 py-2 shadow-[0_0_28px_rgba(59,130,246,0.18)]">
            <p className="text-sm font-mono uppercase tracking-[0.35em] text-blue-200">OSCE Revisions</p>
          </div>
          <h1 className="mt-6 text-4xl font-light leading-tight tracking-wide text-white md:text-6xl">
            Experiential Learning and Adaptive Learning
          </h1>
          <p className="mt-5 text-lg uppercase tracking-[0.24em] text-slate-400">Concept explorer</p>
          <button
            type="button"
            onClick={enterExperience}
            className="mt-12 rounded-full border border-teal-400/50 bg-teal-500/15 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-500/25 hover:shadow-[0_0_24px_rgba(20,184,166,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
          >
            Continue experience
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {currentPage === 'overview' ? (
        <OverviewPage currentStep={currentStep} onStepSelect={setCurrentStep} onNavigate={() => setCurrentPage('map')} />
      ) : (
        <IntelligenceMapPage currentStep={currentStep} onNavigate={() => setCurrentPage('overview')} />
      )}
    </>
  )
}

export default App
