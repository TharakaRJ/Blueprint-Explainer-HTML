const flow = (...items) => items;

const quick = (plainTitle, technicalName, text, extra = []) => [
  { type: "callout", title: plainTitle, text },
  { type: "chips", title: "Technical name", items: [technicalName] },
  ...extra,
];

const blueprint = ({ purpose, inputs = [], outputs = [], guardrails = [], connectorLogic = [] }) => [
  { type: "text", title: "Purpose", text: purpose },
  ...(inputs.length ? [{ type: "list", title: "Inputs", items: inputs }] : []),
  ...(outputs.length ? [{ type: "list", title: "Outputs / feeds", items: outputs }] : []),
  ...(connectorLogic.length ? [{ type: "flow", title: "Connector logic", flow: connectorLogic }] : []),
  ...(guardrails.length ? [{ type: "list", title: "Guardrails", items: guardrails }] : []),
];

const card = ({ id, categoryLabel, title, subtitle, accent, status, quickTitle, quickViewLayoutType, quickViewContent, blueprintContent }) => ({
  id,
  categoryLabel,
  title,
  subtitle,
  accent,
  status,
  quickTitle,
  quickViewLayoutType,
  quickViewContent,
  blueprintContent,
});

const dynamicCard = ({ id, title, subtitle, meaning, raises, feeds, guardrail, accent = "purple" }) =>
  card({
    id,
    categoryLabel: "LEARNER DYNAMIC PERFORMANCE VARIABLE",
    title,
    subtitle,
    accent,
    quickTitle: meaning,
    quickViewLayoutType: "live-state gauge",
    quickViewContent: quick(meaning, title, meaning, [
      { type: "plainGrid", title: "Live state reading", items: [["What changes it?", "", raises], ["What it feeds", "", feeds], ["Do not confuse it with", "", guardrail]] },
    ]),
    blueprintContent: blueprint({
      purpose: meaning,
      inputs: [raises],
      outputs: [feeds],
      guardrails: [guardrail],
    }),
  });

