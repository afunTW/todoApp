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
				<TodoHeaderContainer/>
				<CreateTodoFieldContainer />
				<TodoListContainer />
			</div>
		);
	}
}

window.App.TodoApp = TodoApp