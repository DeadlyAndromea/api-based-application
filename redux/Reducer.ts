import { ADD_DATABASE_TO_STORE, SEARCH_INPUT_VALUE } from './Types'

const initialState = {
  results: [],
  data: [],
  value: ''
}

const Reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_DATABASE_TO_STORE: {
      return { ...state, data: [...action.payload] }
    }
    case SEARCH_INPUT_VALUE:
      return { ...state, value: action.payload }

    default: return state
  }
}

export default Reducer