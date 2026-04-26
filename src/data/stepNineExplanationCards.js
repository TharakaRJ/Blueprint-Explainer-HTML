const text = (title, value) => ({ type: "text", title, text: value });
const list = (title, items) => ({ type: "list", title, items });

const quick = ({
  plainTitle,
  technicalLabel,
  cardClassification,
  selectedLearningFormat,
  shortExplanation,
  teachingStructure,
  keyGuardrail,
}) => [
  { type: "callout", title: "Plain-language title", text: plainTitle },
  text("Technical label", technicalLabel),
  text("Card classification", cardClassification),
  text("Selected learning format", selectedLearningFormat),
  text("Short explanation", shortExplanation),
  text("Teaching structure", teachingStructure),
  { type: "warning", title: "Key guardrail", text: keyGuardrail },
];

const blueprint = ({
  technicalName,
  internalDefinition,
  whyItExists,
  whatItReads,
  whatItOutputs,
  internalProcessHypothesisLens,
  subcomponentTitle = "Subcomponents / sub-signals",
  subcomponents,
  dynamicStateEffects,
  profileEffects,
  engineEffects,
  connectorLogic,
  guardrails,
  mustNotDoRules,
}) => [
  text("Technical name", technicalName),
  text("Internal definition", internalDefinition),
  text("Why it exists", whyItExists),
  Array.isArray(whatItReads) ? list("What it reads", whatItReads) : text("What it reads", whatItReads),
  list("What it outputs", whatItOutputs),
  text("Internal-process hypothesis lens", internalProcessHypothesisLens),
  list(subcomponentTitle, subcomponents),
  text("Dynamic-state effects", dynamicStateEffects),
  text("Profile effects", profileEffects),
  text("Engine effects", engineEffects),
  text("Connector logic", connectorLogic),
  list("Guardrails", guardrails),
  list("Must-not-do rules", mustNotDoRules),
];

const card = ({
  id,
  cardName,
  cardClassification,
  selectedLearningFormat,
  plainTitle,
  technicalLabel,
  shortExplanation,
  teachingStructure,
  keyGuardrail,
  blueprintContent,
}) => ({
  id,
  categoryLabel: "STEP 9 — ADAPTIVE STATION SCHEDULING",
  title: cardName,
  quickTitle: plainTitle,
  subtitle: technicalLabel,
  accent: "cyan",
  quickViewLayoutType: "quick explainer card",
  quickViewContent: quick({
    plainTitle,
    technicalLabel,
    cardClassification,
    selectedLearningFormat,
    shortExplanation,
    teachingStructure,
    keyGuardrail,
  }),
  blueprintContent,
});

