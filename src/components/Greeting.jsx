import React from 'react'
class Greeting extends React.Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12){
            timeOfDay = "morning"
        } else if (hours >= 12 < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, mate</h1>
        )
    }
}
export default Greeting