export const stepTwoExplanationCards = {
  "step2-cold-station-encounter": card({
    id: "step2-cold-station-encounter",
    categoryLabel: "STATION REALITY LAYER",
    title: "Cold OSCE Station Encounter",
    subtitle: "The learner is now inside the live station.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "The learner is now inside the station.",
    quickViewLayoutType: "live event + cold boundary",
    quickViewContent: quick(
      "The learner is now inside the station.",
      "Cold OSCE Station Encounter",
      "This is the live performance event. The learner is no longer explaining what they would do. They are now doing it inside a simulated OSCE encounter.",
      [
        { type: "warning", title: "Cold station rule", text: "The station remains cold: no pre-teaching, no hinting, no corrective framing." },
        { type: "example", title: "Example", prompt: "A patient says, “The pain is getting worse. I feel sweaty and light-headed.”", response: "The learner acts inside the station.", reading: "The system watches what the learner does next, not what they would theoretically say later.", important: "This creates the observed performance layer for later comparison with Step 1." },
      ]
    ),
    blueprintContent: blueprint({
      purpose: "Expose the learner to authentic performance pressure.",
      inputs: ["Step 1 baseline", "station blueprint", "patient opening state"],
      outputs: ["learner speech/actions", "patient response events", "event trace"],
      guardrails: ["no teaching", "no hints", "no learner-friendly patient simplification"],
    }),
  }),

  "step2-station-simulation-engine": card({
    id: "step2-station-simulation-engine",
    categoryLabel: "STATION REALITY LAYER",
    title: "Station Simulation Engine",
    subtitle: "Runs patient state, cues, timing, and consequences.",
    accent: "cyan",
    status: "RUNNING STATION",
    quickTitle: "The station world is running.",
    quickViewLayoutType: "world engine",
    quickViewContent: quick("The station world is running.", "Station Simulation Engine", "This engine runs the simulated clinical world: the patient, cues, timing, deterioration, improvement, and consequences.", [
      { type: "chips", title: "Subcomponents", items: ["Patient State Model", "Cue / Trigger Logic", "Consequence Mapping Logic", "Scenario Progression Logic", "Role Portrayal Model", "Station Blueprint Reference", "Simulation Authenticity Boundary"] },
      { type: "warning", title: "Important", text: "It runs the station. It does not judge competence by itself." },
    ]),
    blueprintContent: blueprint({
      purpose: "Run the simulated clinical station world.",
      inputs: ["station blueprint", "learner actions", "patient state", "scenario timing"],
      outputs: ["patient responses", "state changes", "cue events", "consequence records", "Live Evidence Ledger entries"],
      guardrails: ["no teaching", "no hidden hints", "no patient-speech simplification", "no direct profile update"],
    }),
  }),

  "step2-simulated-interaction": card({
    id: "step2-simulated-interaction",
    categoryLabel: "STATION REALITY LAYER",
    title: "Simulated Patient / Relative / Nurse Interaction",
    subtitle: "In-character speech and behaviour remain realistic.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "The patient and team stay in character.",
    quickViewLayoutType: "role interaction boundary",
    quickViewContent: quick("The patient and team stay in character.", "Simulated Patient / Relative / Nurse Interaction", "This is the learner-facing clinical interaction inside the cold station. Speech can be vague, emotional, distressed, confused, or clinically messy because that is part of the station signal.", [
      { type: "warning", title: "Boundary", text: "Learner-Centered Communication Layer does not rewrite in-character patient, relative, or nurse speech." },
    ]),
    blueprintContent: blueprint({
      purpose: "Deliver realistic in-character station dialogue and cue behaviour.",
      inputs: ["Station Simulation Engine", "Simulation Authenticity Boundary", "patient state", "learner speech/actions"],
      outputs: ["patient/relative/nurse speech", "cue exposure", "distress or deterioration signals"],
      guardrails: ["do not simplify patient wording for learner comfort", "do not insert hidden coaching"],
    }),
  }),

  "step2-simulation-authenticity-boundary": card({
    id: "step2-simulation-authenticity-boundary",
    categoryLabel: "STATION REALITY LAYER",
    title: "Simulation Authenticity Boundary",
    subtitle: "Blocks hints and learner-friendly station simplification.",
    accent: "cyan",
    status: "PROTECTING REALISM",
    quickTitle: "Keep the station real.",
    quickViewLayoutType: "protects vs blocks split",
    quickViewContent: quick("Keep the station real.", "Simulation Authenticity Boundary", "This boundary protects the cold station from becoming a tutorial. Patient, relative, and nurse speech must stay realistic, even if it is vague, emotional, confused, or difficult.", [
      { type: "twoColumn", title: "Protects vs blocks", leftTitle: "Protects", leftItems: ["patient realism", "ambiguity", "emotional pressure", "time pressure", "realistic deterioration", "realistic consequences"], rightTitle: "Blocks", rightItems: ["hidden hints", "corrective prompts", "patient-speech simplification", "over-helpful nurse prompts", "learner-friendly rewriting of clinical ambiguity"] },
    ]),
    blueprintContent: blueprint({
      purpose: "Protect in-character station realism.",
      inputs: ["station blueprint", "role portrayal requirements"],
      outputs: ["realistic patient/nurse/relative interaction constraints"],
      connectorLogic: flow("Simulation Authenticity Boundary", "Station Simulation Engine", "Simulated Patient / Relative / Nurse Interaction"),
      guardrails: ["applies to in-character station dialogue and station cues", "does not apply to post-station feedback or system transition messages", "does not connect to Learner-Centered Communication Layer as patient-speech rewriting"],
    }),
  }),

  "step2-live-evidence-ledger": card({
    id: "step2-live-evidence-ledger",
    categoryLabel: "STATION REALITY LAYER",
    title: "Live Evidence Ledger",
    subtitle: "Structured trace of actions, cues, state, timing, and validity.",
    accent: "cyan",
    status: "RECORDING",
    quickTitle: "Everything important is recorded.",
    quickViewLayoutType: "sample event row",
    quickViewContent: quick("Everything important is recorded.", "Live Evidence Ledger", "This is the structured event record. It stores what happened, when it happened, what state the patient was in, and how strongly that event supports later interpretation.", [
      { type: "table", title: "Sample row", columns: ["Time", "Learner action", "Patient state", "Consequence", "Signal", "Possible interpretation"], rows: [["07:12", "continues pain history", "BP low and patient clammy", "monitoring still not requested", "moderate safety-delay signal", "possible prioritisation issue"]] },
    ]),
    blueprintContent: blueprint({
      purpose: "Record station events without turning them into profile truth.",
      inputs: ["timestamp", "station phase", "learner action/speech", "patient cue", "patient state", "expected action window", "actual learner response", "consequence", "evidence type", "evidence strength", "simulation validity flag"],
      outputs: ["performance analytics", "possible interpretation"],
      guardrails: ["The ledger stores evidence. It is not the learner profile."],
    }),
  }),

  "step2-action-sequence-capture": card({
    id: "step2-action-sequence-capture",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Action Sequence Capture",
    subtitle: "What they do first, next, late, repeat, or miss.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "What did they do first, next, and late?",
    quickViewLayoutType: "timeline",
    quickViewContent: quick("What did they do first, next, and late?", "Action Sequence Capture", "This captures the learner’s live performance path: first action, order, delays, omissions, repetitions, premature actions, unsafe actions, and recovery.", [
      { type: "flow", title: "Timeline example", flow: flow("Start", "asks history", "delays observations", "patient worsens", "requests ECG", "escalates late") },
    ]),
    blueprintContent: blueprint({
      purpose: "Capture the learner’s live action sequence in station context.",
      inputs: ["first action", "action order", "timing", "delays", "omissions", "repeated or premature actions", "spoken-action linkage"],
      outputs: ["Current Performance Stability", "Clinical Prioritisation Under Pressure", "Performance Diagnostic Engine", "Step 1–Step 2 Alignment Check", "Learner Performance Profile"],
      guardrails: ["Sequence must be interpreted in station context."],
    }),
  }),

  "step2-safety-stabilisation": card({
    id: "step2-safety-stabilisation",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Safety & Stabilisation Behaviour",
    subtitle: "Whether safety needs are recognised and acted on.",
    accent: "green",
    status: "ACTIVE",
    quickTitle: "Did they keep the patient safe?",
    quickViewLayoutType: "safety gate",
    quickViewContent: quick("Did they keep the patient safe?", "Safety & Stabilisation Behaviour", "This captures whether the learner recognises immediate safety needs and acts on them before the station becomes a routine diagnostic exercise.", [
      { type: "chips", title: "Examples", items: ["requests monitoring", "starts ABCDE when appropriate", "recognises deterioration", "avoids contraindicated treatment", "escalates when needed"] },
    ]),
    blueprintContent: blueprint({
      purpose: "Capture safety and stabilisation behaviour under pressure.",
      inputs: ["ABCDE initiation", "monitoring request", "vital-sign awareness", "oxygen use when indicated", "IV/emergency support", "ECG/investigation timing", "escalation", "contraindication recognition", "deterioration response", "collapse management"],
      outputs: ["Current Safety Risk State", "Safety-Critical Event Gate", "Performance Diagnostic Engine", "Learner Performance Profile", "Adaptive Learning Engine", "Adaptive Station Scheduling Engine"],
      guardrails: ["Distinguish dangerous action, dangerous omission, delayed safety behaviour, incomplete safety behaviour, late correct safety behaviour, and platform-friction-related failure."],
    }),
  }),

  "step2-cue-recognition-response": card({
    id: "step2-cue-recognition-response",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Cue Recognition & Response",
    subtitle: "Whether available cues change learner behaviour.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "Did they respond to what the station showed them?",
    quickViewLayoutType: "cue pipeline",
    quickViewContent: quick("Did they respond to what the station showed them?", "Cue Recognition & Response", "This captures whether the learner notices and acts on important cues: distress, vital signs, deterioration, abnormal results, emotional cues, contradiction cues, or safety cues.", [
      { type: "flow", title: "Cue pipeline", flow: flow("Cue appears", "learner notices", "learner interprets", "learner acts", "consequence") },
    ]),
    blueprintContent: blueprint({
      purpose: "Measure whether available cues become learner response.",
      inputs: ["cue exposure", "cue noticing", "cue interpretation", "cue-action conversion", "cue-action latency", "cue neglect", "cue misreading", "cue-driven recovery"],
      outputs: ["Current Cue Responsiveness", "Cue → Action Latency Check", "Current Performance Stability", "Performance Diagnostic Engine", "Learner Response to Station Profile", "Adaptive Station Scheduling Engine"],
      guardrails: ["Do not penalise missed cues unless the cue was actually available."],
    }),
  }),

  "step2-clinical-prioritisation": card({
    id: "step2-clinical-prioritisation",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Clinical Prioritisation Under Pressure",
    subtitle: "Right action, right time, under live pressure.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "Did they choose the right thing at the right time?",
    quickViewLayoutType: "right action right time",
    quickViewContent: quick("Did they choose the right thing at the right time?", "Clinical Prioritisation Under Pressure", "This captures whether the learner can prioritise correctly when the station is active and pressure is rising.", [
      { type: "twoColumn", title: "Routine vs emergency flow", leftTitle: "Routine path", leftItems: ["long history first", "broad exploration", "slower synthesis"], rightTitle: "Emergency path", rightItems: ["safety", "stabilisation", "monitoring", "escalation", "focused information"] },
    ]),
    blueprintContent: blueprint({
      purpose: "Interpret timing and prioritisation against the live station state.",
      inputs: ["emergency vs routine framing", "stabilisation before detailed history", "safety before diagnosis", "urgent treatment before extended explanation", "escalation threshold", "focused information gathering", "over-history", "premature closure", "over-investigation before stabilisation", "task-balance control"],
      outputs: ["Current Performance Stability", "Current Safety Risk State", "Performance Diagnostic Engine", "Learner Performance Profile", "Adaptive Learning Engine", "Adaptive Station Scheduling Engine"],
      guardrails: ["Judge priority against the live station state, not a generic checklist."],
    }),
  }),

  "step2-retrieval-to-action": card({
    id: "step2-retrieval-to-action",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Retrieval-to-Action Conversion",
    subtitle: "Whether known information becomes clinical action.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "Did what they knew become what they did?",
    quickViewLayoutType: "Step 1 to Step 2 comparison",
    quickViewContent: quick("Did what they knew become what they did?", "Retrieval-to-Action Conversion", "This is one of the key Step 2 analytics. It compares accessible knowledge with actual behaviour.", [
      { type: "plainGrid", title: "Comparison examples", items: [["Mentioned in Step 1, not acted in Step 2", "", "They mentioned ABCDE but did not assess ABCDE."], ["Not mentioned in Step 1, acted in Step 2", "", "They did not mention escalation but escalated correctly after deterioration."], ["Said but did not perform", "", "They named the right action but did not execute it."]] },
      { type: "warning", title: "Guardrail", text: "Failure to act on known information does not automatically mean absent knowledge." },
    ]),
    blueprintContent: blueprint({
      purpose: "Compare accessible knowledge with enacted clinical action.",
      inputs: ["mentioned-and-acted", "mentioned-not-acted", "not-mentioned-but-acted", "spoken-not-executed", "late conversion", "pressure-blocked conversion", "misframing-blocked conversion", "safety-boundary conversion"],
      outputs: ["Current Retrieval-to-Action State", "Step 1–Step 2 Alignment Check", "Performance Rationale Hypothesis Queue", "Performance Diagnostic Engine", "Learner Profile", "Learner Performance Profile", "Adaptive Learning Engine", "Adaptive Station Scheduling Engine"],
      guardrails: ["Failure to act on known information does not automatically mean absent knowledge."],
    }),
  }),

  "step2-communication-context": card({
    id: "step2-communication-context",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Communication-in-Context",
    subtitle: "Whether communication fits urgency, emotion, and risk.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "Did the communication fit the clinical moment?",
    quickViewLayoutType: "communication contrast",
    quickViewContent: quick("Did the communication fit the clinical moment?", "Communication-in-Context", "Good communication is not always long communication. In an emergency, communication must be clear, respectful, and appropriate to urgency.", [
      { type: "chips", title: "Examples", items: ["calm reassurance while acting", "concise explanation before urgent treatment", "avoids false reassurance", "responds to distress without delaying safety action"] },
      { type: "warning", title: "Guardrail", text: "Polished communication cannot compensate for unsafe clinical delay." },
    ]),
    blueprintContent: blueprint({
      purpose: "Interpret communication against the clinical moment.",
      inputs: ["opening communication", "empathy", "reassurance quality", "false reassurance", "explanation clarity", "consent", "urgency-appropriate brevity", "communication while multitasking", "response to distress/confusion/anger/fear", "team communication"],
      outputs: ["Current Communication Fit", "Current Performance Stability", "Learner Performance Profile", "Performance Diagnostic Engine", "Adaptive Learning Engine"],
      guardrails: ["Polished communication cannot compensate for unsafe clinical delay."],
    }),
  }),

  "step2-cognitive-load-performance": card({
    id: "step2-cognitive-load-performance",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Cognitive Load Under Performance",
    subtitle: "Whether pressure destabilises organisation and action.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "Did pressure break their organisation?",
    quickViewLayoutType: "breakdown markers",
    quickViewContent: quick("Did pressure break their organisation?", "Cognitive Load Under Performance", "This captures whether station pressure destabilises the learner’s ability to organise, prioritise, recall, communicate, and act.", [
      { type: "chips", title: "Breakdown markers", items: ["freezing", "looping", "scattered switching", "narrowing too early", "losing earlier priorities", "fragmented communication", "inability to recover after interruption"] },
    ]),
    blueprintContent: blueprint({
      purpose: "Capture pressure-linked cognitive destabilisation.",
      inputs: ["performance fragmentation", "working-memory loss", "looping", "freezing", "overload narrowing", "recovery capacity", "switching cost", "pressure-linked delay"],
      outputs: ["Current Cognitive Load Under Performance", "Current Performance Stability", "Current Retrieval-to-Action State", "Learning Momentum Engine", "Performance Diagnostic Engine", "Learner Performance Profile", "Adaptive Learning Engine", "Adaptive Station Scheduling Engine"],
      guardrails: ["Cognitive load is not intelligence or permanent ability."],
    }),
  }),

  "step2-adaptability-recovery": card({
    id: "step2-adaptability-recovery",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Adaptability & Recovery",
    subtitle: "Whether the learner changes course when the station changes.",
    accent: "blue",
    status: "ACTIVE",
    quickTitle: "Can they change course when the station changes?",
    quickViewLayoutType: "branch change",
    quickViewContent: quick("Can they change course when the station changes?", "Adaptability & Recovery", "This captures whether the learner adapts after new cues, abnormal results, deterioration, error, or contradiction.", [
      { type: "twoColumn", title: "Branch example", leftTitle: "Adaptive branch", leftItems: ["patient deteriorates", "learner re-prioritises", "learner escalates"], rightTitle: "Rigid branch", rightItems: ["patient deteriorates", "learner continues the same script", "risk increases"] },
    ]),
    blueprintContent: blueprint({
      purpose: "Capture plan flexibility and recovery after station change.",
      inputs: ["change detection", "re-prioritisation", "error recovery", "plan flexibility", "escalation after change", "transfer within station"],
      outputs: ["Current Adaptability / Recovery State", "Current Performance Stability", "Current Safety Risk State", "Performance Diagnostic Engine", "Learner Response to Station Profile", "Adaptive Station Scheduling Engine"],
      guardrails: ["Poor initial action with strong recovery is different from poor initial action with unsafe persistence."],
    }),
  }),

  "step2-interface-friction": card({
    id: "step2-interface-friction",
    categoryLabel: "LIVE PERFORMANCE ANALYTIC",
    title: "Interface / Simulation Friction Capture",
    subtitle: "Fairness guardrail for simulator or interface contamination.",
    accent: "cyan",
    status: "ACTIVE",
    quickTitle: "Was it the learner, or was it the simulator?",
    quickViewLayoutType: "fairness quarantine",
    quickViewContent: quick("Was it the learner, or was it the simulator?", "Interface / Simulation Friction Capture", "This protects fairness. If the interface, speech recognition, missing action button, lag, or scenario bug caused the problem, the system must not call it a learner weakness.", [
      { type: "plainGrid", title: "Examples", items: [["Speech recognition miss", "", "Learner says “request observations” but the system misses it."], ["Unavailable option", "", "ECG option is unavailable when it should be available."], ["Display failure", "", "Vitals fail to display after monitoring is requested."]] },
    ]),
    blueprintContent: blueprint({
      purpose: "Capture simulation and interface validity threats.",
      inputs: ["input recognition validity", "action availability validity", "UI clarity validity", "response timing validity", "scenario logic validity", "evidence contamination level"],
      outputs: ["Current Simulation Validity State", "Live Evidence Ledger", "Performance Diagnostic Engine", "Safety-Critical Event Gate as contamination check", "platform/station QA pathway"],
      guardrails: ["Simulation friction evidence must be quarantined from clinical competence."],
    }),
  }),
};

