const {
	TodoStore,
	TodoHeader
} = window.App

class TodoHeaderContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {todos: TodoStore.getAll()}
	}

	componentDidMount() {
		this._removeChangeListener = TodoStore.addChangeListener(
			() => this.setState({todos: TodoStore.getAll()})
		)
	}

	componentWillUnmount() {
		this._removeChangeListener()
	}

	render() {
		return (
			<TodoHeader
				title="My Todo List"
				username="afun"
				todoCount={this.state.todos.filter((todo) => !todo.completed).length}
			/>
		)
	}
}

window.App.TodoHeaderContainer = TodoHeaderContainer