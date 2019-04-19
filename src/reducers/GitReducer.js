const initialState = {
  User: [],
  Repo: []
}

export default function GitReducer(state = initialState, action) {
  switch ( action.type ) {
    case 'GET_USER':
      return {...state, User: action.payload}
    case 'GET_REPO':
      return {...state, Repo: action.payload}
    default:
      return state
  }
}