const dynamicSpecs = [
  ["step2-current-performance-stability", "Current Performance Stability", "Organisation versus breakdown during the station.", "Shows whether the learner is staying organised or becoming unstable during the station.", "action order, delays, looping, recovery, missed or repeated actions", "Performance Diagnostic Engine and Learner Performance Profile", "overall ability"],
  ["step2-current-safety-risk", "Current Safety Risk State", "Whether behaviour is protecting or endangering the patient.", "Shows whether learner behaviour is keeping the patient safe or increasing danger.", "unsafe actions, omissions, critical delays, escalation failures, recovery successes", "Safety-Critical Event Gate and Performance Diagnostic Engine", "checklist completion"],
  ["step2-current-cue-responsiveness", "Current Cue Responsiveness", "Whether learner behaviour responds to station evidence.", "Shows whether the learner is responding to the station rather than only following a script.", "noticing, interpreting, acting on cues, cue neglect or latency", "Cue → Action Latency Check and Performance Diagnostic Engine", "general attentiveness"],
  ["step2-current-retrieval-to-action", "Current Retrieval-to-Action State", "Whether accessible knowledge becomes action.", "Shows whether what the learner knows becomes what the learner does.", "Step 1 knowledge, spoken actions, executed actions, pressure-blocked conversion", "Step 1–Step 2 Alignment Check and Performance Diagnostic Engine", "absent knowledge"],
  ["step2-current-cognitive-load", "Current Cognitive Load Under Performance", "How much pressure is consuming usable mental room.", "Shows whether station pressure is consuming the learner’s usable mental room.", "freezing, narrowing, fragmented switching, looping, recovery capacity", "Learning Momentum Engine and Performance Diagnostic Engine", "intelligence or permanent ability"],
  ["step2-current-communication-fit", "Current Communication Fit", "Whether communication fits the moment and risk.", "Shows whether the learner’s communication is useful for this moment, this patient, and this level of urgency.", "empathy, brevity, clarity, false reassurance, team communication", "Performance Diagnostic Engine and Learner Performance Profile", "how much they talked"],
  ["step2-current-adaptability-recovery", "Current Adaptability / Recovery State", "Whether they recover or stay rigid after change.", "Shows whether the learner can change course when the station demands it.", "deterioration response, error recovery, re-prioritisation, plan flexibility", "Learner Response to Station Profile and Adaptive Station Scheduling Engine", "initial correctness alone"],
  ["step2-current-simulation-validity", "Current Simulation Validity State", "Whether evidence is clean enough to interpret.", "Shows whether the station evidence is clean enough to interpret as learner performance.", "interface errors, missing actions, lag, recognition failures, scenario logic validity", "Performance Diagnostic Engine and station QA pathway", "clinical competence"],
];

