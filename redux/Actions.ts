import { ADD_DATABASE_TO_STORE, SEARCH_INPUT_VALUE, ADD_DATA_TO_STORE } from './Types'

export function addResults (data: any) {
  return {
    type: ADD_DATABASE_TO_STORE,
    payload: data
  }
}

export function addSearch (text: string) {
  return {
    type: SEARCH_INPUT_VALUE,
    payload: text
  }
}

export function addData (data: any) {
  return {
    type: ADD_DATA_TO_STORE,
    payload: data
  }
}