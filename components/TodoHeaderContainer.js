const { Container } = FluxUtils

const {
	TodoStore,
	TodoHeader
} = window.App

class TodoHeaderContainer extends React.Component {

	static getStores() {

		// register the listener and remove function
		return [TodoStore]
	}

	static calculateState(preState) {
		return {
			// FIXME: there's "," behind, why?
			todos: TodoStore.getState(),
		}
	}


	// // Container carry the listener operation
	// constructor(props, context) {
	// 	super(props, context)
	// 	this.state = {todos: TodoStore.getAll()}
	// }
	// componentDidMount() {
	// 	this._removeChangeListener = TodoStore.addChangeListener(
	// 		() => this.setState({todos: TodoStore.getAll()})
	// 	)
	// }

	// componentWillUnmount() {
	// 	this._removeChangeListener()
	// }

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

window.App.TodoHeaderContainer = Container.create(TodoHeaderContainer)
// window.App.TodoHeaderContainer = TodoHeaderContainer