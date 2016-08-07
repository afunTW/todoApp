const { Container } = FluxUtils

const {
	TodoHeader
} = window.App

const { connect } = ReactRedux

class TodoHeaderContainer extends React.Component {
	render() {
		return (
			<TodoHeader
				title="My Todo List"
				username="afun"
				todoCount={this.props.todos.filter((todo) => !todo.completed).length}
			/>
		)
	}
}

window.App.TodoHeaderContainer = connect(
	(state) => ({todos: state.todos})
)(TodoHeaderContainer)