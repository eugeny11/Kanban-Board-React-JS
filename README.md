# Kanban Board

A Kanban board is a popular tool for visualizing and breaking down a task into stages.

# Доска Канбан

Доска Канбан - популярный инструмент для визуализации и разбиения задачи на этапы.

## How to run and clone react app

Open your terminal and then type. $ git clone {the url to the GitHub repo} This clones the repo.
cd into the new folder and type. $ npm install. This installs the required dependencies.
To run the React project. $ npm start.

## Как запустить и склонировать React-приложение

Откройте ваш терминал и введите команду: 

$ git clone {ссылка на репозиторий GitHub}
Эта команда склонирует репозиторий.
Перейдите в новую папку и введите команду:

$ npm install
Это установит необходимые зависимости.
Чтобы запустить проект React, введите команду:

$ npm start

## The initial state

The original Kanban board should have 4 blocks with tasks:

Backlog (tasks that require clarification before taking them to work);
Ready (tasks that can be taken into work);
In progress (tasks that are already in progress);
Finished (completed tasks).

## Начальное состояние

Исходная доска Канбан должна содержать 4 блока с задачами:

1. Очередь (задачи, требующие уточнения перед началом работы);
2. Готово (задачи, которые могут быть взяты в работу);
3. В работе (задачи, которые уже выполняются);
4. Завершено (завершенные задачи).

