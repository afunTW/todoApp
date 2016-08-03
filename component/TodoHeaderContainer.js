const {
	TodoStore,
	TodoHeader
} = window.App

class TodoHeaderContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
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
			<TodoHeader
				title="My Todo List"
				username="afun"
				todoCount={todos.filter((todo) => !todo.completed).length}
			/>
		)
	}
}

window.App.TodoHeaderContainer = TodoHeaderContainer