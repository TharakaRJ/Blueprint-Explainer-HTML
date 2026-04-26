const text = (title, value) => ({ type: "text", title, text: value });
const list = (title, items) => ({ type: "list", title, items });

const quick = ({
  plainTitle,
  technicalLabel,
  shortExplanation,
  selectedLearningFormat,
  keyGuardrail,
}) => [
  { type: "callout", title: "Plain-language title", text: plainTitle },
  text("Technical label", technicalLabel),
  text("Short explanation", shortExplanation),
  text("Selected learning format / teaching structure", selectedLearningFormat),
  { type: "warning", title: "Key guardrail", text: keyGuardrail },
];

const blueprint = ({
  technicalName,
  classification,
  internalDefinition,
  whyItExists,
  whatItReads,
  whatItOutputs,
  internalProcessHypothesisLens,
  subcomponents,
  dynamicStateEffects,
  profileEffects,
  engineEffects,
  connectorLogic,
  guardrails,
  mustNotDoRules,
}) => [
  text("Technical name", technicalName),
  text("Classification", classification),
  text("Internal definition", internalDefinition),
  text("Why it exists", whyItExists),
  list("What it reads", whatItReads),
  list("What it outputs", whatItOutputs),
  text("Internal-process hypothesis lens", internalProcessHypothesisLens),
  list("Subcomponents / sub-signals", subcomponents),
  text("Dynamic-state effects", dynamicStateEffects),
  text("Profile effects", profileEffects),
  text("Engine effects", engineEffects),
  text("Connector logic", connectorLogic),
  list("Guardrails", guardrails),
  list("Must-not-do rules", mustNotDoRules),
];

const card = ({
  id,
  technicalLabel,
  plainTitle,
  shortExplanation,
  selectedLearningFormat,
  keyGuardrail,
  blueprintContent,
}) => ({
  id,
  categoryLabel: "STEP 6 — LEARNING-FORMAT CONSUMPTION AND LEARNING-EXPERIENCE ANALYTICS",
  title: technicalLabel,
  quickTitle: plainTitle,
  subtitle: technicalLabel,
  accent: "cyan",
  quickViewLayoutType: "quick explainer card",
  quickViewContent: quick({
    plainTitle,
    technicalLabel,
    shortExplanation,
    selectedLearningFormat,
    keyGuardrail,
  }),
  blueprintContent,
});