dynamicSpecs.forEach(([id, title, subtitle, meaning, raises, feeds, guardrail]) => {
  stepTwoExplanationCards[id] = card({
    id,
    categoryLabel: "LEARNER DYNAMIC PERFORMANCE VARIABLE",
    title,
    subtitle,
    accent: id.includes("validity") ? "cyan" : "purple",
    status: "ACTIVE",
    quickTitle: meaning,
    quickViewLayoutType: "live-state gauge",
    quickViewContent: quick(meaning, title, meaning, [
      { type: "plainGrid", title: "Live state reading", items: [["What changes it?", "", raises], ["What it feeds", "", feeds], ["Must not be confused with", "", guardrail]] },
    ]),
    blueprintContent: blueprint({
      purpose: meaning,
      inputs: [raises],
      outputs: [feeds],
      guardrails: [`Do not confuse this live state with ${guardrail}.`],
    }),
  });
});

const nodeSpecs = [
  ["step2-safety-critical-gate", "Safety-Critical Event Gate", "Did patient safety change because of what happened?", "Flags unsafe actions, unsafe omissions, critical delays, escalation failures, and recovery successes. It also checks simulation validity before interpretation.", ["unsafe action", "unsafe omission", "critical delay", "recovery success", "simulation-validity check"]],
  ["step2-alignment-check", "Step 1–Step 2 Alignment Check", "Did their plan match their performance?", "Compares what the learner expected, recalled, and felt before the station with what they actually did.", ["good plan, poor execution", "weak recall, strong action", "low uncertainty, unsafe performance", "high uncertainty, safe performance"]],
  ["step2-cue-action-latency", "Cue → Action Latency Check", "How long did it take to act after a cue?", "Measures time between meaningful cue availability and appropriate learner response.", ["cue available", "cue clinically relevant", "cue time-sensitive", "learner response timing"]],
  ["step2-rationale-hypothesis-queue", "Performance Rationale Hypothesis Queue", "What might explain that behaviour?", "Stores possible reasons for important observed behaviours without pretending the system already knows the answer.", ["did not recognise instability", "recognised but froze", "followed history script", "attempted action but interface missed it"]],
  ["step2-inquiry-prioritizer", "Post-Station Inquiry Prioritizer", "Which questions are worth asking later?", "Selects the top 3–6 high-yield clarification questions after the learner gives their own self-evaluation.", ["safety", "diagnostic uncertainty", "Step 1 mismatch", "adaptive-learning impact", "scheduling impact", "learner readiness", "simulation validity"]],
  ["step2-deferred-inquiry-register", "Deferred Inquiry Register", "What should be tested later instead of asked now?", "Stores unresolved but important rationale questions for future testing or scheduling so the learner is not overloaded immediately.", ["unresolved hypotheses", "future retesting targets", "near-transfer station questions"]],
];

