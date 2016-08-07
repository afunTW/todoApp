const { createStore, combineReducers } = Redux
const { TodoApp, reducers } = window.App

// transform reducer tree to reducer function
const composeReducer = combineReducers(reducers)

// store instance binded with reducer
const store = createStore(composeReducer)

ReactDOM.render(
	<TodoApp />,
	document.getElementById("app")
)