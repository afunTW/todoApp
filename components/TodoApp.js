const {
	TodoActions,
	CreateTodoFieldContainer,
	TodoHeaderContainer,
	TodoListContainer
} = window.App

const { connect } = ReactRedux

class TodoApp extends React.Component {

	// lifecycle method
	componentDidMount() {
		this.props.loadTodos()
	}

	// get every render data from TOdoStore
	render() {
		return (
			<div>
				<TodoHeaderContainer />
				<CreateTodoFieldContainer />
				<TodoListContainer />
			</div>
		)
	}
}

window.App.TodoApp = connect(undefined, {
	loadTodos: TodoActions.loadTodos
})(TodoApp)