nodeSpecs.forEach(([id, title, quickTitle, text, items]) => {
  stepTwoExplanationCards[id] = card({
    id,
    categoryLabel: "INTERACTION / INTERPRETATION NODE",
    title,
    subtitle: text,
    accent: id.includes("safety") ? "green" : "cyan",
    quickTitle,
    quickViewLayoutType: "input processing output",
    quickViewContent: quick(quickTitle, title, text, [
      { type: "chips", title: "Key signals", items },
      { type: "warning", title: "Guardrail", text: id.includes("hypothesis") || id.includes("deferred") ? "These are not confirmed learner weaknesses." : "Interpret only from available, valid station evidence." },
    ]),
    blueprintContent: blueprint({
      purpose: text,
      inputs: items,
      outputs: ["Performance Diagnostic Engine", "Post-station inquiry flow", "Adaptive Learning Engine", "Adaptive Station Scheduling Engine"],
      guardrails: ["Do not treat provisional interpretation as confirmed motive or competence judgement."],
    }),
  });
});

const profileSpecs = [
  ["step2-learner-profile", "Learner Profile", "How does this update the learner’s broader model?", "Interpreted Step 2 evidence may update broader learner patterns, but raw event dumps must not be stored as profile truth."],
  ["step2-learner-performance-profile", "Learner Performance Profile", "How does this learner actually perform across stations?", "Stores performance strengths, weaknesses, fragilities, safety patterns, sequencing patterns, pressure response, recovery, and transfer."],
  ["step2-learner-response-station-profile", "Learner Response to Station Profile", "How does this learner respond to this kind of station?", "Captures learner-relative response by station type, difficulty, time pressure, emergency load, communication load, novelty, and transfer distance."],
  ["step2-learner-engagement-profile", "Learner Engagement Profile", "Did the station affect their ability to keep moving?", "Engagement is monitored only when relevant: frustration, avoidance, overload, refusal, or readiness for reflection."],
];

