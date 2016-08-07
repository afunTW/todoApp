const { createStore, combineReducers, applyMiddleware } = Redux
const { Provider } = ReactRedux
const { TodoApp, reducers } = window.App

const thunkMiddleware = ({ dispatch, getState }) => {
	return (next) => (action) => {
		if (typeof action === 'function') {
			return action(dispatch, getState)
		}
		return next(action)
	}
}

// transform reducer tree to reducer function
const composeReducer = combineReducers(reducers)

// store instance binded with reducer
const store = createStore(
	composeReducer,
	applyMiddleware(thunkMiddleware)
)

// Provider can let View component to connect to Store
ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById("app")
)