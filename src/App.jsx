import React from 'react'
import Header from './components/Header'
import Greeting from './components/Greeting'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Jerobe"/>
                <Greeting />
            </div>
        )
    }
}
export default App