profileSpecs.forEach(([id, title, quickTitle, text]) => {
  stepTwoExplanationCards[id] = card({
    id,
    categoryLabel: "PROFILE CONTEXT",
    title,
    subtitle: text,
    accent: "teal",
    quickTitle,
    quickViewLayoutType: "raw evidence vs interpreted profile",
    quickViewContent: quick(quickTitle, title, text, [
      { type: "twoColumn", title: "Raw evidence vs profile meaning", leftTitle: "Raw station evidence", leftItems: ["actions", "timing", "cues", "communication", "validity flags"], rightTitle: "Profile update", rightItems: ["weighted pattern", "repeated evidence", "interpreted after checks"] },
      { type: "warning", title: "Guardrail", text: id.includes("engagement") ? "Engagement is not clinical competence." : "Raw event dumps must not become profile truth." },
    ]),
    blueprintContent: blueprint({
      purpose: text,
      inputs: ["Performance Diagnostic Engine", "valid Step 2 interpreted evidence", "repeated pattern evidence"],
      outputs: ["Adaptive Learning Engine", "Adaptive Station Scheduling Engine", "Learning Momentum Engine", "Learner-Centered Communication Layer"],
      guardrails: ["Do not store one raw event as a stable trait.", "Do not merge distinct gap types into one vague weakness."],
    }),
  });
});

