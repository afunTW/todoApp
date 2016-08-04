const {
	ActionTypes,
	AppDispatcher
} = window.App

window.App.TodoActions = {

	// async operation
	loadTodos() {
		fetch('./todos.json')
			.then((response) => response.json())
			.then((todos) => AppDispatcher.dispatch({
				type: ActionTypes.LOAD_TODOS_SUCCESS,
				todos
			}))
	},

	// action creater:
	// 	1. defined action object
	// 	2. pass action object to dispatcher

	createTodo(title) {
		AppDispatcher.dispatch({
			type: ActionTypes.CREATE_TODO,
			title
		})
	},

	updateTodo(id, title) {
		AppDispatcher.dispatch({
			type: ActionTypes.UPDATE_TODO,
			id,
			title
		})
	},

	toggleTodo(id, completed) {
		AppDispatcher.dispatch({
			type: ActionTypes.TOGGLE_TODO,
			id,
			completed
		})
	},

	deleteTodo(id) {
		AppDispatcher.dispatch({
			type: ActionTypes.DELETE_TODO,
			id
		})
	}
}