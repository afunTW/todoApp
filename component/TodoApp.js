const {
	InputField,
	TodoList,
	TodoHeader,
	TodoActions,
	TodoStore
} = window.App

class TodoApp extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			todos: TodoStore.getAll()
		}
	}

	// lifecycle method
	componentWillMount() {
		// register listener to TodoStore
		this._removeChangeListener()
	}

	// lifecycle method
	componentDidMount() {

		// load json file from todos.json
		TodoActions.loadTodos()

		// register to TodoStore: sync state and TodoStore when trigger
		this._removeChangeListener = TodoStore.addChangeListener(
			() => this.setState({todos: TodoStore.getAll()})
		)
	}

	updateTodoBy(updatefn) {
		return (...args) => {
			this.setState({
				todos: updatefn(this.state.todos, ...args)
			})
		}
	}

	// get every render data from TOdoStore
	render() {
		const { todos } = this.state
		return (
			<div>
				<TodoHeader
					todoCount={todos.filter((todo) => !todo.completed).length}
				/>
				<InputField
					placeholder="add new item"
					onSubmitEditing={TodoActions.createTodo}
				/>
				<TodoList
					todos={todos}
					onDeleteTodo={TodoActions.deleteTodo}
					onToggleTodo={TodoActions.toggleTodo}
					onUpdateTodo={TodoActions.updateTodo}
				/>
			</div>
		);
	}
}

window.App.TodoApp = TodoApp