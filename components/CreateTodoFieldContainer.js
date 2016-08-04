const {
	TodoActions,
	InputField
} = window.App

class CreateTodoFieldContainer extends React.Component {
	render() {
		return (
			<InputField
				placeholder="add new item"
				onSubmitEditing={TodoActions.createTodo}
			/>
		)
	}
}

window.App.CreateTodoFieldContainer = CreateTodoFieldContainer