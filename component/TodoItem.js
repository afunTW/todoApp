const { InputField } = window.App

class TodoItem extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = { editable: false }
		this.toggleEditMode = this.toggleEditMode.bind(this)
	}

	toggleEditMode() {
		this.setState({ editable: !this.state.editable })
	}

	renderViewMode() {
		const {
			title,
			completed,
			onDelete,
			onToggle
		} = this.props

		return (
			<div>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => onToggle && onToggle(!completed)}
				/>
				<span onDoubleClick={this.toggleEditMode}>{title}</span>
				<button onClick={() => onDelete && onDelete()}>x</button>
			</div>
		)
	}

	renderEditMode() {
		const { title, onUpdate } = this.props
		return (
			<InputField
				autoFocus
				placeholder='edit item'
				value={title}
				onBlur={this.toggleEditMode}
				onKeyDown={(e) => {
					// press esc (keycode=27) to escape edit mode
					if (e.keyCode === 27) {
						e.preventDefault()
						this.toggleEditMode()
					}
				}}
				onSubmitEditing={(content) => {
					onUpdate && onUpdate(content)
					this.toggleEditMode()
				}}
			/>
		)
	}

	render() {
		return this.state.editable ? this.renderEditMode() : this.renderViewMode()
	}
}

TodoItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired,
	onDeleted: React.PropTypes.func,
	onToggle: React.PropTypes.func,
	onDelete: React.PropTypes.func
}

window.App.TodoItem = TodoItem