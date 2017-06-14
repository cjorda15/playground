const score = (state = 0,action) => {
  let newState;
  switch(action.type){
    case "ADD_SCORE":
     newState = ++state
      return  newState

    case "LOSE_SCORE":
       newState = --state
      return newState

    default:
      return state
  }
}

export default score
