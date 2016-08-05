const { ReduceStore } = FluxUtils

const {
	ActionTypes,
	AppDispatcher,
} = window.App

const CHANGE_EVENT = 'CHANGE'

const _emitter = new EventEmitter()

let _todos = []


// logical operation

const _createTodo = (todos, title) => {

	// immutable
	return [
		...todos,
		{
			id: todos[todos.length-1].id+1,
			title: title,
			completed: false
		}
	]

	// todos.push({
	// 	id: todos[todos.length-1].id+1,
	// 	title: title,
	// 	completed: false
	// })
	// return todos

}

const _updateTodo = (todos, id, title) => {

	// immutable
	const idx = todos.findInddex((todo) => todo.id === id)
	if (idx === -1) return todos

	const newTodos = [...todos]
	newTodos[idx] = {
		...todos[idx],
		title
	}
	return newTodos

	// const target = todos.find((todo) => todo.id === id)
	// if (target) target.title = title
	// return todos
}

const _toggleTodo = (todos, id, completed) => {

	// immutable
	const idx = todos.findInddex((todo) => todo.id === id)
	if (idx === -1) return todos

	const newTodos = [...todos]
	newTodos[idx].completed = completed
	return newTodos


	// const target = todos.find((todo) => todo.id === id)
	// if (target) target.completed = completed
	// return todos
}

const _deleteTodo = (todos, id) => {

	// immutable
	const idx = todos.findInddex((todo) => todo.id === id)
	if (idx === -1) return todos

	const newTodos = [...todos]
	newTodos.splice(idx, 1)
	return newTodos

	// const idx = todos.findIndex((todo) => todo.id === id)
	// if (idx !== -1) todos.splice(idx, 1)
	// return todos
}

// focus on update state
class TodoStore extends ReduceStore {
	getInitialState() {
		return []
	}

	reduce(state, action) {
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
}

window.App.TodoStore = new TodoStore(AppDispatcher)

// window.App.TodoStore = {
// 	getAll() {

// 		// [toView] getter API
// 		return _todos
// 	},
// 	addChangeListener(callback) {

// 		// [toView] register listener and return remove API
// 		_emitter.on(CHANGE_EVENT, callback)
// 		return () => _emitter.removeListener(CHANGE_EVENT, callback)
// 	},
// 	dispatchToken: AppDispatcher.register((action) => {
// 		switch (action.type) {
// 			case ActionTypes.LOAD_TODOS_SUCCESS:
// 				_todos = action.todos
// 				_emitter.emit(CHANGE_EVENT)
// 				break
// 			case ActionTypes.CREATE_TODO:
// 				_todos = _createTodo(_todos, action.title)
// 				_emitter.emit(CHANGE_EVENT)
// 				break
// 			case ActionTypes.UPDATE_TODO:
// 				_todos = _updateTodo(_todos, action.id, action.title)
// 				_emitter.emit(CHANGE_EVENT)
// 				break
// 			case ActionTypes.TOGGLE_TODO:
// 				_todos = _toggleTodo(_todos, action.id, action.completed)
// 				_emitter.emit(CHANGE_EVENT)
// 				break
// 			case ActionTypes.DELETE_TODO:
// 				_todos = _deleteTodo(_todos, action.id)
// 				_emitter.emit(CHANGE_EVENT)
// 				break
// 		}}
// 	)
// }