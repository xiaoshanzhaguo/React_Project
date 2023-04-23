import handler from "./index"

let reducer = (state = {...handler.state}, action: {type: string, val: number}) => {

  let newState = JSON.parse(JSON.stringify(state));

  for (let key in handler.actionNames) {
    if (action.type === handler.actionNames[key]) {
      handler.actions[handler.actionNames[key]](newState, action);
      break;
    }
  }
  return newState;
}

export default reducer