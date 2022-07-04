import React from 'react'
import { Parent1 } from '../../reactrender/src/Component/Optimisation/Parent1';
import './App.css';

function App() {
  return (
    <div className="App">
      <Parent1 />


    </div>
  );
}

export default App;

// ****CUSTOM HOOK********
// import React from 'react' 
// import './App.css';
// import Counter1 from './Component/Counter1';
// import DocTitle1 from './Component/DocTitle1'
// import DocTitle2 from './Component/DocTitle2';
// import Counter2 from './Component/Counter2';
// import UserForm from './Component/UserForm';

// function App() {
//   return (
//     <div className="App">
//       {/* <DocTitle1 />

//       <DocTitle2 /> */}

//       {/* <Counter1 />
//       <Counter2 /> */}
//       <UserForm />
      


//     </div>
//   );
// }

// export default App;



// ***** USECONTEXT HOOK ** 
//   import React from 'react'
// import './App.css';
// import ComponentC from './Component/ComponentC'

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// function App() {
//   return (
//     <div className="App">
      
//       <UserContext.Provider value={'Gowsalya'}>
        
//         <ChannelContext.Provider value={'Codeevolution'}>
//           <ComponentC />
//         </ChannelContext.Provider>
        
        
        
//       </UserContext.Provider>

//     </div>
//   );
// }

// export default App;


// ****** USEREDUCER - USECONTEXT HOOK ****

// import React,{useReducer} from 'react'
// import './App.css';
// import ComponentA from './Component/ComponentA'
// import ComponentB from './Component/ComponentB'
// import ComponentC from './Component/ComponentC'

// export const CountContext = React.createContext()


// const initialState = 0
//     const reducer = (state, action) => {
//         switch (action) {
//             case 'increment':
//                 return state + 1
            
//             case 'decrement':
//                 return state - 1
            
//             case 'reset':
//                 return initialState
            
//             default:
//                 return state
//         }
//     }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
//         <div className="App">
      
//           Count - {count}
//           <ComponentA />
//           <ComponentB />
//           <ComponentC />

//     </div>
//     </CountContext.Provider>
//   );
// }

// export default App;
