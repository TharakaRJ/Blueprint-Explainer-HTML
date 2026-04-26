import { stepTwoExplanationCards } from "./stepTwoExplanationCards";
import { stepThreeExplanationCards } from "./stepThreeExplanationCards";
import { stepFourExplanationCards } from "./stepFourExplanationCards";
import { stepFiveExplanationCards } from "./stepFiveExplanationCards";
import { stepSixExplanationCards } from "./stepSixExplanationCards";
import { stepSevenExplanationCards } from "./stepSevenExplanationCards";

const flow = (...items) => items;

const card = ({
  id,
  categoryLabel,
  title,
  subtitle,
  accent,
  quickViewLayoutType,
  quickViewContent,
  blueprintContent,
  status,
}) => ({
  id,
  categoryLabel,
  title,
  subtitle,
  accent,
  status,
  quickViewLayoutType,
  quickViewContent,
  blueprintContent,
});

export const explanationCards = {
  "analytic.initialApproach": card({
    id: "analytic.initialApproach",
    categoryLabel: "LIVE ANALYTIC CAPTURE",
    title: "Initial approach capture",
    subtitle: "Captures the learner’s internal task model before the cold station begins.",
    accent: "blue",
    quickViewLayoutType: "concept-first + plain-question grid + contrast panel + example + flow",
    quickViewContent: [
      {
        type: "callout",
        title: "Big idea",
        text: "This analytic captures how the learner is mentally framing the station before they perform. It asks: “What does the learner think this task is, and why does their chosen approach make sense to them?”",
        emphasis:
          "It is not judging the learner against an OSCE checklist yet. It preserves the learner’s starting model so the system can compare it later with station performance and post-station reflection.",
      },
      {
        type: "plainGrid",
        title: "What we are listening for in the learner’s answer",
        items: [
          ["What do they think this station is about?", "Perceived task objective", "What the learner thinks the station is fundamentally asking them to do."],
          ["What do they think “doing well” means?", "Self-generated success criteria", "What the learner believes would count as a good performance."],
          ["What feels most urgent to them first?", "Perceived priority structure", "What the learner naturally puts first before entering the station."],
          ["What are they assuming?", "Assumption map", "What they assume about the patient, diagnosis, stability, role, or task scope."],
          ["Why does their plan make sense to them?", "Reason-for-action logic", "The reasoning that makes their chosen approach feel appropriate."],
          ["What risks are they noticing or missing?", "Internal safety model", "Which risks they notice, ignore, minimize, or over-weight."],
          ["What do they think belongs in this station?", "Task-boundary model", "What they think is inside or outside the task."],
          ["Are they thinking it through or reciting a script?", "Self-monitoring stance", "Whether they are checking their own thinking or repeating a remembered framework."],
        ],
      },
      {
        type: "contrast",
        title: "What it is not doing",
        text: "At this point, the system is not asking, “Did the learner mention the correct checklist items?”",
        items: [
          ["Not checklist marking", "The system does not immediately score whether they named ABCDE, ECG, aspirin, escalation, or the expected sequence."],
          ["Not final competence judgement", "A short pre-station response cannot prove ability, safety, or mastery."],
          ["Not correction", "The system does not teach or correct before the cold station because that would contaminate the experiential baseline."],
        ],
      },
      {
        type: "example",
        title: "Example",
        prompt: "“You are going to manage a patient with acute, crushing chest pain.”",
        response: "“I would ask more about the pain, think about myocardial infarction, and arrange an ECG.”",
        reading:
          "The learner may be framing the station mainly as a diagnostic chest pain problem. They recognize a likely diagnosis and an investigation pathway, but their opening model may not yet show whether they are thinking about immediate safety, instability, or first-step prioritization.",
        important:
          "The system does not simply mark this as “wrong”. It preserves the learner’s internal model so it can later compare what they expected, what they actually did, and what they noticed afterward.",
      },
      {
        type: "flow",
        title: "Why it matters later",
        flow: flow("Opening model", "Cold station performance", "Self-evaluation", "Metacognitive correction", "Adaptive support"),
        text: "This capture becomes the baseline for later metacognitive correction. If performance breaks down, the system can identify whether the problem came from task misframing, missing assumptions, unsafe priority logic, weak retrieval, uncertainty, or cognitive overload.",
      },
    ],
    blueprintContent: [
      { type: "text", title: "Purpose", text: "Initial Approach Capture records the learner’s internal task model before performance." },
      { type: "list", title: "Inputs", items: ["learner spoken or typed response to the Step 1 prompt", "wording, order, priorities, assumptions, omissions, reasoning style"] },
      { type: "list", title: "Main sub-analytics", items: ["Perceived task objective", "Self-generated success criteria", "Perceived priority structure", "Assumption map", "Reason-for-action logic", "Internal safety model", "Task-boundary model", "Self-monitoring stance"] },
      { type: "list", title: "Outputs", items: ["Learner Profile", "later Metacognitive Correction", "later Adaptive Learning Engine", "later Adaptive Station Scheduling Engine"] },
      { type: "list", title: "Rules", items: ["Do not treat this as checklist compliance.", "Do not infer competence from this alone.", "Do not directly convert this into Available Cognitive Capacity.", "Preserve the learner’s internal model before comparing it externally.", "Use external OSCE standards later, during metacognitive correction."] },
      { type: "compare", title: "Interpretation guardrail", leftLabel: "Forbidden interpretation", leftText: "“Learner did not mention ABCDE, therefore the opening approach failed.”", rightLabel: "Correct interpretation", rightText: "“The learner’s opening model may be diagnosis-first rather than safety-first; later evidence will show whether this affects performance.”" },
    ],
  }),

  "analytic.cognitiveCapacity": card({
    id: "analytic.cognitiveCapacity",
    categoryLabel: "LIVE ANALYTIC CAPTURE",
    title: "Cognitive capacity analytics",
    subtitle: "Estimates usable mental room from contextual evidence.",
    accent: "blue",
    quickViewLayoutType: "signal-ladder + weak-signal warning + example",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This analytic estimates how much mental room the learner currently has to hold the task together. It is not measuring intelligence, knowledge, or clinical ability." },
      { type: "plainGrid", title: "What we are listening for", items: [["Can they hold several priorities at once?", "Priority-holding capacity", ""], ["Can they combine safety, assessment, diagnosis, and management?", "Integration capacity", ""], ["Do they drop earlier ideas when new ones appear?", "Working-memory stability", ""], ["Does the task feel too heavy for their answer?", "Response burden", ""], ["Can they recover after losing track?", "Cognitive recovery", ""], ["Do they shrink the plan too early?", "Planning compression", ""], ["Does the answer break apart as complexity rises?", "Load-linked fragmentation", ""], ["Do they keep restarting?", "Restart frequency", ""], ["Do they narrow too quickly?", "Overload-linked narrowing", ""], ["Does switching between priorities disrupt them?", "Switching cost", ""]] },
      { type: "ladder", title: "How the system reads it", items: [["What the learner says", "Raw response, pauses, restarts, sequencing, omissions, and how the plan is built."], ["What might be happening", "The system checks whether the learner is holding priorities together or dropping parts as the task expands."], ["What else could explain it", "A pause could mean thinking, anxiety, weak recall, uncertainty, or cognitive overload."], ["How strong the signal is", "The system treats weak clues as weak clues. It does not over-diagnose capacity from one behavior."], ["Live state update", "Only after context-checking does it update Available cognitive capacity."]] },
      { type: "warning", title: "Weak signals are not enough", text: "A long pause, short answer, or scattered response does not automatically mean low cognitive capacity. The system only strengthens the interpretation when several clues point in the same direction." },
    ],
    blueprintContent: [
      { type: "text", title: "Purpose", text: "Estimate the learner’s current usable cognitive room." },
      { type: "flow", title: "Source", flow: flow("Cognitive Capacity Analytics", "Available Cognitive Capacity") },
      { type: "list", title: "Sub-analytics", items: ["Priority-holding capacity", "Integration capacity", "Working-memory stability", "Response burden", "Cognitive recovery", "Planning compression", "Load-linked fragmentation", "Restart frequency", "Overload-linked narrowing", "Switching cost"] },
      { type: "flow", title: "Inference method", flow: flow("Raw learner behavior", "possible cognitive-capacity signal", "context check", "alternative explanation check", "signal-strength rating", "provisional update to Available Cognitive Capacity") },
      { type: "list", title: "Guardrails", items: ["No single weak signal strongly updates capacity.", "Do not treat capacity as intelligence.", "Do not treat capacity as competence.", "Do not use Initial Approach Capture as a direct proxy for capacity.", "Interpret capacity alongside retrieval and uncertainty when relevant."] },
    ],
  }),

  "variable.availableCognitiveCapacity": card({
    id: "variable.availableCognitiveCapacity",
    categoryLabel: "LEARNER DYNAMIC STATE VARIABLE",
    title: "Available cognitive capacity",
    subtitle: "Current usable mental room for the next task.",
    accent: "purple",
    quickViewLayoutType: "state-card + high/low contrast + inputs/outputs",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This variable represents how much mental room the learner currently has to handle the next task productively." },
      { type: "question", text: "Can the learner currently hold the station demands together, or is the task starting to overload their thinking?" },
      { type: "twoColumn", title: "High / low contrast", leftTitle: "Higher available capacity", leftItems: ["can hold several priorities", "can organize a plan", "can integrate safety and diagnosis", "can recover after a pause"], rightTitle: "Lower available capacity", rightItems: ["drops important parts as new demands appear", "narrows too early", "restarts repeatedly", "struggles to connect pieces into one plan"] },
      { type: "text", title: "Why it matters", text: "If capacity is low, the system should not flood the learner with heavy feedback or overly complex next steps. It should adjust support, pacing, and station challenge." },
    ],
    blueprintContent: [
      { type: "text", title: "Definition", text: "Available Cognitive Capacity is the learner’s current usable mental room." },
      { type: "flow", title: "Source", flow: flow("Cognitive Capacity Analytics", "Available Cognitive Capacity") },
      { type: "list", title: "Internal sub-variables", items: ["current cognitive room", "working-memory stability", "integration capacity", "load tolerance", "recovery capacity", "response-burden level"] },
      { type: "list", title: "Feeds", items: ["Adaptive Learning Engine", "Adaptive Station Scheduling Engine", "Learning Momentum Engine", "Learner-Centered Communication Layer"] },
      { type: "list", title: "Rules", items: ["Not intelligence.", "Not overall ability.", "Not inferred from one weak signal.", "Interpreted with retrieval and uncertainty when relevant.", "Repeated patterns may later update Learner Profile."] },
    ],
  }),

  "variable.currentRetrievalAccessibility": card({
    id: "variable.currentRetrievalAccessibility",
    categoryLabel: "LEARNER DYNAMIC STATE VARIABLE",
    title: "Current retrieval accessibility",
    subtitle: "How easily relevant knowledge is accessible now.",
    accent: "purple",
    quickViewLayoutType: "diagnostic map + pattern table",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This variable shows whether the learner can currently access the knowledge they need for the station." },
      { type: "question", text: "Is the right knowledge coming to mind now, and can the learner use it?" },
      { type: "plainGrid", title: "What we are checking", items: [["Did the main ideas come up?", "Recall completeness", ""], ["Do the ideas fit this station?", "Recall relevance", ""], ["Did the knowledge come smoothly or with effort?", "Retrieval fluency", ""], ["Did useful knowledge appear quickly or slowly?", "Recall latency", ""], ["Is the knowledge organized or scattered?", "Recall organization", ""], ["Are key safety points accessible?", "Safety-critical adequacy", ""], ["Can they turn recall into action?", "Recall-to-action conversion", ""], ["Is this a knowledge gap, retrieval gap, or application gap?", "Storage gap vs retrieval gap vs application gap", ""]] },
      { type: "table", title: "Pattern examples", columns: ["Pattern", "What it may mean", "Likely support later"], rows: [["No core concepts recalled", "possible knowledge or retrieval gap", "concept repair or retrieval practice"], ["Concepts recalled slowly", "retrieval fluency issue", "spaced retrieval / fluency practice"], ["Concepts recalled but scattered", "organization issue", "schema support"], ["Concepts recalled but not actionable", "application gap", "guided re-entry"], ["Recall collapses under pressure", "load-dependent retrieval issue", "pressure-adjusted re-entry"]] },
    ],
    blueprintContent: [
      { type: "text", title: "Definition", text: "Current Retrieval Accessibility is how easily and usefully relevant knowledge is accessible now." },
      { type: "flow", title: "Source", flow: flow("Retrieval Accessibility Analytics", "Current Retrieval Accessibility") },
      { type: "list", title: "Sub-analytics", items: ["Recall completeness", "Recall relevance", "Retrieval fluency", "Recall latency", "Recall organization", "Concept linkage", "Safety-critical adequacy", "Recall-to-action conversion", "Storage gap vs retrieval gap", "Retrieval under pressure"] },
      { type: "list", title: "Feeds", items: ["Retrieval–Uncertainty Cross-Check", "Learner Profile as repeated pattern evidence", "Adaptive Learning Engine through processed interpretation", "Adaptive Station Scheduling Engine through processed interpretation", "Learning Momentum Engine only when retrieval difficulty affects burden, frustration, challenge-fit, or perceived progress"] },
      { type: "list", title: "Rules", items: ["Poor retrieval does not prove absent knowledge.", "Good recall does not prove good task handling.", "Retrieval evidence must not directly update Adaptive Learning-Format Profile.", "Retrieval can influence format selection through the Adaptive Learning Engine.", "Post-format outcome evidence recalibrates the Adaptive Learning-Format Profile."] },
    ],
  }),

  "variable.currentUncertaintyLevel": card({
    id: "variable.currentUncertaintyLevel",
    categoryLabel: "LEARNER DYNAMIC STATE VARIABLE",
    title: "Current uncertainty level",
    subtitle: "Current uncertainty or instability around the task.",
    accent: "purple",
    quickViewLayoutType: "uncertainty-types + interpretation matrix",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This variable captures how unsure or unstable the learner currently is about the station or their approach." },
      { type: "question", text: "Is the learner unsure because they do not know, because they cannot decide what to do first, or because the task is destabilizing them?" },
      { type: "plainGrid", title: "Three types of uncertainty", items: [["“I do not know.”", "Epistemic uncertainty", "uncertainty about facts or knowledge."], ["“I do not know what to do first.”", "Procedural uncertainty", "uncertainty about sequence or next action."], ["“I feel thrown.”", "Psychological instability", "uncertainty from task pressure or disorganization."]] },
      { type: "table", title: "Why it cannot be read alone", columns: ["Pattern", "Possible reading"], rows: [["High uncertainty + weak retrieval", "may mean knowledge is not accessible now."], ["High uncertainty + strong retrieval", "may mean underconfidence or calibration issue."], ["Low uncertainty + weak retrieval", "may mean blind spot or false certainty."], ["Low uncertainty + unsafe assumption", "may mean high-risk overconfidence."]] },
    ],
    blueprintContent: [
      { type: "text", title: "Definition", text: "Current Uncertainty Level is the learner’s live uncertainty state in relation to the task." },
      { type: "flow", title: "Source", flow: flow("Initial Uncertainty Markers", "Current Uncertainty Level") },
      { type: "list", title: "Internal sub-variables", items: ["epistemic uncertainty", "procedural uncertainty", "psychological instability", "strength of commitment to approach", "clarity of reasoning", "uncertainty-related fragmentation"] },
      { type: "list", title: "Feeds", items: ["Retrieval–Uncertainty Cross-Check", "Adaptive Learning Engine through processed interpretation", "Adaptive Station Scheduling Engine through processed interpretation", "Learning Momentum Engine", "Learner-Centered Communication Layer"] },
      { type: "list", title: "Rules", items: ["Uncertainty is not automatically bad.", "Uncertainty may reflect good self-monitoring.", "Low uncertainty may reflect false certainty.", "Interpret uncertainty with retrieval accessibility and cognitive capacity."] },
    ],
  }),

  "variable.learningMomentumState": card({
    id: "variable.learningMomentumState",
    categoryLabel: "LEARNER DYNAMIC STATE VARIABLE",
    title: "Learning momentum state",
    subtitle: "Current flow, burden, trust, and challenge-fit state.",
    accent: "purple",
    quickViewLayoutType: "flow-dashboard + guardrail",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This variable shows whether the learner is likely to keep moving productively through the module." },
      { type: "question", text: "Is the learner in a good state to continue, or is the module about to overload, frustrate, or lose them?" },
      { type: "plainGrid", title: "What it tracks", items: [["Are they still moving forward?", "Current learning momentum", ""], ["Do they feel real progress?", "Current perceived progress", ""], ["Is frustration building?", "Current frustration load", ""], ["Is the challenge level right?", "Current challenge-fit", ""], ["Do they trust the system enough to continue?", "Current trust in the system", ""]] },
      { type: "warning", title: "Guardrail", text: "This is not fake motivation. It does not hide truth or create artificial progress. It regulates pacing so the learner can keep making real progress." },
    ],
    blueprintContent: [
      { type: "text", title: "Definition", text: "Learning Momentum State is the current live state of the learner’s forward movement through the learning cycle." },
      { type: "list", title: "Built from", items: ["prior learner engagement evidence", "current learner-state signals", "burden/challenge context"] },
      { type: "list", title: "Feeds", items: ["Learning Momentum Engine"] },
      { type: "list", title: "Rules", items: ["Not vague motivation.", "Must not fake progress.", "Regulates burden, pacing, timing, and communication flow.", "Should not over-interpret one Step 1 response.", "Retrieval-related information affects it only when retrieval affects frustration, burden, challenge-fit, perceived progress, or re-entry willingness."] },
    ],
  }),

  "node.retrievalUncertaintyCrossCheck": card({
    id: "node.retrievalUncertaintyCrossCheck",
    categoryLabel: "PROCESSING NODE",
    title: "Retrieval–Uncertainty Cross-Check",
    subtitle: "Combines retrieval and uncertainty before engine input.",
    accent: "cyan",
    quickViewLayoutType: "merge-node explanation + 2x2 matrix",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This node prevents the system from reading uncertainty in isolation." },
      { type: "question", text: "When the learner sounds unsure, is it because knowledge is not accessible, because confidence is low, because the task is unclear, or because there is a blind spot?" },
      { type: "flow", title: "Two inputs become one processed interpretation", flow: flow("Current retrieval accessibility", "+ Current uncertainty level", "Cross-check", "processed learner-state interpretation") },
      { type: "table", title: "Interpretation matrix", columns: ["Pattern", "Possible reading"], rows: [["High uncertainty + low retrieval", "possible accessible-knowledge problem."], ["High uncertainty + good retrieval", "possible underconfidence or calibration issue."], ["Low uncertainty + poor retrieval", "possible blind spot or false certainty."], ["Low uncertainty + unsafe assumptions", "possible high-risk false confidence."]] },
      { type: "text", title: "Where it goes", text: "The processed interpretation goes to the Adaptive Learning Engine and Adaptive Station Scheduling Engine. It may also inform the Learning Momentum Engine when it affects burden or frustration." },
    ],
    blueprintContent: [
      { type: "list", title: "Inputs", items: ["Current Retrieval Accessibility", "Current Uncertainty Level"] },
      { type: "list", title: "Output", items: ["Processed learner-state interpretation"] },
      { type: "list", title: "Feeds", items: ["Adaptive Learning Engine", "Adaptive Station Scheduling Engine", "Learning Momentum Engine only when relevant to burden/frustration/challenge-fit"] },
      { type: "list", title: "Rules", items: ["Do not make this a card in the main map.", "Do not connect this directly to Learner Profile.", "Do not connect this to Profile Context.", "Do not interpret uncertainty without retrieval.", "Do not interpret retrieval without uncertainty when both are relevant."] },
    ],
  }),

  "profile.learnerProfile": card({
    id: "profile.learnerProfile",
    categoryLabel: "PROFILE CONTEXT",
    title: "Learner profile",
    subtitle: "Stores the learner’s broader learning and performance patterns.",
    accent: "teal",
    quickViewLayoutType: "profile-map + not-raw-data warning",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This profile stores patterns about how this learner tends to learn, perform, misframe tasks, retrieve knowledge, respond to correction, and improve over time." },
      { type: "question", text: "What patterns are becoming true for this learner across repeated cycles?" },
      { type: "plainGrid", title: "What it stores", items: [["How they understand tasks", "Task-framing pattern", ""], ["How they retrieve knowledge", "Retrieval accessibility pattern", ""], ["How accurate their self-judgement is", "Metacognitive calibration pattern", ""], ["How stable performance stays under pressure", "Performance stability pattern", ""], ["Whether safety-risk patterns repeat", "Safety-risk pattern", ""], ["What support they repeatedly need", "Support-need pattern", ""], ["Whether learning transfers to new stations", "Transfer-readiness pattern", ""], ["How they respond after correction", "Response-to-correction pattern", ""]] },
      { type: "warning", title: "Warning", text: "This is not a raw data bin. One response does not become a permanent trait. The profile stores weighted patterns over time." },
    ],
    blueprintContent: [
      { type: "list", title: "Inputs", items: ["Initial Approach Capture", "Current Retrieval Accessibility as repeated pattern evidence", "Current Uncertainty Level as repeated pattern evidence when relevant", "Available Cognitive Capacity as repeated pattern evidence when relevant"] },
      { type: "list", title: "Internal pathways", items: ["Task-framing pattern", "Retrieval accessibility pattern", "Metacognitive calibration pattern", "Performance stability pattern", "Safety-risk pattern", "Support-need pattern", "Transfer-readiness pattern", "Response-to-correction pattern"] },
      { type: "list", title: "Feeds", items: ["Adaptive Learning Engine", "Adaptive Station Scheduling Engine", "Learning Momentum Engine as secondary profile input", "Learner-Centered Communication Layer"] },
      { type: "list", title: "Rules", items: ["Not a raw data bin.", "One Step 1 response cannot create a stable trait.", "Do not merge task-framing, retrieval, uncertainty, and capacity into one vague weakness.", "Engagement evidence does not define clinical competence."] },
    ],
  }),

  "profile.learnerEngagementProfile": card({
    id: "profile.learnerEngagementProfile",
    categoryLabel: "PROFILE CONTEXT",
    title: "Learner engagement profile",
    subtitle: "Stores what keeps this learner moving or causes them to disengage.",
    accent: "teal",
    quickViewLayoutType: "engagement-levers + boundaries",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This profile stores how the learner responds emotionally and behaviorally to difficulty, feedback, challenge, ambiguity, and progress signals." },
      { type: "question", text: "What helps this learner stay productively engaged, and what makes them stall or disengage?" },
      { type: "plainGrid", title: "What it watches", items: [["How much challenge can they handle?", "Challenge tolerance pattern", ""], ["How much feedback can they process?", "Feedback tolerance", ""], ["How do they recover after frustration?", "Frustration recovery pattern", ""], ["How do they react to unclear guidance?", "Ambiguity sensitivity", ""], ["Are they willing to try again?", "Re-entry willingness", ""], ["When might they stop?", "Abandonment risk", ""], ["Do they trust the system?", "Trust state", ""], ["What load level keeps them productive?", "Preferred burden window", ""]] },
      { type: "warning", title: "Boundary", text: "This profile shapes pacing and communication. It does not judge clinical ability." },
    ],
    blueprintContent: [
      { type: "list", title: "Feeds", items: ["Learning Momentum Engine as primary profile input", "Learner-Centered Communication Layer", "Adaptive Learning Engine when engagement affects format suitability", "Adaptive Station Scheduling Engine when engagement affects safe challenge pacing"] },
      { type: "list", title: "Rules", items: ["Separate from Learner Profile.", "Must not determine clinical competence.", "Shapes pacing, burden, communication, and challenge fit.", "May influence format selection only when engagement affects whether the learner can use that format productively."] },
    ],
  }),

  "engine.adaptiveLearning": card({
    id: "engine.adaptiveLearning",
    categoryLabel: "CORE ENGINE",
    title: "Adaptive Learning Engine",
    subtitle: "Absorbs context for later support selection.",
    accent: "green",
    status: "Context absorbing",
    quickViewLayoutType: "engine-state + input/output boundary",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This engine prepares the context needed to choose useful learning support later." },
      { type: "question", text: "What kind of support might this learner need after we see the station performance?" },
      { type: "chips", title: "What it receives in Step 1", items: ["Available cognitive capacity", "Retrieval–Uncertainty Cross-Check", "Learner Profile", "background learning-format context when available", "engagement context when it affects format suitability"] },
      { type: "warning", title: "What it does now", text: "Context absorbing. It forms provisional support hypotheses but does not select the final learning format yet." },
      { type: "list", title: "What it must not do yet", items: ["no final support decision", "no teaching before the station", "no override of cold experiential entry"] },
    ],
    blueprintContent: [
      { type: "text", title: "Step 1 status", text: "Context-absorbing, not decision-committing." },
      { type: "list", title: "May do", items: ["form provisional support hypotheses", "note possible retrieval weakness", "note possible task-model issue", "note possible cognitive load risk", "note uncertainty/calibration issue", "prepare context for later decisions"] },
      { type: "list", title: "Must not do", items: ["select final learning format", "prescribe support before performance", "override cold entry", "infer competence from early signals alone"] },
    ],
  }),

  "engine.adaptiveStationScheduling": card({
    id: "engine.adaptiveStationScheduling",
    categoryLabel: "CORE ENGINE",
    title: "Adaptive Station Scheduling Engine",
    subtitle: "Absorbs context for later station routing.",
    accent: "green",
    status: "Context absorbing",
    quickViewLayoutType: "routing-logic + scheduling pattern examples",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This engine prepares the context needed to choose the next best station later." },
      { type: "question", text: "After this cycle, should the learner repeat, reinforce, transfer, revisit later, or move forward?" },
      { type: "chips", title: "What it receives in Step 1", items: ["Available cognitive capacity", "Retrieval–Uncertainty Cross-Check", "Learner Profile", "background station-response context when available", "engagement context when challenge pacing matters"] },
      { type: "warning", title: "What it does now", text: "Context absorbing. It prepares scheduling context but does not choose the next station yet." },
      { type: "table", title: "Example scheduling patterns", columns: ["Pattern", "Later routing thought"], rows: [["Strong retrieval + stable uncertainty", "later allow challenge or near transfer."], ["Weak retrieval + high uncertainty", "later consider retrieval support before difficult transfer."], ["Good task model + weak recall", "later use retrieval practice or spaced revisit."], ["Good recall + poor task model", "later use task-framing correction and similar-station re-entry."], ["Unsafe assumption + low uncertainty", "later prioritize safety correction and controlled re-entry."]] },
    ],
    blueprintContent: [
      { type: "text", title: "Step 1 status", text: "Context-absorbing, not final scheduling." },
      { type: "list", title: "May do", items: ["form provisional scheduling hypotheses", "mark possible reinforcement need", "mark possible near-transfer pathway", "mark possible spacing/retrieval issue", "mark possible challenge-fit concern"] },
      { type: "list", title: "Must not do", items: ["decide the final next station", "skip the cold station", "schedule based only on pre-station recall", "overrule later station evidence"] },
    ],
  }),

  "regulation.learningMomentumEngine": card({
    id: "regulation.learningMomentumEngine",
    categoryLabel: "LEARNER-FACING REGULATION LAYER",
    title: "Learning Momentum Engine",
    subtitle: "Regulates burden, pacing, and truthful forward movement.",
    accent: "green",
    quickViewLayoutType: "flow-regulator + intervention examples",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This engine keeps the learner moving through the module without hiding the truth or overwhelming them." },
      { type: "question", text: "How do we deliver the right amount of challenge, feedback, and pacing so the learner keeps making real progress?" },
      { type: "plainGrid", title: "What it regulates", items: [["How much feedback reaches the learner now", "", ""], ["What should be delayed", "", ""], ["How heavy the next step should feel", "", ""], ["Whether the learner needs a smaller success loop", "", ""], ["When progress should be made visible", "", ""], ["When re-entry is too soon or appropriate", "", ""]] },
      { type: "warning", title: "Guardrail", text: "This is not gamification. It does not create fake dopamine or false progress. It protects real learning momentum." },
    ],
    blueprintContent: [
      { type: "list", title: "Inputs", items: ["Learning Momentum State", "Learner Engagement Profile as primary profile input", "Learner Profile as secondary profile input", "Available Cognitive Capacity", "Retrieval–Uncertainty Cross-Check only when it affects burden, frustration, challenge-fit, or perceived progress"] },
      { type: "list", title: "May do", items: ["adjust prompt burden", "regulate tone", "preserve learner trust", "avoid overwhelming output", "pace transition into station", "prepare later feedback sequencing"] },
      { type: "list", title: "Must not do", items: ["hide important truth", "create fake progress", "gamify without substance", "over-soften critical safety issues", "turn engagement into competence scoring"] },
    ],
  }),

  "regulation.learnerCenteredCommunication": card({
    id: "regulation.learnerCenteredCommunication",
    categoryLabel: "LEARNER-FACING REGULATION LAYER",
    title: "Learner-Centered Communication Layer",
    subtitle: "Filters system output into experience-near language.",
    accent: "green",
    quickViewLayoutType: "translation-before-after + two modes",
    quickViewContent: [
      { type: "callout", title: "Big idea", text: "This layer turns internal system analysis into wording the learner can immediately understand and use." },
      { type: "question", text: "How should this be said so the learner recognizes it in their own experience?" },
      { type: "twoModes", title: "Two modes", items: [{ title: "When asking for input", goal: "Get a more honest, specific, internally grounded learner response.", before: "List your initial management priorities.", after: "When you hear acute crushing chest pain, what feels most urgent to deal with first, and why?" }, { title: "When giving guidance", goal: "Turn system interpretation into usable self-recognition.", before: "You failed to prioritize ABCDE.", after: "Your plan moved quickly toward the likely diagnosis, but it did not first check whether the patient was safe enough for that diagnostic approach." }] },
      { type: "warning", title: "Always-on rule", text: "No learner-facing prompt, feedback, recommendation, or correction bypasses this layer." },
    ],
    blueprintContent: [
      { type: "list", title: "Inputs", items: ["Current Uncertainty Level", "Available Cognitive Capacity", "Current Retrieval Accessibility", "Learner Profile", "Learner Engagement Profile", "Learning Momentum Engine output"] },
      { type: "list", title: "Applies to", items: ["prompts", "clarifying questions", "feedback", "recommendations", "correction", "next-step explanations", "progress signals", "station transition messages"] },
      { type: "list", title: "Processing questions", items: ["What is the system trying to achieve?", "Is the goal to collect better input or guide the learner?", "What should the learner notice in their own experience?", "Is the wording too external, abstract, or checklist-like?", "Should the message be shortened, sequenced, softened, or delayed?"] },
      { type: "text", title: "Rule", text: "No learner-facing output bypasses this layer." },
    ],
  }),
  ...stepTwoExplanationCards,
  ...stepThreeExplanationCards,
  ...stepFourExplanationCards,
  ...stepFiveExplanationCards,
  ...stepSixExplanationCards,
  ...stepSevenExplanationCards,
};
