const {
	TodoActions,
	TodoStore,
	TodoList
} = window.App

class TodoListContainer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {todos: TodoStore.getAll()}
	}

	componentWillMount() {
		this._removeChangeListener()
	}

	componentDidMount() {
		this._removeChangeListener = TodoStore.addChangeListener(
			() => this.setState({todos: TodoStore.getAll()})
		)
	}

	render() {
		return (
			<TodoList
				todos={todos}
				onDeleteTodo={TodoActions.deleteTodo}
				onToggleTodo={TodoActions.toggleTodo}
				onUpdateTodo={TodoActions.updateTodo}
			/>
		)
	}
}

window.App.TodoListContainer = TodoListContainer