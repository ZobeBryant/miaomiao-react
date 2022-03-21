import React from 'react';
import Loading from '../../components/Loading'
import './detail.css'
import axios from 'axios'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入header action
import { changetitle } from '../../redux/actions/header'
// 引入Swiper
import { Swiper } from 'antd-mobile'
const Detail = (props) => {
    const { changetitle, history } = props
    const { movieId } = props.match.params
    const [film, setFilm] = React.useState()
    const [isLoading, setIsLoading] = React.useState(true)

    // 点击返回按钮返回到上一个路由，设置Header信息
    function goBack() {
        changetitle({ title: '喵喵影院', render: null })
        history.goBack()
    }

    React.useEffect(() => {
        changetitle({
            title: '影片详情', render: () => {
                return <i className="iconfont icon-right" onClick={() => { goBack() }}></i>
            }
        })
        axios({
            url: `https://m.maizuo.com/gateway?filmId=${movieId}&k=2917818`,
            headers: {
                "X-Client-Info":
                    '{"a":"3000","ch":"1002","v":"5.0.4","e":"16162254242302012276342785"}',
                "X-Host": "mall.film-ticket.film.info"
            }
        }).then(res => {
            var msg = res.data.msg
            if (msg === "ok") {
                setFilm(res.data.data.film)
                setIsLoading(false)
                // console.log(res.data.data.film)
            }
        });
    }, [])

    if (isLoading) {
        return (
            <div id="detailContainer" className="slide-enter-active">
                <Loading />
            </div>
        )
    } else {
        return (
            <div id="detailContainer" className="slide-enter-active">
                <div id="content" className="contentDetail">
                    <div className="detail_list">
                        <div className="detail_list_bg" style={{ backgroundImage: `url(${film.poster})` }}></div>
                        <div className="detail_list_filter"></div>
                        <div className="detail_list_content">
                            <div className="detail_list_img">
                                <img src={film.poster} alt />
                            </div>
                            <div className="detail_list_info">
                                <h2>{film.name}</h2>
                                <p>{film.category}</p>
                                <p>{film.nation} / {film.runtime}分钟</p>
                                <p>2018-11-16大陆上映</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail_intro">
                        <p>{film.synopsis}</p>
                    </div>
                    <div className="detail_player swiper-container">
                        <ul class="swiper-wrapper">
                            <Swiper slideSize={45} indicator={() => null}>
                                {
                                    film.photos.map((item, index) => {

                                        return <Swiper.Item key={index}>
                                            <div className="swiper-slide">
                                                <img src={item} />
                                            </div>
                                        </Swiper.Item>
                                    })
                                }
                            </Swiper>

                        </ul>
                    </div>
                </div >

            </div >
        )
    }
}

export default connect(
    state => ({

    }),
    {
        changetitle
    }
)(Detail);
