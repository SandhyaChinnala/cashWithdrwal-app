// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominateDetails, onDenominateAmount} = props
  const {value} = denominateDetails

  const onDenominate = () => {
    onDenominateAmount(value)
  }

  return (
    <li className="btn-container">
      <button type="button" onClick={onDenominate} className="amnt-btn">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
