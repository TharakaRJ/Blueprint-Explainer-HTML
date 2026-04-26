const text = (title, value) => ({ type: "text", title, text: value });
const list = (title, items) => ({ type: "list", title, items });

const quick = ({
  plainTitle,
  technicalLabel,
  classification,
  selectedLearningFormat,
  shortExplanation,
  keyGuardrail,
}) => [
  { type: "callout", title: "Plain-language title", text: plainTitle },
  text("Technical label", technicalLabel),
  text("Classification", classification),
  text("Selected learning format / teaching structure", selectedLearningFormat),
  text("Short explanation", shortExplanation),
  { type: "warning", title: "Key guardrail", text: keyGuardrail },
];

const blueprint = ({
  technicalName,
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
  plainTitle,
  technicalLabel,
  classification,
  selectedLearningFormat,
  shortExplanation,
  keyGuardrail,
  blueprintContent,
}) => ({
  id,
  categoryLabel: "STEP 8 — RE-ENTRY STATION",
  title: technicalLabel,
  quickTitle: plainTitle,
  subtitle: technicalLabel,
  accent: "cyan",
  quickViewLayoutType: "quick explainer card",
  quickViewContent: quick({
    plainTitle,
    technicalLabel,
    classification,
    selectedLearningFormat,
    shortExplanation,
    keyGuardrail,
  }),
  blueprintContent,
});

