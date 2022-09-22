## Kanban Board

A Kanban board is a popular tool for visualizing and breaking down a task into stages.

## The initial state

The original Kanban board should have 4 blocks with tasks:

Backlog (tasks that require clarification before taking them to work);
Ready (tasks that can be taken into work);
In progress (tasks that are already in progress);
Finished (completed tasks).

### The following functionality has been implemented:

1. Adding a new task
Initially, each task is always placed in the backlog - for analysis. When you click on the "+ Add card" button in the Backlog card, an input field should appear at the end of the list, between the last task and the button. In this case, the “+ Add card” button should change to “Submit”.

Algorithm for adding a task:

We pressed the “+ Add card” button → an edit field appeared → entered the name → clicked the “Submit” button - the task appeared in the backlog (provided that the name was entered).

You cannot add a task with a missing name to the list. If the field with the name is empty when clicking "Submit", nothing is added to the list.
