import { useReducer} from "react";
const reducer = (state: any, action: any) => {  
 const { type} = action
  switch (type) {
    case 'OPEN':
      return {open: true}
    case 'CLOSE':
      return {open: false}
    default:
      return state
  
}
}
const useModal = () => {
  const initialState = {open: false}
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return {
  state,
  dispatch
  }
}
export default useModal