import React from 'react'
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <p>Welcome, {this.props.username}!</p>
            </div>
        )
    }
}
export default Header