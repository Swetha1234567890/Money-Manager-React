// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <li className="list-item-container">
      <div className="money-details-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image1"
          alt="balance"
        />
        <div className="bal-amt-container">
          <p className="text">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-details-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image2"
          alt="income"
        />
        <div className="bal-amt-container">
          <p className="text">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-details-container3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image3"
          alt="expenses"
        />
        <div className="bal-amt-container">
          <p className="text">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
