const { ActionTypes } = window.App

const { List, Record } = Immutable

const TodoRecord = Record({
	id: undefined,
	title: undefined,
	completed: false
})

const _findIdxById = (todos, id) => todos.findIndex((todo) => todo.id === id)

// refactor by Immutable List push()
const _createTodo = (todos, title) => {
	todos.push(new TodoRecord({
		id: todos.last().id+1,
		title,
		completed: false
	}))
}

// refactor by Immutable List setIn()
const _updateTodo = (todos, id, title) =>
	todos.setIn([_findIdxById(todos, id), 'title'], title)

// refactor by Immutable List setIn()
const _toggleTodo = (todos, id, completed) =>
	todos.setIn([_findIdxById(todos, id), 'completed'], completed)

// refactor by Immutable List delete()
const _deleteTodo = (todos, id) =>
	todos.delete(_findIdxById(todos, id))

window.App.reducers.todos = (state = new List(), action) => {
	switch (action.type) {
		case ActionTypes.LOAD_TODOS_SUCCESS:
			return action.todos
		case ActionTypes.CREATE_TODO:
			return _createTodo(state, action.title)
		case ActionTypes.UPDATE_TODO:
			return _updateTodo(state, action.id, action.title)
		case ActionTypes.TOGGLE_TODO:
			return _toggleTodo(state, action.id, action.completed)
		case ActionTypes.DELETE_TODO:
			return _deleteTodo(state, action.id)
		default:
			return state
	}
}