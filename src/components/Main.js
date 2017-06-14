import React from 'react'
import {connect} from 'react-redux'
import {addScore,loseScore}  from '../actions'


const Main = ({score,handleAddScore,handleLoseScore}) => {

  const handleClick = (e,input)=>{
    console.log("buttonclick");
    e.preventDefault()
    input == "up"?
      handleAddScore() : handleLoseScore()
  }

  return (
    <main>
      <button
        onClick={(e)=>{handleClick(e,"up")}}>
        up
      </button>
      <h1>{score}</h1>
      <button
        onClick={(e)=>{handleClick(e),"down"}}>
        down
      </button>
    </main>
  )
}




const mapStateToProps = (state) => {
  return {
    score:state.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddScore:()  => {
      dispatch(addScore())
    },
    handleLoseScore:() => {
      dispatch(loseScore())
    }
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Main)
