const stages = {
  planning: {
    kicker: "// start with intent",
    title: "Planning turns loose work into shaped backlog items.",
    body: "Goals, constraints, risks, assumptions, and the next-stage recommendation are recorded before work enters engineering or architecture intake.",
    command: "./fw launch planning",
  },
  architect: {
    kicker: "// design before motion",
    title: "Architecture decision work moves through its own lane.",
    body: "Ada records boundaries, alternatives, tradeoffs, operational impact, and follow-on implementation paths before moving work to architecture QA.",
    command: "./fw launch architect",
  },
  engineering: {
    kicker: "// build with state",
    title: "Engineering implements the top active story.",
    body: "The stage updates validation, records evidence and open risks, prepares QA focus areas, and moves the item from active to QA without creating the cycle commit.",
    command: "./fw launch engineering",
  },
  qa: {
    kicker: "// evidence beats vibes",
    title: "QA decides whether work is done or goes back.",
    body: "Iris validates acceptance criteria and regression risk, treats missing evidence as blocking, files defects when needed, and moves the story to done or back to active.",
    command: "./fw launch qa",
  },
  pm: {
    kicker: "// close the loop",
    title: "PM keeps intake and active queues intentional.",
    body: "Maya refines items, validates metadata and lane placement, ranks active queues, and keeps work bounded, ordered, and testable.",
    command: "./fw launch pm",
  },
  cycle: {
    kicker: "// keep the lessons",
    title: "Cycle closure writes durable memory.",
    body: "Flywheel alternates engineering and QA until the active queue is drained or blocked, then writes observer markdown, a JSON trace, and one cycle commit.",
    command: "./fw experience summarize",
  },
};

const tabs = document.querySelectorAll(".stage-tab");
const kicker = document.querySelector("#stage-kicker");
const title = document.querySelector("#stage-title");
const body = document.querySelector("#stage-body");
const command = document.querySelector("#stage-command");
const stageName = document.querySelector("#stage-name");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.stage;
    const stage = stages[key];

    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    kicker.textContent = stage.kicker;
    title.textContent = stage.title;
    body.textContent = stage.body;
    command.textContent = stage.command;
    if (stageName) stageName.textContent = key;
  });
});