export const stepNineExplanationCards = {
  "step9-scheduling-evidence-package": card({
    id: "step9-scheduling-evidence-package",
    cardName: "Step 9 Scheduling Evidence Package",
    cardClassification: "Evidence handoff package / loop-closing input bundle",
    selectedLearningFormat: "Evidence bundle → scheduling question map",
    plainTitle: "What does the completed cycle now show?",
    technicalLabel: "Step 9 Scheduling Evidence Package",
    shortExplanation:
      "This packages the learner’s completed cycle as evidence of what their internal learning state now needs next: whether the corrected target looks stable, fragile, partial, failed, contaminated, unresolved, or ready for broader transfer. It turns Step 8 re-entry evidence into scheduling input, but it does not decide the next station by itself.",
    teachingStructure: "Evidence bundle → scheduling question map",
    keyGuardrail:
      "Do not treat this package as a Step 8 score, final mastery label, or automatic station-repeat trigger.",
    blueprintContent: blueprint({
      technicalName: "Step 9 Scheduling Evidence Package",
      internalDefinition:
        "A structured handoff from the completed adaptive cycle into Step 9 scheduling. It carries re-entry transfer evidence, residual risk, confidence state, burden state, unresolved hypotheses, learning-format effect signals, and validity cautions so the scheduling engine can decide what station pathway will create the highest-value next learning event.",
      whyItExists:
        "Step 9 cannot schedule intelligently from Step 8 alone. This package ensures the next station is chosen from the whole cycle’s interpreted evidence rather than from a raw pass/fail impression, a missed checklist item, or a fixed curriculum sequence.",
      whatItReads: [
        "Step 8 re-entry performance evidence",
        "Step 8 transfer success, partial transfer, failed transfer, or unclear transfer state",
        "Step 8 failed-transfer interpretation",
        "Step 8 learning-format effectiveness interpretation",
        "safety-linked residual risk",
        "confidence calibration after re-entry",
        "cognitive load under re-entry",
        "learner momentum and burden state",
        "station variation validity",
        "unresolved hypotheses",
        "evidence-strength and contamination flags",
      ],
      whatItOutputs: [
        "structured scheduling evidence for Cycle Evidence Integration Layer",
        "residual-risk flags",
        "transfer-stability evidence",
        "unresolved-hypothesis evidence",
        "learner-state constraints",
        "validity cautions for scheduling",
        "candidate future scheduling targets",
      ],
      internalProcessHypothesisLens:
        "The package helps ask: Did the learner’s internal process actually change enough to support the next challenge, or did the old pattern remain hidden, fragile, over-supported, under-tested, or contaminated by station or format conditions?",
      subcomponents: [
        "transfer state",
        "residual gap state",
        "safety residual risk",
        "confidence-performance alignment",
        "cognitive burden after re-entry",
        "format-effectiveness implication",
        "station variation validity",
        "unresolved hypothesis carryover",
        "future scheduling target hints",
        "evidence strength and contamination status",
      ],
      dynamicStateEffects:
        "May influence current scheduling readiness, current learner burden, current safety-risk priority, current transfer stability, and current scheduling confidence.",
      profileEffects:
        "May provide cautious update candidates for Learner Profile, Learner Response to Station Profile, Learner Engagement Profile, Adaptive Learning-Format Profile, Learner-Format Response History, Station Exposure History, Skill Retention Map, and Strength Stability Map.",
      engineEffects:
        "Feeds the Adaptive Station Scheduling Engine as the direct Step 9 input. Also gives limited context to Adaptive Learning Engine and Learning Momentum Engine where future support forecast or pacing is affected.",
      connectorLogic:
        "Step 8 transfer evidence → Step 9 Scheduling Evidence Package → Cycle Evidence Integration Layer → Scheduling Evidence Validity Gate → Cycle Outcome Classification.",
      guardrails: [
        "Do not schedule directly from this package without integration.",
        "Do not treat weak Step 8 transfer as automatic learner weakness.",
        "Do not treat strong Step 8 transfer as permanent mastery.",
        "Do not ignore validity flags.",
        "Do not collapse learning-format issues into learner deficits.",
      ],
      mustNotDoRules: [
        "Must not reopen Step 8.",
        "Must not deliver feedback.",
        "Must not choose the next station alone.",
        "Must not act as a checklist score package.",
        "Must not convert one cycle into a stable learner trait.",
      ],
    }),
  }),

  "step9-cycle-evidence-integration-layer": card({
    id: "step9-cycle-evidence-integration-layer",
    cardName: "Cycle Evidence Integration Layer",
    cardClassification: "Cross-step evidence integration layer / adaptive interpretation process",
    selectedLearningFormat: "Full-loop evidence braid",
    plainTitle: "How does the system combine the whole loop?",
    technicalLabel: "Cycle Evidence Integration Layer",
    shortExplanation:
      "This reads the full adaptive cycle as one connected learner-state story: what the learner expected, what they did, how they explained it, what was corrected, how they used support, what became immediately accessible, and what transferred back into performance. It integrates evidence to infer the next internal adaptive need.",
    teachingStructure: "Step 1 → Step 8 evidence braid → next-loop scheduling question",
    keyGuardrail:
      "Do not use this as a simple summary of completed steps or an average of scores. It must integrate evidence through internal-process meaning.",
    blueprintContent: blueprint({
      technicalName: "Cycle Evidence Integration Layer",
      internalDefinition:
        "The Step 9 process that integrates Step 1 to Step 8 evidence into one scheduling-relevant interpretation of the learner’s current internal state, recent learning response, transfer stability, support history, burden, safety risk, and unresolved hypotheses.",
      whyItExists:
        "The next station should be selected from the whole adaptive story, not from the most recent performance event alone. This layer prevents Step 9 from over-weighting Step 8, missed actions, topic labels, or short-term success.",
      whatItReads: [
        "Step 1 initial task framing and retrieval baseline",
        "Step 2 cold station performance evidence",
        "Step 3 self-evaluation and rationale evidence",
        "Step 4 corrected internal-process target",
        "Step 5 format selection and learner choice evidence",
        "Step 6 learning-format consumption evidence",
        "Step 7 quick-check result and target accessibility",
        "Step 8 re-entry transfer evidence",
        "learner profiles and recent learning history",
        "validity, contamination, and uncertainty flags",
      ],
      whatItOutputs: [
        "integrated cycle evidence record",
        "scheduling-relevant internal-process interpretation",
        "transfer stability interpretation",
        "residual-risk interpretation",
        "confidence calibration context",
        "burden and momentum context",
        "unresolved hypothesis carryover",
        "evidence-quality cautions",
      ],
      internalProcessHypothesisLens:
        "This layer asks whether the learner’s internal model, retrieval-to-action pathway, safety schema, cue response, confidence calibration, cognitive load handling, and transfer ability have actually changed across the loop.",
      subcomponents: [
        "baseline vs performance comparison",
        "correction target vs learning response comparison",
        "immediate accessibility vs transfer comparison",
        "self-recognition vs actual evidence comparison",
        "support exposure vs outcome comparison",
        "learner-state and burden comparison",
        "validity and contamination reconciliation",
      ],
      dynamicStateEffects:
        "May affect current transfer stability, current residual gap priority, current safety-risk scheduling priority, current challenge tolerance, current learning momentum, and current scheduling confidence.",
      profileEffects:
        "Provides weighted update candidates only after evidence has been checked against profile history and validity constraints.",
      engineEffects:
        "Feeds Scheduling Evidence Validity Gate, Cycle Outcome Classification, Next-Loop Strategy Resolver, Adaptive Station Scheduling Engine, Learning Momentum Engine, and limited future support forecasting in Adaptive Learning Engine.",
      connectorLogic:
        "Step 1–Step 8 evidence + profile/history inputs → Cycle Evidence Integration Layer → Scheduling Evidence Validity Gate → Cycle Outcome Classification.",
      guardrails: [
        "Do not integrate by checklist completion.",
        "Do not treat one late event as the whole learner state.",
        "Do not erase alternative explanations.",
        "Do not ignore under-exposure, format-quality issues, or simulation validity concerns.",
        "Do not create stable profile traits from one cycle.",
      ],
      mustNotDoRules: [
        "Must not reopen Step 3, Step 4, Step 5, Step 6, Step 7, or Step 8.",
        "Must not become a learner-facing analytics dump.",
        "Must not reduce scheduling to topic coverage.",
        "Must not treat external station metadata as the final adaptive explanation.",
      ],
    }),
  }),

  "step9-learner-state-history-load": card({
    id: "step9-learner-state-history-load",
    cardName: "Learner State & History Load",
    cardClassification: "Learner profile and longitudinal context load / profile-history source",
    selectedLearningFormat: "Current-state + longitudinal-history matrix",
    plainTitle: "What does this learner usually need next?",
    technicalLabel: "Learner State & History Load",
    shortExplanation:
      "This loads the learner’s current state and prior patterns so the next station is not chosen from the latest station alone. It checks whether today’s evidence matches or challenges the learner’s history: station-response patterns, learning-format response, burden tolerance, confidence calibration, retention risk, strength decay, and unresolved hypotheses.",
    teachingStructure: "Current state + prior history → adaptive constraint matrix",
    keyGuardrail:
      "Do not turn profile history into fixed learner traits. History informs scheduling, but each decision remains evidence-weighted and validity-checked.",
    blueprintContent: blueprint({
      technicalName: "Learner State & History Load",
      internalDefinition:
        "The Step 9 loading process that brings learner-specific profiles, recent learning history, station exposure history, spacing queues, strength maintenance queues, unresolved hypotheses, safety residual risk, and learner-format response history into the scheduling decision.",
      whyItExists:
        "Adaptive scheduling requires longitudinal context. The same Step 8 result can mean different things depending on prior station response, burden tolerance, format effectiveness history, confidence patterns, retention risk, and whether similar issues have recurred before.",
      whatItReads: [
        "Learner Profile",
        "Learner Response to Station Profile",
        "Learner Engagement Profile",
        "Adaptive Learning-Format Profile",
        "Learner-Format Response History",
        "Recent Learning History Record",
        "Station Exposure Ledger",
        "Spaced Revisit Queue",
        "Strength Maintenance Queue",
        "Unresolved Hypothesis Register",
        "Safety Residual Risk Register",
        "prior quick-check and re-entry outcomes where available",
      ],
      whatItOutputs: [
        "learner-specific scheduling context",
        "burden and challenge-tolerance context",
        "station-response pattern context",
        "learning-format effect context",
        "spacing and retention priorities",
        "strength-maintenance priorities",
        "unresolved-hypothesis priorities",
        "safety-risk priority modifiers",
      ],
      internalProcessHypothesisLens:
        "This load helps ask whether the current result is a new event, a recurring internal-process pattern, a profile-challenging exception, a retention issue, a burden issue, a safety issue, or a station-family-specific response.",
      subcomponents: [
        "current fatigue and burden",
        "confidence calibration pattern",
        "station family response pattern",
        "cue-action reliability history",
        "retrieval-to-action reliability history",
        "safety-schema activation history",
        "preferred vs effective format history",
        "spacing due status",
        "strength decay risk",
        "unresolved hypothesis priority",
        "prior exposure and repetition risk",
      ],
      dynamicStateEffects:
        "May adjust current challenge tolerance, current learning momentum, current scheduling confidence, current retention priority, and current safety-risk scheduling priority.",
      profileEffects:
        "Reads profiles before updating them. Any update after scheduling must remain weighted, provisional, and separated from raw history.",
      engineEffects:
        "Feeds Adaptive Station Scheduling Engine, Challenge and Momentum Fit Analysis, Retention Risk and Spacing Window Analysis, Strength Maintenance Analysis, Safety-Risk Scheduling Priority Analysis, and Learning Momentum Engine.",
      connectorLogic:
        "Learner profiles + recent learning history + queues/registers → Learner State & History Load → Challenge and Momentum Fit Analysis / Next-Loop Strategy Resolver / Candidate Ranking.",
      guardrails: [
        "Do not infer permanent learner traits from one cycle.",
        "Do not treat engagement evidence as competence evidence.",
        "Do not treat learner preference as learning effectiveness.",
        "Do not overrule safety residual risk with momentum alone.",
        "Do not use profile data without checking validity and relevance.",
      ],
      mustNotDoRules: [
        "Must not become a generic learner profile card.",
        "Must not expose raw profile analytics to the learner.",
        "Must not label the learner as weak, avoidant, careless, or overconfident based on one pattern.",
        "Must not let history automatically dominate current evidence when current evidence is cleaner or stronger.",
      ],
    }),
  }),

  "step9-station-bank-metadata-registry": card({
    id: "step9-station-bank-metadata-registry",
    cardName: "Station Bank Metadata Registry",
    cardClassification: "Station metadata system / scheduling source registry",
    selectedLearningFormat: "Station descriptors → adaptive candidate matching matrix",
    plainTitle: "What stations are actually suitable options?",
    technicalLabel: "Station Bank Metadata Registry",
    shortExplanation:
      "This classifies the station bank so the system can match the learner’s internal adaptive need to the right type of next station. It checks station difficulty, transfer distance, cognitive load, time pressure, novelty, skill domain, safety relevance, variation options, and short-term recall risk before a station can become a serious candidate.",
    teachingStructure: "Station descriptor matrix → candidate eligibility map",
    keyGuardrail:
      "Do not schedule from topic labels alone. Station metadata is scaffolding for adaptive matching, not the final reason a station is chosen.",
    blueprintContent: blueprint({
      technicalName: "Station Bank Metadata Registry",
      internalDefinition:
        "The required station-level metadata source that describes each available station in scheduling-relevant terms so the Adaptive Station Scheduling Engine can generate, compare, and rank station candidates intelligently.",
      whyItExists:
        "Step 9 cannot reliably schedule for near transfer, far transfer, retention, safety retesting, pressure adjustment, novelty, cognitive burden, or short-term recall risk unless the station bank is properly classified.",
      whatItReads: [
        "station ID",
        "station family",
        "clinical domain",
        "station type",
        "target skill domains",
        "internal-process tags",
        "difficulty level",
        "expected cognitive load",
        "time pressure level",
        "novelty level",
        "transfer distance",
        "safety relevance",
        "cue structure",
        "communication load",
        "prerequisite knowledge",
        "station length",
        "short-term recall risk",
        "variation options",
        "availability",
      ],
      whatItOutputs: [
        "eligible candidate station pool",
        "transfer-distance matches",
        "difficulty and burden matches",
        "safety-relevant candidates",
        "spaced revisit candidates",
        "strength-maintenance candidates",
        "unresolved-hypothesis testing candidates",
        "redundancy and recall-risk flags",
        "station metadata for candidate ranking",
      ],
      internalProcessHypothesisLens:
        "The registry helps ask which station characteristics will best test the learner’s current internal-process question: consolidation, transfer, retrieval-to-action, cue response, safety schema, confidence calibration, pressure handling, retention, or unresolved hypothesis testing.",
      subcomponents: [
        "station family",
        "station type",
        "clinical domain",
        "skill domain tags",
        "internal-process tags",
        "transfer distance",
        "challenge level",
        "cognitive load",
        "time pressure",
        "cue clarity",
        "novelty",
        "safety relevance",
        "recall-risk similarity",
        "variation options",
      ],
      dynamicStateEffects:
        "Does not directly update learner state. It shapes candidate eligibility and candidate ranking based on current learner state.",
      profileEffects:
        "May update Station Exposure History after a station is selected and launched. It should not update learner competence profiles by itself.",
      engineEffects:
        "Feeds Station Candidate Generation, Candidate Ranking & Trade-Off Analysis, Redundancy and Short-Term Recall Risk Gate, Challenge Calibration Gate, and Adaptive Station Scheduling Engine.",
      connectorLogic:
        "Station Bank Metadata Registry → Station Candidate Generation → Candidate Ranking & Trade-Off Analysis → Scheduling Confidence & Uncertainty Check.",
      guardrails: [
        "Scheduling should not proceed confidently if station metadata is incomplete.",
        "Metadata can describe station characteristics, but it cannot decide whether the learner should attempt the station now.",
        "Do not let station availability masquerade as adaptive fit.",
        "Do not use curriculum order as the scheduling decision.",
      ],
      mustNotDoRules: [
        "Must not become a station-topic list.",
        "Must not replace internal learner-state interpretation.",
        "Must not schedule randomly from the station bank.",
        "Must not treat “similar topic” as equivalent to near transfer.",
        "Must not ignore short-term recall risk.",
      ],
    }),
  }),

  "step9-scheduling-evidence-validity-gate": card({
    id: "step9-scheduling-evidence-validity-gate",
    cardName: "Scheduling Evidence Validity Gate",
    cardClassification: "Evidence validity gate / contamination and confidence filter",
    selectedLearningFormat: "Evidence strength → contamination → weighting gate",
    plainTitle: "Can this evidence be trusted for scheduling?",
    technicalLabel: "Scheduling Evidence Validity Gate",
    shortExplanation:
      "This checks whether the completed cycle evidence is clean enough to guide the next station. It looks for simulation friction, unfair station variation, incomplete format exposure, weak cue exposure, fatigue, overloaded performance, uncertain interpretation, or format-quality contamination before the system trusts the scheduling signal.",
    teachingStructure: "Evidence strength → contamination check → scheduling weight",
    keyGuardrail:
      "Do not discard weak evidence automatically. Downgrade, qualify, or preserve uncertainty unless the evidence is clearly invalid.",
    blueprintContent: blueprint({
      technicalName: "Scheduling Evidence Validity Gate",
      internalDefinition:
        "The Step 9 gate that checks whether evidence from the completed cycle is strong, partial, contaminated, ambiguous, or invalid before it is used to classify the cycle outcome or rank the next station.",
      whyItExists:
        "Adaptive scheduling can be wrong if it treats contaminated or under-exposed evidence as clean learner evidence. This gate protects the learner model and station decision from simulator issues, format problems, weak exposure, unfair variation, fatigue, and overconfident interpretation.",
      whatItReads: [
        "Step 9 Scheduling Evidence Package",
        "Cycle Evidence Integration Record",
        "Step 6 exposure and stuck-point evidence",
        "Step 7 quick-check validity cautions",
        "Step 8 station variation validity",
        "Step 8 cue exposure and action-window fairness",
        "simulation or interface friction flags",
        "learner fatigue and overload signals",
        "confidence of internal-process interpretation",
        "format-quality cautions",
        "profile consistency or contradiction",
      ],
      whatItOutputs: [
        "evidence strength rating",
        "contamination flags",
        "validity-limited scheduling cautions",
        "downgraded evidence weights",
        "clean-evidence confirmation",
        "unresolved evidence warnings",
        "candidate retest or clean-retest needs",
        "scheduling confidence modifiers",
      ],
      internalProcessHypothesisLens:
        "This gate asks whether the observed pattern truly reflects the learner’s internal state or whether it may reflect station design, interface friction, learning-format under-exposure, format-quality weakness, fatigue, or unfair challenge calibration.",
      subcomponents: [
        "simulation validity",
        "interface validity",
        "station fairness",
        "format exposure adequacy",
        "quick-check validity",
        "re-entry variation validity",
        "cue exposure clarity",
        "action-window fairness",
        "fatigue and overload contamination",
        "interpretation confidence",
        "profile consistency check",
      ],
      dynamicStateEffects:
        "May update current scheduling confidence, current simulation validity interpretation, current learner burden context, and current retesting need.",
      profileEffects:
        "Prevents over-updating profiles when evidence is contaminated, under-exposed, or ambiguous.",
      engineEffects:
        "Feeds Cycle Outcome Classification, Candidate Ranking & Trade-Off Analysis, Scheduling Confidence & Uncertainty Check, and Scheduling Decision Trace.",
      connectorLogic:
        "Cycle Evidence Integration Layer → Scheduling Evidence Validity Gate → Cycle Outcome Classification / Scheduling Confidence & Uncertainty Check.",
      guardrails: [
        "Do not hide uncertainty.",
        "Do not treat contaminated evidence as learner failure.",
        "Do not treat format-quality problems as learner weakness.",
        "Do not ignore fatigue or overload when interpreting weak transfer.",
        "Do not use low-validity evidence for strong profile updates.",
      ],
      mustNotDoRules: [
        "Must not become a punitive filter.",
        "Must not erase useful but partial evidence.",
        "Must not force automatic repetition.",
        "Must not convert validity caution into learner blame.",
        "Must not expose raw validity mechanics as a learner-facing analytics dump.",
      ],
    }),
  }),

  "step9-cycle-outcome-classification": card({
    id: "step9-cycle-outcome-classification",
    cardName: "Cycle Outcome Classification",
    cardClassification: "Integrated cycle outcome classifier / internal learning-state classification",
    selectedLearningFormat: "Cycle evidence → outcome state → scheduling implication",
    plainTitle: "What kind of learning result did this cycle produce?",
    technicalLabel: "Cycle Outcome Classification",
    shortExplanation:
      "This classifies the latest adaptive cycle by what it suggests about the learner’s internal change: stable gain, fragile gain, partial transfer, failed transfer, contaminated evidence, unresolved hypothesis, over-supported success, under-tested target, or retention concern. The classification guides strategy, not judgement.",
    teachingStructure: "Cycle evidence → internal outcome state → scheduling implication",
    keyGuardrail:
      "Do not present these states as pass/fail labels, scores, or final competence judgements.",
    blueprintContent: blueprint({
      technicalName: "Cycle Outcome Classification",
      internalDefinition:
        "The Step 9 classification process that interprets the integrated and validity-checked cycle evidence into scheduling-relevant outcome states.",
      whyItExists:
        "Different cycle outcomes require different next stations. A strong result may justify broader transfer. A fragile result may require near-transfer consolidation. A contaminated result may need a cleaner retest. A safety-linked residual risk may override normal progression.",
      whatItReads: [
        "integrated Step 1–Step 8 evidence",
        "Scheduling Evidence Validity Gate output",
        "transfer stability interpretation",
        "Step 7 immediate accessibility",
        "Step 8 re-entry application",
        "residual gap state",
        "confidence calibration state",
        "safety residual risk",
        "learner burden and momentum state",
        "retention and spacing context",
        "unresolved hypotheses",
        "profile-history comparison",
      ],
      whatItOutputs: [
        "cycle outcome classification",
        "scheduling implication flags",
        "strategy-resolution inputs",
        "residual risk priority",
        "transfer readiness status",
        "retention or maintenance priority",
        "unresolved hypothesis priority",
        "confidence calibration scheduling need",
      ],
      internalProcessHypothesisLens:
        "This classification asks whether the learner’s corrected internal process appears usable, fragile, context-bound, not transferred, over-supported, under-tested, validity-limited, or still hidden behind unresolved evidence.",
      subcomponentTitle: "Subcomponents / possible states",
      subcomponents: [
        "stable gain",
        "fragile gain",
        "partial transfer",
        "failed transfer",
        "contaminated evidence",
        "unresolved hypothesis",
        "over-supported success",
        "under-tested target",
        "safety-linked residual risk",
        "retention risk",
        "strength maintenance need",
        "confidence mismatch persists",
        "low-burden consolidation needed",
      ],
      dynamicStateEffects:
        "May affect transfer readiness, scheduling urgency, safety priority, challenge tolerance, retention priority, confidence calibration priority, and scheduling confidence.",
      profileEffects:
        "Generates cautious update candidates only when validity and pattern evidence justify them.",
      engineEffects:
        "Feeds Next-Loop Strategy Resolver, Candidate Ranking & Trade-Off Analysis, Learning Momentum Engine, Adaptive Learning Engine forecast, and Scheduling Decision Trace.",
      connectorLogic:
        "Scheduling Evidence Validity Gate → Cycle Outcome Classification → Next-Loop Strategy Resolver.",
      guardrails: [
        "Classification is not a grade.",
        "Classification is not a permanent trait.",
        "Classification must preserve alternative explanations.",
        "Classification must respect validity limits.",
        "Classification must distinguish transfer failure from format failure, under-exposure, overload, and station unfairness.",
      ],
      mustNotDoRules: [
        "Must not label the learner globally.",
        "Must not automatically chase weakness.",
        "Must not ignore strengths or retention.",
        "Must not treat immediate Quick Check success as durable transfer.",
        "Must not treat Step 8 success as permanent mastery.",
      ],
    }),
  }),

  "step9-next-loop-strategy-resolver": card({
    id: "step9-next-loop-strategy-resolver",
    cardName: "Next-Loop Strategy Resolver",
    cardClassification: "Scheduling strategy resolver / decision-family selector",
    selectedLearningFormat: "Evidence → strategy family → station candidate direction",
    plainTitle: "What is the next loop trying to achieve?",
    technicalLabel: "Next-Loop Strategy Resolver",
    shortExplanation:
      "This chooses the main scheduling strategy before choosing the station. It decides whether the learner now needs immediate reapplication, near-transfer consolidation, far-transfer challenge, spaced revisit, weakness reinforcement, strength maintenance, safety-focused scheduling, unresolved hypothesis testing, pressure adjustment, confidence calibration, or new capability expansion.",
    teachingStructure: "Integrated evidence → primary strategy family → station search direction",
    keyGuardrail:
      "Do not jump directly from a missed action or weak Step 8 result to a station choice. The internal scheduling strategy must be resolved first.",
    blueprintContent: blueprint({
      technicalName: "Next-Loop Strategy Resolver",
      internalDefinition:
        "The Step 9 resolver that selects the primary scheduling decision family based on integrated cycle evidence, learner state, transfer stability, retention timing, safety risk, unresolved hypotheses, profile history, and learning momentum.",
      whyItExists:
        "The system must decide what the next station is for before selecting the station itself. A station may be chosen to consolidate, transfer, retest safety, protect retention, maintain a strength, expose overconfidence, reduce burden, or test an unresolved hypothesis.",
      whatItReads: [
        "Cycle Outcome Classification",
        "Scheduling Evidence Validity Gate output",
        "learner-state and history context",
        "retention and spacing window analysis",
        "weakness priority analysis",
        "strength maintenance analysis",
        "safety-risk scheduling priority",
        "confidence calibration scheduling analysis",
        "challenge and cognitive load fit analysis",
        "novelty and transfer distance fit analysis",
        "station-bank metadata availability",
      ],
      whatItOutputs: [
        "selected primary scheduling decision family",
        "secondary scheduling considerations",
        "station candidate generation constraints",
        "challenge and transfer-distance direction",
        "safety priority modifiers",
        "confidence calibration modifiers",
        "burden and pacing constraints",
        "expected next-loop monitoring priorities",
      ],
      internalProcessHypothesisLens:
        "The resolver asks what station pathway will best test or support the learner’s current internal adaptive need: stabilising a fragile correction, expanding transfer, revisiting retention, monitoring safety schema, challenging confidence, lowering burden, or collecting evidence for an unresolved hypothesis.",
      subcomponentTitle: "Subcomponents / strategy families",
      subcomponents: [
        "Immediate Reapplication",
        "Near-Transfer Consolidation",
        "Far-Transfer Challenge",
        "Spaced Revisit",
        "Weakness Reinforcement",
        "Strength Maintenance",
        "New Capability Expansion",
        "Safety-Focused Scheduling",
        "Unresolved Hypothesis Testing",
        "Pressure-Adjusted Scheduling",
        "Confidence Calibration Exposure",
      ],
      dynamicStateEffects:
        "May adjust current challenge direction, current transfer distance, current burden tolerance, current safety priority, current confidence calibration priority, and current next-loop readiness.",
      profileEffects:
        "Uses profile context to select a strategy but does not create stable profile conclusions by itself.",
      engineEffects:
        "Central decision step inside Adaptive Station Scheduling Engine. Feeds Station Candidate Generation and Scheduling Decision Trace.",
      connectorLogic:
        "Cycle Outcome Classification + Learner State & History Load + Station Bank Metadata Registry → Next-Loop Strategy Resolver → Station Candidate Generation.",
      guardrails: [
        "Strategy selection must remain evidence-based.",
        "Weakness reinforcement is one option, not the default.",
        "Strength maintenance and retention protection are legitimate strategies.",
        "Safety residual risk can override ordinary progression.",
        "Learner burden can adjust timing and challenge but must not hide safety needs.",
      ],
      mustNotDoRules: [
        "Must not follow a fixed station queue.",
        "Must not schedule randomly.",
        "Must not treat topic coverage as the primary logic.",
        "Must not preselect the future learning format.",
        "Must not expose raw strategy mechanics as a learner-facing analytics dump.",
      ],
    }),
  }),

  "step9-scheduling-decision-families": card({
    id: "step9-scheduling-decision-families",
    cardName: "Scheduling Decision Families",
    cardClassification: "Scheduling option family registry / boundary contrast set",
    selectedLearningFormat: "Applies / does-not-apply decision family contrast",
    plainTitle: "What kinds of next-station decisions are possible?",
    technicalLabel: "Scheduling Decision Families",
    shortExplanation:
      "This defines the different reasons the system might choose a next station. The next station may consolidate a fragile gain, test transfer, revisit an older skill, reinforce a persistent weakness, maintain a strength, protect safety, recalibrate confidence, reduce pressure, increase challenge, or test an unresolved hypothesis.",
    teachingStructure: "Decision family option ring with applies / does-not-apply boundaries",
    keyGuardrail:
      "Do not display these families as a fixed sequence or curriculum ladder. They are evidence-selected options.",
    blueprintContent: blueprint({
      technicalName: "Scheduling Decision Families",
      internalDefinition:
        "The set of scheduling strategy categories Step 9 can select from when deciding the next station pathway.",
      whyItExists:
        "Adaptive scheduling needs more than “next topic” or “weakest area.” These families allow the system to choose a station based on the learner’s current internal need, learning trajectory, safety risk, retention timing, and transfer readiness.",
      whatItReads:
        "This card does not read evidence directly as an active analytic. It defines the available decision families used by the Next-Loop Strategy Resolver.",
      whatItOutputs: [
        "named scheduling strategy options",
        "decision-family boundaries",
        "candidate generation direction",
        "learner-facing pathway type where appropriate",
        "strategy labels for Scheduling Decision Trace and Next Loop Launch Package",
      ],
      internalProcessHypothesisLens:
        "Each family represents a different hypothesis about what the learner’s internal state now needs: stabilisation, transfer, retesting, retention, expansion, safety protection, confidence recalibration, or evidence clarification.",
      subcomponentTitle: "Decision families",
      subcomponents: [
        "1. Immediate Reapplication\nUsed when the target needs rapid same-session consolidation with minimal variation.",
        "2. Near-Transfer Consolidation\nUsed when a corrected process improved but needs stability under a modestly different presentation.",
        "3. Far-Transfer Challenge\nUsed when the learner appears ready to test the same internal process across a more different station context.",
        "4. Spaced Revisit\nUsed when an older skill or target is due for retention protection.",
        "5. Weakness Reinforcement\nUsed when a persistent or high-priority weakness needs direct reinforcement.",
        "6. Strength Maintenance\nUsed when a stable strength may decay, narrow, or remain context-bound without maintenance exposure.",
        "7. New Capability Expansion\nUsed when current evidence supports moving into a new skill, domain, or station family.",
        "8. Safety-Focused Scheduling\nUsed when residual safety risk should override ordinary progression.",
        "9. Unresolved Hypothesis Testing\nUsed when the system needs more evidence before treating an interpretation as true.",
        "10. Pressure-Adjusted Scheduling\nUsed when the learner’s current burden, fatigue, or overload risk requires calibrated pressure.",
        "11. Confidence Calibration Exposure\nUsed when overconfidence, underconfidence, or unstable confidence needs a station pathway that makes performance evidence clearer.",
      ],
      dynamicStateEffects:
        "Decision family selection may adjust transfer distance, challenge level, station similarity, time pressure, cue clarity, safety priority, confidence exposure, or spacing timing.",
      profileEffects:
        "The selected family becomes part of station exposure and scheduling history. It should not become a learner label.",
      engineEffects:
        "Used by Adaptive Station Scheduling Engine, Station Candidate Generation, Candidate Ranking & Trade-Off Analysis, Scheduling Decision Trace, and Next Loop Launch Package.",
      connectorLogic:
        "Cycle Outcome Classification → Next-Loop Strategy Resolver → selected Scheduling Decision Family → Station Candidate Generation.",
      guardrails: [
        "Families are options, not a linear path.",
        "Weakness reinforcement must not dominate by default.",
        "Strength maintenance and spaced revisit must remain visible as valid adaptive choices.",
        "Safety-focused scheduling can override ordinary progression when justified.",
        "Confidence calibration exposure must be handled without blame.",
      ],
      mustNotDoRules: [
        "Must not become a curriculum map.",
        "Must not present weak performance as punishment scheduling.",
        "Must not imply automatic difficulty escalation after success.",
        "Must not treat station similarity as always good.",
        "Must not treat novelty as always progress.",
      ],
    }),
  }),

  "step9-station-candidate-generation": card({
    id: "step9-station-candidate-generation",
    cardName: "Station Candidate Generation",
    cardClassification: "Station candidate generator / metadata-to-strategy matching process",
    selectedLearningFormat: "Strategy + metadata → candidate pool",
    plainTitle: "Which stations could serve this strategy?",
    technicalLabel: "Station Candidate Generation",
    shortExplanation:
      "This creates a pool of possible next stations that match the selected scheduling strategy and the learner’s current internal-state need. It uses station metadata to find candidates with the right transfer distance, difficulty, safety relevance, cue structure, cognitive load, time pressure, novelty, and recall-risk profile.",
    teachingStructure: "Selected strategy + station metadata → candidate pool",
    keyGuardrail:
      "Do not generate candidates from topic labels alone. Candidate generation must reflect the internal-process target and scheduling strategy.",
    blueprintContent: blueprint({
      technicalName: "Station Candidate Generation",
      internalDefinition:
        "The Step 9 process that creates eligible station candidates by matching the selected scheduling decision family with station-bank metadata, learner-state constraints, exposure history, retention timing, safety priority, and unresolved hypothesis needs.",
      whyItExists:
        "The system needs a candidate pool before it can rank stations. This stage prevents the selected strategy from being applied to unsuitable stations or random available stations.",
      whatItReads: [
        "selected scheduling decision family",
        "Next-Loop Strategy Resolver output",
        "Station Bank Metadata Registry",
        "learner-state and history context",
        "station exposure ledger",
        "spaced revisit queue",
        "strength maintenance queue",
        "unresolved hypothesis register",
        "safety residual risk register",
        "current burden and challenge tolerance",
        "transfer-distance requirement",
        "short-term recall risk",
      ],
      whatItOutputs: [
        "eligible station candidate set",
        "excluded station list with reasons",
        "transfer-distance candidate groups",
        "safety-relevant candidate group",
        "spaced revisit candidates",
        "strength maintenance candidates",
        "hypothesis-testing candidates",
        "challenge-calibrated candidate pool",
        "candidate metadata for ranking",
      ],
      internalProcessHypothesisLens:
        "Candidate generation asks which stations can fairly test or support the learner’s current internal process: reactivating a safety frame, converting retrieval into action, responding to cues, maintaining a strength, testing transfer, recalibrating confidence, or clarifying an unresolved interpretation.",
      subcomponents: [
        "strategy match",
        "internal-process target match",
        "transfer distance match",
        "difficulty match",
        "cognitive load fit",
        "time pressure fit",
        "cue structure match",
        "safety relevance",
        "novelty match",
        "recall-risk exclusion",
        "exposure-history check",
        "availability check",
      ],
      dynamicStateEffects:
        "Does not directly update learner state. It prepares candidate options that respect current learner-state constraints.",
      profileEffects:
        "Uses learner history and station exposure history to avoid poor repetition, unfair challenge, or neglected retention.",
      engineEffects:
        "Feeds Candidate Ranking & Trade-Off Analysis, Redundancy and Short-Term Recall Risk Gate, Challenge Calibration Gate, and Scheduling Confidence & Uncertainty Check.",
      connectorLogic:
        "Next-Loop Strategy Resolver + Station Bank Metadata Registry + Learner State & History Load → Station Candidate Generation → Candidate Ranking & Trade-Off Analysis.",
      guardrails: [
        "Do not schedule from candidate generation alone.",
        "Do not include stations with inadequate metadata unless clearly marked low-confidence.",
        "Do not include stations too similar to the prior station unless immediate reapplication is deliberately selected.",
        "Do not ignore safety-linked candidate needs.",
        "Do not let availability override adaptive fit.",
      ],
      mustNotDoRules: [
        "Must not be random.",
        "Must not be topic-only.",
        "Must not create a fixed queue.",
        "Must not pre-teach the learner through candidate labels.",
        "Must not expose hidden station answers in learner-facing wording.",
      ],
    }),
  }),

  "step9-candidate-ranking-tradeoff-analysis": card({
    id: "step9-candidate-ranking-tradeoff-analysis",
    cardName: "Candidate Ranking & Trade-Off Analysis",
    cardClassification: "Candidate ranking process / multi-factor adaptive trade-off analysis",
    selectedLearningFormat: "Candidate trade-off matrix",
    plainTitle: "Which candidate gives the best next evidence?",
    technicalLabel: "Candidate Ranking & Trade-Off Analysis",
    shortExplanation:
      "This ranks candidate stations by adaptive value, not by convenience or topic order. It weighs how well each candidate fits the learner’s current internal need, transfer distance, safety priority, retention timing, difficulty, cognitive load, novelty, confidence calibration need, momentum, and short-term recall risk.",
    teachingStructure: "Candidate trade-off matrix: adaptive value vs burden vs validity risk",
    keyGuardrail:
      "Do not rank by one factor alone. The best next station is the one that creates the highest-value next learning event without creating unfair burden or misleading evidence.",
    blueprintContent: blueprint({
      technicalName: "Candidate Ranking & Trade-Off Analysis",
      internalDefinition:
        "The Step 9 ranking process that compares eligible station candidates using learner-state, station metadata, transfer, retention, safety, confidence, burden, momentum, novelty, timing, and evidence-validity criteria.",
      whyItExists:
        "Multiple stations may match the selected strategy. Ranking prevents the system from choosing the easiest, newest, most available, most similar, or most topic-relevant station when another candidate would produce better adaptive evidence and learning value.",
      whatItReads: [
        "candidate station set",
        "selected scheduling decision family",
        "learner-state and history context",
        "station-bank metadata",
        "Scheduling Evidence Validity Gate output",
        "Cycle Outcome Classification",
        "transfer distance needs",
        "retention and spacing priorities",
        "safety residual risk",
        "confidence calibration need",
        "current burden and fatigue",
        "challenge tolerance",
        "station exposure history",
        "short-term recall risk",
        "station availability",
      ],
      whatItOutputs: [
        "ranked station candidates",
        "ranking rationale",
        "trade-off notes",
        "rejected candidate reasons",
        "selected candidate recommendation",
        "remaining uncertainty flags",
        "challenge calibration inputs",
        "scheduling decision trace content",
      ],
      internalProcessHypothesisLens:
        "This analysis asks which station will best reveal or strengthen the learner’s current internal adaptive process without misleading the system through excessive similarity, unfair novelty, overload, under-challenge, or contaminated evidence.",
      subcomponentTitle: "Subcomponents / ranking axes",
      subcomponents: [
        "internal-process target match",
        "transfer distance fit",
        "difficulty fit",
        "cognitive load fit",
        "time pressure fit",
        "safety relevance",
        "cue structure fit",
        "confidence calibration value",
        "retention timing value",
        "strength maintenance value",
        "unresolved hypothesis value",
        "novelty tolerance",
        "learner momentum fit",
        "short-term recall risk",
        "evidence validity risk",
        "station availability",
      ],
      dynamicStateEffects:
        "May affect current scheduling confidence, current challenge calibration, current learner burden forecast, and next-loop monitoring priorities.",
      profileEffects:
        "Uses profile evidence cautiously. The ranking trace may later be archived in scheduling history but should not become competence evidence by itself.",
      engineEffects:
        "Feeds Scheduling Confidence & Uncertainty Check, Scheduling Decision Trace, Learner-Centered Communication Layer, and Next Loop Launch Package.",
      connectorLogic:
        "Station Candidate Generation → Candidate Ranking & Trade-Off Analysis → Scheduling Confidence & Uncertainty Check → Scheduling Decision Trace.",
      guardrails: [
        "Do not rank by weakness alone.",
        "Do not rank by topic coverage alone.",
        "Do not automatically escalate difficulty after success.",
        "Do not automatically lower difficulty after failure.",
        "Do not ignore momentum, fatigue, or validity risk.",
        "Do not confuse station availability with station suitability.",
      ],
      mustNotDoRules: [
        "Must not create a black-box decision without trace.",
        "Must not hide rejected alternatives from the system trace.",
        "Must not expose raw ranking weights to the learner.",
        "Must not choose a station that gives clinical hints through its learner-facing label.",
        "Must not treat ranking confidence as learner-facing certainty.",
      ],
    }),
  }),

  "step9-scheduling-confidence-uncertainty-check": card({
    id: "step9-scheduling-confidence-uncertainty-check",
    cardName: "Scheduling Confidence & Uncertainty Check",
    cardClassification: "Scheduling confidence gate / uncertainty and provisionality check",
    selectedLearningFormat: "Confidence state + uncertainty caveat model",
    plainTitle: "How sure is the system about this schedule?",
    technicalLabel: "Scheduling Confidence & Uncertainty Check",
    shortExplanation:
      "This checks how confident the system should be in the next-station decision. It looks at evidence strength, contamination, profile support, station metadata completeness, candidate quality, rejected alternatives, unresolved hypotheses, and learner-state uncertainty before the station pathway is finalized.",
    teachingStructure: "Evidence quality + candidate fit + unresolved uncertainty → scheduling confidence state",
    keyGuardrail:
      "Do not pretend the scheduling decision is certain when evidence is weak, conflicting, contaminated, or metadata-limited.",
    blueprintContent: blueprint({
      technicalName: "Scheduling Confidence & Uncertainty Check",
      internalDefinition:
        "The Step 9 gate that determines whether the selected scheduling decision is high-confidence, moderate-confidence, low-confidence, or provisional based on evidence quality, candidate fit, learner-state clarity, metadata completeness, and unresolved uncertainty.",
      whyItExists:
        "Adaptive scheduling must preserve uncertainty. A low-confidence decision can still be useful, but it should generate stronger monitoring priorities, lighter profile updates, cleaner retesting, or learner-facing wording that avoids false certainty.",
      whatItReads: [
        "Candidate Ranking & Trade-Off Analysis",
        "Scheduling Evidence Validity Gate output",
        "Cycle Outcome Classification",
        "station metadata completeness",
        "candidate availability and suitability",
        "evidence contamination flags",
        "unresolved hypotheses",
        "profile consistency or conflict",
        "learner burden and momentum uncertainty",
        "transfer interpretation confidence",
        "learning-format effectiveness uncertainty",
        "short-term recall risk",
        "safety residual risk clarity",
      ],
      whatItOutputs: [
        "scheduling confidence state",
        "uncertainty flags",
        "provisional decision marker where needed",
        "monitoring priorities for the next loop",
        "evidence-strength flags for Next Loop Launch Package",
        "profile-update caution level",
        "learner-facing communication constraints",
        "scheduling decision trace content",
      ],
      internalProcessHypothesisLens:
        "This check asks how strongly the current evidence supports the selected station pathway and what must remain open for future testing.",
      subcomponentTitle: "Possible confidence states",
      subcomponents: [
        "high-confidence decision",
        "moderate-confidence decision",
        "low-confidence decision",
        "provisional decision",
        "validity-limited decision",
        "metadata-limited decision",
        "safety-priority decision despite uncertainty",
        "learner-state-limited decision",
        "unresolved-hypothesis-driven decision",
      ],
      dynamicStateEffects:
        "Directly affects current scheduling confidence, next-loop monitoring priority, and evidence-strength flags.",
      profileEffects:
        "Prevents strong profile updates when scheduling confidence is limited.",
      engineEffects:
        "Feeds Scheduling Decision Trace, Learner-Centered Communication Layer, Next Loop Launch Package, Adaptive Station Scheduling Engine archive, and Adaptive Learning Engine forecast where relevant.",
      connectorLogic:
        "Candidate Ranking & Trade-Off Analysis + Scheduling Evidence Validity Gate → Scheduling Confidence & Uncertainty Check → Scheduling Decision Trace → Next Loop Launch Package.",
      guardrails: [
        "Preserve uncertainty in the system trace.",
        "Learner-facing wording can remain simple, but it must not imply certainty the system does not have.",
        "Low confidence should increase monitoring, not blame.",
        "Safety-priority scheduling may proceed despite uncertainty when residual risk justifies it.",
        "Metadata-limited scheduling should be clearly flagged system-side.",
      ],
      mustNotDoRules: [
        "Must not hide uncertainty.",
        "Must not expose complex raw probabilities to the learner.",
        "Must not convert confidence into a learner judgement.",
        "Must not treat availability as confidence.",
        "Must not treat one strong result as final competence.",
      ],
    }),
  }),

  "step9-next-loop-launch-package": card({
    id: "step9-next-loop-launch-package",
    cardName: "Next Loop Launch Package",
    cardClassification: "Output handoff package / next adaptive loop launch record",
    selectedLearningFormat: "Selected station launch bundle",
    plainTitle: "How does the next adaptive loop begin?",
    technicalLabel: "Next Loop Launch Package",
    shortExplanation:
      "This carries the selected station pathway into the next loop. It stores the station candidate, decision family, internal-process target, transfer distance, expected difficulty, cognitive load, time pressure, novelty, short-term recall risk, learner-facing wording, monitoring priorities, unresolved hypotheses, confidence flags, and provisional support forecast.",
    teachingStructure: "Scheduling decision → launch bundle → Step 1 of next loop",
    keyGuardrail:
      "Do not use this package to pre-teach the station, reveal the answer, or preselect the next learning format.",
    blueprintContent: blueprint({
      technicalName: "Next Loop Launch Package",
      internalDefinition:
        "The structured Step 9 output that launches the next adaptive loop by carrying the selected station and scheduling rationale into the next Step 1 and Station Simulation Engine context.",
      whyItExists:
        "The scheduling decision must become an actionable next loop without losing the reasoning, monitoring priorities, evidence cautions, or learner-facing communication boundaries that made the station adaptive.",
      whatItReads: [
        "selected station candidate",
        "Scheduling Decision Trace",
        "selected scheduling decision family",
        "Candidate Ranking & Trade-Off Analysis",
        "Scheduling Confidence & Uncertainty Check",
        "learner-facing communication constraints",
        "station-bank metadata",
        "unresolved hypotheses",
        "expected next-loop support forecast",
        "learner-state and burden context",
        "safety residual risk priorities",
      ],
      whatItOutputs: [
        "selected station ID or station candidate",
        "station family",
        "station type",
        "target skill domains",
        "scheduling decision family",
        "reason for selection",
        "internal-process target being tested",
        "transfer distance",
        "expected difficulty",
        "expected cognitive load",
        "expected time pressure",
        "novelty level",
        "short-term recall risk",
        "learner-facing transition wording",
        "monitoring priorities for the next loop",
        "unresolved hypotheses to test",
        "evidence-strength flags",
        "expected downstream learning-format forecast",
        "scheduling confidence",
        "Step 1 launch context",
        "Station Simulation Engine setup context",
      ],
      internalProcessHypothesisLens:
        "The package defines what internal learner-state question the next loop should test or support: whether a corrected frame holds, whether transfer expands, whether retention persists, whether safety risk resolves, whether confidence calibrates, whether overload recurs, or whether an unresolved hypothesis becomes clearer.",
      subcomponentTitle: "Subcomponents / launch fields",
      subcomponents: [
        "selected station identifier",
        "decision family",
        "internal-process target",
        "transfer distance",
        "challenge calibration",
        "station metadata summary",
        "learner-facing wording",
        "monitoring priorities",
        "unresolved hypothesis targets",
        "evidence validity flags",
        "scheduling confidence",
        "downstream support forecast",
        "no-hint boundary",
      ],
      dynamicStateEffects:
        "Sets next-loop context and monitoring priorities. It does not itself prove learning or update competence.",
      profileEffects:
        "May archive station exposure and scheduling decision trace. Profile updates should remain separate, weighted, and evidence-based.",
      engineEffects:
        "Feeds Step 1 of the next loop, Station Simulation Engine for the selected next station, Adaptive Learning Engine forecast context, Learning Momentum Engine pacing context, and Scheduling Decision Trace archive.",
      connectorLogic:
        "Scheduling Decision Trace → Next Loop Launch Package → Step 1 of next adaptive loop + Station Simulation Engine for selected station.",
      guardrails: [
        "Learner-facing transition wording must be brief and experience-near.",
        "Do not reveal the analytic target in a way that teaches the station answer.",
        "Do not preselect the next Step 5 learning format.",
        "Expected downstream support forecast is only a forecast.",
        "Keep scheduling confidence in the system trace unless simplified learner-facing wording is appropriate.",
      ],
      mustNotDoRules: [
        "Must not become a feedback screen.",
        "Must not reopen Step 4, Step 5, Step 6, Step 7, or Step 8.",
        "Must not provide clinical hints.",
        "Must not claim final competence.",
        "Must not launch a station without preserving monitoring priorities and validity cautions.",
      ],
    }),
  }),
};
