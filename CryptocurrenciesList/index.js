import {Component} from 'react'
import {TailSpin} from 'react-loader-spinner'
import Cryptocurrencycard from '../Cryptocurrencycard'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currentData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
  try {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    console.log('Response:', response)

    const data = await response.json()

    console.log('Data:', data)

    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))

    this.setState({
      currentData: updatedData,
      isLoading: false,
    })
  } catch (error) {
    console.log('Error:', error)
    this.setState({isLoading: false})
  }
}

  render() {
    const {currentData, isLoading} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>

        {isLoading ? (
          <div data-testid="loader">
            <TailSpin
              height={50}
              width={50}
              color="#00e7ff"
            />
          </div>
        ) : (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-image"
            />

            <ul className="table">
              <li className="table-header">
                <p>Coin Type</p>

                <div className="values">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </li>

              {currentData.map(item => (
                <Cryptocurrencycard
                  key={item.id}
                  currencyItem={item}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList