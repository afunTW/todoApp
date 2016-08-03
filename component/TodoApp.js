const {
	InputField,
	TodoList,
	TodoHeader
} = window.App

const _deleteTodo = (todos, id) => {
	const idx = todos.findIndex((todo) => todo.id === id)
	if (idx !== -1) todos.splice(idx, 1)
	return todos
}

const _toggleTodo = (todos, id, completed) => {
	const target = todos.find((todo) => todo.id === id)
	if (target) target.completed = completed
	return todos
}

const _createTodo = (todos, title) => {
	todos.push({
		id: todos[todos.length-1].id+1,
		title: title,
		completed: false
	})
	return todos
}

const _updateTodo = (todos, id, title) => {
	const target = todos.find((todo) => todo.id === id)
	if (target) target.title = title
	return todos
}

class TodoApp extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			todos: []
		}
	}

	// lifecycle method
	componentDidMount() {
		fetch('./todos.json')
			.then((response) => response.json())
			.then((todos) => this.setState({todos}))
	}

	updateTodoBy(updatefn) {
		return (...args) => {
			this.setState({
				todos: updatefn(this.state.todos, ...args)
			})
		}
	}

	render() {
		const { todos } = this.state
		return (
			<div>
				<TodoHeader
					todoCount={todos.filter((todo) => !todo.completed).length}
				/>
				<InputField
					placeholder="add new item"
					onSubmitEditing={ this.updateTodoBy(_createTodo) }
				/>
				<TodoList
					todos={todos}
					onDeleteTodo={ this.updateTodoBy(_deleteTodo) }
					onToggleTodo={ this.updateTodoBy(_toggleTodo) }
					onUpdateTodo={ this.updateTodoBy(_updateTodo) }
				/>
			</div>
		);
	}
}

window.App.TodoApp = TodoApp