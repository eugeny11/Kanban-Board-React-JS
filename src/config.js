const LIST_TYPES = {
	GOALS_BACKLOG: 'backlog',
 	GOALS_READY: 'ready',
	GOALS_PROGRESS: 'inProgress',
	GOALS_FINISHED: 'finished',
}

const LIST_COPY = {
	[LIST_TYPES.GOALS_BACKLOG]: 'Backlog',
  	[LIST_TYPES.GOALS_READY]: 'Ready',
	[LIST_TYPES.GOALS_PROGRESS]: 'In Progress',
	[LIST_TYPES.GOALS_FINISHED]: 'Finished',
}

export {LIST_TYPES, LIST_COPY}