export const stepSixExplanationCards = {
  "step6-format-selection-handoff-package": card({
    id: "step6-format-selection-handoff-package",
    plainTitle: "What Step 6 is testing from the format choice",
    technicalLabel: "Format Selection Handoff Package",
    shortExplanation:
      "This extracts the starting learner-format signal Step 6 must test: why this format was chosen, what internal-process target it is supposed to support, how usable it is predicted to be, and what uncertainty still exists before the learner actually uses it.",
    selectedLearningFormat: "Input → prediction → testable monitoring frame",
    keyGuardrail:
      "Do not treat the Step 5 recommendation as proof that the format is effective. Step 6 must test actual use before updating learner-format fit.",
    blueprintContent: blueprint({
      technicalName: "Format Selection Handoff Package",
      classification: "Input package / cross-step handoff record",
      internalDefinition:
        "The Format Selection Handoff Package is the structured input from Step 5 into Step 6. It carries the selected format, recommendation context, predicted burden, expected learning target, format metadata, learner-choice path, and uncertainty flags so Step 6 can interpret actual format use without guessing why the format was selected.",
      whyItExists:
        "It prevents Step 6 from analysing consumption behaviour in isolation. The same behaviour may mean different things depending on the selected format, the support target, the learner’s current state, the recommendation confidence, and whether the learner accepted or overrode the recommendation.",
      whatItReads: [
        "selected format ID",
        "selected format family",
        "recommendation rank",
        "recommendation confidence",
        "learner choice path",
        "override status",
        "generic format metadata",
        "learner-specific prediction state",
        "optional pre-use ratings",
        "tutorial availability",
        "whether tutorial was opened before Step 6",
        "expected cognitive burden",
        "expected time burden",
        "expected learning target",
        "Step 6 monitoring priorities",
        "evidence strength",
        "uncertainty flags",
      ],
      whatItOutputs: [
        "starting context for Learning Format Consumption Surface",
        "expected monitoring priorities for Format Interaction Event Stream",
        "interpretation context for Learning-Experience Analytics Hub",
        "uncertainty flags for Step 7 Quick Check Handoff Package",
      ],
      internalProcessHypothesisLens:
        "This package does not diagnose the learner. It defines what Step 6 is allowed to test: whether the chosen format actually supports the learner’s corrected internal-process target, whether the predicted usability window holds, and whether learner behaviour during consumption supports, weakens, or complicates the Step 5 recommendation.",
      subcomponents: [
        "selected support target",
        "selected format family",
        "recommendation confidence",
        "learner agency path",
        "predicted cognitive burden",
        "predicted operational complexity",
        "tutorial availability",
        "uncertainty and validity flags",
      ],
      dynamicStateEffects:
        "May initialise Step 6 monitoring expectations for Current Format Usability State, Current Consumption Cognitive Load State, Current Tutorial Need State, Current Learning Momentum During Format State, and Current Step 7 Readiness State.",
      profileEffects:
        "Does not directly update the Adaptive Learning-Format Profile. It provides the baseline against which later Step 6, Step 7, and Step 8 evidence can be compared.",
      engineEffects:
        "Feeds the Learning-Experience Analytics Engine and Adaptive Learning Engine as context. It does not make the final effectiveness judgement.",
      connectorLogic:
        "Step 5 Support Routing and format-selection decision context\n→ Format Selection Handoff Package\n→ Learning Format Consumption Surface\n→ Format Interaction Event Stream\n→ Format Consumption Evidence Ledger\n→ Learning-Experience Analytics Hub\n→ Step 7 Quick Check Handoff Package",
      guardrails: [
        "Do not reopen Step 5 recommendation logic by default.",
        "Do not treat learner override as defiance.",
        "Do not treat selected format as already validated.",
        "Do not treat pre-use ratings as effectiveness evidence.",
        "Do not hide uncertainty when learner-specific format evidence is limited.",
      ],
      mustNotDoRules: [
        "Must not become a feedback report.",
        "Must not become a generic recommendation explanation.",
        "Must not create learner-format effectiveness conclusions before Step 6, Step 7, and Step 8 evidence.",
        "Must not route missed checklist items directly into format use without internal-process interpretation.",
      ],
    }),
  }),

  "step6-learning-format-consumption-surface": card({
    id: "step6-learning-format-consumption-surface",
    plainTitle: "Where the learner actually uses the selected format",
    technicalLabel: "Learning Format Consumption Surface",
    shortExplanation:
      "This extracts the live learner-format signal: whether the learner can enter the selected format, move through it naturally, use its sections or interactions, and stay productively engaged without the experience becoming surveillance, scoring, or repeated interruption.",
    selectedLearningFormat: "Learner surface → natural use → background evidence capture",
    keyGuardrail:
      "Do not make the learner-facing surface feel like a monitoring dashboard. The learner should use the format naturally while analytics remain mostly backgrounded.",
    blueprintContent: blueprint({
      technicalName: "Learning Format Consumption Surface",
      classification: "Learner-facing surface",
      internalDefinition:
        "The Learning Format Consumption Surface is the Step 6 learner-facing space where the selected learning format opens and the learner works through it. It presents the chosen format, section navigation, progress indication, optional tutorial access, embedded activities when present, and transition toward Step 7.",
      whyItExists:
        "Step 6 cannot evaluate learner-format fit until the learner actually attempts to use the selected format. This surface creates the real consumption event while preserving low burden, learner agency, and non-judgemental use.",
      whatItReads: [
        "Format Selection Handoff Package",
        "selected format content",
        "section structure",
        "tutorial availability",
        "expected learning target",
        "current burden and momentum context",
        "embedded interaction structure where applicable",
      ],
      whatItOutputs: [
        "interaction events to Format Interaction Event Stream",
        "section exposure evidence",
        "completion, pause, return, or abandonment signals",
        "tutorial access signals",
        "embedded interaction responses where present",
        "readiness signal for Step 7 transition",
      ],
      internalProcessHypothesisLens:
        "Surface behaviour may suggest productive engagement, superficial progression, overload, underload, confusion, format unfamiliarity, interruption, or low trust in the format. These are hypotheses, not conclusions.",
      subcomponents: [
        "selected format title",
        "short learning target reminder",
        "content surface",
        "section navigation",
        "progress indicator",
        "optional tutorial link",
        "optional help button",
        "embedded activities",
        "continue/completion control",
        "pause/return control where available",
      ],
      dynamicStateEffects:
        "Contributes to Current Format Engagement State, Current Format Usability State, Current Consumption Cognitive Load State, Current Tutorial Need State, Current Learning Momentum During Format State, and Current Step 7 Readiness State.",
      profileEffects:
        "May contribute to Learner-Format Response History as raw use evidence. May contribute cautiously to Learner Engagement Profile when burden or engagement evidence is meaningful and not contaminated by format-quality issues.",
      engineEffects:
        "Supplies the Learning-Experience Analytics Engine with real use evidence. Allows the Learning Momentum Engine to monitor interruption risk, burden, and Step 7 readiness.",
      connectorLogic:
        "Format Selection Handoff Package\n→ Learning Format Consumption Surface\n→ Format Interaction Event Stream\n→ Format Consumption Evidence Ledger",
      guardrails: [
        "Keep learner-facing wording low-burden and non-blaming.",
        "Preserve learner agency.",
        "Keep tutorial optional.",
        "Keep clinical teaching inside the selected format unless a clearly tracked adaptation is implemented.",
        "Do not expose hidden analytic labels to the learner.",
      ],
      mustNotDoRules: [
        "Must not feel like a surveillance dashboard.",
        "Must not score the learner from progress.",
        "Must not shame skipping, slow reading, pausing, or abandonment.",
        "Must not repeatedly interrupt the learner with analytic prompts.",
        "Must not force tutorial use.",
      ],
    }),
  }),

  "step6-format-interaction-event-stream": card({
    id: "step6-format-interaction-event-stream",
    plainTitle: "The trace of how the learner moves through the format",
    technicalLabel: "Format Interaction Event Stream",
    shortExplanation:
      "This extracts learner-format processing signals from high-value interaction events: where the learner goes, pauses, revisits, skips, replays, asks for help, or exits. The stream records evidence for interpretation; it does not decide what the behaviour means by itself.",
    selectedLearningFormat: "Event → context → cautious interpretation chain",
    keyGuardrail:
      "Raw interaction events must not become direct learner judgements. A pause, skip, replay, or exit may have several explanations.",
    blueprintContent: blueprint({
      technicalName: "Format Interaction Event Stream",
      classification: "Event stream / raw interaction trace",
      internalDefinition:
        "The Format Interaction Event Stream captures structured events during learning-format use, including scroll, dwell, replay, section visits, embedded interactions, pauses, returns, exits, tutorial access, and validity cautions.",
      whyItExists:
        "Step 6 needs a high-resolution but purpose-limited evidence trail to understand how the learner is experiencing the selected format. The stream gives the system enough evidence to detect stuck points, coverage gaps, operational difficulty, burden, and possible format-quality issues.",
      whatItReads: [
        "learner navigation actions",
        "section visits",
        "scroll behaviour",
        "dwell time",
        "replay or reread events",
        "embedded interaction events",
        "pause and return events",
        "tutorial access",
        "help requests",
        "exits or abandonment",
        "device, idle, interruption, or technical cautions where available",
      ],
      whatItOutputs: [
        "structured events to Format Consumption Evidence Ledger",
        "candidate signals for Stuck Point Signal Capture",
        "evidence for Section-Level Interaction Records",
        "validity flags for Signal Quality and Noise Filtering",
      ],
      internalProcessHypothesisLens:
        "Interaction patterns may suggest comprehension effort, confusion, productive review, disengagement, interruption, overload, under-challenge, format-operation difficulty, or poor format design. No single event confirms the learner’s internal state.",
      subcomponents: [
        "section entry and exit",
        "sequence of section navigation",
        "dwell-time clusters",
        "repeated review",
        "skipped sections",
        "embedded interaction attempts",
        "failed or abandoned interactions",
        "tutorial access",
        "voluntary help-seeking",
        "pause/return behaviour",
        "idle or interruption flags",
      ],
      dynamicStateEffects:
        "Feeds Current Format Engagement State, Current Consumption Cognitive Load State, Current Stuck Point Interpretation State, Current Format Operation Familiarity State, Current Content-Depth Fit State, and Current Step 7 Readiness State after interpretation.",
      profileEffects:
        "Updates Learner-Format Response History as raw event history. Does not directly update Learner Profile or Adaptive Learning-Format Profile without interpretation.",
      engineEffects:
        "Feeds Learning-Experience Analytics Engine. May inform Learning Momentum Engine after burden and engagement signals are interpreted.",
      connectorLogic:
        "Learning Format Consumption Surface\n→ Format Interaction Event Stream\n→ Format Consumption Evidence Ledger\n→ Signal Quality and Noise Filter\n→ Learning-Experience Analytics Hub",
      guardrails: [
        "Capture only high-value events.",
        "Downgrade noisy signals caused by idle time, tab switching, device issues, accidental events, or interruptions.",
        "Preserve alternative explanations.",
        "Keep raw events separate from interpreted profile evidence.",
      ],
      mustNotDoRules: [
        "Raw dwell time must not become competence judgement.",
        "A skipped section must not become laziness.",
        "Tutorial opening must not become inability.",
        "Abandonment must not become learning failure.",
        "Completion must not become learning success.",
      ],
    }),
  }),

  "step6-format-consumption-evidence-ledger": card({
    id: "step6-format-consumption-evidence-ledger",
    plainTitle: "The structured record of what happened during format use",
    technicalLabel: "Format Consumption Evidence Ledger",
    shortExplanation:
      "This extracts the structured evidence base for learner-format interpretation: what the learner actually consumed, skipped, revisited, struggled with, used for help, and completed, while preserving context and uncertainty before any profile or Step 7 decision is made.",
    selectedLearningFormat: "Evidence ledger → interpretation trace → routing decision",
    keyGuardrail:
      "The ledger stores evidence. It must not itself become the learner profile or a conclusion that learning succeeded.",
    blueprintContent: blueprint({
      technicalName: "Format Consumption Evidence Ledger",
      classification: "Evidence ledger",
      internalDefinition:
        "The Format Consumption Evidence Ledger stores structured consumption evidence with context, timing, section, validity, and interpretation fields. It converts the raw interaction stream into traceable records for analytics, routing, and Step 7 preparation.",
      whyItExists:
        "Without a structured ledger, Step 6 would either over-interpret raw events or lose traceability. The ledger preserves what happened, where it happened, under what context, and with what validity cautions.",
      whatItReads: [
        "Format Interaction Event Stream",
        "section identifiers",
        "selected format metadata",
        "expected learning target",
        "tutorial events",
        "embedded interaction responses",
        "pause/return/exit signals",
        "validity cautions",
        "noise-filter outputs",
      ],
      whatItOutputs: [
        "section-level interaction records",
        "structured evidence for Learning-Experience Analytics Hub",
        "stuck-point evidence candidates",
        "tutorial prompt traces",
        "embedded interaction response records",
        "raw session update to Learner-Format Response History",
        "Step 7 Quick Check Handoff Package content",
      ],
      internalProcessHypothesisLens:
        "The ledger supports hypotheses about learner-format fit, comprehension burden, operational familiarity, content-depth fit, productive effort, overload, disengagement, interruption, and format quality. It does not decide these alone.",
      subcomponents: [
        "consumed sections",
        "skipped sections",
        "partially viewed sections",
        "repeated-review sections",
        "dwell-time clusters",
        "embedded interaction results",
        "tutorial-use status",
        "help-seeking events",
        "completion state",
        "abandonment or pause state",
        "validity and noise flags",
        "interpretation confidence",
      ],
      dynamicStateEffects:
        "Feeds current Step 6 dynamic variables after analytics interpret the records, especially Current Format Engagement State, Current Format Usability State, Current Stuck Point Interpretation State, Current Format Quality Risk State, and Current Step 7 Readiness State.",
      profileEffects:
        "Updates Learner-Format Response History as raw history. May generate Adaptive Learning-Format Profile Update Candidate evidence only after interpretation and provisionality checks.",
      engineEffects:
        "Feeds Learning-Experience Analytics Engine, Adaptive Learning Engine, Learning Momentum Engine, and Step 7 handoff preparation.",
      connectorLogic:
        "Format Interaction Event Stream\n→ Format Consumption Evidence Ledger\n→ Learning-Experience Analytics Hub\n→ Section-Level Interaction Record\n→ Learner–Format–Content–Quality Separation Gate\n→ Step 7 Quick Check Handoff Package",
      guardrails: [
        "Preserve raw evidence separately from interpretation.",
        "Preserve validity cautions.",
        "Route format-quality evidence away from learner profiles.",
        "Do not treat ledger records as final learning outcomes.",
      ],
      mustNotDoRules: [
        "Must not become a scoring ledger.",
        "Must not label slow reading as poor ability.",
        "Must not label skipped content as avoidance without context.",
        "Must not update learner competence from consumption evidence alone.",
        "Must not conclude effectiveness without Step 7 and Step 8 evidence.",
      ],
    }),
  }),

  "step6-learning-experience-analytics-hub": card({
    id: "step6-learning-experience-analytics-hub",
    plainTitle: "The interpreter of the learner’s experience inside the format",
    technicalLabel: "Learning-Experience Analytics Engine / Learning-Experience Analytics Hub",
    shortExplanation:
      "This extracts the learner-format fit signal: whether the consumption pattern looks usable, overloaded, under-challenged, confused, productive, interrupted, format-operation-limited, content-depth-mismatched, or possibly affected by format-quality problems.",
    selectedLearningFormat: "Input → interpretation → routing engine model",
    keyGuardrail:
      "Do not collapse all difficulty into learner weakness. The hub must preserve learner-state, format-operation, current-state mismatch, and format-quality explanations separately.",
    blueprintContent: blueprint({
      technicalName: "Learning-Experience Analytics Engine / Learning-Experience Analytics Hub",
      classification: "Step-specific analytics engine / interpretation hub",
      internalDefinition:
        "The Learning-Experience Analytics Engine interprets learning-format consumption behaviour into learner-format fit, usability, burden, stuck-point, learning-momentum, and format-quality signals.",
      whyItExists:
        "Step 6 must not treat format use as passive completion. The analytics hub converts structured consumption evidence into cautious adaptive interpretation so the system can decide what Step 7 should test, what profile evidence is only provisional, and what format-quality problems must be separated.",
      whatItReads: [
        "Format Selection Handoff Package",
        "Format Interaction Event Stream",
        "Format Consumption Evidence Ledger",
        "Learning Format Library Metadata",
        "Adaptive Learning-Format Profile context",
        "Learner-Format Response History",
        "Learner Engagement Profile",
        "current dynamic states",
        "validity flags",
        "tutorial traces",
        "embedded interaction responses",
        "section-level records",
      ],
      whatItOutputs: [
        "learning-experience analytics",
        "dynamic learning-experience variable updates",
        "stuck-point interpretations",
        "tutorial need interpretation",
        "format-quality routing",
        "profile update candidates",
        "learner engagement evidence where justified",
        "Step 7 Quick Check Handoff Package",
      ],
      internalProcessHypothesisLens:
        "The hub asks how the learner is experiencing and processing the selected format now. It weighs possible learner difficulty, format-operation difficulty, current-state mismatch, productive struggle, under-exposure, interruption, and format-quality problems.",
      subcomponents: [
        "section navigation and coverage analysis",
        "dwell-time and attention pattern interpretation",
        "stuck point signal capture",
        "format operation familiarity analysis",
        "cognitive load during consumption analysis",
        "content-depth fit analysis",
        "embedded interaction response capture",
        "revisit and review pattern capture",
        "abandonment and completion pattern capture",
        "tutorial use and response analysis",
        "learner help-seeking signal",
        "learning momentum during consumption signal",
        "format quality and design issue capture",
        "signal quality and noise filtering",
      ],
      dynamicStateEffects:
        "Updates Current Format Engagement State, Current Format Usability State, Current Consumption Cognitive Load State, Current Stuck Point Interpretation State, Current Format Operation Familiarity State, Current Content-Depth Fit State, Current Tutorial Need State, Current Learning Momentum During Format State, Current Format Quality Risk State, and Current Step 7 Readiness State.",
      profileEffects:
        "Creates cautious Adaptive Learning-Format Profile Update Candidate evidence. Sends raw use to Learner-Format Response History. Sends burden and engagement evidence to Learner Engagement Profile only where justified. Keeps format-quality evidence outside learner profiles.",
      engineEffects:
        "Feeds Adaptive Learning Engine for later recommendation recalibration. Feeds Learning Momentum Engine for pacing and Step 7 readiness. Feeds Format Quality Improvement System where quality issues are suspected. Sends limited context to Adaptive Station Scheduling Engine only where later retesting may be affected.",
      connectorLogic:
        "Format Consumption Evidence Ledger\n→ Learning-Experience Analytics Hub\n→ Stuck Point Disambiguation Gate\n→ Learner–Format–Content–Quality Separation Gate\n→ Dynamic Learning-Experience Variables\n→ Adaptive Learning-Format Profile Update Candidate\n→ Step 7 Quick Check Handoff Package",
      guardrails: [
        "Interpret cautiously.",
        "Preserve alternatives.",
        "Separate learner-state evidence from format-quality evidence.",
        "Keep effectiveness provisional.",
        "Use Step 7 and Step 8 to confirm learning effect.",
      ],
      mustNotDoRules: [
        "Must not judge competence from consumption.",
        "Must not make final effectiveness conclusions.",
        "Must not schedule the next station.",
        "Must not blame the learner for stuck points.",
        "Must not treat completion as success or abandonment as failure.",
      ],
    }),
  }),

  "step6-stuck-point-signal-capture": card({
    id: "step6-stuck-point-signal-capture",
    plainTitle: "Where the learner may be getting stuck",
    technicalLabel: "Stuck Point Signal Capture",
    shortExplanation:
      "This extracts a possible stuck-point signal when the learner slows down, repeats, seeks help, fails an embedded interaction, pauses, or abandons a section. It marks a moment that needs interpretation; it does not decide whether the learner, the format, the content, or the interface caused the difficulty.",
    selectedLearningFormat: "Signal → hypothesis register → disambiguation gate",
    keyGuardrail:
      "A stuck point is only a candidate signal. It must go through disambiguation before any learner-state or format-quality conclusion is made.",
    blueprintContent: blueprint({
      technicalName: "Stuck Point Signal Capture",
      classification: "Analytic / stuck-point detector",
      internalDefinition:
        "Stuck Point Signal Capture detects possible stuck points through slowdown, repeated review, help-seeking, failed interactions, abandonment, or difficulty signals during learning-format use.",
      whyItExists:
        "Stuck points are high-value Step 6 evidence because they may reveal where the learner is struggling to process the format or target concept. But they are also easy to misread, so this analytic only captures the signal and sends it for disambiguation.",
      whatItReads: [
        "dwell-time clusters",
        "repeated review or replay",
        "section returns",
        "failed embedded interactions",
        "help-seeking events",
        "tutorial access or tutorial refusal",
        "abandonment or pause at section level",
        "skipped prerequisite sections",
        "validity flags",
        "format metadata and expected interaction pattern",
      ],
      whatItOutputs: [
        "stuck-point candidate signals",
        "entries for Stuck Point Hypothesis Register",
        "evidence for Stuck Point Disambiguation Gate",
        "possible tutorial support trigger",
        "possible content-depth or format-quality concern",
      ],
      internalProcessHypothesisLens:
        "A stuck point may suggest concept difficulty, retrieval difficulty, application difficulty, format-operation unfamiliarity, cognitive overload, under-exposure, productive struggle, interruption, interface friction, or weak format design.",
      subcomponents: [
        "slowdown point",
        "repeated-review point",
        "help-seeking point",
        "failed interaction point",
        "abandonment point",
        "skipped prerequisite point",
        "content-depth mismatch marker",
        "format-operation difficulty marker",
        "technical/validity caution marker",
      ],
      dynamicStateEffects:
        "May update Current Stuck Point Interpretation State after disambiguation. May contribute to Current Format Usability State, Current Consumption Cognitive Load State, Current Format Operation Familiarity State, Current Content-Depth Fit State, Current Tutorial Need State, and Current Format Quality Risk State.",
      profileEffects:
        "Does not directly update learner profiles. It may later contribute to Adaptive Learning-Format Profile Update Candidate or Learner Engagement Profile only after disambiguation and validity checks.",
      engineEffects:
        "Feeds Learning-Experience Analytics Engine and Stuck Point Disambiguation Gate. May inform Learning Momentum Engine if the stuck point increases burden or threatens continuation.",
      connectorLogic:
        "Format Consumption Evidence Ledger\n→ Stuck Point Signal Capture\n→ Stuck Point Hypothesis Register\n→ Stuck Point Disambiguation Gate\n→ Learner–Format–Content–Quality Separation Gate",
      guardrails: [
        "Preserve multiple explanations.",
        "Check signal quality before interpreting.",
        "Do not treat a single stuck point as a stable weakness.",
        "Do not treat stuckness as learner failure.",
      ],
      mustNotDoRules: [
        "Must not label the learner as unable.",
        "Must not blame the learner.",
        "Must not update the learner profile directly.",
        "Must not ignore format-quality or interface explanations.",
        "Must not interrupt repeatedly just because a stuck point appears.",
      ],
    }),
  }),

  "step6-stuck-point-disambiguation-gate": card({
    id: "step6-stuck-point-disambiguation-gate",
    plainTitle: "Why the learner may be stuck",
    technicalLabel: "Stuck Point Disambiguation Gate",
    shortExplanation:
      "This extracts the best current explanation for a stuck point while keeping alternatives open: learner difficulty, format-operation difficulty, overload, content-depth mismatch, productive struggle, technical contamination, format-quality issue, or unclear evidence.",
    selectedLearningFormat: "Possible stuck point → explanation branches → routed consequence",
    keyGuardrail:
      "Do not convert stuckness into a confirmed learner deficit. The gate must preserve uncertainty and route format-side problems separately.",
    blueprintContent: blueprint({
      technicalName: "Stuck Point Disambiguation Gate",
      classification: "Gate / interpretation node",
      internalDefinition:
        "The Stuck Point Disambiguation Gate separates possible learner difficulty, format-operation difficulty, overload, content mismatch, format-quality issue, productive struggle, technical contamination, and unclear evidence when a stuck point signal appears.",
      whyItExists:
        "Stuck points are diagnostically valuable but dangerous if over-interpreted. This gate prevents Step 6 from collapsing different causes into “the learner did not understand.”",
      whatItReads: [
        "Stuck Point Hypothesis Register",
        "Section-Level Interaction Records",
        "Format Consumption Evidence Ledger",
        "Format Selection Handoff Package",
        "format metadata",
        "tutorial availability and tutorial-use status",
        "cognitive load signals",
        "content-depth fit signals",
        "embedded interaction responses",
        "cross-learner format-quality signals where available",
        "signal quality and noise flags",
      ],
      whatItOutputs: [
        "current stuck-point interpretation",
        "alternative explanations",
        "routed learner-format evidence",
        "routed format-quality evidence",
        "tutorial support suggestion candidate",
        "Step 7 focus caution",
        "profile update candidate only if justified",
      ],
      internalProcessHypothesisLens:
        "The gate asks whether the stuck point reflects an internal learner processing issue, difficulty using the format, current cognitive burden, mismatch between content depth and learner state, productive effort, external interruption, or a problem in the learning material itself.",
      subcomponents: [
        "learner difficulty branch",
        "format-operation difficulty branch",
        "current-state overload branch",
        "content-depth mismatch branch",
        "productive struggle branch",
        "interface/technical contamination branch",
        "format-quality issue branch",
        "unclear evidence branch",
      ],
      dynamicStateEffects:
        "Updates Current Stuck Point Interpretation State. May affect Current Format Usability State, Current Consumption Cognitive Load State, Current Format Operation Familiarity State, Current Content-Depth Fit State, Current Tutorial Need State, Current Format Quality Risk State, and Current Step 7 Readiness State.",
      profileEffects:
        "Learner-specific evidence may become an Adaptive Learning-Format Profile Update Candidate only if sufficiently supported. Format-quality evidence must route to Format Quality Issue Register instead of learner profiles.",
      engineEffects:
        "Feeds Learning-Experience Analytics Engine, Learner–Format–Content–Quality Separation Gate, Learning Momentum Engine, Adaptive Learning Engine, and Format Quality Improvement System where relevant.",
      connectorLogic:
        "Stuck Point Signal Capture\n→ Stuck Point Hypothesis Register\n→ Stuck Point Disambiguation Gate\n→ Learner–Format–Content–Quality Separation Gate\n→ learner profile candidate / format-quality register / Step 7 handoff / uncertainty register",
      guardrails: [
        "Preserve uncertainty.",
        "Check for productive struggle.",
        "Check for overload separately from concept failure.",
        "Check for format-operation unfamiliarity before learner difficulty.",
        "Check for format-quality issue before learner-profile update.",
        "Check for signal contamination.",
      ],
      mustNotDoRules: [
        "Must not treat stuckness as proof of weak knowledge.",
        "Must not treat repeated review as failure.",
        "Must not treat tutorial use as inability.",
        "Must not treat one stuck point as a stable learner trait.",
        "Must not route format-wide design issues into individual learner weakness.",
      ],
    }),
  }),

  "step6-tutorial-micro-support-gate": card({
    id: "step6-tutorial-micro-support-gate",
    plainTitle: "When to offer small help without hijacking learning",
    technicalLabel: "Tutorial Support Suggestion Gate / Micro-Support Intrusion Gate",
    shortExplanation:
      "This extracts the support-timing signal: whether the learner may need help using the format itself, and whether a small tutorial or micro-support prompt would reduce burden without becoming forced, intrusive, or hidden clinical coaching.",
    selectedLearningFormat: "Trigger → support gate → optional low-burden intervention",
    keyGuardrail:
      "Tutorial support explains how to use the format. It must not become forced teaching, repeated interruption, or unplanned clinical hints outside the selected format.",
    blueprintContent: blueprint({
      technicalName: "Tutorial Support Suggestion Gate / Micro-Support Intrusion Gate",
      classification: "Learner-facing support gate / communication-safety gate",
      internalDefinition:
        "The Tutorial Support Suggestion Gate determines whether to actively suggest tutorial support. The Micro-Support Intrusion Gate prevents excessive interruptions or coaching-style popups during format consumption.",
      whyItExists:
        "Some difficulty in Step 6 comes from format-operation unfamiliarity rather than the learning target. Tutorial support can preserve learning momentum, but it must be optional, low-burden, and separated from clinical teaching.",
      whatItReads: [
        "Format Operation Familiarity Analysis",
        "Stuck Point Disambiguation Gate output",
        "Current Tutorial Need State",
        "Current Format Usability State",
        "Current Consumption Cognitive Load State",
        "Learning Momentum During Consumption Signal",
        "tutorial availability",
        "prior tutorial response evidence",
        "learner help-seeking signal",
        "micro-support interruption risk",
      ],
      whatItOutputs: [
        "passive tutorial availability",
        "active tutorial suggestion when justified",
        "tutorial prompt trace",
        "optional low-burden help prompt",
        "post-tutorial response evidence",
        "communication-layer wording",
        "suppression of intrusive prompts when burden or repetition risk is high",
      ],
      internalProcessHypothesisLens:
        "Tutorial need may suggest unfamiliarity with the format, uncertainty about how to interact with it, overload caused by operational complexity, or format design difficulty. It does not prove the learner cannot understand the target content.",
      subcomponents: [
        "passive tutorial availability",
        "active tutorial suggestion",
        "tutorial refusal",
        "tutorial use",
        "post-tutorial improvement",
        "continued difficulty after tutorial",
        "low-burden pause option",
        "format-navigation support",
        "interruption suppression",
        "clinical-teaching boundary",
      ],
      dynamicStateEffects:
        "Updates Current Tutorial Need State, Current Format Operation Familiarity State, Current Format Usability State, Current Consumption Cognitive Load State, and Current Learning Momentum During Format State.",
      profileEffects:
        "Tutorial Prompt Trace may create an Adaptive Learning-Format Profile Update Candidate when tutorial need appears learner-specific. It may route to Format Quality Issue Register when tutorial need appears format-wide.",
      engineEffects:
        "Feeds Learning Momentum Engine for pacing and interruption control. Feeds Adaptive Learning Engine only as provisional learner-format usability evidence. Uses Learner-Centered Communication Layer for all learner-facing wording.",
      connectorLogic:
        "Format Operation Familiarity Analysis\n→ Tutorial Support Suggestion Gate\n→ Learner-Centered Communication Layer\n→ Tutorial Prompt Trace\n→ Adaptive Learning-Format Profile Update Candidate when learner-specific\n→ Format Quality Issue Register when format-wide",
      guardrails: [
        "Tutorial must remain optional.",
        "Micro-support must be infrequent and justified.",
        "Support must help format use, not bypass selected learning logic.",
        "Learner-facing wording must be non-blaming.",
        "Clinical teaching must remain inside the selected format unless explicitly tracked as an adaptation.",
      ],
      mustNotDoRules: [
        "Must not force tutorial use.",
        "Must not repeatedly interrupt.",
        "Must not expose hidden analytic labels.",
        "Must not say the learner is using the format incorrectly.",
        "Must not give unplanned clinical hints outside the selected format.",
        "Must not treat tutorial use as learner inability.",
      ],
    }),
  }),

  "step6-learner-format-content-quality-separation-gate": card({
    id: "step6-learner-format-content-quality-separation-gate",
    plainTitle: "Where the evidence should go",
    technicalLabel: "Learner–Format–Content–Quality Separation Gate",
    shortExplanation:
      "This extracts the routing signal: whether evidence belongs to the learner’s current state, the learner-format match, the content-depth fit, the format’s design quality, Step 7 test planning, or an uncertainty register. This prevents format problems from being misread as learner weakness.",
    selectedLearningFormat: "Evidence → separation matrix → correct destination",
    keyGuardrail:
      "Format-quality problems must stay separate from learner-profile evidence. Do not dump design flaws, unclear visuals, or poor sequencing into the learner model.",
    blueprintContent: blueprint({
      technicalName: "Learner–Format–Content–Quality Separation Gate",
      classification: "Gate / evidence-routing and interpretation node",
      internalDefinition:
        "The Learner–Format–Content–Quality Separation Gate routes Step 6 evidence to the learner profile, Adaptive Learning-Format Profile update candidate, format-quality system, Step 7 handoff, or uncertainty register based on what the evidence most likely represents.",
      whyItExists:
        "Step 6 evidence can describe the learner, the format, the content depth, the current state, or the quality of the learning material. This gate prevents misrouting, especially the major failure mode of turning format-quality problems into learner deficits.",
      whatItReads: [
        "Learning-Experience Analytics Hub output",
        "Stuck Point Disambiguation Gate output",
        "Format Consumption Evidence Ledger",
        "Section-Level Interaction Records",
        "Format Quality and Design Issue Capture",
        "current dynamic learning-experience variables",
        "learner-specific format history",
        "cross-learner format-quality evidence",
        "Step 7 readiness and sufficiency signals",
        "validity cautions",
      ],
      whatItOutputs: [
        "Adaptive Learning-Format Profile Update Candidate Record where learner-specific and provisional",
        "Learner Engagement Profile evidence where burden or trust evidence is meaningful",
        "Learner-Format Response History raw update",
        "Format Quality Issue Register entry where format-side issue is suspected",
        "Format Redesign Queue candidate where evidence is strong or repeated",
        "Step 7 Quick Check Handoff Package content",
        "uncertainty preservation where evidence is insufficient",
      ],
      internalProcessHypothesisLens:
        "The gate asks whether the evidence reflects learner difficulty, format-operation difficulty, current cognitive burden, content-depth mismatch, productive struggle, format-quality issue, or unclear evidence.",
      subcomponents: [
        "learner-state route",
        "learner-format route",
        "content-depth route",
        "format-quality route",
        "Step 7 handoff route",
        "uncertainty route",
        "validity caution route",
        "evidence-strength threshold",
      ],
      dynamicStateEffects:
        "Uses Current Stuck Point Interpretation State, Current Format Usability State, Current Content-Depth Fit State, Current Format Quality Risk State, Current Learning Momentum During Format State, and Current Step 7 Readiness State to route evidence.",
      profileEffects:
        "Allows only cautious, interpreted learner-profile or learner-format candidate updates. Keeps Format Quality Knowledge Base separate from learner profiles. Sends raw events to Learner-Format Response History without treating them as interpreted evidence.",
      engineEffects:
        "Feeds Adaptive Learning Engine, Learning Momentum Engine, Format Quality Improvement System, and Step 7 Quick Check Handoff Package. Sends limited context to Adaptive Station Scheduling Engine only when later retesting may be affected.",
      connectorLogic:
        "Learning-Experience Analytics Hub\n→ Learner–Format–Content–Quality Separation Gate\n→ Adaptive Learning-Format Profile Update Candidate / Learner Engagement Profile / Learner-Format Response History / Format Quality Issue Register / Step 7 Quick Check Handoff Package / uncertainty register",
      guardrails: [
        "Use evidence-strength thresholds.",
        "Preserve alternative explanations.",
        "Separate format-quality evidence from learner evidence.",
        "Keep Step 6 effectiveness provisional.",
        "Do not over-update profiles from one session.",
      ],
      mustNotDoRules: [
        "Must not route cross-learner format issues into individual learner deficit.",
        "Must not treat section skips as laziness.",
        "Must not treat format difficulty as clinical weakness.",
        "Must not treat Step 6 completion as learning success.",
        "Must not make final station scheduling decisions.",
      ],
    }),
  }),

  "step6-format-quality-issue-register": card({
    id: "step6-format-quality-issue-register",
    plainTitle: "When the format may be the problem",
    technicalLabel: "Format Quality Issue Register",
    shortExplanation:
      "This extracts the format-side signal: whether repeated stuck points, confusing sections, unclear visuals, poor sequencing, excessive density, technical friction, or metadata mismatch may reflect a problem in the learning format rather than the learner.",
    selectedLearningFormat: "Format-linked evidence → quality register → redesign / metadata route",
    keyGuardrail:
      "A format-quality issue must not become learner-profile evidence. It belongs to a separate system-side improvement pathway.",
    blueprintContent: blueprint({
      technicalName: "Format Quality Issue Register",
      classification: "System-side register / format-quality evidence store",
      internalDefinition:
        "The Format Quality Issue Register stores possible format-design, content, sequence, visual, interface, accessibility, or metadata problems identified during Step 6 consumption.",
      whyItExists:
        "Adaptive learning must improve not only the learner model but also the learning materials. If many learners get stuck in the same place, or if one learner encounters clear design friction, the system must capture that as a format-side issue rather than blaming the learner.",
      whatItReads: [
        "Format Quality and Design Issue Capture",
        "Learner–Format–Content–Quality Separation Gate output",
        "repeated cross-learner stuck clusters",
        "section-level abandonment clusters",
        "confusing interaction patterns",
        "tutorial failure patterns",
        "learner feedback",
        "metadata mismatch",
        "technical or accessibility issues",
        "content-depth mismatch evidence",
      ],
      whatItOutputs: [
        "format-quality issue entries",
        "Format Redesign Queue candidates",
        "Learning Format Library Metadata update candidates",
        "tutorial improvement candidates",
        "content revision needs",
        "interface improvement flags",
        "safety-linked content review flags where relevant",
      ],
      internalProcessHypothesisLens:
        "This register is not about the learner’s internal weakness. It captures cases where the learning material itself may be blocking learning, creating unnecessary burden, misrepresenting complexity, or failing to support the intended internal-process target.",
      subcomponents: [
        "unclear section",
        "excessive density",
        "misleading visual",
        "confusing interaction design",
        "poor sequence",
        "insufficient explanation depth",
        "inaccessible interface behaviour",
        "technical friction",
        "repeated tutorial need",
        "metadata mismatch",
        "cross-learner stuck cluster",
        "safety-linked content review flag",
      ],
      dynamicStateEffects:
        "Receives evidence when Current Format Quality Risk State is elevated. May influence future Current Format Usability State and Step 5 metadata fit in later cycles after review.",
      profileEffects: "Does not update learner profiles. Feeds Format Quality Knowledge Base and system-side improvement records.",
      engineEffects:
        "Feeds Format Quality Improvement System. May later affect Learning Format Library Metadata, tutorial design, redesign priorities, and Adaptive Learning Engine recommendations.",
      connectorLogic:
        "Format Quality and Design Issue Capture\n→ Learner–Format–Content–Quality Separation Gate\n→ Format Quality Issue Register\n→ Format Redesign Queue / Learning Format Library Metadata update candidate / Format Quality Knowledge Base",
      guardrails: [
        "Keep separate from Learner Profile.",
        "Use cross-learner evidence when available.",
        "Preserve uncertainty when only one learner shows the signal.",
        "Do not overcorrect a format from one weak signal.",
        "Do not ignore strong single-session technical or accessibility problems.",
      ],
      mustNotDoRules: [
        "Must not become evidence of individual learner incompetence.",
        "Must not convert format-wide stuck points into learner deficits.",
        "Must not update Adaptive Learning-Format Profile as if the learner caused the issue.",
        "Must not silently ignore repeated format problems.",
        "Must not change learning material content without preserving the Step 6 evidence trail.",
      ],
    }),
  }),

  "step6-adaptive-learning-format-profile-update-candidate": card({
    id: "step6-adaptive-learning-format-profile-update-candidate",
    plainTitle: "A cautious learner-format update, not a final conclusion",
    technicalLabel: "Adaptive Learning-Format Profile Update Candidate",
    shortExplanation:
      "This extracts provisional learner-format evidence: whether this learner seemed able to use this format family, needed tutorial support, became overloaded, engaged productively, or showed repeated stuck patterns. It remains a candidate until Step 7, Step 8, or later evidence confirms actual effectiveness.",
    selectedLearningFormat: "Provisional evidence → candidate update → later confirmation chain",
    keyGuardrail:
      "Step 6 alone cannot prove format effectiveness. It can suggest usability and response patterns, but Step 7 and Step 8 must test learning and transfer.",
    blueprintContent: blueprint({
      technicalName: "Adaptive Learning-Format Profile Update Candidate Record",
      classification: "Profile-update candidate / provisional learner-format evidence record",
      internalDefinition:
        "The Adaptive Learning-Format Profile Update Candidate Record stores cautious learner-format usability and response evidence generated during Step 6, pending later confirmation from Step 7 Quick Check, Step 8 Re-Entry Station, retention evidence, transfer evidence, or repeated patterns.",
      whyItExists:
        "Step 6 is where the system begins to learn how this learner actually experiences different learning formats. However, consumption evidence alone cannot prove effectiveness, so the update must remain provisional.",
      whatItReads: [
        "interpreted learner-format evidence from Learning-Experience Analytics Hub",
        "Learner–Format–Content–Quality Separation Gate output",
        "tutorial prompt trace when learner-specific",
        "section coverage and stuck-point patterns",
        "cognitive-load during consumption",
        "format usability state",
        "embedded interaction responses",
        "completion, pause, return, or abandonment pattern",
        "validity cautions",
        "Step 7 and Step 8 links when later available",
      ],
      whatItOutputs: [
        "provisional Adaptive Learning-Format Profile evidence",
        "recommendation recalibration context for Adaptive Learning Engine",
        "later evidence-matching targets for Step 7 and Step 8",
        "caution flags where effectiveness is not yet proven",
      ],
      internalProcessHypothesisLens:
        "The candidate may suggest that this learner currently responds well or poorly to a format family, needs operational support, finds the format too heavy, benefits from interactive structure, avoids certain sections, or struggles with a specific format-content match. These remain hypotheses.",
      subcomponents: [
        "format-family usability evidence",
        "operational familiarity evidence",
        "tutorial need evidence",
        "burden response evidence",
        "completion pattern",
        "stuck-point pattern",
        "engagement quality",
        "embedded response evidence",
        "preference-effectiveness mismatch candidate",
        "validity caution",
        "later outcome links",
      ],
      dynamicStateEffects:
        "Draws from Current Format Engagement State, Current Format Usability State, Current Consumption Cognitive Load State, Current Format Operation Familiarity State, Current Content-Depth Fit State, Current Tutorial Need State, Current Learning Momentum During Format State, and Current Step 7 Readiness State.",
      profileEffects:
        "Creates a cautious update candidate for Adaptive Learning-Format Profile. Updates Learner-Format Response History as raw record. Does not finalize long-term effectiveness, preference-effectiveness relationship, retention, transfer, or station performance improvement.",
      engineEffects:
        "Feeds Adaptive Learning Engine for later recommendation recalibration. Does not make final recommendation logic alone. May influence future Step 5 format ranking only after stronger outcome evidence accumulates.",
      connectorLogic:
        "Learner–Format–Content–Quality Separation Gate\n→ Adaptive Learning-Format Profile Update Candidate Record\n→ Adaptive Learning Engine\n→ later Step 7 / Step 8 / retention / transfer evidence confirmation",
      guardrails: [
        "Keep effectiveness provisional.",
        "Require later confirmation for stronger updates.",
        "Preserve validity cautions.",
        "Do not update from format-quality-contaminated evidence.",
        "Do not over-weight a single format-use session.",
      ],
      mustNotDoRules: [
        "Must not prove long-term retention.",
        "Must not prove transfer effectiveness.",
        "Must not prove station performance improvement.",
        "Must not conclude final format superiority.",
        "Must not create a stable learner preference-effectiveness relationship from one session.",
      ],
    }),
  }),

  "step6-step7-quick-check-handoff-package": card({
    id: "step6-step7-quick-check-handoff-package",
    plainTitle: "What Step 7 should test after format use",
    technicalLabel: "Step 7 Quick Check Handoff Package",
    shortExplanation:
      "This extracts the immediate testing signal for Step 7: what the learner actually consumed, what they skipped, where they struggled, what may be under-exposed, what burden or validity cautions exist, and what the quick check should fairly test next.",
    selectedLearningFormat: "Consumed evidence → fair test focus → Step 7 readiness model",
    keyGuardrail:
      "Step 6 does not conclude that learning happened. It prepares Step 7 to test whether the intended effect appeared.",
    blueprintContent: blueprint({
      technicalName: "Step 7 Quick Check Handoff Package",
      classification: "Output package / cross-step handoff record",
      internalDefinition:
        "The Step 7 Quick Check Handoff Package sends consumption evidence and test-focus context from Step 6 into Step 7 so the system can test the immediate learning effect fairly.",
      whyItExists:
        "Step 7 should not test as if the learner consumed the whole format perfectly. It needs to know what was actually consumed, skipped, repeated, misunderstood, under-exposed, contaminated, or burdensome.",
      whatItReads: [
        "Format Consumption Evidence Ledger",
        "consumed sections",
        "skipped sections",
        "stuck sections",
        "repeated-review sections",
        "tutorial-use status",
        "embedded interaction results",
        "suspected comprehension difficulty",
        "suspected format-operation difficulty",
        "suspected overload",
        "suspected format-quality issue",
        "evidence strength",
        "validity cautions",
        "Current Step 7 Readiness State",
        "Learning Momentum During Format State",
        "Consumption Sufficiency Gate output",
      ],
      whatItOutputs: [
        "recommended quick-check target focus",
        "quick-check difficulty adjustment context",
        "under-exposure cautions",
        "burden and pacing context",
        "validity cautions",
        "fairness constraints for Step 7",
        "evidence links for later Step 8 interpretation",
      ],
      internalProcessHypothesisLens:
        "The handoff asks what Step 7 can fairly test based on actual format exposure. It helps distinguish failure of learning from insufficient exposure, overload, format-operation difficulty, content mismatch, or format-quality contamination.",
      subcomponents: [
        "consumed target content",
        "under-exposed target content",
        "skipped prerequisite content",
        "stuck-point summary",
        "tutorial-use summary",
        "embedded interaction summary",
        "suspected difficulty type",
        "burden state",
        "validity state",
        "quick-check readiness state",
        "recommended test focus",
        "difficulty adjustment context",
      ],
      dynamicStateEffects:
        "Uses Current Step 7 Readiness State as a key output condition. Also carries Current Consumption Cognitive Load State, Current Format Usability State, Current Stuck Point Interpretation State, Current Content-Depth Fit State, Current Format Quality Risk State, and Current Learning Momentum During Format State where relevant.",
      profileEffects:
        "Does not directly update long-term profiles. It enables Step 7 outcome evidence to later confirm, weaken, or revise Adaptive Learning-Format Profile Update Candidates.",
      engineEffects:
        "Feeds Step 7 Quick Check. Informs Adaptive Learning Engine later when Step 7 results are linked back to Step 6 consumption evidence. Supports Learning Momentum Engine in pacing the transition.",
      connectorLogic:
        "Step 6 dynamic variables + Format Consumption Evidence Ledger + Consumption Sufficiency Gate\n→ Step 7 Quick Check Handoff Package\n→ Step 7 Quick Check",
      guardrails: [
        "Step 7 should test immediate learning effect, not raw completion.",
        "Under-exposure must be marked.",
        "Format-quality cautions must travel forward.",
        "Cognitive burden must affect test pacing and fairness.",
        "Readiness must not be assumed from completion alone.",
      ],
      mustNotDoRules: [
        "Must not declare learning success.",
        "Must not declare learning failure.",
        "Must not ignore skipped or under-exposed sections.",
        "Must not test content the learner did not meaningfully encounter without marking the exposure limitation.",
        "Must not make the final station scheduling decision.",
      ],
    }),
  }),
};
