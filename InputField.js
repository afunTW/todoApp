class InputField extends React.Component {
	render() {
		return <input {...this.props} type="text" />
	}
}

InputField.propTypes = {
	placeholder: React.PropTypes.string
}

InputField.defaultProps = {
	placeholder: "add new item"
}

window.App.InputField = InputField