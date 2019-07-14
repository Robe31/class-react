import React from 'react'
class Greeting extends React.Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay = hours.toLocaleString()
        return (
            <div>
                It's {timeOfDay}:00
            </div>
        )
    }
}
export default Greeting