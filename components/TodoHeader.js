class TodoHeader extends React.Component {
	render() {
		const { title, username, todoCount } = this.props
		return (
			<div>
				<h1>{title}</h1>
				<span>hi {username}, you still have {todoCount} events to do</span>
			</div>
		);
	}
}

TodoHeader.propTypes = {
	title: React.PropTypes.string,
	username: React.PropTypes.string,
	todoCount: React.PropTypes.number
}

TodoHeader.defaultProps = {
	title: 'My Todo App',
	username: 'afun',
	todoCount: 0
}

window.App.TodoHeader = TodoHeader