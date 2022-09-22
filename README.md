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

3. Save your changes
Any changes made to the application (adding new tasks, moving tasks between lists, changing the description of a task) must be stored in localStorage.
When loading the application, the tasks stored in localStorage (or empty lists if there is nothing in localStorage) should be displayed. If you make changes and refresh the page, the changes should be saved.

4. Task detail page
Add the ability to go to a separate page of any task in the list when clicking on its title.

The task page must have a different URL than the one used for the main page. The URL must contain the task id. Example: localhost:3000/tasks/12345 will open the task page with id 12345.

How exactly to implement such a transition is written in more detail in the React Requirements section.

The task detail page should display the task name and description. If there is no description, display the phrase "This task has no description" instead.

The description field must be editable. Implementation details of this function are up to you. You can implement the ability to edit when clicking on the text or add a special button that will allow you to edit the description.

When you click on the cross in the upper right corner, you go back to the main page.

5. Displaying the number of tasks in the footer
The footer should display the number of active and completed tasks.

Active tasks - displays the number of tasks in the Backlog list.
Finished tasks - displays the number of tasks in the Finished list.

6. User drop down menu
Implement a drop-down list that will appear when you click on a block in the upper right corner of the page - a user avatar with an arrow.
img
The arrow next to the avatar should point up when the menu is open and down when the menu is closed.

When clicking on the menu items, nothing happens, but you need to add a selection of items on hover (for example, change the color of the text or add an underline).

## Requirements for React

The interface must be divided into components. Before you start, think carefully about which components you will use. The division into components should be logical and justified.

After you decide on the division into components, think about how to properly organize the file structure.

Follow the principles of modularity (use export, import).

It is possible to use both class components and functional ones.

Use Synthetic events to work with events.

To display a different state of elements depending on user actions (example: expanded / collapsed user menu), use conditional rendering.

To implement separate pages for each task and navigate between pages, use the react-router library.

When writing code, try to follow the principles of KISS (Keep It Short and Simple - do not complicate) and DRY (Don't Repeat Yourself - do not repeat yourself).
