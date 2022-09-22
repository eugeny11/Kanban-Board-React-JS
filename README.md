# Kanban Board

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

2. Move tasks between lists
The tasks for the Ready list are taken from the Backlog. When you click on "+ Add card" in the Ready card, a dropdown with tasks from the Backlog list appears at the end of the list. After clicking on a dropdown task, it should appear last in the Ready list, and this task should be removed from the Backlog.

If the Backlog is empty (there are no tasks in the list), then the “+ Add card” button in the Ready list should be inactive, that is, nothing happens when you click on it. An inactive button needs to be assigned the disabled attribute. Active and inactive buttons should differ visually: for example, in color and absence of cursor: pointer.

The rest of the lists (In progress and Finished) work on the same principle. The tasks for the In progress list are taken from Ready, and the tasks for the Finished list are taken from In progress.