const engineSpecs = [
  ["step2-performance-diagnostic-engine", "Performance Diagnostic Engine", "What does the performance evidence suggest?", "Interprets the Live Evidence Ledger into gap types, strengths, and hypotheses.", "INTERPRETING", ["knowledge gap", "retrieval gap", "retrieval-to-action gap", "task-framing gap", "sequencing gap", "safety gap", "cue-response gap", "communication-context gap", "cognitive-load breakdown", "adaptability gap", "interface contamination"], "does not teach during Step 2 and does not treat hypotheses as confirmed motives"],
  ["step2-adaptive-learning-engine", "Adaptive Learning Engine", "What support might they need later?", "Absorbs Step 2 context but does not choose the final learning format yet.", "CONTEXT ABSORBING", ["performance evidence", "Step 1 alignment", "profile context", "rationale hypotheses"], "context-absorbing, not final format-selecting"],
  ["step2-adaptive-station-scheduling-engine", "Adaptive Station Scheduling Engine", "What should be tested again later?", "Absorbs future station-planning evidence but does not make final scheduling decisions in Step 2.", "CONTEXT ABSORBING", ["performance evidence", "Deferred Inquiry Register", "near-transfer targets", "challenge-fit evidence"], "does not make final next-station decisions in Step 2"],
  ["step2-learning-momentum-engine", "Learning Momentum Engine", "How much reflection can they handle next?", "Monitors burden, readiness, pacing, and transition into Step 3.", "MONITORING / PACING", ["cognitive load", "frustration", "readiness", "engagement profile"], "must not rescue performance during the cold station"],
  ["step2-learner-centered-communication-layer", "Learner-Centered Communication Layer", "How should the system speak after the station?", "Filters non-station system output only.", "NON-STATION OUTPUT", ["system prompts", "transitions", "self-evaluation prompts", "feedback wording"], "must not rewrite patient speech"],
];

