import './index.css'

const Cryptocurrencycard = props => {
  const {currencyItem} = props

  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = currencyItem

  return (
    <li className="table-row">
      <div className="coin-type">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="logo"
        />
        <p>{currencyName}</p>
      </div>

      <div className="values">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default Cryptocurrencycard