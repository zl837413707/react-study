import { INCREMENT, DECREMENT } from './constant'
const value = 0
export default function counterReducer(preState = value, action) {
  switch (action.type) {
    case INCREMENT:
      return preState + action.data
    case DECREMENT:
      return preState - action.data
    default:
      return preState
  }
}