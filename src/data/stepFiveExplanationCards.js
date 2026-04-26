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
  blueprintAlignedTechnicalProcess,
  blueprintAlignedTechnicalProcesses,
  blueprintAlignedTechnicalLabel,
}) => [
  text("Technical name", technicalName),
  ...(blueprintAlignedTechnicalProcess ? [text("Blueprint-aligned technical process", blueprintAlignedTechnicalProcess)] : []),
  ...(blueprintAlignedTechnicalProcesses ? [text("Blueprint-aligned technical processes", blueprintAlignedTechnicalProcesses)] : []),
  ...(blueprintAlignedTechnicalLabel ? [text("Blueprint-aligned technical label", blueprintAlignedTechnicalLabel)] : []),
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
  plainTitle,
  technicalLabel,
  shortExplanation,
  selectedLearningFormat,
  keyGuardrail,
  blueprintContent,
}) => ({
  id,
  categoryLabel: "STEP 5 — ADAPTIVE LEARNING-FORMAT SELECTION",
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

export const stepFiveExplanationCards = {
  "step5-support-routing-package": card({
    id: "step5-support-routing-package",
    plainTitle: "What support does this learner need now?",
    technicalLabel: "Step 5 Support Routing Package",
    shortExplanation:
      "This extracts the learner’s corrected internal support need from Step 4: what internal process now needs help, how strong the evidence is, how much burden the learner can handle, and what uncertainty must stay visible before choosing a learning format.",
    selectedLearningFormat: "Support target → learner-state context → format-selection input chain",
    keyGuardrail:
      "This package routes support. It must not be shown as raw diagnostic logic, and it must not select the final format by itself.",
    blueprintContent: blueprint({
      technicalName: "Step 5 Support Routing Package",
      classification: "Input package / support-routing handoff record",
      internalDefinition:
        "The Step 5 Support Routing Package is the structured input from Step 4 into Step 5. It contains the corrected support target, internal-process category, confidence and burden context, evidence strength, safety priority, unresolved hypotheses, and Step 6 monitoring suggestions needed for adaptive format selection.",
      whyItExists:
        "It prevents Step 5 from recommending a format based on a missed checklist item. It forces the recommendation process to begin from the corrected internal-process target established in Step 4.",
      whatItReads: [
        "primary support target",
        "secondary support targets",
        "internal-process category",
        "clinical or safety priority",
        "confidence calibration need",
        "correction acceptance or integration signal",
        "current correction burden",
        "current cognitive capacity context",
        "learning momentum context",
        "learner engagement context",
        "support depth required",
        "support burden tolerance",
        "evidence strength",
        "simulation validity caution",
        "unresolved hypotheses",
        "future retesting targets",
        "Step 6 monitoring suggestions",
      ],
      whatItOutputs: [
        "support-routing context for the Adaptive Learning Engine",
        "input for Support Target-to-Format Mapping",
        "input for Current Usability Cross-Check",
        "input for Format Suitability Ranking",
        "handoff context for Step 6",
      ],
      internalProcessHypothesisLens:
        "The package does not ask “what checklist item was missed?” It asks which internal process now needs support: knowledge repair, retrieval support, retrieval-to-action conversion, cue-response training, safety-trigger activation, confidence recalibration, schema building, pressure tolerance, or format-use support.",
      subcomponents: [
        "support target clarity",
        "internal-process category",
        "safety priority",
        "support depth requirement",
        "burden tolerance",
        "confidence calibration need",
        "evidence strength",
        "unresolved hypothesis flags",
        "simulation validity flags",
        "Step 6 monitoring suggestions",
      ],
      dynamicStateEffects:
        "Feeds the current format-selection state by defining what kind of support the learner can use now.",
      profileEffects:
        "May read profile context, but does not itself create a stable learner trait. Later steps are required before format effectiveness can be updated.",
      engineEffects:
        "Feeds the Adaptive Learning Engine and informs the Adaptive Station Scheduling Engine only as unresolved future-testing context.",
      connectorLogic:
        "Step 4 metacognitive correction\n→ Step 5 Support Routing Package\n→ Adaptive Learning Engine\n→ Support Target-to-Format Mapping\n→ Format Suitability Ranking\n→ Format Selection Handoff Package",
      guardrails: [
        "Do not expose raw diagnostic logic to the learner.",
        "Do not turn the package into feedback.",
        "Do not treat one correction event as a stable learner profile conclusion.",
        "Do not select the format inside this package.",
        "Preserve uncertainty where evidence is limited.",
      ],
      mustNotDoRules: [
        "Must not become Detailed Feedback.",
        "Must not route directly from missed checklist item to format.",
        "Must not hide safety priority.",
        "Must not overstate evidence strength.",
        "Must not update Adaptive Learning-Format Profile effectiveness from Step 4 alone.",
      ],
    }),
  }),

  "step5-adaptive-learning-engine": card({
    id: "step5-adaptive-learning-engine",
    plainTitle: "Choosing the learning method, not just the topic",
    technicalLabel: "Adaptive Learning Engine",
    shortExplanation:
      "This uses the learner’s corrected internal-process target and current learner state to decide which learning format is most likely to help now: not just what they need to study, but how they can best receive and use that support.",
    selectedLearningFormat: "Input → interpretation → ranked recommendation engine model",
    keyGuardrail:
      "The engine recommends formats. It must not force the learner’s choice, hide uncertainty, or act like a generic content recommender.",
    blueprintContent: blueprint({
      technicalName: "Adaptive Learning Engine",
      classification: "Core decision-making engine",
      internalDefinition:
        "The Adaptive Learning Engine makes the Step 5 learning-format recommendation decision by combining the Step 5 Support Routing Package, learning-format metadata, learner-specific format evidence, current cognitive usability, learning momentum, engagement state, evidence strength, and agency rules.",
      whyItExists:
        "It closes the gap between accurate metacognitive correction and usable learning support. A learner may receive a correct Step 4 correction but still choose a learning method that does not repair the internal process. The engine prevents that mismatch.",
      whatItReads: [
        "Step 5 Support Routing Package",
        "primary and secondary support targets",
        "internal-process category",
        "clinical/safety priority",
        "current cognitive capacity context",
        "current correction burden",
        "learning momentum context",
        "learner engagement context",
        "Adaptive Learning-Format Profile where available",
        "Learner-Format Response History as background",
        "Learning Format Library Metadata",
        "generic format metadata",
        "learner-specific format response evidence",
        "recommendation uncertainty",
        "learner agency and override rules",
      ],
      whatItOutputs: [
        "candidate format families",
        "ranking trace",
        "top-three recommendation set",
        "recommendation reason",
        "uncertainty level",
        "advisory trigger context where justified",
        "handoff data for Step 6",
      ],
      internalProcessHypothesisLens:
        "The engine asks what kind of learning format can repair the learner’s internal process: concept repair, retrieval activation, action conversion, safety-trigger training, cue-response practice, schema building, confidence calibration, pressure practice, or tutorial support.",
      subcomponents: [
        "support target interpretation",
        "format candidate generation",
        "generic metadata fit",
        "learner-specific fit",
        "cognitive cost-fit",
        "engagement fit",
        "momentum fit",
        "safety filter",
        "ranking confidence",
        "agency handling",
        "override risk handling",
        "tutorial need prediction",
      ],
      dynamicStateEffects:
        "Updates or informs:\n- Current Format Match Confidence\n- Current Format Usability Window\n- Current Format Selection Readiness\n- Current Recommendation Acceptance Risk\n- Current Selection Burden State",
      profileEffects:
        "Reads Learner Profile, Learner Engagement Profile, Learner Response to Station Profile, Adaptive Learning-Format Profile, and Learner-Format Response History. It does not update learning-format effectiveness from selection alone.",
      engineEffects:
        "Primary Step 5 decision engine. Sends context to Step 6 through the Format Selection Handoff Package. Sends unresolved future-testing context to the Adaptive Station Scheduling Engine only as background.",
      connectorLogic:
        "Step 5 Support Routing Package\n→ Adaptive Learning Engine\n→ Support Target-to-Format Mapping\n→ Learning Format Library Metadata\n→ Learner-Specific Format Fit\n→ Current Usability Cross-Check\n→ Format Suitability Ranking\n→ Top Three Recommended Formats",
      guardrails: [
        "Do not recommend based on popularity alone.",
        "Do not recommend based only on missed external content.",
        "Do not claim certainty when learner-specific evidence is insufficient.",
        "Do not force the top-ranked format.",
        "Do not treat learner preference as learning effectiveness.",
        "Do not hide safety-linked support needs to preserve momentum.",
      ],
      mustNotDoRules: [
        "Must not become a generic recommendation engine.",
        "Must not become Step 6 analytics.",
        "Must not choose the next station.",
        "Must not convert learner override into blame.",
        "Must not update format effectiveness before outcome evidence exists.",
      ],
    }),
  }),

  "step5-support-target-format-mapping": card({
    id: "step5-support-target-format-mapping",
    plainTitle: "Matching the problem to the right kind of learning",
    technicalLabel: "Support Target-to-Format Mapping",
    shortExplanation:
      "This identifies the internal process that needs repair and maps it to format families that can actually target that process, such as cue-response practice for missed cues, action-sequence drills for retrieval-to-action gaps, or concept repair for genuine knowledge gaps.",
    selectedLearningFormat: "Internal-process target → suitable format family chain",
    keyGuardrail:
      "A missed action must not automatically become a content recommendation. The internal-process interpretation must come first.",
    blueprintContent: blueprint({
      technicalName: "Support Target-to-Format Mapping",
      classification: "Interpretation process / candidate-generation logic",
      internalDefinition:
        "Support Target-to-Format Mapping converts the Step 4 correction target into suitable learning-format families by identifying what kind of internal-process support is needed before any specific format is ranked.",
      whyItExists:
        "Different internal processes require different learning formats. More content is not always the solution. A learner with a retrieval-to-action gap may need operational practice; a learner with false certainty may need contrastive evidence; a learner with overload-linked breakdown may need low-load schema support.",
      whatItReads: [
        "primary support target",
        "secondary support targets",
        "internal-process category",
        "clinical/safety priority",
        "support depth required",
        "confidence calibration need",
        "learner acceptance/integration signal",
        "unresolved hypotheses",
        "Learning Format Library Metadata",
      ],
      whatItOutputs: [
        "candidate format families",
        "excluded weak-fit formats",
        "safety-filtered candidate set",
        "support-depth estimate",
        "initial candidate logic for Format Suitability Ranking",
      ],
      internalProcessHypothesisLens:
        "Possible mappings include:\n- knowledge gap → concept repair module, comprehensive guide, worked example\n- retrieval gap → retrieval practice set, flashcards, micro-recall drill\n- retrieval-to-action gap → action-sequence drill, scenario walkthrough, decision tree\n- cue-processing failure → cue-recognition drill, case comparison, cue-response examples\n- false certainty → contrastive worked example, confidence calibration module\n- underconfidence → evidence-anchored confidence calibration support\n- cognitive overload → schema map, low-load decision tree, staged micro-explanation\n- safety-trigger weakness → safety-trigger training module, prioritisation map\n- script-following → cue-driven station variant walkthrough\n- format unfamiliarity → tutorial first or simpler alternative",
      subcomponents: [
        "target category",
        "format family suitability",
        "weak-fit exclusion",
        "safety suitability",
        "support depth requirement",
        "burden feasibility pre-check",
        "unresolved hypothesis flag",
      ],
      dynamicStateEffects: "Influences Current Format Match Confidence and Current Format Selection Readiness.",
      profileEffects:
        "Uses learner profile and engagement profile only as context. Does not create a profile update by itself.",
      engineEffects: "Feeds Adaptive Learning Engine and Format Suitability Ranking.",
      connectorLogic:
        "Step 5 Support Routing Package\n→ Support Target-to-Format Mapping\n→ Format Candidate Generation Gate\n→ Format Suitability Ranking",
      guardrails: [
        "Interpret the internal-process target before choosing a format.",
        "Preserve alternative explanations when evidence is not strong.",
        "Do not collapse different internal-process targets into one generic “study more” output.",
        "Do not recommend a high-burden format without usability checking.",
      ],
      mustNotDoRules: [
        "Must not map missed checklist items directly to learning content.",
        "Must not treat topic recall as the only learning need.",
        "Must not assume content-heavy formats are automatically better.",
        "Must not override learner agency.",
      ],
    }),
  }),

  "step5-learning-format-library-metadata": card({
    id: "step5-learning-format-library-metadata",
    plainTitle: "The format library’s baseline facts",
    technicalLabel: "Learning Format Library Metadata",
    shortExplanation:
      "This gives the system structured baseline information about each learning format, so the learner’s internal support need can be matched against cognitive load, time burden, content depth, interactivity, transfer value, and best-fit use case before personal history is added.",
    selectedLearningFormat: "Format metadata matrix",
    keyGuardrail:
      "Generic metadata is only a scaffold. It must not be presented as learner-specific prediction unless there is learner-specific evidence.",
    blueprintContent: blueprint({
      technicalName: "Learning Format Library Metadata",
      classification: "Metadata record / external format scaffold",
      internalDefinition:
        "Learning Format Library Metadata is structured generic metadata describing the expected properties, burden, strengths, weaknesses, and use cases of each learning format.",
      whyItExists:
        "The Adaptive Learning Engine needs a structured library substrate to compare formats. Without metadata, format selection becomes arbitrary or popularity-based.",
      whatItReads: [
        "available learning formats",
        "format families",
        "format purpose",
        "cognitive load",
        "time burden",
        "content depth",
        "interactivity level",
        "retrieval demand",
        "transfer value",
        "visual load",
        "text load",
        "audio/video load",
        "operational complexity",
        "tutorial availability",
        "best-fit use case",
        "weak-fit use case",
        "safety-target suitability",
        "concept-repair suitability",
        "retrieval-practice suitability",
        "action-conversion suitability",
        "cue-response suitability",
        "confidence-calibration suitability",
        "schema-building suitability",
        "pressure-practice suitability",
        "generic evidence strength",
      ],
      whatItOutputs: [
        "baseline format suitability data",
        "generic criteria for Active Format Detail Pane",
        "input for Support Target-to-Format Mapping",
        "input for Format Ranking and Safety Filter",
        "input for Format Selection Handoff Package",
      ],
      internalProcessHypothesisLens:
        "The metadata does not diagnose the learner. It tells the system which formats are generally suited to different internal-process repair targets.",
      subcomponents: [
        "format family",
        "cognitive cost",
        "time burden",
        "depth",
        "interactivity",
        "retrieval demand",
        "transfer value",
        "operational complexity",
        "tutorial availability",
        "target suitability fields",
        "weak-fit cautions",
        "generic evidence strength",
      ],
      dynamicStateEffects:
        "Feeds current usability and ranking decisions by defining each format’s expected burden and support properties.",
      profileEffects: "Does not update profiles. It is generic external scaffold information.",
      engineEffects: "Feeds the Adaptive Learning Engine and Learning Format Library Resolver.",
      connectorLogic:
        "Learning Format Library Metadata\n→ Support Target-to-Format Mapping\n→ Format Suitability Ranking\n→ Active Format Detail Pane\n→ Format Selection Handoff Package",
      guardrails: [
        "Generic metadata is not learner-specific truth.",
        "Do not fake personalisation.",
        "Do not overload thumbnails with all metadata.",
        "Put detailed criteria in the side detail pane.",
      ],
      mustNotDoRules: [
        "Must not claim “best for this learner” based on generic metadata alone.",
        "Must not update Adaptive Learning-Format Profile.",
        "Must not treat generic metadata as outcome evidence.",
        "Must not display dense metadata on every thumbnail.",
      ],
    }),
  }),

  "step5-learner-specific-format-fit": card({
    id: "step5-learner-specific-format-fit",
    plainTitle: "What has worked for this learner before?",
    technicalLabel: "Learner-Specific Format Fit",
    shortExplanation:
      "This checks whether past format evidence suggests a format is likely to work for this learner, while separating preference from real effectiveness. A format the learner likes is not automatically the format that improves retention, transfer, or re-entry performance.",
    selectedLearningFormat: "Past evidence → fit confidence → recommendation adjustment model",
    keyGuardrail:
      "Learner-specific format effectiveness must not be updated from selection alone. It needs later outcome evidence from Step 6, Step 7, Step 8, or retention/transfer results.",
    blueprintContent: blueprint({
      technicalName: "Learner-Specific Format Fit",
      classification: "Learner-specific fit analysis / profile-informed comparison node",
      internalDefinition:
        "Learner-Specific Format Fit evaluates calibrated learner-format evidence where available, using prior selection, completion, frustration, perceived helpfulness, quick-check effect, re-entry effect, transfer effect, confidence calibration, and tutorial need patterns.",
      whyItExists:
        "The system should become more learner-specific over time. Generic metadata may guide early recommendations, but mature recommendations should increasingly reflect how this learner actually responds to different learning formats.",
      whatItReads: [
        "Adaptive Learning-Format Profile",
        "Learner-Format Response History",
        "prior selection frequency",
        "prior recommendation acceptance",
        "completion rate",
        "abandonment pattern",
        "section-level difficulty pattern",
        "perceived helpfulness",
        "perceived difficulty",
        "frustration response",
        "retention effect",
        "quick-check effect",
        "re-entry performance effect",
        "transfer effect",
        "confidence calibration effect",
        "tutorial need pattern",
        "fit confidence",
      ],
      whatItOutputs: [
        "learner-specific fit estimate",
        "insufficient-data message if evidence is weak",
        "ranking adjustment",
        "recommendation confidence adjustment",
        "possible tutorial need prediction",
        "preference evidence only where outcome evidence is absent",
      ],
      internalProcessHypothesisLens:
        "The node asks whether this learner’s history suggests that a format is likely to repair the current internal-process target, not merely whether the learner tends to choose or like that format.",
      subcomponents: [
        "preference pattern",
        "completion pattern",
        "abandonment pattern",
        "frustration response",
        "retention effect",
        "quick-check effect",
        "re-entry effect",
        "transfer effect",
        "confidence calibration effect",
        "tutorial need pattern",
        "evidence sufficiency",
        "fit confidence",
      ],
      dynamicStateEffects:
        "Influences:\n- Current Format Match Confidence\n- Current Recommendation Acceptance Risk\n- Current Format Selection Readiness",
      profileEffects:
        "Reads Adaptive Learning-Format Profile and Learner-Format Response History. Selection behaviour may provide weak preference evidence, but not effectiveness evidence.",
      engineEffects: "Feeds Adaptive Learning Engine and Format Suitability Ranking.",
      connectorLogic:
        "Adaptive Learning-Format Profile\n+\nLearner-Format Response History\n→ Learner-Specific Format Fit\n→ Format Suitability Ranking\n→ Active Format Detail Pane",
      guardrails: [
        "Preference and effectiveness must remain separate.",
        "Insufficient learner-specific evidence must be shown honestly.",
        "One selection or rejection does not prove format effectiveness.",
        "Learner-specific fit should dominate only when evidence is strong enough.",
      ],
      mustNotDoRules: [
        "Must not claim personal fit without enough evidence.",
        "Must not treat pre-use rating as outcome evidence.",
        "Must not treat learner preference as defiance or competence.",
        "Must not update effectiveness before Step 6 to Step 8 outcome evidence.",
      ],
    }),
  }),

  "step5-current-usability-cross-check": card({
    id: "step5-current-usability-cross-check",
    plainTitle: "Can the learner use this format right now?",
    technicalLabel: "Current Usability Cross-Check",
    shortExplanation:
      "This checks whether a format that looks educationally suitable is actually usable for the learner at this moment, given current cognitive capacity, correction burden, learning momentum, engagement tolerance, and the likely mental cost of the format.",
    selectedLearningFormat: "Educational match vs current usability cross-check",
    keyGuardrail:
      "A theoretically ideal format may be downgraded if it exceeds the learner’s current usable learning window.",
    blueprintContent: blueprint({
      technicalName: "Current Usability Cross-Check",
      blueprintAlignedTechnicalProcess:
        "Cognitive Usability Cross-Check / Cognitive Cost-Fit Analysis / Learning Momentum and Engagement Fit Analysis",
      classification: "Interaction node / dynamic usability gate",
      internalDefinition:
        "Current Usability Cross-Check compares educational suitability against current usability. It checks whether the learner can productively use the format now, considering cognitive cost, correction burden, learning momentum, engagement tolerance, trust state, challenge-fit, and current selection burden.",
      whyItExists:
        "A format can be the right educational match but the wrong current choice. Step 5 must balance educational suitability with present usability.",
      whatItReads: [
        "current cognitive capacity context",
        "current correction burden",
        "learning momentum context",
        "Learner Engagement Profile",
        "support burden tolerance",
        "format cognitive load",
        "format time burden",
        "content depth",
        "visual/text/audio load",
        "interactivity level",
        "operational complexity",
        "tutorial availability",
        "learner trust or hesitation signals",
      ],
      whatItOutputs: [
        "current usability rating",
        "burden mismatch warning",
        "recommendation adjustment",
        "tutorial suggestion where justified",
        "lower-burden alternative flag",
        "ranking adjustment",
        "selection readiness signal",
      ],
      internalProcessHypothesisLens:
        "The cross-check asks whether the learner’s current state can support the learning method. A poor fit may reflect overload, fatigue, low trust, format unfamiliarity, low cognitive window, or excessive interface complexity, not unwillingness to learn.",
      subcomponents: [
        "cognitive room",
        "correction burden",
        "format cognitive cost",
        "time feasibility",
        "engagement tolerance",
        "trust state",
        "challenge-fit",
        "operational complexity",
        "tutorial need",
        "overload risk",
        "selection burden",
      ],
      dynamicStateEffects:
        "Updates or informs:\n- Current Format Usability Window\n- Current Format Selection Readiness\n- Current Selection Burden State\n- Current Recommendation Acceptance Risk",
      profileEffects:
        "May read Learner Engagement Profile and prior format-use evidence. Does not convert current burden into clinical competence.",
      engineEffects:
        "Feeds Adaptive Learning Engine, Format Suitability Ranking, Learner-Centered Communication Filter, and Tutorial Availability Gate.",
      connectorLogic:
        "Current cognitive capacity\n+\nlearning momentum\n+\nengagement profile\n+\ncorrection burden\n+\nformat metadata\n→ Current Usability Cross-Check\n→ Format Suitability Ranking\n→ Top Three Recommended Formats",
      guardrails: [
        "Usability is not competence.",
        "Low current capacity does not mean low ability.",
        "High-burden formats may be delayed or replaced without hiding the true support need.",
        "Safety-linked support must not be hidden to preserve comfort.",
      ],
      mustNotDoRules: [
        "Must not rank purely by educational depth.",
        "Must not push a dense format when the learner’s current window is low.",
        "Must not interpret avoidance as defiance without evidence.",
        "Must not convert burden into ability judgement.",
      ],
    }),
  }),

  "step5-format-suitability-ranking": card({
    id: "step5-format-suitability-ranking",
    plainTitle: "Ranking formats by adaptive fit",
    technicalLabel: "Format Suitability Ranking",
    shortExplanation:
      "This combines the internal support target, generic format metadata, learner-specific evidence, current usability, safety priority, engagement state, and uncertainty level to rank formats by adaptive fit rather than popularity or content volume.",
    selectedLearningFormat: "Multi-factor ranking matrix",
    keyGuardrail:
      "The ranking must preserve uncertainty. If personal evidence is weak, the recommendation should say so instead of pretending to be fully personalised.",
    blueprintContent: blueprint({
      technicalName: "Format Suitability Ranking",
      classification: "Interpretation process / ranking and recommendation decision trace",
      internalDefinition:
        "Format Suitability Ranking combines target fit, generic metadata, learner-specific format evidence, cognitive cost, learning momentum, engagement fit, safety suitability, recommendation confidence, and uncertainty to decide which formats should be shown as the top recommendation set.",
      whyItExists:
        "Step 5 must avoid one-dimensional ranking. The best format is not always the deepest, shortest, most familiar, most preferred, or most popular. It is the strongest adaptive fit for this learner now.",
      whatItReads: [
        "Support Target-to-Format Mapping",
        "Learning Format Library Metadata",
        "Learner-Specific Format Fit",
        "Current Usability Cross-Check",
        "safety priority",
        "confidence calibration need",
        "support depth requirement",
        "burden tolerance",
        "learner engagement context",
        "recommendation acceptance risk",
        "uncertainty level",
        "tutorial need prediction",
      ],
      whatItOutputs: [
        "ranked candidate formats",
        "top recommendation",
        "two alternative recommendations",
        "ranking trace",
        "recommendation confidence",
        "uncertainty flags",
        "downgraded or excluded formats",
        "side-pane explanation inputs",
      ],
      internalProcessHypothesisLens:
        "Ranking is driven by whether the format can repair the corrected internal-process target and whether the learner can use it productively now.",
      subcomponents: [
        "educational target fit",
        "safety suitability",
        "support depth fit",
        "generic metadata fit",
        "learner-specific outcome fit",
        "current usability fit",
        "engagement fit",
        "momentum fit",
        "confidence-calibration fit",
        "tutorial support need",
        "uncertainty level",
        "diversity across top three",
      ],
      dynamicStateEffects:
        "Updates or informs:\n- Current Format Match Confidence\n- Current Format Usability Window\n- Current Recommendation Acceptance Risk\n- Current Format Selection Readiness",
      profileEffects: "Reads profiles and history but does not update effectiveness from ranking alone.",
      engineEffects:
        "Part of the Adaptive Learning Engine’s decision process. Feeds Top Three Recommended Formats and Active Format Detail Pane.",
      connectorLogic:
        "Support Target-to-Format Mapping\n+\nLearning Format Library Metadata\n+\nLearner-Specific Format Fit\n+\nCurrent Usability Cross-Check\n→ Format Suitability Ranking\n→ Top Three Recommended Formats\n→ Active Format Detail Pane",
      guardrails: [
        "Preserve uncertainty.",
        "Make the top three meaningfully different, not near-duplicates.",
        "Do not let generic metadata masquerade as personal fit.",
        "Do not hide why a format was downgraded if the side pane exposes criteria.",
      ],
      mustNotDoRules: [
        "Must not rank by popularity alone.",
        "Must not rank by shortest or deepest format alone.",
        "Must not recommend unsafe or weak-fit formats for high-risk safety targets.",
        "Must not turn ranking into coercion.",
      ],
    }),
  }),

  "step5-top-three-recommended-formats": card({
    id: "step5-top-three-recommended-formats",
    plainTitle: "A focused choice set, not a forced path",
    technicalLabel: "Top Three Recommended Formats",
    shortExplanation:
      "This turns the ranking into a low-burden learner choice set: one primary recommended format and two meaningful alternatives, so the learner receives adaptive guidance without being trapped inside one prescribed route.",
    selectedLearningFormat: "Ranked recommendation set with meaningful alternatives",
    keyGuardrail:
      "The three formats should offer real choice. They must not be three near-duplicate versions of the same support.",
    blueprintContent: blueprint({
      technicalName: "Top Three Recommended Formats",
      classification: "Output/display record / learner-facing recommendation set",
      internalDefinition:
        "Top Three Recommended Formats stores and displays the primary recommended format and two alternative recommended formats selected by Format Suitability Ranking.",
      whyItExists:
        "The learner needs a focused, scannable choice set. Too many options increase cognitive load, but one forced option removes agency.",
      whatItReads: [
        "Format Suitability Ranking",
        "format ranking trace",
        "recommendation confidence",
        "safety suitability",
        "current usability",
        "learner-specific fit estimate",
        "uncertainty flags",
        "format diversity requirement",
      ],
      whatItOutputs: [
        "primary recommended format card",
        "two alternative recommended format cards",
        "active format selection state",
        "side-pane detail context",
        "learner selection options",
        "possible full-library browsing entry point",
      ],
      internalProcessHypothesisLens:
        "The set shows formats selected to repair the current internal-process target while respecting usability and agency.",
      subcomponents: [
        "primary format",
        "alternative format 1",
        "alternative format 2",
        "recommendation rank",
        "recommendation reason",
        "format family",
        "thumbnail preview",
        "uncertainty flag",
        "personal fit estimate availability",
        "active selected thumbnail",
      ],
      dynamicStateEffects:
        "Influences Current Format Selection Readiness and Current Selection Burden State.",
      profileEffects:
        "Learner interaction with the top-three set may later provide preference or agency evidence, but not learning effectiveness by itself.",
      engineEffects: "Feeds Learner Choice & Agency Gate and Active Format Detail Pane.",
      connectorLogic:
        "Format Suitability Ranking\n→ Top Three Recommended Formats\n→ Active Format Detail Pane\n→ Learner Choice & Agency Gate",
      guardrails: [
        "Keep thumbnails visually scannable.",
        "Do not pack dense criteria into thumbnails.",
        "Use the side pane for detailed criteria.",
        "Show meaningful alternatives, not duplicates.",
        "Allow full-library browsing.",
      ],
      mustNotDoRules: [
        "Must not force the learner to select the top recommendation.",
        "Must not present the top recommendation as certain when evidence is limited.",
        "Must not treat alternative selection as failure.",
        "Must not overload the learner with all metadata upfront.",
      ],
    }),
  }),

  "step5-active-format-detail-pane": card({
    id: "step5-active-format-detail-pane",
    plainTitle: "Why this format may fit",
    technicalLabel: "Active Format Detail Pane",
    shortExplanation:
      "This explains the active format’s fit in plain learner-facing terms: why it was recommended, how heavy it may feel, what kind of support it provides, whether personal-fit evidence is available, and whether tutorial help may be useful.",
    selectedLearningFormat: "Thumbnail preview → side-pane explanation via progressive disclosure",
    keyGuardrail:
      "The pane should clarify the recommendation without becoming another feedback report or dense technical ranking trace.",
    blueprintContent: blueprint({
      technicalName: "Active Format Detail Pane",
      classification: "Learner-facing detail surface / progressive disclosure panel",
      internalDefinition:
        "The Active Format Detail Pane shows the criteria, personal fit estimate, recommendation reason, tutorial access, and optional ratings for whichever format thumbnail is active or selected.",
      whyItExists:
        "Thumbnails should stay light. The detail pane provides deeper explanation only when the learner focuses on a format.",
      whatItReads: [
        "active format",
        "format title",
        "format family",
        "brief explanation",
        "recommendation reason",
        "cognitive load",
        "time burden",
        "content depth",
        "interactivity level",
        "retrieval demand",
        "transfer value",
        "best-fit use case",
        "personal fit estimate if enough evidence exists",
        "insufficient-data message if evidence is weak",
        "optional perceived rating controls",
        "tutorial link",
        "uncertainty flags",
      ],
      whatItOutputs: [
        "learner-facing recommendation explanation",
        "optional pre-use rating data",
        "tutorial access",
        "personal fit display or insufficient-data message",
        "choice support context",
        "handoff context if selected",
      ],
      internalProcessHypothesisLens:
        "The pane explains why the format may help the current internal-process target, such as turning deterioration cues into action, repairing a misconception, reducing overload, or calibrating confidence.",
      subcomponents: [
        "recommendation reason",
        "target support fit",
        "cognitive load",
        "time burden",
        "depth",
        "interactivity",
        "transfer value",
        "personal fit estimate",
        "insufficient-data message",
        "optional ratings",
        "tutorial link",
      ],
      dynamicStateEffects:
        "May affect Current Format Selection Readiness, Current Selection Burden State, and Current Learner Agency State.",
      profileEffects:
        "Optional pre-use ratings may provide weak preference or expectation evidence. They do not prove effectiveness.",
      engineEffects: "Feeds Learner Choice & Agency Gate and Format Selection Handoff Package.",
      connectorLogic:
        "Top Three Recommended Formats\n→ Active Format Detail Pane\n→ Learner Choice & Agency Gate\n→ Format Selection Handoff Package",
      guardrails: [
        "Use progressive disclosure.",
        "Keep thumbnail light and pane detailed.",
        "Do not show raw diagnostic logic.",
        "Do not overstate personalisation.",
        "Make tutorial access visible but not forced.",
        "Keep optional ratings optional.",
      ],
      mustNotDoRules: [
        "Must not become Step 4 correction repeated.",
        "Must not become a dense ranking report.",
        "Must not force ratings.",
        "Must not force tutorial use.",
        "Must not claim personal fit without evidence.",
      ],
    }),
  }),

  "step5-learner-choice-agency-gate": card({
    id: "step5-learner-choice-agency-gate",
    plainTitle: "The learner still chooses",
    technicalLabel: "Learner Choice & Agency Gate",
    shortExplanation:
      "This treats the learner’s format choice, hesitation, browsing, or override as evidence about agency, trust, burden, preference, or unfamiliarity, while preserving the learner’s right to choose even when the system has a strong recommendation.",
    selectedLearningFormat: "Choice path → agency signal → advisory logic model",
    keyGuardrail:
      "A learner override is not defiance. It is evidence that must be interpreted cautiously and without blame.",
    blueprintContent: blueprint({
      technicalName: "Learner Choice & Agency Gate",
      blueprintAlignedTechnicalProcesses:
        "Learner Override Respect Gate / Evidence-Based Insistence Gate / Full Library Access Gate / Learner Agency and Preference Signal",
      classification: "Gate / learner agency interpretation node",
      internalDefinition:
        "Learner Choice & Agency Gate allows the learner to accept the top recommendation, choose an alternative, browse the full library, or override the recommendation. It records the choice neutrally and triggers stronger evidence-linked advisory only when repeated ineffective override evidence is strong enough.",
      whyItExists:
        "Adaptive recommendation must not become coercion. The learner needs agency, but the system also needs to respond intelligently when repeated choices are not producing learning gains.",
      whatItReads: [
        "top-three recommendation set",
        "active format detail pane review",
        "learner selected format",
        "recommendation rank",
        "full-library browsing behaviour",
        "time to selection",
        "browsing depth",
        "override status",
        "override pattern context",
        "advisory trigger evidence",
        "learner action after advisory",
        "optional ratings",
        "selection burden signal",
      ],
      whatItOutputs: [
        "Learner Format Choice and Override Record",
        "Learner Agency and Preference Signal",
        "override pattern context",
        "evidence-based advisory trace where justified",
        "tutorial suggestion where justified",
        "handoff context for Step 6",
      ],
      internalProcessHypothesisLens:
        "Choice behaviour may suggest trust, burden, uncertainty, preference, format unfamiliarity, concern about cognitive load, hidden constraints, misunderstanding of the recommendation, or under-calibrated learner-specific evidence. It must not be treated as defiance or poor judgement by default.",
      subcomponents: [
        "direct acceptance",
        "alternative selection",
        "full-library browsing",
        "override status",
        "hesitation",
        "selection burden",
        "advisory trigger",
        "tutorial selection",
        "choice after advisory",
        "optional ratings",
        "preference signal",
        "agency state",
      ],
      dynamicStateEffects:
        "Updates or informs:\n- Current Learner Agency State\n- Current Recommendation Acceptance Risk\n- Current Selection Burden State\n- Current Format Selection Readiness",
      profileEffects:
        "May update Learner Engagement Profile where relevant. May provide weak preference evidence to Adaptive Learning-Format Profile. Does not update effectiveness from selection alone.",
      engineEffects:
        "Feeds Learning Momentum Engine, Learner-Centered Communication Filter, Format Selection Handoff Package, and future recommendation communication logic.",
      connectorLogic:
        "Top Three Recommended Formats\n+\nBrowse Full Library\n→ Learner Choice & Agency Gate\n→ Learner Format Choice and Override Record\n→ Format Selection Handoff Package\n\nConditional advisory connector:\nRepeated ineffective override evidence\n→ Evidence-Based Insistence Gate\n→ advisory message\n→ learner may switch, continue, or watch tutorial",
      guardrails: [
        "Preserve learner agency.",
        "Record override neutrally.",
        "Use evidence-based advisory only when repeated ineffective override evidence exists.",
        "Allow learner to continue even after advisory.",
        "Treat browsing as choice, not failure.",
      ],
      mustNotDoRules: [
        "Must not block non-recommended formats.",
        "Must not shame the learner.",
        "Must not treat one override as a repeated ineffective pattern.",
        "Must not treat preference as effectiveness.",
        "Must not treat browsing as clinical competence evidence.",
        "Must not force tutorial use.",
      ],
    }),
  }),

  "step5-learner-centered-communication-filter": card({
    id: "step5-learner-centered-communication-filter",
    plainTitle: "Making the recommendation understandable",
    technicalLabel: "Learner-Centered Communication Filter",
    shortExplanation:
      "This buffers recommendation wording so the learner receives clear, experience-near guidance without raw diagnostic logic, blame, false certainty, or excessive criteria. It helps explain the recommendation while preserving truth, uncertainty, safety priority, and agency.",
    selectedLearningFormat: "System logic → learner-facing wording filter",
    keyGuardrail:
      "The filter may reduce burden and improve clarity, but it must not soften safety-linked truth or hide uncertainty.",
    blueprintContent: blueprint({
      technicalName: "Learner-Centered Communication Filter",
      blueprintAlignedTechnicalLabel: "Learner-Centered Communication Layer",
      classification: "Communication boundary layer / learner-facing wording filter",
      internalDefinition:
        "The Learner-Centered Communication Filter converts recommendation explanations, advisory messages, side-pane wording, optional rating prompts, tutorial suggestions, and transition messages into clear learner-facing language while preserving evidence strength, uncertainty, safety priority, and learner agency.",
      whyItExists:
        "Step 5 contains complex system-side reasoning. The learner needs understandable, low-burden guidance without receiving raw engine logic or being pushed into a forced recommendation.",
      whatItReads: [
        "recommendation reason",
        "support target summary",
        "recommendation confidence",
        "uncertainty flags",
        "current selection burden",
        "current cognitive capacity context",
        "learner engagement context",
        "confidence calibration need",
        "evidence-based advisory trigger",
        "tutorial suggestion trigger",
        "optional rating prompt",
        "transition wording",
      ],
      whatItOutputs: [
        "learner-facing recommendation explanation",
        "learner-facing insufficient-data message",
        "learner-facing optional rating prompt",
        "learner-facing tutorial suggestion",
        "learner-facing evidence-based advisory",
        "Step 5 transition message",
        "Step 6 transition message",
      ],
      internalProcessHypothesisLens:
        "The filter asks what the learner can productively understand now without distorting the adaptive logic. It preserves the support target but avoids system-side labels that would overload or mislead the learner.",
      subcomponents: [
        "clarity",
        "burden control",
        "uncertainty preservation",
        "safety truth preservation",
        "agency wording",
        "non-blame framing",
        "tutorial support wording",
        "advisory firmness",
        "insufficient-data wording",
        "transition wording",
      ],
      dynamicStateEffects:
        "Influences Current Format Selection Readiness, Current Selection Burden State, and Current Recommendation Acceptance Risk.",
      profileEffects:
        "May read Learner Engagement Profile and confidence context. It must not convert communication burden into clinical competence.",
      engineEffects:
        "Works with Adaptive Learning Engine and Learning Momentum Engine to regulate wording and pacing.",
      connectorLogic:
        "Adaptive Learning Engine\n+\nFormat Suitability Ranking\n+\nCurrent Usability Cross-Check\n+\nLearner Choice & Agency Gate\n→ Learner-Centered Communication Filter\n→ learner-facing Step 5 wording",
      guardrails: [
        "Preserve truth.",
        "Preserve uncertainty.",
        "Preserve safety priority.",
        "Reduce burden without hiding important meaning.",
        "Keep recommendation wording experience-near.",
        "Do not turn recommendation into blame or coercion.",
      ],
      mustNotDoRules: [
        "Must not expose raw diagnostic packages.",
        "Must not create vague reassurance.",
        "Must not hide safety-linked support need.",
        "Must not imply certainty without evidence.",
        "Must not simplify the Step 5 boundary into “study this content.”",
        "Must not rewrite in-character station speech because Step 5 is post-correction format selection, not station simulation.",
      ],
    }),
  }),

  "step5-format-selection-handoff-package": card({
    id: "step5-format-selection-handoff-package",
    plainTitle: "Sending the chosen format into Step 6",
    technicalLabel: "Format Selection Handoff Package",
    shortExplanation:
      "This packages the selected format and the context behind the choice so Step 6 can later analyse the learner’s actual use of the format, including whether the recommendation was accepted, overridden, uncertain, tutorial-supported, or selected from the full library.",
    selectedLearningFormat: "Selection decision → Step 6 monitoring package",
    keyGuardrail:
      "The handoff prepares Step 6 analytics. It must not analyse consumption before the learner uses the format.",
    blueprintContent: blueprint({
      technicalName: "Format Selection Handoff Package",
      classification: "Output package / Step 5-to-Step 6 handoff record",
      internalDefinition:
        "The Format Selection Handoff Package sends the selected format and selection context to Step 6, including recommendation rank, learner choice path, metadata, learner-specific prediction state, optional ratings, advisory trace, tutorial status, uncertainty flags, and expected learning target.",
      whyItExists:
        "Step 6 needs context to interpret consumption analytics. The same behaviour inside a format means different things depending on whether the learner accepted the top recommendation, chose an alternative, browsed the full library, used a tutorial, or selected a high-burden format despite low usability.",
      whatItReads: [
        "selected format",
        "recommendation rank",
        "whether learner selected top recommendation or alternative",
        "whether learner browsed full library",
        "active side-pane criteria shown",
        "generic format metadata",
        "learner-specific prediction state",
        "recommendation confidence",
        "optional pre-use ratings",
        "override advisory shown or not shown",
        "tutorial link shown or opened",
        "hypotheses for Step 6 to monitor",
        "expected learning target",
        "evidence strength and uncertainty flags",
        "learner choice and override record",
      ],
      whatItOutputs: [
        "clean Step 6 handoff package",
        "selected format context",
        "Step 6 monitoring suggestions",
        "uncertainty flags",
        "expected learning target",
        "choice-path evidence",
        "tutorial context",
        "advisory context",
      ],
      internalProcessHypothesisLens:
        "The package preserves why the format was chosen and what internal-process support target it is expected to address, so Step 6 can later judge usability and learning effect correctly.",
      subcomponents: [
        "selected format",
        "recommendation rank",
        "choice path",
        "accepted vs overridden",
        "full-library browsing status",
        "metadata snapshot",
        "personal fit estimate state",
        "uncertainty flags",
        "optional ratings",
        "tutorial status",
        "advisory trace",
        "expected learning target",
        "Step 6 monitoring suggestions",
      ],
      dynamicStateEffects:
        "Closes Step 5 selection readiness and passes context into Step 6 consumption state interpretation.",
      profileEffects:
        "Does not update effectiveness. It supplies context that later Step 6, Step 7, Step 8, retention, and transfer evidence may use to update the Adaptive Learning-Format Profile.",
      engineEffects:
        "Feeds Step 6 Learning-Format Consumption and Learning-Experience Analytics. May pass unresolved hypotheses to Adaptive Station Scheduling Engine as future context.",
      connectorLogic:
        "Learner Choice & Agency Gate\n+\nActive Format Detail Pane\n+\nFormat Suitability Ranking\n→ Format Selection Handoff Package\n→ Step 6 Learning-Format Consumption and Learning-Experience Analytics",
      guardrails: [
        "Selection is not effectiveness.",
        "Pre-use rating is not outcome evidence.",
        "Handoff is not Step 6 analytics.",
        "Preserve uncertainty and recommendation confidence.",
        "Keep selected format context separate from later consumption outcomes.",
      ],
      mustNotDoRules: [
        "Must not analyse scrolling, dwell time, abandonment, completion, or stuck points in Step 5.",
        "Must not update Adaptive Learning-Format Profile effectiveness from selection alone.",
        "Must not choose the next station.",
        "Must not treat browsing or override as competence evidence.",
      ],
    }),
  }),
};
