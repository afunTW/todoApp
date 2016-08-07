const {
	TodoActions,
	InputField
} = window.App

const { connect } = ReactRedux

class CreateTodoFieldContainer extends React.Component {
	render() {
		return (
			<InputField
				placeholder="add new item"
				// invoke parent's createTodo
				onSubmitEditing={this.props.createTodo}
			/>
		)
	}
}

// [API] connect(mapStateToProps, mapDispatchToProps)()
window.App.CreateTodoFieldContainer = connect(undefined, {
	createTodo: TodoActions.createTodo
})(CreateTodoFieldContainer)