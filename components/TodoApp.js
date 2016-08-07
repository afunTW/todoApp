const {
	TodoActions,
	CreateTodoFieldContainer,
	TodoHeaderContainer,
	TodoListContainer
} = window.App

class TodoApp extends React.Component {

	// lifecycle method
	componentDidMount() {

		// load json file from todos.json
		TodoActions.loadTodos()
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

window.App.TodoApp = TodoApp