import React from 'react';
import axios from 'axios'
import Scroller from '../Scroller'
import Loading from '../Loading'
import './index.css'

const CiList = () => {
    const [cinemaList, setCinemaList] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        axios({
            url: `https://m.maizuo.com/gateway?cityId=330100&ticketFlag=1&k=8492300`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615517669266622979801089","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            var msg = res.data.msg;
            if (msg === 'ok') {
                setCinemaList(res.data.data.cinemas)
                setIsLoading(false)
            }
        })
    }, [])

    if (isLoading) {
        return (
            <div className="cinema_body">
                <Loading />
            </div>
        )
    } else {
        return (
            <div className="cinema_body">
                <Scroller key="cinemaList.length" render = {() => {
                    return <ul>
                    {
                        cinemaList.map((item) => {
                            return <li key={item.cinemaId}>
                                <div>
                                    <span>{item.name}</span>
                                    <span className="q"><span className="price"> {item.lowPrice / 100}</span> 元起</span>
                                </div>
                                <div className="address">
                                    <span>{item.address}</span>
                                    <span>{Math.ceil(item.Distance * 10) / 10}km</span>
                                </div>
                                <div className="card">
                                    <div>小吃</div>
                                    <div>折扣卡</div>
                                </div>
                            </li>
                        })
                    }
                </ul>
                }}/>
                
            </div>)
    }

}

export default CiList;
