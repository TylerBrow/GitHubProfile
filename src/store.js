import { createStore } from 'redux'

import GitReducer from './reducers/GitReducer'

const store = createStore(GitReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store