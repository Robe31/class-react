import React from 'react'
import Header from './components/Header'
import Greeting from './components/Greeting'

class App extends React.Component {
   constructor(){
    super()
    this.state = {
        name: "Jerobe Robinson",
        age: 23
    }
   }
   render(){
       return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age}</h3>
        </div>
       )
   }
}
// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn: true
//         }
//     }
//     render(){
//         let wordDisplay
//         if(this.state.isLoggedIn){
//             wordDisplay = "in"
//         }else {
//             wordDisplay = "Out"
//         }
//         return (
//             <div>
//                 <h1>You're currently logged {wordDisplay}</h1>
//             </div>
//         )
//     }
// }
export default App