// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  showFirstname = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  showLastname = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    const firstNameText = isFirstName ? (
      <div className="firstName-container">
        <p className="name">Joe</p>
      </div>
    ) : null

    const lastNameText = isLastName ? (
      <div className="firstName-container">
        <p className="name">Jonas</p>
      </div>
    ) : null

    return (
      <div className="show-hide-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button type="button" className="btn" onClick={this.showFirstname}>
              Show/Hide Firstname
            </button>
            {firstNameText}
          </div>
          <div>
            <button type="button" className="btn" onClick={this.showLastname}>
              Show/Hide Lastname
            </button>
            {lastNameText}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
