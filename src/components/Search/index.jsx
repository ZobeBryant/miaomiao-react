import React from 'react'
import './index.css'
import axios from 'axios'
import { setWH } from '../Utils'
const Search = () => {
    const [movieList, setMovieList] = React.useState([])
    const myRef = React.useRef()
    let a = axios
    function cancelRequest() {
        if (typeof axios.source === "function") {
            // 终止上一次axios请求
            a.source("终止请求");
        }
    }
    // 函数防抖策略 搜索时内容输入完毕后再触发=>防抖函数
    // 策略1 clearTimeout() setTimeout()
    // 策略2 axios终止多次请求（使用axios CancelToken进行函数防抖）
    function search() {
        cancelRequest()
        axios.get(`/ajax/search?kw=${myRef.current.value}&cityId=50&stype=-1`, {
            cancelToken: new axios.CancelToken(function (cancel) {
                // 这里c是函数
                a.source = cancel;
            })
        }).then(res => {
            var movies = res.data.movies;
            // console.log(movies)
            if (movies) {
                setMovieList(movies.list)
            }
        }).catch(err => {
            if (axios.isCancel(err)) {
                console.log('Request canceled', err.message); // 请求如果被取消，这里是返回取消的message
            } else {
                // handle error
                console.log(err);
            }
        })
    }

    return (
        <div className="search_body">
            <div className="search_input">
                <div className="search_input_wrapper">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" onChange={search} ref={myRef} />
                </div>
            </div>
            <div className="search_result">
                <h3>电影/电视剧/综艺</h3>
                <ul>
                    {
                        movieList.map((item) => {
                            return <li key={item.id}>
                                <div class="img">
                                    <img src={setWH(item.img, '128.180')} />
                                </div>
                                <div class="info">
                                    <p>
                                        <span>{item.nm}</span>
                                        <span>{item.sc}</span>
                                    </p>
                                    <p>{item.enm}</p>
                                    <p>{item.cat}</p>
                                    <p>{item.rt}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Search;
