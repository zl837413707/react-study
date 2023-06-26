
const value = 0
export default function counterReducer(preState = value, action) {
  switch (action.type) {
    case 'incremented':
      return preState + action.data
    case 'decremented':
      return preState - action.data
    default:
      return preState
  }
}