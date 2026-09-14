# Triage Labels

The skills speak in terms of five canonical triage roles. This file maps those roles to the actual label strings used in this repo's issue tracker.

| Canonical role    | Label in tracker    | Meaning                                 |
|-------------------|---------------------|-----------------------------------------|
| `needs-triage`    | `needs-triage`      | Maintainer needs to evaluate this issue |
| `needs-info`      | `needs-info`        | Waiting on reporter for more information |
| `ready-for-agent` | `ready-for-agent`   | Fully specified, ready for an AFK agent |
| `ready-for-human` | `ready-for-human`   | Requires human implementation           |
| `wontfix`         | `wontfix`           | Will not be actioned                    |

When a skill mentions a role (e.g. "apply the AFK-ready triage label"), use the corresponding label string from this table.

These are orthogonal to the **`wayfinder:<type>`** ticket-type labels (`research` / `prototype` / `grilling` / `task`). A Wayfinder child ticket may carry both its type label and a triage state label.

Edit the right-hand column only if the GitHub labels already use different names.