![Tasks](https://github.com/eugeny11/Kanban-Board-React-JS/blob/main/images/fr_kanban_1_2.png)

### How to run

You need installed node.js and npm packet on your PC or yarn, if you use Macbook. You have to create a React app in your folder, and then in your coder terminal, make command npm start

### Как запустить

Вам необходимо установить Node.js и пакет npm на вашем компьютере, или yarn, если вы используете Macbook. Вам нужно создать приложение React в вашей папке, а затем в вашем терминале для разработчика введите команду npm start.

### The following functionality has been implemented:

1. Adding a new task
Initially, each task is always placed in the backlog - for analysis. When you click on the "+ Add card" button in the Backlog card, an input field should appear at the end of the list, between the last task and the button. In this case, the “+ Add card” button should change to “Submit”.

### Была реализована следующая функциональность:

1. Добавление новой задачи
Изначально каждая задача всегда помещается в очередь на анализ. При нажатии на кнопку "+ Добавить карточку" в карточке "Очередь", появляется поле ввода в конце списка, между последней задачей и кнопкой. При этом кнопка “+ Добавить карточку” должна измениться на “Отправить”.

![Submit](https://github.com/eugeny11/Kanban-Board-React-JS/blob/main/images/fr_kanban_1.png)

Algorithm for adding a task:

We pressed the “+ Add card” button → an edit field appeared → entered the name → clicked the “Submit” button - the task appeared in the backlog (provided that the name was entered).

You cannot add a task with a missing name to the list. If the field with the name is empty when clicking "Submit", nothing is added to the list.

2. Move tasks between lists
The tasks for the Ready list are taken from the Backlog. When you click on "+ Add card" in the Ready card, a dropdown with tasks from the Backlog list appears at the end of the list. After clicking on a dropdown task, it should appear last in the Ready list, and this task should be removed from the Backlog.

If the Backlog is empty (there are no tasks in the list), then the “+ Add card” button in the Ready list should be inactive, that is, nothing happens when you click on it. An inactive button needs to be assigned the disabled attribute. Active and inactive buttons should differ visually: for example, in color and absence of cursor: pointer.

Алгоритм добавления задачи:

1. Мы нажимаем кнопку “+ Добавить карточку” → появляется поле редактирования → вводим название → нажимаем кнопку “Отправить” - задача появляется в очереди (при условии, что было введено название).

Нельзя добавить задачу с отсутствующим названием в список. Если поле с названием пусто при нажатии на "Отправить", ничего не добавляется в список.

2. Перемещение задач между списками
Задачи для списка "Готово" берутся из списка "Очередь". При нажатии на "+ Добавить карточку" в карточке "Готово" появляется выпадающий список задач из списка "Очередь" в конце списка. После нажатия на задачу из выпадающего списка она должна появиться последней в списке "Готово", и эта задача должна быть удалена из списка "Очередь".

Если список "Очередь" пуст (в списке нет задач), то кнопка "+ Добавить карточку" в списке "Готово" должна быть неактивной, то есть ничего не происходит при нажатии на нее. Неактивной кнопке нужно присвоить атрибут disabled. Активная и неактивная кнопки должны визуально отличаться: например, по цвету и отсутствию курсора: pointer.


![Move](https://github.com/eugeny11/Kanban-Board-React-JS/blob/main/images/fr_kanban_2.png)

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

Остальные списки (В работе и Завершено) работают по тому же принципу. Задачи для списка "В работе" берутся из списка "Готово", а задачи для списка "Завершено" берутся из списка "В работе".

3. Сохранение внесенных изменений
Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), должны быть сохранены в localStorage.
При загрузке приложения должны отображаться задачи, хранящиеся в localStorage (или пустые списки, если в localStorage ничего нет). Если вы вносите изменения и обновляете страницу, изменения должны быть сохранены.

4. Страница деталей задачи
Добавьте возможность перехода на отдельную страницу любой задачи в списке при нажатии на ее заголовок.

Страница задачи должна иметь другой URL, чем используемый для основной страницы. URL должен содержать идентификатор задачи. Пример: localhost:3000/tasks/12345 откроет страницу задачи с идентификатором 12345.

Как именно реализовать такой переход, подробно описано в разделе Требования к React.

На странице деталей задачи должны отображаться название и описание задачи. Если нет описания, вместо него должна отображаться фраза "Эта задача не имеет описания".

Поле описания должно быть редактируемым. Подробности реализации этой функции зависят от вас. Вы можете реализовать возможность редактирования при щелчке на тексте или добавить специальную кнопку, позволяющую редактировать описание.

При нажатии на крестик в верхнем правом углу вы возвращаетесь на основную страницу.


![Detailed task page](https://github.com/eugeny11/Kanban-Board-React-JS/blob/main/images/fr_kanban_3.png)

5. Displaying the number of tasks in the footer
The footer should display the number of active and completed tasks.

Active tasks - displays the number of tasks in the Backlog list.
Finished tasks - displays the number of tasks in the Finished list.

5. Отображение количества задач в подвале
В подвале должно отображаться количество активных и завершенных задач.

Активные задачи - отображает количество задач в списке "Очередь".
Завершенные задачи - отображает количество задач в списке "Завершено".

![Detailed task page](https://github.com/eugeny11/Kanban-Board-React-JS/blob/main/images/fr_kanban_4.png)

6. User drop down menu
Implement a drop-down list that will appear when you click on a block in the upper right corner of the page - a user avatar with an arrow.
img
The arrow next to the avatar should point up when the menu is open and down when the menu is closed.

6. Меню пользователя с выпадающим списком
Реализуйте выпадающий список, который появится при щелчке на блоке в верхнем правом углу страницы - аватар пользователя с стрелкой.
img
Стрелка рядом с аватаром должна указывать вверх, когда меню открыто, и вниз, когда меню закрыто.

![Log out](https://github.com/eugeny11/Kanban-Board-React-JS/blob/main/images/fr_kanban_5.png)

When clicking on the menu items, nothing happens, but you need to add a selection of items on hover (for example, change the color of the text or add an underline).

## Requirements for React

При щелчке на пункты меню ничего не происходит, но необходимо добавить выбор пунктов при наведении (например, изменить цвет текста или добавить подчеркивание).

## Требования к React

![Kanban Figma template](https://github.com/eugeny11/Kanban-Board-React-JS/blob/main/images/kanban_figma_maket.jpg)

The interface must be divided into components. Before you start, think carefully about which components you will use. The division into components should be logical and justified.

After you decide on the division into components, think about how to properly organize the file structure.

Follow the principles of modularity (use export, import).

It is possible to use both class components and functional ones.

Use Synthetic events to work with events.

To display a different state of elements depending on user actions (example: expanded / collapsed user menu), use conditional rendering.

To implement separate pages for each task and navigate between pages, use the react-router library.

When writing code, try to follow the principles of KISS (Keep It Short and Simple - do not complicate) and DRY (Don't Repeat Yourself - do not repeat yourself).

Интерфейс должен быть разделен на компоненты. Прежде чем начать, тщательно продумайте, какие компоненты вы будете использовать. Разделение на компоненты должно быть логичным и обоснованным.

После того, как вы определитесь с разделением на компоненты, подумайте о том, как правильно организовать структуру файлов.

Следуйте принципам модульности (используйте export, import).

Вы можете использовать как классовые, так и функциональные компоненты.

Используйте синтетические события для работы с событиями.

Чтобы отображать различные состояния элементов в зависимости от действий пользователя (например, развернутое / свернутое меню пользователя), используйте условный рендеринг.

Для реализации отдельных страниц для каждой задачи и навигации между страницами используйте библиотеку react-router.

При написании кода старайтесь следовать принципам KISS (Keep It Short and Simple - не усложняйте) и DRY (Don't Repeat Yourself - не повторяйте себя).
