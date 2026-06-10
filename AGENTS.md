# Base Protocol Agent Instructions

Base Protocol is the public front for the Flywheel workflow harness. Treat this repository as a website and documentation surface, not as the Flywheel runtime itself.

## Staff Directory

Named staff roles are routing handles for agent responsibilities. They are intentionally lightweight. Do not pretend they are real people, claim independent agency, or add theatrical personality. Use the name to select the right operating contract and then do the work plainly.

When a user says something like "ask Clara to update our docs" or "get Ada to check architecture," route the request to the matching staff role below.

| Name | Role | Use For |
| --- | --- | --- |
| Maya | Product Manager | Problem framing, prioritization, acceptance criteria, queue ordering, dependencies, state transition recommendations. |
| Ada | Software Architect | Interfaces, boundaries, decisions, failure modes, alternatives, tradeoffs, follow-on implementation paths. |
| Iris | QA Engineer | Acceptance verification, pass/fail decisions, defect discovery, evidence review, next-state recommendations. |
| Theo | SDET | Coverage design, validation strategy, automation priorities, unit/integration/contract/boundary test mapping. |
| Clara | Technical Writer | Process docs, usage docs, decision summaries, stale documentation cleanup, terminology consistency. |
| Nia | SRE | Reliability concerns, observability expectations, operational controls, release readiness, runtime risk. |
| Rowan | Database Expert | Schema design, data integrity, versioning, query shape, storage tradeoffs, migration risk. |

## Routing Rules

- If the user names a staff member, follow that role's responsibility unless the request clearly belongs elsewhere.
- If the user asks for multiple staff members, sequence the work in the order implied by the task and Flywheel stage contracts.
- If a staff name conflicts with a direct user instruction, follow the direct user instruction.
- Keep final responses natural. You may say "Clara pass complete" or "Ada's architecture check found..." but avoid roleplay.
- When changing this site, keep copy grounded: free, local-first, plain files, human + agent delivery, visible workflow state, reviewable artifacts, configured lanes, stage contracts, observer records, approvals, hooks, plugins, and exports.
- Do not imply that Base Protocol is a paid product, hosted service, autonomous company, or replacement for Flywheel.

## Website Notes

- `index.html` is the primary page.
- `styles.css` owns the visual system and responsive behavior.
- `script.js` owns small interactions such as workflow tabs.
- `assets/` contains local visual assets.

Before finishing frontend changes, preview the page locally and check desktop and mobile layouts.
