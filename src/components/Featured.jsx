/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Featured.scss'

import { CryptoCard } from 'react-ui-cards'

const Featured = () => {

    const [data, setData] = useState(null)
    const [bitcoinRange, setBitcoinRange] = useState(null)
    const [ethereumRange, setEthereumRange] = useState(null)
    const [tetherRange, setTetherRange] = useState(null)

    /* 
    Array
        "prices":[[1672444800000,15479.994747226247],[1672531200000,15420.408986264278],[1672617600000,15392.28625758783],[1672704000000,15620.007183388236],[1672790400000,15815.912207427446],[1672876800000,15885.867349890046],[1672963200000,15997.614016945103],[1673049600000,15904.457616586064],[1673136000000,15896.145016241107],[1673222400000,16019.60905965557],[1673264882000,16189.040213557775]],
    */

    //urls for charts
    const bitcoin = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=10&interval=daily'
    const ethereum = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=eur&days=10&interval=daily'
    const tether = 'https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=eur&days=10&interval=daily'

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((bitcoinerror) => {
            console.log(bitcoinerror)
        })
        
        //Bitcoin array chart
        axios.get(bitcoin).then((bitcoin_response) => {
            setBitcoinRange(bitcoin_response.data.prices)
            console.log("BitCoin Array")

            console.log(bitcoin_response.data.prices[0].slice(1))

        }).catch((error) => {
            console.log(error)
        })

        //Ethereum array chart
        axios.get(ethereum).then((ethereum_response) => {
            setEthereumRange(ethereum_response.data.prices)
            console.log("Ethereum Array")

            console.log(ethereum_response.data.prices[0].slice(1))

        }).catch((ethereumerror) => {
            console.log(ethereumerror)
        })
        
        //Tether array chart
        axios.get(tether).then((tether_response) => {
            setTetherRange(tether_response.data.prices)
            console.log("Tether Array")

            console.log(tether_response.data.prices[0].slice(1))

        }).catch((tethererror) => {
            console.log(tethererror)
        })
    }, [])
    console.log(data)

    if (!data) return null
    if (!bitcoinRange) return null
    if (!ethereumRange) return null
    if (!tetherRange) return null


    return (
        <div className='featured' id='featured'>
            <div className="featured-title">
                <h2>Featured</h2>
                <p>Chart Average 10 days</p>
                <div className="featuredGraphs">

                            <CryptoCard
                            currencyName='Bitcoin'
                            currencyPrice={`${data[0].current_price.toLocaleString()} €`}
                            icon={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png' />}
                            currencyShortName='BTC'
                            trend=  {`24h (${data[0].price_change_percentage_24h.toFixed(2)}%)`}
                            trendDirection={data[0].price_change_percentage_24h < 0 ? (
                                -1
                            ) : (
                                1
                                )}
                            chartData={[`${bitcoinRange[0].slice(1)}`,`${bitcoinRange[1].slice(1)}`,`${bitcoinRange[2].slice(1)}`,`${bitcoinRange[3].slice(1)}`,`${bitcoinRange[4].slice(1)}`,`${bitcoinRange[5].slice(1)}`,`${bitcoinRange[6].slice(1)}`,`${bitcoinRange[7].slice(1)}`,`${bitcoinRange[8].slice(1)}`,`${bitcoinRange[9].slice(1)}`]}
                        />

                            <CryptoCard
                            currencyName='Ethereum'
                            currencyPrice={`${data[1].current_price.toLocaleString()} €`}
                            icon={<img src='https://img.icons8.com/color/512/ethereum.png' />}
                            currencyShortName='ETH'
                            trend={`24h (${data[1].price_change_percentage_24h.toFixed(2)}%)`}
                            trendDirection={data[1].price_change_percentage_24h < 0 ? (
                                -1
                                ) : (
                                    1
                                )}
                                chartData={[`${ethereumRange[0].slice(1)}`,`${ethereumRange[1].slice(1)}`,`${ethereumRange[2].slice(1)}`,`${ethereumRange[3].slice(1)}`,`${ethereumRange[4].slice(1)}`,`${ethereumRange[5].slice(1)}`,`${ethereumRange[6].slice(1)}`,`${ethereumRange[7].slice(1)}`,`${ethereumRange[8].slice(1)}`,`${ethereumRange[9].slice(1)}`]}
                            chartColor='#9b59b6'
                        />

                        <CryptoCard
                        currencyName='Tether'
                        currencyPrice={`${data[2].current_price.toLocaleString()} €`}
                        icon={<img src='https://img.icons8.com/color/512/tether.png' />}
                        currencyShortName='USDT'
                        trend={`24h (${data[2].price_change_percentage_24h.toFixed(2)}%)`}
                        trendDirection={data[2].price_change_percentage_24h < 0 ? (
                            -1
                        ) : (
                            1
                            )}
                            chartData={[`${tetherRange[0].slice(1)}`,`${tetherRange[1].slice(1)}`,`${tetherRange[2].slice(1)}`,`${tetherRange[3].slice(1)}`,`${tetherRange[4].slice(1)}`,`${tetherRange[5].slice(1)}`,`${tetherRange[6].slice(1)}`,`${tetherRange[7].slice(1)}`,`${tetherRange[8].slice(1)}`,`${tetherRange[9].slice(1)}`]}
                        chartColor='#4DB6AC'
                    />
                </div>
            </div>
        </div>
    )
}

export default Featured