engineSpecs.forEach(([id, title, quickTitle, text, status, items, guardrail]) => {
  const isLayer = id.includes("communication") || id.includes("momentum");
  stepTwoExplanationCards[id] = card({
    id,
    categoryLabel: isLayer ? "LEARNER-FACING REGULATION / COMMUNICATION LAYER" : "CORE ENGINE",
    title,
    subtitle: text,
    accent: "green",
    status,
    quickTitle,
    quickViewLayoutType: "what it may do / must not do",
    quickViewContent: quick(quickTitle, title, text, [
      ...(id.includes("communication")
        ? [{ type: "twoColumn", title: "Two speech systems", leftTitle: "In-character station dialogue", leftItems: ["governed by Simulation Authenticity Boundary", "patient/nurse/relative speech stays realistic"], rightTitle: "Non-station system messages", rightItems: ["governed by Learner-Centered Communication Layer", "prompts, transitions, self-evaluation, feedback"] }]
        : []),
      { type: "chips", title: "Uses", items },
      { type: "warning", title: "Guardrail", text: guardrail },
    ]),
    blueprintContent: blueprint({
      purpose: text,
      inputs: items,
      outputs: ["later self-evaluation", "metacognitive correction", "feedback preparation", "adaptive support", "future station planning"],
      guardrails: [guardrail, "Step 2 does not teach, hint, or correct during the cold station."],
    }),
  });
});
