// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onDenominateAmount = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <p className="sarah">{initial}</p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="bal">Your Balance</p>
            <div className="bal-count">
              <p className="bal-amnt">{count}</p>
              <p className="rupee">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="desc">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominateDetails={each}
                key={each.id}
                onDenominateAmount={this.onDenominateAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
