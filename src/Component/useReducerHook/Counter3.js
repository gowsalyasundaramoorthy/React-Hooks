import React,{useReducer} from 'react'

const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1
            
            case 'decrement':
                return state - 1
            
            case 'reset':
                return initialState
            
            default:
                return state
        }
    }

function Counter3() {

  const [count, dispatch] = useReducer(reducer, initialState)  
  const [count2, dispatch2] = useReducer(reducer, initialState)   
    
    


  return (
    <div>
      <div>
          <div><count>Count - {count}</count></div>
          <button onClick={() =>  dispatch('increment') }>Increment</button>
          <button onClick={() => dispatch('decrement') }>Decrement</button>
          <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
    
    <div>
          <div><count2>Count2 - {count2}</count2></div>
          <button onClick={() =>  dispatch2('increment') }>Increment 2</button>
          <button onClick={() => dispatch2('decrement') }>Decrement 2</button>
          <button onClick={()=> dispatch2('reset')}>Reset </button>
      </div>
    </div>
  )
}

export default Counter3