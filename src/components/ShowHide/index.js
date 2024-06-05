// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstNameShow: false, lastNameShow: false}

  onClickShowFirstName = () => {
    this.setState(prevState => ({firstNameShow: !prevState.firstNameShow}))
  }

  onClickShowLastName = () => {
    this.setState(prevState => ({lastNameShow: !prevState.lastNameShow}))
  }

  render() {
    const {firstNameShow, lastNameShow} = this.state
    const firstNameCont = (
      <div className="firstname-cont">
        <p className="firstname">Joe</p>
      </div>
    )
    const lastNameCont = (
      <div className="lastname-cont">
        <p className="lastname">Jonas</p>
      </div>
    )
    const firstShow = firstNameShow && firstNameCont
    const lastShow = lastNameShow && lastNameCont
    return (
      <div className="bg-container">
        <div className="show-hide-container">
          <h1 className="show-hide-heading">Show/hide</h1>
          <div className="show-hide-btns-container">
            <div className="show-hide-firstname-cont">
              <button
                type="button"
                className="btns"
                onClick={this.onClickShowFirstName}
              >
                Show/Hide FirstName
              </button>
              {firstShow}
            </div>
            <div className="show-hide-lastname-cont">
              <button
                type="button"
                onClick={this.onClickShowLastName}
                className="btns"
              >
                Show/Hide LastName
              </button>
              {lastShow}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