export const stepEightExplanationCards = {
  "step8-re-entry-handoff-package": card({
    id: "step8-re-entry-handoff-package",
    plainTitle: "What Step 8 receives before re-entry",
    technicalLabel: "Step 8 Re-Entry Handoff Package",
    classification: "Cross-step handoff package / transfer-readiness input package",
    selectedLearningFormat: "Handoff payload map: previous evidence → current learner-state meaning → re-entry design input",
    shortExplanation:
      "This helps extract the learner’s current transfer-readiness signal: what corrected internal process is supposed to be tested now, what remains fragile, what confidence or burden state may affect re-entry, and which target must be watched under station-like pressure.\n\nIt converts Step 7’s immediate learning-effect evidence into a usable starting package for Step 8, so the re-entry station is not random, repetitive, or too broad.",
    keyGuardrail:
      "This package does not prove learning and does not choose the station by itself. It only carries interpreted context into the Step 8 design resolver.",
    blueprintContent: blueprint({
      technicalName: "Step 8 Re-Entry Handoff Package",
      internalDefinition:
        "A structured input package from Step 7 that carries the corrected support target, target accessibility state, residual gaps, confidence state, micro-support trace, burden state, validity cautions, and re-entry monitoring priorities into Step 8.",
      whyItExists:
        "Step 8 must test transfer of a specific corrected internal process, not restart broad assessment. This package keeps the re-entry station aligned with the actual correction target and prevents Step 8 from becoming a random second station.",
      whatItReads: [
        "Step 4 corrected internal model statement",
        "Step 5 selected learning format and recommendation context",
        "Step 6 consumption evidence and exposure map",
        "Step 7 Quick Check result",
        "target accessibility state",
        "residual gap state",
        "confidence calibration state",
        "safety-linked readiness state where relevant",
        "micro-support delivered before re-entry",
        "learner burden and momentum context",
        "validity cautions",
        "re-entry monitoring priorities",
      ],
      whatItOutputs: [
        "corrected target for Step 8 testing",
        "expected transfer risk",
        "residual gap focus",
        "variation design constraints",
        "challenge calibration context",
        "safety-linked monitoring priorities",
        "evidence-strength cautions",
        "learner-facing transition context",
        "input to Re-Entry Station Design Resolver",
      ],
      internalProcessHypothesisLens:
        "The package preserves uncertainty about whether the learner has genuinely internalised the correction. A strong Quick Check may mean usable access, but it may also be short-term recognition. A weak Quick Check may mean incomplete digestion, under-exposure, poor check fit, burden, or format mismatch. Step 8 must test the target under station-like pressure before stronger transfer claims are made.",
      subcomponents: [
        "linked corrected target",
        "Quick Check result",
        "target accessibility state",
        "application readiness",
        "safety-linked readiness",
        "residual gap state",
        "confidence state",
        "micro-support trace",
        "validity flags",
        "expected transfer risk",
        "re-entry monitoring priorities",
      ],
      dynamicStateEffects:
        "Feeds the initial Step 8 interpretation of current transfer readiness, expected cognitive demand, confidence-performance risk, safety-linked caution, and likely transfer fragility.",
      profileEffects:
        "Does not directly create stable profile conclusions. It prepares evidence that may later update the Learner Profile, Learner Response to Station Profile, Learner Engagement Profile, and Adaptive Learning-Format Profile after Step 8 evidence is available.",
      engineEffects:
        "Feeds the Re-Entry Station Design Resolver, Re-Entry Transfer Evaluation Engine, Learning Momentum Engine, Adaptive Learning Engine, and Adaptive Station Scheduling Engine as context for Step 9.",
      connectorLogic:
        "Step 7 Quick Check result + residual gap + confidence + burden + validity cautions\n→ Step 8 Re-Entry Handoff Package\n→ Re-Entry Station Design Resolver",
      guardrails: [
        "Do not treat the handoff as proof of transfer.",
        "Do not treat Step 7 success as station readiness without re-entry evidence.",
        "Do not treat Step 7 weakness as cancellation of Step 8.",
        "Do not let the package expand Step 8 into a full retest.",
        "Preserve evidence-strength and validity cautions.",
      ],
      mustNotDoRules: [
        "Must not become a scoring summary.",
        "Must not make the final scheduling decision.",
        "Must not ask the learner for deep self-evaluation.",
        "Must not restart Step 5 or Step 6.",
        "Must not infer stable learner traits from the handoff alone.",
      ],
    }),
  }),

  "step8-re-entry-station-design-resolver": card({
    id: "step8-re-entry-station-design-resolver",
    plainTitle: "How the re-entry station is chosen",
    technicalLabel: "Re-Entry Station Design Resolver",
    classification: "Adaptive station-design resolver / variant selection node",
    selectedLearningFormat: "Input → interpretation → station variant strategy model",
    shortExplanation:
      "This helps extract whether the learner can apply the corrected internal process in a fair new performance context by selecting a re-entry station that matches the corrected target, current learner state, transfer risk, safety relevance, and evidence limitations.\n\nIt decides what kind of re-entry station will best test transfer without simply repeating the cold station or jumping to an unrelated case.",
    keyGuardrail:
      "The resolver must not automatically repeat the same station, automatically make the station harder, or randomly change the station.",
    blueprintContent: blueprint({
      technicalName: "Re-Entry Station Design Resolver",
      internalDefinition:
        "The Step 8 station-design mechanism that converts the handoff package into a focused re-entry station strategy. It chooses the station family, target link, variation distance, challenge level, scope compression, cue structure, and safety emphasis needed to test transfer fairly.",
      whyItExists:
        "The learner needs a station-like return to performance, but the test must be controlled. Too similar means memory rehearsal. Too different means unfair transfer testing. The resolver protects the validity of Step 8.",
      whatItReads: [
        "Step 8 Re-Entry Handoff Package",
        "primary corrected target",
        "residual gap state",
        "safety-linked monitoring priority",
        "Step 2 original failure pattern",
        "Step 4 corrected internal model",
        "Step 5 selected format and prediction",
        "Step 6 exposure and stuck-point evidence",
        "Step 7 target accessibility evidence",
        "confidence state",
        "cognitive window",
        "learning momentum state",
        "station-family constraints",
        "simulation-validity cautions",
      ],
      whatItOutputs: [
        "Re-Entry Station Blueprint Record",
        "selected station variant strategy",
        "variation distance recommendation",
        "challenge calibration input",
        "scope compression requirements",
        "target-specific monitoring priorities",
        "station authenticity constraints",
        "evidence-validity expectations",
      ],
      internalProcessHypothesisLens:
        "The resolver is not asking, “What station should be given next?” in a generic way. It asks, “What re-entry design will reveal whether the learner’s corrected internal process can now produce better station behaviour under controlled variation?”",
      subcomponents: [
        "station family match",
        "corrected-target match",
        "transfer distance selection",
        "safety emphasis selection",
        "cue structure selection",
        "expected action window",
        "station scope limits",
        "burden protection requirements",
        "contamination risk controls",
      ],
      dynamicStateEffects:
        "Uses current confidence, cognitive load, learning momentum, residual gap, and transfer-risk states to prevent unfair station design.",
      profileEffects:
        "May use prior learner-specific station-response patterns, but does not itself update profiles. Profile updates depend on performance evidence produced during the re-entry station.",
      engineEffects:
        "Feeds Station Simulation Engine setup, Re-Entry Transfer Evaluation Engine expectations, Learning Momentum Engine pacing, and Step 9 scheduling evidence preparation.",
      connectorLogic:
        "Step 8 Re-Entry Handoff Package\n→ Re-Entry Station Design Resolver\n→ Re-Entry Station Blueprint Record\n→ Variation & Challenge Calibration Gate\n→ Focused Re-Entry Station Surface",
      guardrails: [
        "Keep the station linked to the corrected target.",
        "Keep the re-entry station short and focused.",
        "Preserve station authenticity.",
        "Choose variation deliberately.",
        "Keep evidence-validity constraints visible to system-side interpretation.",
      ],
      mustNotDoRules: [
        "Must not repeat the exact same station.",
        "Must not generate a completely unrelated station.",
        "Must not design a full second OSCE.",
        "Must not choose variation randomly.",
        "Must not make a final Step 9 scheduling decision.",
      ],
    }),
  }),

  "step8-variation-challenge-calibration-gate": card({
    id: "step8-variation-challenge-calibration-gate",
    plainTitle: "How much the re-entry station should change",
    technicalLabel: "Variation & Challenge Calibration Gate",
    classification: "Variation-distance gate / challenge calibration gate / learner-state safety gate",
    selectedLearningFormat: "Similarity–difference–burden calibration matrix",
    shortExplanation:
      "This helps extract a cleaner transfer signal by calibrating how different and how demanding the re-entry station should be for this learner right now. The goal is to test the corrected internal process without making the result meaningless through repetition, overload, unfair difficulty, or excessive similarity.\n\nSimilarity preserves fairness. Difference tests transfer. Challenge must fit the learner’s current cognitive window and learning momentum.",
    keyGuardrail:
      "Challenge is not reduced to make the learner feel good. It is calibrated so the evidence reflects transfer rather than avoidable fatigue, overload, or unfair station design.",
    blueprintContent: blueprint({
      technicalName: "Variation & Challenge Calibration Gate",
      internalDefinition:
        "A combined Step 8 gate that determines the transfer distance and challenge level of the re-entry station. It merges variation distance selection, challenge calibration, and scope compression logic into one visible explanation layer.",
      whyItExists:
        "Step 8 evidence is only useful if the station is appropriately varied and appropriately demanding. If the station is too similar, it tests recall of the previous flow. If it is too different or too heavy, it may test overload or novelty rather than transfer of the corrected target.",
      whatItReads: [
        "corrected target",
        "Step 2 original station and failure pattern",
        "Step 8 handoff package",
        "current target accessibility state",
        "residual gap state",
        "current cognitive window",
        "learning momentum state",
        "learner engagement state",
        "confidence calibration state",
        "safety relevance",
        "expected transfer risk",
        "Step 6 exposure adequacy",
        "Step 7 result validity",
        "station variation constraints",
      ],
      whatItOutputs: [
        "near-transfer, moderate-transfer, contrastive-within-scope, or safety-focused variation direction",
        "challenge level",
        "scope compression requirements",
        "cue exposure plan",
        "action-window fairness constraints",
        "evidence-strength expectations",
        "validity cautions for later interpretation",
      ],
      internalProcessHypothesisLens:
        "The gate protects the question, “Can this learner use the corrected internal process under station-like variation?” It prevents the system from mistaking memorised repetition for transfer or unfair overload for failed learning.",
      subcomponents: [
        "variation distance selector",
        "challenge calibration check",
        "cognitive window check",
        "learning momentum check",
        "residual gap check",
        "confidence-risk check",
        "safety priority check",
        "station scope compression check",
        "fairness and validity check",
      ],
      dynamicStateEffects:
        "Directly affects Current Re-Entry Validity State, Current Variation Handling State, Current Re-Entry Cognitive Load State, and expected transfer-risk interpretation.",
      profileEffects:
        "Does not update profiles directly. It determines how strongly later Step 8 performance evidence can be weighted.",
      engineEffects:
        "Feeds Station Simulation Engine configuration, Re-Entry Transfer Evaluation Engine validity logic, Learning Momentum Engine pacing, and Adaptive Station Scheduling Engine context for Step 9.",
      connectorLogic:
        "Re-Entry Station Design Resolver\n→ Variation & Challenge Calibration Gate\n→ Focused Re-Entry Station Surface\n→ Re-Entry Performance Evidence Ledger\n→ Station Variation Validity Check",
      guardrails: [
        "Preserve fairness through enough similarity.",
        "Test transfer through meaningful difference.",
        "Avoid exhaustive domain testing.",
        "Avoid challenge escalation that exceeds the learner’s current cognitive window.",
        "Preserve safety-linked challenge where clinically necessary.",
      ],
      mustNotDoRules: [
        "Must not make all stations easy.",
        "Must not automatically punish weak learners with easier stations.",
        "Must not automatically increase difficulty after a good Quick Check.",
        "Must not treat any difference as proof of transfer.",
        "Must not ignore fatigue, overload, or poor Step 6 exposure.",
      ],
    }),
  }),

  "step8-focused-re-entry-station-surface": card({
    id: "step8-focused-re-entry-station-surface",
    plainTitle: "The short station-like return to performance",
    technicalLabel: "Focused Re-Entry Station Surface",
    classification: "Learner-facing focused simulation surface / re-entry performance environment",
    selectedLearningFormat:
      "Short station pathway: brief frame → focused performance → cues and consequences → evidence capture",
    shortExplanation:
      "This helps extract whether the learner’s corrected internal model can become real behaviour when the learner is placed back into a station-like situation. The surface gives the learner a short, focused performance environment where the key correction must be used, not just recognised or explained.\n\nThe learner experiences a real re-entry task, but not a full cold-station restart.",
    keyGuardrail:
      "The surface must not teach, coach, reveal the answer, or reopen a long OSCE simulation.",
    blueprintContent: blueprint({
      technicalName: "Focused Re-Entry Station Surface",
      internalDefinition:
        "The learner-facing Step 8 simulation surface that presents a short, target-linked, contextually varied re-entry station. It allows learner actions and speech, patient cues, role portrayal, timing, and consequences to occur under station-like pressure.",
      whyItExists:
        "Immediate Quick Check performance does not prove station-like application. The learner must be placed into a controlled return-to-performance context where the corrected internal process has to guide action.",
      whatItReads: [
        "Re-Entry Station Blueprint Record",
        "selected station variant",
        "corrected target",
        "cue structure",
        "safety-linked triggers",
        "challenge calibration result",
        "scope compression rules",
        "station authenticity constraints",
        "learner-facing transition wording",
      ],
      whatItOutputs: [
        "learner re-entry actions and speech",
        "patient cue exposure",
        "timing and action sequence evidence",
        "patient state changes",
        "consequence evidence",
        "communication context",
        "simulation-validity flags",
        "Re-Entry Performance Event Stream",
      ],
      internalProcessHypothesisLens:
        "The surface is designed to expose whether the learner can activate the corrected frame under mild station pressure. It may reveal successful transfer, partial transfer, old-pattern recurrence, cognitive-load blockage, cue-action failure, or confidence-performance mismatch.",
      subcomponents: [
        "short re-entry prompt",
        "patient / relative / nurse in-character cues where relevant",
        "learner action controls",
        "learner speech input",
        "focused cue exposure",
        "patient state response",
        "consequence logic",
        "timing/action windows",
        "scope-limited station flow",
        "station authenticity boundary",
      ],
      dynamicStateEffects:
        "Feeds Current Re-Entry Transfer State, Current Corrected Target Application State, Current Re-Entry Safety State, Current Re-Entry Cognitive Load State, and Current Re-Entry Validity State through downstream evidence interpretation.",
      profileEffects:
        "Produces evidence that may cautiously update the Learner Profile, Learner Response to Station Profile, Learner Engagement Profile, and learning-format response records after interpretation.",
      engineEffects:
        "Runs through the Station Simulation Engine and feeds the Re-Entry Transfer Evaluation Engine, Performance Diagnostic Engine, Learning Momentum Engine, Adaptive Learning Engine, and Adaptive Station Scheduling Engine.",
      connectorLogic:
        "Variation & Challenge Calibration Gate\n→ Focused Re-Entry Station Surface\n→ learner actions and speech + patient cues and consequences\n→ Re-Entry Performance Evidence Ledger",
      guardrails: [
        "Keep the station short.",
        "Keep the task focused on the corrected target.",
        "Preserve simulation realism.",
        "Allow mistakes to generate consequences.",
        "Capture evidence without coaching.",
        "Use brief transition language only.",
      ],
      mustNotDoRules: [
        "Must not become a full second cold station.",
        "Must not provide in-station teaching.",
        "Must not simplify in-character speech for learner comfort if ambiguity is part of the scenario.",
        "Must not reopen Step 3 self-evaluation.",
        "Must not show a score screen.",
      ],
    }),
  }),

  "step8-re-entry-performance-evidence-ledger": card({
    id: "step8-re-entry-performance-evidence-ledger",
    plainTitle: "The evidence trace from the re-entry station",
    technicalLabel: "Re-Entry Performance Evidence Ledger",
    classification: "Structured evidence ledger / validity-aware performance record",
    selectedLearningFormat:
      "Evidence schema: action + speech + cue + timing + consequence + validity → internal-process interpretation",
    shortExplanation:
      "This helps extract the learner’s re-entry behaviour signal as evidence of internal-process change: what they did when the corrected target appeared again, how they responded to cues, whether action followed knowledge, and whether any evidence is clean or contaminated.\n\nThe ledger records behaviour so later analytics can interpret transfer without turning the station into a score report.",
    keyGuardrail:
      "The ledger is not a checklist scorecard. It is a structured evidence base for cautious internal-process interpretation.",
    blueprintContent: blueprint({
      technicalName: "Re-Entry Performance Evidence Ledger",
      internalDefinition:
        "A structured Step 8 evidence record that stores learner actions, speech, timing, cue exposure, patient state, consequences, linked corrected target, evidence strength, and validity cautions from the focused re-entry station.",
      whyItExists:
        "Step 8 needs a clean trace of what happened before it can interpret transfer. Without a ledger, the system may over-read weak evidence, miss contamination, or confuse external behaviour with internal-process certainty.",
      whatItReads: [
        "Focused Re-Entry Station Surface event stream",
        "learner actions and speech",
        "cue exposure",
        "patient state changes",
        "timing and latency",
        "action sequence",
        "consequences",
        "station variation context",
        "expected action window",
        "safety-linked events",
        "interface or simulation friction",
        "corrected target link",
      ],
      whatItOutputs: [
        "structured re-entry performance evidence",
        "corrected-target evidence fields",
        "variation-transfer evidence fields",
        "old-pattern recurrence evidence fields",
        "safety reapplication fields",
        "cue-action fields",
        "retrieval-to-action fields",
        "cognitive-load indicators",
        "confidence-performance interpretation inputs",
        "station validity flags",
      ],
      internalProcessHypothesisLens:
        "The ledger does not decide why the learner behaved a certain way. It preserves the trace needed to ask whether behaviour suggests corrected-target application, fragile transfer, old-pattern recurrence, overload, cue misreading, action-conversion failure, station-design issue, or unclear evidence.",
      subcomponents: [
        "timestamp",
        "linked corrected target",
        "learner action",
        "learner speech",
        "cue exposure",
        "cue response",
        "response latency",
        "patient state",
        "consequence",
        "expected action window",
        "safety-critical flag",
        "old-pattern marker",
        "evidence strength",
        "validity caution",
        "interface or simulation friction flag",
      ],
      dynamicStateEffects:
        "Feeds Current Corrected Target Application State, Current Old-Pattern Recurrence State, Current Re-Entry Safety State, Current Re-Entry Cognitive Load State, Current Re-Entry Validity State, and Current Re-Entry Transfer State.",
      profileEffects:
        "Provides weighted evidence for later profile updates. No raw ledger entry should become a stable learner trait without interpretation and corroboration.",
      engineEffects:
        "Feeds Transfer & Reapplication Analytics, Failed / Partial / Successful Transfer Interpretation, Learning-Format Effectiveness Interpretation, Performance Diagnostic Engine, Re-Entry Transfer Evaluation Engine, and Adaptive Station Scheduling Engine.",
      connectorLogic:
        "Focused Re-Entry Station Surface\n→ Re-Entry Performance Event Stream\n→ Re-Entry Performance Evidence Ledger\n→ Transfer & Reapplication Analytics\n→ transfer interpretation and Step 9 handoff",
      guardrails: [
        "Preserve raw evidence separately from interpretation.",
        "Mark contaminated or unclear evidence.",
        "Keep action data linked to cue exposure and timing.",
        "Preserve alternative explanations.",
        "Avoid score-first display.",
      ],
      mustNotDoRules: [
        "Must not become a mark sheet.",
        "Must not infer motive from action alone.",
        "Must not update stable profiles from a single event.",
        "Must not ignore station variation validity.",
        "Must not hide interface or simulation contamination.",
      ],
    }),
  }),

  "step8-transfer-reapplication-analytics": card({
    id: "step8-transfer-reapplication-analytics",
    plainTitle: "Whether the correction became usable action",
    technicalLabel: "Transfer & Reapplication Analytics",
    classification: "Target reapplication analytic bundle / transfer evidence analytic",
    selectedLearningFormat: "Corrected target → changed presentation → station action chain",
    shortExplanation:
      "This helps extract whether the learner’s corrected internal process can now guide behaviour in a changed station-like context. It checks whether the learner applied the main corrected gap, adapted it to the new presentation, and turned it into action rather than only recalling or explaining it.\n\nThe main question is not whether the learner completed every OSCE domain. The question is whether the targeted internal correction transferred into performance.",
    keyGuardrail:
      "This analytic must stay focused on the main corrected target. It must not expand Step 8 into a comprehensive retest.",
    blueprintContent: blueprint({
      technicalName: "Transfer & Reapplication Analytics",
      internalDefinition:
        "A Step 8 analytic bundle that evaluates whether the learner reapplied the corrected target under re-entry conditions. It includes corrected target reapplication, variation transfer, safety reapplication where relevant, cue-action reapplication where relevant, retrieval-to-action reapplication where relevant, and cognitive-load effects on transfer.",
      whyItExists:
        "Step 7 may show immediate access, but Step 8 must determine whether that access becomes usable station behaviour under variation. This analytic turns re-entry performance into transfer evidence.",
      whatItReads: [
        "Re-Entry Performance Evidence Ledger",
        "corrected target",
        "Step 2 original failure pattern",
        "Step 4 corrected internal model",
        "Step 6 exposure evidence",
        "Step 7 target accessibility state",
        "variation distance",
        "cue exposure",
        "learner actions and speech",
        "safety-linked events",
        "timing/action windows",
        "cognitive-load indicators",
        "validity cautions",
      ],
      whatItOutputs: [
        "corrected target reapplication state",
        "variation transfer state",
        "safety reapplication state where relevant",
        "cue-action reapplication state where relevant",
        "retrieval-to-action reapplication state where relevant",
        "cognitive-load effect on transfer",
        "transfer strength estimate",
        "residual gap evidence",
        "input to transfer interpretation",
        "input to learning-format effectiveness interpretation",
        "input to Step 9 scheduling package",
      ],
      internalProcessHypothesisLens:
        "Successful action may suggest the corrected internal model became usable. Partial action may suggest fragile transfer, cue-dependent activation, or incomplete action conversion. Weak action may suggest failed transfer, old-pattern recurrence, under-exposure, overload, format insufficiency, target misidentification, or unfair station variation.",
      subcomponents: [
        "corrected target reapplication capture",
        "variation transfer capture",
        "safety reapplication check",
        "cue-action reapplication check",
        "retrieval-to-action reapplication check",
        "cognitive load under re-entry analysis",
        "confidence-performance recalibration signal",
        "station variation validity check",
      ],
      dynamicStateEffects:
        "Updates Current Re-Entry Transfer State, Current Corrected Target Application State, Current Variation Handling State, Current Re-Entry Safety State, Current Re-Entry Cognitive Load State, and Current Transfer Confidence Calibration State.",
      profileEffects:
        "May contribute cautious transfer evidence to Learner Profile and Learner Response to Station Profile. May contribute provisional format-effect evidence to Adaptive Learning-Format Profile only after Step 5/6/7/8 evidence is interpreted together.",
      engineEffects:
        "Feeds Re-Entry Transfer Evaluation Engine, Performance Diagnostic Engine, Adaptive Learning Engine, Learning Momentum Engine, and Adaptive Station Scheduling Engine.",
      connectorLogic:
        "Re-Entry Performance Evidence Ledger\n→ corrected target reapplication + variation transfer + safety/cue/action checks\n→ Transfer & Reapplication Analytics\n→ Failed / Partial / Successful Transfer Interpretation\n→ Step 9 Scheduling Evidence Package",
      guardrails: [
        "Interpret observable behaviour as evidence, not final truth.",
        "Keep the main corrected gap central.",
        "Preserve validity cautions.",
        "Separate transfer failure from format failure.",
        "Preserve alternative explanations for weak transfer.",
      ],
      mustNotDoRules: [
        "Must not test every OSCE domain.",
        "Must not claim durable learning from one re-entry event.",
        "Must not treat correct performance as global competence.",
        "Must not treat weak performance as learner failure.",
        "Must not ignore under-exposure or station-design problems.",
      ],
    }),
  }),

  "step8-old-pattern-recurrence-check": card({
    id: "step8-old-pattern-recurrence-check",
    plainTitle: "Whether the old pattern returned",
    technicalLabel: "Old Pattern Recurrence Check",
    classification: "Cross-step recurrence analytic / prior-pattern comparison node",
    selectedLearningFormat: "Before-support pattern ↔ after-support re-entry behaviour contrast",
    shortExplanation:
      "This helps extract whether the learner’s previous internal-process failure reactivated after correction, learning, and Quick Check. If the same pattern returns during re-entry, the system gains high-value evidence that the correction may not yet be stable under station-like pressure.\n\nRecurrence matters, but it does not automatically prove the same cause.",
    keyGuardrail:
      "Old-pattern recurrence is evidence of possible failed or fragile transfer, not proof of a fixed learner trait or a single confirmed cause.",
    blueprintContent: blueprint({
      technicalName: "Old Pattern Recurrence Check",
      internalDefinition:
        "A Step 8 analytic that compares the original Step 2 failure pattern with the learner’s re-entry behaviour to detect whether the same action sequence, cue miss, safety-frame failure, retrieval-to-action gap, overload pattern, or confidence mismatch returned after support.",
      whyItExists:
        "The most important Step 8 signal may be whether the learner reverts to the old internal operating pattern when performance pressure returns. This helps distinguish surface learning from real behavioural transfer.",
      whatItReads: [
        "Step 2 original performance pattern",
        "Step 4 corrected target",
        "Step 7 target accessibility state",
        "Re-Entry Performance Evidence Ledger",
        "corrected-target reapplication evidence",
        "cue-action evidence",
        "safety behaviour evidence",
        "action sequence evidence",
        "cognitive-load evidence",
        "confidence-performance evidence",
        "station variation validity flags",
      ],
      whatItOutputs: [
        "old-pattern recurrence state",
        "recurrence strength",
        "recurrence context",
        "possible failed transfer signal",
        "possible fragile transfer signal",
        "residual gap evidence",
        "scheduling target for Step 9",
        "caution flags for profile updating",
      ],
      internalProcessHypothesisLens:
        "A repeated pattern may suggest that the old internal model is still dominant under pressure, that the correction remained verbal rather than operational, that cognitive load blocked transfer, that cue recognition remains fragile, that the learning format did not produce behavioural application, or that the re-entry station design was unfair.",
      subcomponents: [
        "original pattern marker",
        "re-entry pattern marker",
        "matching failure type",
        "matching cue context",
        "matching action delay or omission",
        "matching unsafe action or omission",
        "matching retrieval-to-action gap",
        "matching cognitive-load collapse",
        "matching confidence mismatch",
        "recurrence strength",
        "recurrence validity caution",
      ],
      dynamicStateEffects:
        "Feeds Current Old-Pattern Recurrence State, Current Re-Entry Transfer State, Current Corrected Target Application State, Current Re-Entry Safety State, and Current Step 9 Scheduling Readiness State.",
      profileEffects:
        "May add weighted pattern-forming evidence only when the recurrence is clear and validity is adequate. Must remain provisional unless repeated or strongly corroborated.",
      engineEffects:
        "Feeds Failed / Partial / Successful Transfer Interpretation, Performance Diagnostic Engine, Adaptive Learning Engine, Adaptive Station Scheduling Engine, and Learning Momentum Engine.",
      connectorLogic:
        "Step 2 original pattern + Re-Entry Performance Evidence Ledger\n→ Old Pattern Recurrence Check\n→ Transfer Interpretation Gate\n→ Step 9 Scheduling Evidence Package",
      guardrails: [
        "Preserve alternative explanations.",
        "Treat recurrence as high-value evidence, not final diagnosis.",
        "Interpret recurrence against station variation and validity.",
        "Do not collapse recurrence into learner blame.",
        "Do not assume identical cause across contexts.",
      ],
      mustNotDoRules: [
        "Must not say recurrence always means the format failed.",
        "Must not say recurrence proves the learner cannot improve.",
        "Must not create a stable trait from one recurrence.",
        "Must not ignore cognitive load, station difficulty, or validity cautions.",
        "Must not frame recurrence as a checklist miss only.",
      ],
    }),
  }),

  "step8-transfer-interpretation": card({
    id: "step8-transfer-interpretation",
    plainTitle: "What the re-entry result actually means",
    technicalLabel: "Failed / Partial / Successful Transfer Interpretation",
    classification: "Transfer-state interpretation gate / failed-transfer disambiguation node",
    selectedLearningFormat: "Evidence-strength decision tree with alternative-explanation preservation",
    shortExplanation:
      "This helps extract the learner’s transfer-state signal by classifying whether the corrected internal process transferred successfully, partially, weakly, fragily, or not at all. It interprets re-entry performance cautiously, using evidence strength, station validity, old-pattern recurrence, residual risk, and possible contamination.\n\nThe result is not a pass/fail label. It is a transfer interpretation used to decide what should happen next.",
    keyGuardrail:
      "Weak Step 8 performance is stronger evidence than a weak Quick Check, but it still requires disambiguation before concluding why transfer failed.",
    blueprintContent: blueprint({
      technicalName: "Failed / Partial / Successful Transfer Interpretation",
      internalDefinition:
        "A Step 8 interpretation gate that classifies re-entry evidence into meaningful transfer states, including successful transfer, partial transfer, fragile transfer, failed transfer, unclear transfer, contaminated evidence, target misidentification, format insufficiency, or station-design issue.",
      whyItExists:
        "Step 8 produces stronger transfer evidence than Step 7, but the meaning of that evidence is not automatic. The system must interpret whether the learner applied the corrected target and why weak or mixed performance occurred.",
      whatItReads: [
        "Transfer & Reapplication Analytics",
        "Old Pattern Recurrence Check",
        "Re-Entry Performance Evidence Ledger",
        "station variation validity",
        "Step 6 exposure adequacy",
        "Step 7 immediate learning-effect result",
        "micro-support trace",
        "safety-linked residual risk",
        "confidence-performance state",
        "cognitive-load under re-entry",
        "interface or simulation friction",
        "challenge calibration result",
      ],
      whatItOutputs: [
        "transfer classification",
        "failed-transfer explanation candidates",
        "evidence strength",
        "validity caution",
        "residual gap state",
        "scheduling implications",
        "profile update weight",
        "learning-format effectiveness interpretation input",
        "learner-facing brief feedback category",
      ],
      internalProcessHypothesisLens:
        "Failed transfer may reflect learning-format insufficiency, recognition without application, old internal-model recurrence, pressure-linked action failure, cognitive overload, station-design unfairness, target misidentification, incomplete Step 6 exposure, insufficient micro-support, or unclear evidence.",
      subcomponents: [
        "successful transfer state",
        "partial transfer state",
        "fragile transfer state",
        "failed transfer state",
        "unclear transfer state",
        "contaminated evidence flag",
        "target misidentification possibility",
        "format insufficiency possibility",
        "station-design issue possibility",
        "residual risk level",
        "evidence strength rating",
      ],
      dynamicStateEffects:
        "Updates Current Re-Entry Transfer State, Current Corrected Target Application State, Current Variation Handling State, Current Re-Entry Validity State, Current Transfer Confidence Calibration State, and Current Step 9 Scheduling Readiness State.",
      profileEffects:
        "Determines whether and how strongly Step 8 evidence can update Learner Profile, Learner Response to Station Profile, Learner Engagement Profile, Adaptive Learning-Format Profile Update Candidate, and Learner-Format Response History.",
      engineEffects:
        "Feeds Performance Diagnostic Engine, Adaptive Learning Engine, Adaptive Station Scheduling Engine, Re-Entry Transfer Evaluation Engine, and Learning Momentum Engine.",
      connectorLogic:
        "Transfer & Reapplication Analytics + Old Pattern Recurrence Check + validity evidence\n→ Failed / Partial / Successful Transfer Interpretation\n→ Learning-Format Effectiveness Interpretation\n→ Brief Feedback + Step 9 Handoff",
      guardrails: [
        "Preserve alternative explanations.",
        "Separate weak transfer from learner blame.",
        "Separate failed transfer from format failure.",
        "Use validity cautions before weighting evidence.",
        "Keep learner-facing wording concise and non-blaming.",
      ],
      mustNotDoRules: [
        "Must not display “failed transfer” as a blunt learner-facing verdict.",
        "Must not treat one Step 8 result as long-term competence evidence.",
        "Must not ignore station-design or exposure limitations.",
        "Must not automatically restart the learning cycle.",
        "Must not make Step 9’s scheduling decision.",
      ],
    }),
  }),

  "step8-learning-format-effectiveness-interpretation": card({
    id: "step8-learning-format-effectiveness-interpretation",
    plainTitle: "Whether the selected learning format changed behaviour",
    technicalLabel: "Learning-Format Effectiveness Interpretation",
    classification: "Cross-step learning-format effectiveness analytic / provisional profile-update candidate",
    selectedLearningFormat:
      "Step 5 prediction + Step 6 use + Step 7 access + Step 8 transfer evidence chain",
    shortExplanation:
      "This helps extract whether the selected learning format appears to have helped the learner turn the corrected internal target into station-like behaviour. Step 8 is stronger than Step 7 because it tests transfer, not just immediate retrieval or explanation.\n\nThe interpretation must use Step 5, Step 6, Step 7, and Step 8 together.",
    keyGuardrail:
      "One Step 8 result does not prove long-term format effectiveness. It provides transfer evidence that remains provisional until later cycles and retention evidence.",
    blueprintContent: blueprint({
      technicalName: "Learning-Format Effectiveness Interpretation",
      internalDefinition:
        "A Step 8 cross-step interpretation process that evaluates whether the learning format selected in Step 5 and consumed in Step 6 contributed to immediate access in Step 7 and behavioural transfer in Step 8.",
      whyItExists:
        "The module must learn not only what the learner needs, but which learning formats actually produce usable behavioural change for this learner. Step 8 provides high-value transfer evidence for that calibration.",
      whatItReads: [
        "Step 5 selected format",
        "Step 5 recommendation rank and confidence",
        "learner override status",
        "generic format metadata",
        "personal fit estimate",
        "Step 6 consumed sections",
        "Step 6 skipped or under-exposed sections",
        "Step 6 stuck points",
        "Step 6 tutorial use",
        "Step 6 format-quality cautions",
        "Step 7 Quick Check result",
        "Step 7 target accessibility state",
        "Step 8 transfer interpretation",
        "old-pattern recurrence evidence",
        "residual gap evidence",
        "validity cautions",
      ],
      whatItOutputs: [
        "provisional format-effectiveness interpretation",
        "effective / partially effective / ineffective / effective but fragile / contaminated / unclear state",
        "Adaptive Learning-Format Profile Update Candidate",
        "Learner-Format Response History link",
        "Adaptive Learning Engine evidence",
        "Step 9 scheduling context",
        "future format recommendation calibration input",
      ],
      internalProcessHypothesisLens:
        "A format may appear effective if Step 8 shows target reapplication under variation. A format may appear partially effective if the learner recognises the target but action remains fragile. A weak Step 8 result may reflect format insufficiency, under-exposure, wrong format match, poor tutorial use, format-quality issue, target misidentification, or station-design contamination.",
      subcomponents: [
        "Step 5 prediction accuracy",
        "learner choice path",
        "Step 6 exposure adequacy",
        "Step 6 stuck-point context",
        "Step 7 immediate access result",
        "Step 8 transfer result",
        "old-pattern recurrence",
        "residual gap state",
        "validity and contamination flags",
        "provisional effectiveness rating",
      ],
      dynamicStateEffects:
        "Feeds Current Re-Entry Transfer State, Current Corrected Target Application State, Current Step 9 Scheduling Readiness State, and future learning-format recommendation calibration states.",
      profileEffects:
        "Creates a cautious Adaptive Learning-Format Profile Update Candidate and links evidence to Learner-Format Response History. It may influence Learner Profile and Learner Response to Station Profile only where the evidence is valid and interpreted.",
      engineEffects:
        "Feeds Adaptive Learning Engine, Adaptive Station Scheduling Engine, Re-Entry Transfer Evaluation Engine, and Learning Momentum Engine.",
      connectorLogic:
        "Step 5 selected format + Step 6 consumption + Step 7 Quick Check + Step 8 transfer\n→ Learning-Format Effectiveness Interpretation\n→ Adaptive Learning-Format Profile Update Candidate\n→ Adaptive Learning Engine and Step 9 Scheduling Evidence Package",
      guardrails: [
        "Interpret effectiveness across Step 5/6/7/8 together.",
        "Separate format failure from learner under-exposure.",
        "Separate format-quality problems from learner-state problems.",
        "Preserve uncertainty.",
        "Treat Step 8 as transfer evidence, not durability evidence.",
      ],
      mustNotDoRules: [
        "Must not conclude long-term format effectiveness from one Step 8.",
        "Must not blame the learner for poor format fit.",
        "Must not call the format ineffective if Step 6 exposure was inadequate.",
        "Must not hide format-quality concerns.",
        "Must not override future evidence from later retention or transfer cycles.",
      ],
    }),
  }),

  "step8-brief-feedback-step9-handoff": card({
    id: "step8-brief-feedback-step9-handoff",
    plainTitle: "What the learner hears before the next station plan",
    technicalLabel: "Brief Feedback + Step 9 Handoff",
    classification: "Learner-facing communication layer + scheduling evidence package",
    selectedLearningFormat: "Concise feedback → interpreted scheduling evidence → Step 9 decision handoff",
    shortExplanation:
      "This helps extract and communicate the learner’s immediate post-re-entry transfer signal without reopening deep feedback. The learner receives a concise evidence-linked message about whether the key point transferred, partly transferred, or still needs reinforcement, while the system sends structured evidence to Step 9.\n\nStep 8 gives brief feedback. Step 9 decides the next station plan.",
    keyGuardrail:
      "Do not turn this into a detailed feedback report, deep self-evaluation cycle, or final scheduling decision inside Step 8.",
    blueprintContent: blueprint({
      technicalName: "Brief Feedback + Step 9 Handoff",
      internalDefinition:
        "A combined Step 8 output layer that gives the learner a concise immediate feedback message after the re-entry station and packages transfer evidence, residual risk, validity cautions, learner momentum, and scheduling targets for Step 9 Adaptive Station Scheduling.",
      whyItExists:
        "Step 8 must close the re-entry experience clearly without expanding into a full debrief. The learner needs a brief result, and Step 9 needs structured evidence to decide the next station pathway.",
      whatItReads: [
        "transfer interpretation",
        "corrected-target application state",
        "old-pattern recurrence state",
        "safety-linked residual risk",
        "confidence-performance state",
        "re-entry cognitive-load state",
        "learning-format effectiveness interpretation",
        "learner momentum and burden state",
        "station variation validity",
        "evidence strength",
        "unresolved hypotheses",
        "Step 9 scheduling readiness state",
      ],
      whatItOutputs: [
        "brief learner-facing feedback",
        "Brief Feedback Trace",
        "Step 9 Scheduling Evidence Package",
        "residual risk markers",
        "future scheduling targets",
        "validity and contamination flags",
        "profile update candidates",
        "Adaptive Station Scheduling Engine input",
      ],
      internalProcessHypothesisLens:
        "The feedback should tell the learner what the evidence suggests about the key transfer target without pretending to know everything. The handoff should preserve whether the learner needs reinforcement, near-transfer repetition, far-transfer challenge, cue-rich exposure, safety-focused re-entry, pressure-adjusted station work, or unresolved hypothesis testing.",
      subcomponents: [
        "feedback category",
        "evidence basis",
        "safety emphasis",
        "confidence emphasis",
        "transfer state",
        "residual gap",
        "unresolved hypothesis marker",
        "momentum and burden state",
        "scheduling evidence target",
        "validity caution",
      ],
      dynamicStateEffects:
        "Updates Current Step 9 Scheduling Readiness State and may influence Current Re-Entry Transfer State, Current Re-Entry Safety State, Current Transfer Confidence Calibration State, and Learning Momentum state.",
      profileEffects:
        "Routes profile update candidates but does not itself finalize stable profile conclusions. Profile updates must be weighted, interpreted, validity-checked, and pattern-aware.",
      engineEffects:
        "Feeds Adaptive Station Scheduling Engine as the primary Step 9 decision-making engine. Also feeds Adaptive Learning Engine, Learning Momentum Engine, and relevant profile systems.",
      connectorLogic:
        "Failed / Partial / Successful Transfer Interpretation + Learning-Format Effectiveness Interpretation\n→ Brief Feedback + Step 9 Handoff\n→ Step 9 Scheduling Evidence Package\n→ Adaptive Station Scheduling Engine\n→ Step 9 Adaptive Station Scheduling begins",
      guardrails: [
        "Feedback must be concise.",
        "Feedback must be evidence-linked.",
        "Feedback must avoid pass/fail language.",
        "Step 9 makes the scheduling decision.",
        "Preserve uncertainty and validity cautions in the handoff.",
      ],
      mustNotDoRules: [
        "Must not say “you failed transfer” as blunt learner-facing wording.",
        "Must not show a score, grade, or pass/fail verdict as the main output.",
        "Must not provide long clinical teaching.",
        "Must not ask long rationale questions.",
        "Must not reopen Step 3, Step 4, Step 5, Step 6, or Step 7.",
        "Must not decide the next station inside Step 8.",
      ],
    }),
  }),
};
