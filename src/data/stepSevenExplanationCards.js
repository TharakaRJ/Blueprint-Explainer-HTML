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
  cardClassification,
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
  text("Card classification", cardClassification),
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
  categoryLabel: "STEP 7 — QUICK CHECK",
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

export const stepSevenExplanationCards = {
  "step7-quick-check-handoff-package": card({
    id: "step7-quick-check-handoff-package",
    plainTitle: "What should the Quick Check test now?",
    technicalLabel: "Step 7 Quick Check Handoff Package",
    shortExplanation:
      "This carries the learner’s post-format learning state into Step 7 so the system can test the right internal target: what was actually consumed, what was skipped, where the learner struggled, what may be under-exposed, and whether the corrected model is ready to be checked.",
    selectedLearningFormat: "Input → filtering → target-focus pathway",
    keyGuardrail: "The handoff package guides the Quick Check. It does not prove that learning happened.",
    blueprintContent: blueprint({
      technicalName: "Step 7 Quick Check Handoff Package",
      cardClassification: "Input package / cross-step evidence handoff",
      internalDefinition:
        "A structured handoff from Step 6 into Step 7 that tells the Quick Check system what immediate learning target can be fairly and usefully tested after learning-format consumption.",
      whyItExists:
        "Step 6 consumption does not prove learning. The handoff prevents Step 7 from testing randomly, testing material the learner did not meaningfully consume, or treating completion as understanding. It translates actual format-use evidence into a narrow Quick Check target.",
      whatItReads: [
        "Selected learning format",
        "Step 4 / Step 5 support target",
        "Consumption completion state",
        "Section exposure map",
        "Skipped sections",
        "Under-exposed sections",
        "Key stuck points",
        "Repeated review areas",
        "Embedded interaction results",
        "Tutorial-use status",
        "Cognitive burden state",
        "Format usability state",
        "Suspected comprehension difficulty",
        "Suspected format-operation difficulty",
        "Suspected overload",
        "Suspected format-quality issue",
        "Evidence strength",
        "Validity cautions",
        "Recommended Quick Check target focus",
        "Quick Check difficulty adjustment context",
        "Confidence and burden context",
      ],
      whatItOutputs: [
        "Quick Check Target Resolver input",
        "Quick Check Eligibility and Validity Gate input",
        "Quick Check Format Selection Gate input",
        "Quick Check Blueprint Record input",
        "Step 8 Re-Entry Handoff context where relevant",
      ],
      internalProcessHypothesisLens:
        "The handoff preserves several possible explanations before testing:\n- The target may be accessible.\n- The target may be under-exposed.\n- The learner may have consumed the format superficially.\n- The learner may have struggled because of format operation, not target understanding.\n- The format may have been too heavy, too shallow, or unclear.\n- The evidence may be contaminated or insufficient.",
      subcomponents: [
        "Exposure sufficiency",
        "Target relevance",
        "Stuck-point context",
        "Burden context",
        "Format-usability context",
        "Validity caution",
        "Confidence context",
        "Recommended test focus",
      ],
      dynamicStateEffects:
        "Informs Current Target Accessibility State only after Step 7 response evidence is collected. It may constrain Current Step 8 Readiness State if exposure was weak or contaminated.",
      profileEffects:
        "Does not directly update learner profiles as learning outcome evidence. It may help later interpretation of Learner-Format Response History and Adaptive Learning-Format Profile Update Candidate evidence.",
      engineEffects:
        "Feeds the Adaptive Learning Engine and Learning Momentum Engine indirectly by making the Step 7 check targeted and low-burden. It may inform Adaptive Station Scheduling Engine later through Step 8 handoff context, not as a final scheduling decision.",
      connectorLogic:
        "Step 6 consumption evidence → Step 7 Quick Check Handoff Package → Quick Check Target Resolver → Quick Check Format Selection Gate → Learner-Facing Quick Check Surface.",
      guardrails: [
        "Must not treat Step 6 completion as understanding.",
        "Must not test unexposed material without validity caution.",
        "Must not become a full Step 6 analytics report.",
        "Must not create learner blame from skipped or under-exposed material.",
        "Must preserve format-quality and validity cautions.",
      ],
      mustNotDoRules: [
        "Do not show this as a learner score.",
        "Do not use this to cancel Step 8 by default.",
        "Do not infer durable learning from this package.",
        "Do not update long-term learner traits from the handoff alone.",
      ],
    }),
  }),

  "step7-quick-check-target-resolver": card({
    id: "step7-quick-check-target-resolver",
    plainTitle: "Choose the exact target to check",
    technicalLabel: "Quick Check Target Resolver",
    shortExplanation:
      "This identifies which corrected learner-state target should be tested now: immediate retrieval, corrected concept access, cue-action linkage, safety-trigger readiness, explanation quality, application readiness, or confidence calibration.",
    selectedLearningFormat: "Evidence → target-selection pathway",
    keyGuardrail:
      "The resolver selects a narrow immediate target. It must not expand the Quick Check into a broad exam or mini-station.",
    blueprintContent: blueprint({
      technicalName: "Quick Check Target Resolver",
      cardClassification: "Interpretation process / target-selection node",
      internalDefinition:
        "A Step 7 interpretation process that resolves the Step 6 handoff into the specific immediate learning target that should be tested.",
      whyItExists:
        "The learner may have consumed a format that addressed multiple possible needs. Step 7 must avoid testing everything. The resolver selects the most valid, relevant, and fair target based on exposure, support priority, safety importance, and Step 8 preparation value.",
      whatItReads: [
        "Step 7 Quick Check Handoff Package",
        "Primary support target",
        "Secondary support targets",
        "Consumed and under-exposed sections",
        "Stuck points",
        "Safety priority",
        "Validity cautions",
        "Step 6 burden state",
        "Current learning momentum",
        "Confidence context",
        "Step 8 re-entry monitoring needs",
      ],
      whatItOutputs: [
        "Selected Quick Check target",
        "Target type",
        "Target priority",
        "Exposure sufficiency flag",
        "Safety-linked flag",
        "Recommended difficulty level",
        "Recommended response mode",
        "Validity caution for the selected target",
        "Input to Quick Check Format Selection Gate",
      ],
      internalProcessHypothesisLens:
        "The selected target is chosen to reveal whether the learner has actually gained immediate usable access to the corrected internal model, not whether they can complete a generic quiz item.",
      subcomponents: [
        "Target relevance",
        "Target exposure sufficiency",
        "Safety-critical priority",
        "Retrieval target",
        "Conceptual target",
        "Explanation target",
        "Application target",
        "Cue-action target",
        "Confidence-calibration target",
        "Step 8 transfer-monitoring relevance",
      ],
      dynamicStateEffects:
        "Prepares evidence for Current Target Accessibility State, Current Post-Format Retrieval State, Current Explanation Coherence State, Current Application Readiness State, Current Safety-Linked Readiness State, and Current Step 8 Readiness State.",
      profileEffects: "No direct profile update. The profile effect comes only after the learner response is captured and interpreted.",
      engineEffects:
        "Helps Adaptive Learning Engine interpret whether the selected learning format created immediate access to the intended target. Helps Learning Momentum Engine keep Step 7 narrow and low-burden.",
      connectorLogic:
        "Step 7 Quick Check Handoff Package → Quick Check Target Resolver → Quick Check Eligibility and Validity Gate → Quick Check Format Selection Gate.",
      guardrails: [
        "Must test the selected target, not all previous gaps.",
        "Must preserve under-exposure and validity cautions.",
        "Must not treat target selection as outcome evidence.",
        "Must not over-prioritise simple MCQs for complex reasoning targets.",
      ],
      mustNotDoRules: [
        "Do not turn this into a full diagnostic engine.",
        "Do not retest the entire station.",
        "Do not select a target just because it is easiest to implement.",
        "Do not ignore safety-linked targets when they are the active support priority.",
      ],
    }),
  }),

  "step7-quick-check-format-selection-gate": card({
    id: "step7-quick-check-format-selection-gate",
    plainTitle: "Match the check format to the target",
    technicalLabel: "Quick Check Format Selection Gate",
    shortExplanation:
      "This chooses the lowest-burden check format that can still reveal the learner’s current internal access to the target: recognition, explanation, decision, ordering, cue interpretation, safety trigger, or small application.",
    selectedLearningFormat: "Target complexity → response-mode fit matrix",
    keyGuardrail:
      "The check format must match the target. A simple MCQ must not be treated as proof of complex reasoning or safe action readiness.",
    blueprintContent: blueprint({
      technicalName: "Quick Check Format Selection Gate",
      cardClassification: "Gate / format-fit decision node",
      internalDefinition:
        "A Step 7 gate that selects the appropriate Quick Check mode based on target complexity, learner burden, cognitive load, learning momentum, and validity constraints.",
      whyItExists:
        "Different targets require different evidence. A safety-trigger target may need a decision-point check. A concept target may need a short explanation. A cue-action target may need a mini-case or ordering task. The gate prevents mismatched assessment formats.",
      whatItReads: [
        "Selected Quick Check target",
        "Target type",
        "Complexity level",
        "Safety-critical flag",
        "Learner cognitive burden",
        "Learning momentum state",
        "Confidence context",
        "Step 6 exposure quality",
        "Validity cautions",
        "Response-mode suitability",
        "Current Step 8 preparation need",
      ],
      whatItOutputs: [
        "Selected check mode",
        "Item format",
        "Response mode",
        "Difficulty level",
        "Burden level",
        "Confidence prompt inclusion or exclusion",
        "Micro-support trigger conditions",
        "Quick Check Blueprint Record input",
      ],
      internalProcessHypothesisLens:
        "The selected check format must reveal whether the corrected internal model is usable, not merely whether the learner can recognise a familiar option.",
      subcomponents: [
        "MCQ fit",
        "Short-answer fit",
        "Ordering-task fit",
        "Decision-point fit",
        "Mini-case fit",
        "Voice-explanation fit",
        "AI voice chat fit",
        "Compare-and-contrast fit",
        "Confidence prompt fit",
        "Burden adjustment",
      ],
      dynamicStateEffects:
        "Influences the strength and validity of Current Target Accessibility State. A weakly matched check format must produce weaker interpretation.",
      profileEffects: "No direct profile update. Profile relevance depends on response quality and validity after the check.",
      engineEffects:
        "Supports Adaptive Learning Engine by making Step 7 outcome evidence interpretable. Supports Learning Momentum Engine by choosing a format that is useful without becoming heavy.",
      connectorLogic:
        "Quick Check Target Resolver → Quick Check Format Selection Gate → Quick Check Blueprint Record → Learner-Facing Quick Check Surface.",
      guardrails: [
        "The check must stay short.",
        "Format complexity must be justified by target complexity.",
        "Complex targets should not be flattened into recognition-only checks.",
        "Simple targets should not be over-tested with heavy explanation tasks.",
        "The selected format must not become a mini-OSCE.",
      ],
      mustNotDoRules: [
        "Do not recreate a station.",
        "Do not test multiple domains unless required for the selected target.",
        "Do not use voice fluency as reasoning quality without content analysis.",
        "Do not use MCQ correctness as full mastery.",
      ],
    }),
  }),

  "step7-learner-facing-quick-check-surface": card({
    id: "step7-learner-facing-quick-check-surface",
    plainTitle: "The learner’s short check moment",
    technicalLabel: "Learner-Facing Quick Check Surface",
    shortExplanation:
      "This presents the learner with a short, low-stakes check that reveals whether the corrected target is now accessible enough to carry into re-entry.",
    selectedLearningFormat: "Low-stakes interaction surface",
    keyGuardrail:
      "The surface must feel like a quick readiness check, not a score screen, examiner judgement, or second station.",
    blueprintContent: blueprint({
      technicalName: "Learner-Facing Quick Check Surface",
      cardClassification: "Learner-facing surface / input surface",
      internalDefinition:
        "The Step 7 learner-facing interface where the selected Quick Check is presented and the learner gives a short response.",
      whyItExists:
        "The learner needs to actively retrieve, explain, order, choose, identify, or apply the target after consuming the learning format. Passive completion is not enough. The surface creates a brief output moment without turning Step 7 into a test of worth or competence.",
      whatItReads: [
        "Quick Check Blueprint Record",
        "Selected check format",
        "Learner-Centered Communication Layer wording",
        "Burden and momentum context",
        "Confidence prompt rule",
        "Accessibility or response-mode requirements",
      ],
      whatItOutputs: [
        "Learner Quick Check Response Record",
        "Raw answer or transcript",
        "Selected option or ordered sequence",
        "Response time",
        "Confidence response where captured",
        "Revision behaviour where relevant",
        "Prompt context",
        "Input to Quick Check Evidence Ledger",
      ],
      internalProcessHypothesisLens:
        "The learner’s response is evidence of current accessibility, explanation coherence, application readiness, confidence calibration, and residual fragility. It is not a final competence verdict.",
      subcomponents: [
        "Simple check interaction",
        "Voice Quick Check interface",
        "Mini-case or decision-point check",
        "Confidence prompt",
        "Immediate feedback area",
        "Optional micro-recheck area when justified",
        "Step 8 transition message",
      ],
      dynamicStateEffects:
        "Provides raw evidence used to update Current Target Accessibility State, Current Post-Format Retrieval State, Current Explanation Coherence State, Current Application Readiness State, Current Confidence After Learning State, and Current Step 8 Readiness State.",
      profileEffects:
        "No direct profile update from surface interaction alone. Interpreted response evidence may later support cautious profile updates.",
      engineEffects:
        "Supports Learning Momentum Engine through low-burden framing and transition pacing. Supports Adaptive Learning Engine through usable response evidence.",
      connectorLogic:
        "Quick Check Format Selection Gate → Learner-Facing Quick Check Surface → Learner Quick Check Response → Quick Check Evidence Ledger → Immediate Learning-Effect Analytics.",
      guardrails: [
        "Must not display pass/fail.",
        "Must not display percentage score as the main output.",
        "Must not give answer-revealing hints before the response.",
        "Must not teach during the check itself.",
        "Must preserve low cognitive burden.",
        "Must keep immediate feedback after the response.",
      ],
      mustNotDoRules: [
        "Do not make this a station simulation.",
        "Do not include extended role-play.",
        "Do not make the learner complete a full OSCE domain assessment.",
        "Do not frame the learner as ready or not ready in absolute terms.",
      ],
    }),
  }),

  "step7-quick-check-evidence-ledger": card({
    id: "step7-quick-check-evidence-ledger",
    plainTitle: "Record what the check revealed",
    technicalLabel: "Quick Check Evidence Ledger",
    shortExplanation:
      "This stores the learner’s Quick Check response as evidence of immediate target accessibility: what they retrieved, explained, applied, hesitated over, felt confident about, or still showed as fragile.",
    selectedLearningFormat: "Response → evidence-quality ledger",
    keyGuardrail: "The ledger records evidence. It must not become a learner-facing score report.",
    blueprintContent: blueprint({
      technicalName: "Quick Check Evidence Ledger",
      cardClassification: "Evidence ledger",
      internalDefinition:
        "The structured evidence record of Step 7 learner responses, including response quality, timing, confidence, burden, validity, and interpretation context.",
      whyItExists:
        "Step 7 needs to preserve exactly what happened during the Quick Check so later analytics can distinguish immediate access, shallow recognition, under-exposure, confidence mismatch, format weakness, burden, and residual gaps.",
      whatItReads: [
        "Quick Check Blueprint Record",
        "Prompt shown",
        "Learner Quick Check Response",
        "Response mode",
        "Timing",
        "Confidence signal",
        "Revision behaviour",
        "Validity flags",
        "Immediate feedback shown",
        "Micro-support trigger status",
      ],
      whatItOutputs: [
        "Immediate Learning-Effect Analytics",
        "Target Accessibility Interpretation",
        "Micro-Support Need Gate",
        "Adaptive Learning-Format Profile Update Candidate Record",
        "Learner-Format Response History",
        "Step 8 Re-Entry Handoff Package",
      ],
      internalProcessHypothesisLens:
        "The same answer can mean different things depending on exposure, timing, confidence, explanation quality, response mode, and burden. The ledger keeps enough context to avoid over-interpretation.",
      subcomponents: [
        "Timestamp",
        "Linked Quick Check ID",
        "Linked support target",
        "Prompt shown",
        "Response mode",
        "Raw response",
        "Selected answer",
        "Explanation text",
        "Response time",
        "Revision behaviour",
        "Confidence signal",
        "Retrieval quality",
        "Explanation quality",
        "Application quality",
        "Safety-critical adequacy",
        "Error pattern",
        "Burden signal",
        "Evidence strength",
        "Validity caution",
        "Immediate feedback shown",
        "Micro-support triggered",
        "Profile relevance",
      ],
      dynamicStateEffects:
        "Feeds the dynamic Step 7 variables through analytics, especially Current Target Accessibility State and Current Step 8 Readiness State.",
      profileEffects:
        "May support cautious Learner Profile update only after interpretation. May support Learner-Format Response History and Adaptive Learning-Format Profile Update Candidate evidence. Must not create stable traits from one Quick Check.",
      engineEffects:
        "Feeds Adaptive Learning Engine, Learning Momentum Engine, and later Adaptive Station Scheduling Engine context through interpreted outputs.",
      connectorLogic:
        "Learner-Facing Quick Check Surface → Learner Quick Check Response → Quick Check Evidence Ledger → Immediate Retrieval Check / Corrected Concept Accessibility Check / Explanation Quality Check / Application Check / Confidence Calibration Signal / Format Effectiveness Signal.",
      guardrails: [
        "Must preserve raw response and interpretation separately.",
        "Must record validity cautions.",
        "Must record confidence as a signal, not truth.",
        "Must not collapse different response modes into the same evidence strength.",
        "Must not expose itself as a score report.",
      ],
      mustNotDoRules: [
        "Do not convert ledger data into pass/fail display.",
        "Do not treat a single incorrect answer as a stable weakness.",
        "Do not treat a correct MCQ as full concept mastery.",
        "Do not treat high confidence as understanding.",
        "Do not treat low confidence as poor understanding.",
      ],
    }),
  }),

  "step7-immediate-learning-effect-analytics": card({
    id: "step7-immediate-learning-effect-analytics",
    plainTitle: "Check whether learning became usable",
    technicalLabel: "Immediate Learning-Effect Analytics",
    shortExplanation:
      "This interprets the learner’s Quick Check response to estimate whether the corrected target is now retrievable, explainable, applicable, confidence-calibrated, and ready to be tested in Step 8.",
    selectedLearningFormat: "Retrieval → explanation → application → confidence → residual-gap stack",
    keyGuardrail:
      "These analytics show immediate accessibility only. They do not prove transfer, retention, or durable competence.",
    blueprintContent: blueprint({
      technicalName: "Immediate Learning-Effect Analytics",
      cardClassification: "Analytics bundle / immediate outcome interpretation layer",
      internalDefinition:
        "A Step 7 analytics layer that interprets learner Quick Check evidence to determine whether the recent learning support produced immediate usable access to the targeted correction.",
      whyItExists:
        "Step 6 showed how the learner used the format. Step 7 must test whether that use changed the learner’s internal accessibility. These analytics convert the learner’s short output into structured evidence for Step 8 readiness, micro-support, format-effectiveness calibration, and future support decisions.",
      whatItReads: [
        "Quick Check Evidence Ledger",
        "Quick Check Blueprint Record",
        "Linked support target",
        "Response quality",
        "Explanation text",
        "Decision or application quality",
        "Confidence signal",
        "Safety-critical adequacy",
        "Response timing",
        "Burden signal",
        "Step 6 exposure and validity context",
      ],
      whatItOutputs: [
        "Target Accessibility Interpretation",
        "Current Target Accessibility State",
        "Current Post-Format Retrieval State",
        "Current Explanation Coherence State",
        "Current Application Readiness State",
        "Current Safety-Linked Readiness State",
        "Current Confidence After Learning State",
        "Current Residual Gap State",
        "Current Micro-Support Need State",
        "Input to Immediate Feedback Generator",
        "Input to Micro-Support Need Gate",
        "Input to Step 8 Re-Entry Handoff Package",
      ],
      internalProcessHypothesisLens:
        "Analytics must preserve multiple possible explanations for weak or mixed evidence:\n- The learner may not have digested the target.\n- The target may be accessible but fragile.\n- Recognition may exceed explanation.\n- Explanation may exceed decision readiness.\n- The format may have under-supported the target.\n- Step 6 exposure may have been incomplete.\n- Confidence may be over- or under-calibrated.\n- The Quick Check item may have been unclear.\n- Burden may have reduced output quality.",
      subcomponents: [
        "Immediate Retrieval Check",
        "Corrected Concept Accessibility Check",
        "Explanation Quality Check",
        "Application / Decision-Point Check",
        "Safety-Critical Target Check",
        "Confidence Calibration After Learning Signal",
        "Residual Gap Signal",
        "Quick Check Burden and Momentum Signal",
      ],
      dynamicStateEffects: "Updates Step 7 dynamic variables as live interpreted states, not permanent traits.",
      profileEffects:
        "Can produce weighted update candidates for Learner Profile and Adaptive Learning-Format Profile only where evidence strength and validity justify it. Stronger conclusions require Step 8 and later evidence.",
      engineEffects:
        "Feeds Adaptive Learning Engine with immediate support-effect evidence. Feeds Learning Momentum Engine with burden and transition context. Feeds Adaptive Station Scheduling Engine only as future-testing context, not final scheduling.",
      connectorLogic:
        "Quick Check Evidence Ledger → Immediate Learning-Effect Analytics → dynamic Step 7 variables → Immediate Feedback Generator / Micro-Support Need Gate / Step 8 Re-Entry Handoff Package.",
      guardrails: [
        "Must keep immediate accessibility separate from transfer.",
        "Must keep response correctness separate from internal interpretation.",
        "Must preserve alternative explanations.",
        "Must not over-update profiles from one check.",
        "Must not treat weak performance as learner blame.",
      ],
      mustNotDoRules: [
        "Do not produce a final learning diagnosis.",
        "Do not say the format definitely worked or failed.",
        "Do not say the learner is competent or incompetent.",
        "Do not ignore Step 6 exposure or validity context.",
      ],
    }),
  }),

  "step7-current-target-accessibility-state": card({
    id: "step7-current-target-accessibility-state",
    plainTitle: "Is the corrected target accessible right now?",
    technicalLabel: "Current Target Accessibility State",
    shortExplanation:
      "This shows the learner’s current post-format access to the corrected target: strong, partial, fragile, absent, or unclear, based on what they could retrieve, explain, apply, and calibrate during the Quick Check.",
    selectedLearningFormat: "Live-state meter",
    keyGuardrail: "This is a current interpreted state, not a permanent learner trait.",
    blueprintContent: blueprint({
      technicalName: "Current Target Accessibility State",
      cardClassification: "Dynamic variable",
      internalDefinition:
        "A live interpreted Step 7 state showing whether the selected correction target is immediately accessible after learning-format consumption.",
      whyItExists:
        "The system needs to know whether the learner can take the corrected internal model into Step 8 as standard, cautious, or micro-supported re-entry. This state gives a concise interpretation without turning the Quick Check into a score.",
      whatItReads: [
        "Immediate Retrieval Check",
        "Corrected Concept Accessibility Check",
        "Explanation Quality Check",
        "Application / Decision-Point Check",
        "Safety-Critical Target Check",
        "Confidence Calibration After Learning Signal",
        "Residual Gap Signal",
        "Validity cautions",
        "Step 6 exposure context",
        "Micro-support response where available",
      ],
      whatItOutputs: [
        "Step 8 Re-Entry Handoff Package",
        "Immediate Feedback Generator",
        "Micro-Support Need Gate",
        "Learning Momentum Engine transition context",
        "Adaptive Learning Engine support-effect context",
        "Cautious learner-profile update candidate where justified",
      ],
      internalProcessHypothesisLens:
        "A target may appear strong, partial, fragile, absent, or unclear for different reasons. The state must preserve whether weakness likely reflects poor digestion, under-exposure, overload, item confusion, format mismatch, confidence mismatch, or true residual gap.",
      subcomponents: [
        "Retrieval accessibility",
        "Corrected concept access",
        "Explanation coherence",
        "Decision/application readiness",
        "Safety-linked readiness",
        "Confidence alignment",
        "Residual gap severity",
        "Evidence strength",
        "Validity status",
      ],
      dynamicStateEffects:
        "This is itself a dynamic variable. It may influence Current Step 8 Readiness State and Current Micro-Support Need State.",
      profileEffects:
        "May contribute cautious pattern evidence only if supported and weighted. It must not create a stable learner trait from one Quick Check.",
      engineEffects:
        "Adaptive Learning Engine uses it as immediate support-effect evidence. Learning Momentum Engine uses it for transition pacing. Adaptive Station Scheduling Engine may receive residual-gap context later through Step 8 handoff.",
      connectorLogic:
        "Immediate Learning-Effect Analytics → Current Target Accessibility State → Immediate Feedback Generator / Micro-Support Need Gate / Step 8 Re-Entry Handoff Package.",
      guardrails: [
        "Must not be displayed as a grade.",
        "Must include uncertainty when evidence is weak.",
        "Must account for validity and under-exposure.",
        "Must not equal transfer readiness by itself.",
      ],
      mustNotDoRules: [
        "Do not label the learner as ready or not ready in absolute terms.",
        "Do not treat strong immediate access as transfer proven.",
        "Do not treat weak access as stable inability.",
        "Do not ignore confidence mismatch.",
      ],
    }),
  }),

  "step7-format-effectiveness-signal": card({
    id: "step7-format-effectiveness-signal",
    plainTitle: "Did this format seem to help immediately?",
    technicalLabel: "Format Effectiveness Signal",
    shortExplanation:
      "This compares the Step 5 recommendation, Step 6 consumption pattern, and Step 7 Quick Check result to estimate whether the selected learning format produced immediate usable access to the target.",
    selectedLearningFormat: "Prediction → consumption → immediate outcome triangulation",
    keyGuardrail:
      "This signal is provisional. Step 7 can suggest immediate format effect, but Step 8 and later evidence are needed for transfer and durability.",
    blueprintContent: blueprint({
      technicalName: "Format Effectiveness Signal",
      cardClassification: "Interpretation process / provisional learner-format effectiveness signal",
      internalDefinition:
        "A Step 7 interpretation process that compares the format recommendation context, actual consumption evidence, and immediate Quick Check outcome to generate cautious evidence about whether the format helped this learner with this target.",
      whyItExists:
        "Step 5 predicted a format fit. Step 6 observed use. Step 7 tests immediate effect. The signal connects these layers so the platform learns whether the format was useful for this learner, for this type of target, under these conditions.",
      whatItReads: [
        "Step 5 selected format",
        "Recommendation rank",
        "Recommendation confidence",
        "Learner choice or override path",
        "Generic format metadata",
        "Personal fit estimate",
        "Step 6 consumption evidence",
        "Section exposure and under-exposure",
        "Tutorial use",
        "Stuck points",
        "Format usability state",
        "Format-quality cautions",
        "Quick Check result",
        "Target accessibility state",
        "Confidence after learning",
        "Validity cautions",
      ],
      whatItOutputs: [
        "Adaptive Learning-Format Profile Update Candidate Record",
        "Learner-Format Response History",
        "Adaptive Learning Engine recommendation recalibration context",
        "Format Quality Knowledge Base or Quick Check Item Review Queue if weakness appears format-side or item-side",
        "Step 8 Re-Entry Handoff context",
        "Future support decision context",
      ],
      internalProcessHypothesisLens:
        "A strong Quick Check may indicate immediate format usefulness, prior familiarity, simple target difficulty, or recognition without deeper transfer. A weak Quick Check may indicate poor digestion, under-exposure, format mismatch, format-quality issue, item confusion, overload, or persistent misconception.",
      subcomponents: [
        "Recommendation-to-result alignment",
        "Consumption-to-result alignment",
        "Exposure-adjusted effect signal",
        "Tutorial-mediated effect signal",
        "Burden-adjusted effect signal",
        "Format-quality caution",
        "Immediate accessibility outcome",
        "Confidence alignment after learning",
      ],
      dynamicStateEffects:
        "Updates Current Immediate Format Effectiveness State where implemented. Can influence Current Step 8 Readiness State indirectly.",
      profileEffects:
        "Creates an Adaptive Learning-Format Profile Update Candidate only. It does not finalize format effectiveness. It also links Step 7 result to Learner-Format Response History.",
      engineEffects:
        "Feeds Adaptive Learning Engine for future recommendation calibration. May feed Learning Momentum Engine if the format appeared to increase or reduce burden. May feed format-quality systems if item or format-side problems are suspected.",
      connectorLogic:
        "Step 5 recommendation context + Step 6 consumption evidence + Step 7 Quick Check result → Format Effectiveness Signal → Adaptive Learning-Format Profile Update Candidate Record → Adaptive Learning Engine.",
      guardrails: [
        "Must remain provisional.",
        "Must account for Step 6 exposure quality.",
        "Must separate learner difficulty from format-quality problems.",
        "Must not treat immediate success as transfer.",
        "Must not treat one Quick Check as durable format proof.",
      ],
      mustNotDoRules: [
        "Do not declare “this format works best for this learner” from one Step 7 result.",
        "Do not over-update Adaptive Learning-Format Profile.",
        "Do not route format-quality issues into the learner profile.",
        "Do not ignore learner override or recommendation confidence context.",
      ],
    }),
  }),

  "step7-immediate-feedback-generator": card({
    id: "step7-immediate-feedback-generator",
    plainTitle: "Give the learner a brief useful result",
    technicalLabel: "Immediate Feedback Generator",
    shortExplanation:
      "This converts the learner’s immediate accessibility signal into a short, correction-linked message: what is accessible enough to carry forward, what needs a quick reset, and how Step 8 will use the result.",
    selectedLearningFormat: "Answer interpretation → brief feedback → transition framing",
    keyGuardrail: "Feedback must stay brief. It must not become detailed feedback, Step 4 correction, or a scoring report.",
    blueprintContent: blueprint({
      technicalName: "Immediate Feedback Generator",
      cardClassification: "Learner-facing output generator / communication-prep process",
      internalDefinition:
        "A Step 7 process that produces brief learner-facing feedback after the Quick Check response has been interpreted.",
      whyItExists:
        "The learner needs immediate closure and transition guidance before Step 8. The feedback should clarify whether the target is accessible enough, whether one point needs micro-support, and what will be carried into re-entry without turning Step 7 into a feedback-heavy stage.",
      whatItReads: [
        "Quick Check Evidence Ledger",
        "Target Accessibility Interpretation",
        "Immediate Learning-Effect Analytics",
        "Confidence Calibration After Learning Signal",
        "Residual Gap Signal",
        "Safety-Critical Target Check",
        "Micro-Support Need Gate input",
        "Learning Momentum context",
        "Learner-Centered Communication Layer rules",
      ],
      whatItOutputs: [
        "Immediate Feedback Message",
        "Immediate Feedback Trace",
        "Micro-Support Need Gate trigger context",
        "Step 8 Transition Message context",
        "Confidence-sensitive wording where relevant",
      ],
      internalProcessHypothesisLens:
        "Feedback should reflect what the response suggests about current accessibility, not assign personal labels. It should distinguish “accessible,” “partly accessible,” “fragile,” “needs a quick reset,” and “unclear because evidence is contaminated.”",
      subcomponents: [
        "Adequate target-access feedback",
        "Partial-access feedback",
        "Safety-linked reset feedback",
        "Confidence mismatch feedback",
        "Under-exposure caution",
        "Validity caution",
        "Step 8 transition framing",
      ],
      dynamicStateEffects:
        "Responds to Current Target Accessibility State, Current Confidence After Learning State, Current Residual Gap State, Current Micro-Support Need State, and Current Step 8 Readiness State.",
      profileEffects:
        "Stores what feedback was shown through Immediate Feedback Trace. Does not itself update learner profile unless paired with learner response or later outcome evidence.",
      engineEffects:
        "Supports Learning Momentum Engine by keeping feedback low-burden and forward-moving. Supports Adaptive Learning Engine by making the learner-facing interpretation consistent with the analytic state.",
      connectorLogic:
        "Immediate Learning-Effect Analytics → Target Accessibility Interpretation → Immediate Feedback Generator → Immediate Feedback Trace → Micro-Support Need Gate or Step 8 Transition.",
      guardrails: [
        "Must be brief.",
        "Must be correction-linked.",
        "Must not show percentage score or pass/fail.",
        "Must not repeat Step 4 in detail.",
        "Must not present a final competence judgement.",
        "Must not hide safety-linked weakness.",
      ],
      mustNotDoRules: [
        "Do not write examiner-style feedback.",
        "Do not give a full worked solution.",
        "Do not make feedback motivational filler.",
        "Do not say “you failed.”",
        "Do not say “you are ready” as an absolute judgement.",
        "Do not use feedback to cancel Step 8 by default.",
      ],
    }),
  }),

  "step7-micro-support-pathway": card({
    id: "step7-micro-support-pathway",
    plainTitle: "Give one quick reset if needed",
    technicalLabel: "Micro-Support Need Gate + Brief Targeted Micro-Support",
    shortExplanation:
      "This detects whether the Quick Check shows a weak, unsafe, unclear, or fragile target-access signal that needs one focused reset before Step 8, while keeping the pathway moving.",
    selectedLearningFormat:
      "Weak / unsafe / unclear signal → one focused reset → Step 8 with caution flags",
    keyGuardrail:
      "Micro-support is not heavy remediation. It must not reopen Step 5, launch a full lesson, or cancel Step 8 by default.",
    blueprintContent: blueprint({
      technicalName: "Micro-Support Need Gate + Brief Targeted Micro-Support",
      cardClassification: "Conditional gate plus learner-facing micro-support pathway",
      internalDefinition:
        "A Step 7 conditional support pathway that decides whether a brief targeted reset is needed after a weak, unsafe, incomplete, or unclear Quick Check result.",
      whyItExists:
        "The module should not punish weak Step 7 evidence or derail the cycle. If one point needs rapid stabilisation before Step 8, Step 7 can provide a short correction, hint, worked contrast, or explanation, then proceed into re-entry with caution flags.",
      whatItReads: [
        "Residual Gap Signal",
        "Safety-Critical Target Check",
        "Current Target Accessibility State",
        "Current Safety-Linked Readiness State",
        "Confidence mismatch",
        "Burden and momentum state",
        "Validity cautions",
        "Step 6 exposure context",
        "Learner response quality",
        "Immediate Feedback Generator output",
      ],
      whatItOutputs: [
        "Brief Targeted Micro-Support",
        "Micro-Support Trace",
        "Optional Micro-Recheck where very brief and justified",
        "Step 8 Re-Entry Handoff Package caution flags",
        "Learning Momentum Engine transition context",
        "Adaptive Learning Engine context",
        "Future-testing context where residual gap remains",
      ],
      internalProcessHypothesisLens:
        "A micro-support need may reflect remaining target fragility, unsafe rule persistence, under-exposure, overload, wording confusion, shallow recognition, or confidence mismatch. The gate must not assume laziness, refusal, or stable incompetence.",
      subcomponents: [
        "Safety-linked micro-support trigger",
        "Residual-gap trigger",
        "Confidence-mismatch trigger",
        "Under-exposure caution",
        "Validity caution",
        "Brief reset content",
        "Optional micro-recheck",
        "Micro-support trace",
        "Step 8 caution flag",
      ],
      dynamicStateEffects:
        "Updates Current Micro-Support Need State and Current Step 8 Readiness State. May modify Current Target Accessibility State if optional micro-recheck shows immediate repair.",
      profileEffects:
        "Micro-support evidence is cautious and conditional. It may enter Learner-Format Response History or Learner Profile only as interpreted, validity-checked evidence. It must not become a stable trait.",
      engineEffects:
        "Learning Momentum Engine uses this to keep support brief and prevent overload. Adaptive Learning Engine receives immediate support-response evidence. Adaptive Station Scheduling Engine may later receive residual-gap context through Step 8 and scheduling pathways.",
      connectorLogic:
        "Residual Gap Signal / Safety-Critical Target Check → Micro-Support Need Gate → Brief Targeted Micro-Support → Micro-Support Trace → Optional Micro-Recheck if justified → Step 8 Re-Entry Handoff Package.",
      guardrails: [
        "Micro-support must be brief and targeted.",
        "Step 8 still proceeds with caution flags unless severe technical failure, invalid evidence, or learner-directed pause occurs.",
        "Safety-linked weakness must be clearly addressed.",
        "Micro-support must not become a second teaching module.",
        "Optional micro-recheck must be very limited.",
      ],
      mustNotDoRules: [
        "Do not reopen full Step 5 format selection.",
        "Do not launch a comprehensive guide by default.",
        "Do not cancel Step 8 by default.",
        "Do not blame the learner.",
        "Do not create a heavy remediation branch.",
        "Do not hide the fact that a safety-linked point was weak.",
      ],
    }),
  }),

  "step7-step8-re-entry-handoff-package": card({
    id: "step7-step8-re-entry-handoff-package",
    plainTitle: "Carry the result into re-entry",
    technicalLabel: "Step 8 Re-Entry Handoff Package",
    shortExplanation:
      "This packages what Step 8 needs to know about the learner’s immediate target access: what improved, what remains fragile, what micro-support was delivered, what confidence signal appeared, and what Step 8 should watch during transfer.",
    selectedLearningFormat: "Accessibility state → residual-gap map → re-entry monitoring package",
    keyGuardrail:
      "The handoff prepares Step 8. It does not prove transfer and does not decide final station scheduling.",
    blueprintContent: blueprint({
      technicalName: "Step 8 Re-Entry Handoff Package",
      cardClassification: "Output package / transfer-preparation handoff",
      internalDefinition:
        "A structured Step 7 output package that sends immediate learning-effect evidence, target accessibility state, residual gaps, confidence state, micro-support trace, burden context, and validity flags into Step 8 Re-Entry Station.",
      whyItExists:
        "Step 8 tests whether the corrected target can transfer into a related station condition. It needs to know what Step 7 suggested, what remains weak, and what should be monitored during re-entry.",
      whatItReads: [
        "Quick Check Evidence Ledger",
        "Immediate Learning-Effect Analytics",
        "Current Target Accessibility State",
        "Current Post-Format Retrieval State",
        "Current Explanation Coherence State",
        "Current Application Readiness State",
        "Current Safety-Linked Readiness State",
        "Current Confidence After Learning State",
        "Current Residual Gap State",
        "Current Micro-Support Need State",
        "Micro-Support Trace",
        "Immediate Feedback Trace",
        "Format Effectiveness Signal",
        "Validity cautions",
        "Burden and momentum context",
      ],
      whatItOutputs: [
        "Step 8 Re-Entry Station input",
        "Re-entry monitoring priorities",
        "Standard / cautious / micro-supported transfer expectation",
        "Residual-gap watchlist",
        "Confidence calibration watchlist",
        "Safety-linked monitoring priority",
        "Validity flags for Step 8 interpretation",
        "Future scheduling context after Step 8, not before",
      ],
      internalProcessHypothesisLens:
        "The handoff tells Step 8 what immediate learning state was suggested, while preserving that true transfer remains untested. It carries hypotheses, not conclusions.",
      subcomponents: [
        "Immediate learning-effect result",
        "Target accessibility state",
        "Remaining weak points",
        "Micro-support delivered",
        "Confidence calibration state",
        "Re-entry readiness state",
        "Validity cautions",
        "Re-entry monitoring priorities",
        "Transfer expectation flag",
        "Residual-gap context",
      ],
      dynamicStateEffects:
        "Packages Step 7 dynamic variables into Step 8 context. Does not freeze them as permanent states.",
      profileEffects:
        "No final profile update from the handoff alone. Profile implications should be weighted after Step 8 confirms, weakens, or reframes Step 7 evidence.",
      engineEffects:
        "Adaptive Learning Engine receives immediate-effect context. Learning Momentum Engine uses transition readiness and burden context. Adaptive Station Scheduling Engine may later use Step 7 plus Step 8 evidence, but Step 7 does not make final scheduling decisions.",
      connectorLogic:
        "Step 7 dynamic variables + Immediate Feedback Trace + Micro-Support Trace + Format Effectiveness Signal → Step 8 Re-Entry Handoff Package → Step 8 Re-Entry Station.",
      guardrails: [
        "Step 7 success does not prove transfer.",
        "Step 7 weakness does not cancel Step 8 by default.",
        "Residual gaps should become monitoring priorities, not punishment.",
        "Scheduling remains later.",
        "Validity cautions must be preserved.",
      ],
      mustNotDoRules: [
        "Do not treat this as the next station scheduler.",
        "Do not present this as a learner-facing score summary.",
        "Do not convert residual gaps into stable weakness labels.",
        "Do not treat Step 8 as optional just because Step 7 was weak.",
        "Do not erase micro-support trace.",
      ],
    }),
  }),
};
