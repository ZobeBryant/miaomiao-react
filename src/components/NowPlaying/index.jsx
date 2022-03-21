import React from 'react';
import './index.css'
import axios from 'axios'
import Loading from '../Loading'
import MovieItem from '../MovieItem'
import Scroller from '../Scroller'
const NowPlaying = () => {
    const [movieList, setMovieList] = React.useState([])
    const [pullDownMsg, setPullDownMsg] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        axios({
            url:
                "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989",
            headers: {
                "X-Client-Info":
                    '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615517669266622979801089","bc":"310100"}',
                "X-Host": "mall.film-ticket.film.list"
            }
        }).then(res => {
            let msg = res.data.msg
            if (msg === 'ok') {
                setMovieList(res.data.data.films)
                setIsLoading(false)
            }
        })

    }, [])

    function handleToScroll(pos) {
        if (pos.y > 30) {
            setPullDownMsg('正在更新中')
        }
    }
    function handleToTouchEnd(pos) {
        if (pos.y > 30) {
            axios({
                url:
                    "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989",
                headers: {
                    "X-Client-Info":
                        '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615517669266622979801089","bc":"310100"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                var msg = res.data.msg;
                if (msg === "ok") {
                    setPullDownMsg("更新成功")
                    setTimeout(() => {
                        setMovieList(res.data.data.films)
                        setPullDownMsg('')
                    }, 1000);
                }
            });
        }
    }
    if (isLoading) {
        return (
            <div className='movie_body'>
                <Loading />
            </div>
        )
    } else {
        return (
            <div className='movie_body'>
                <Scroller handleToScroll={handleToScroll} handleToTouchEnd={handleToTouchEnd} render={
                    () => {
                        return (

                            <ul>
                                <li className='pullDown'>{pullDownMsg}</li>
                                {
                                    movieList.map((movie) => {
                                        return <MovieItem key={movie.filmId} {...movie} isNowPlaying = {true} />
                                    })
                                }
                            </ul>
                        )
                    }

                } />
                
            </div>

        )
    }

}

export default NowPlaying;
