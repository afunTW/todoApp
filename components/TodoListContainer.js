const { Container } = FluxUtils

const {
	TodoActions,
	TodoStore,
	TodoList
} = window.App

class TodoListContainer extends React.Component {

	static getStores() {
		return [TodoStore]
	}

	static calculateState(preState) {
		return {
			todos: TodoStore.getState(),
		}
	}

	// // Container carry the listener operation
	// constructor(props, context) {
	// 	super(props, context)

	// 	// [fromStore] load data from Store
	// 	this.state = {todos: TodoStore.getAll()}
	// }

	// componentDidMount() {

	// 	// [fromStore] register listener
	// 	// [fromStore] get the remove listener funcion (_removeChangeListnere)
	// 	this._removeChangeListener = TodoStore.addChangeListener(
	// 		() => this.setState({todos: TodoStore.getAll()})
	// 	)
	// }

	// componentWillUnmount() {
	// 	this._removeChangeListener()
	// }

	render() {
		return (
			<TodoList
				todos={this.state.todos}
				onDeleteTodo={TodoActions.deleteTodo}
				onToggleTodo={TodoActions.toggleTodo}
				onUpdateTodo={TodoActions.updateTodo}
			/>
		)
	}
}

window.App.TodoListContainer = Container.create(TodoListContainer)
// window.App.TodoListContainer = TodoListContainer