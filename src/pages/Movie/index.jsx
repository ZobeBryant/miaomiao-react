import React from 'react';
import MyNavLink from '../../components/MyNavLink'
import './index.css'
import NowPlaying from '../../components/NowPlaying'
import CommingSoon from '../../components/ComingSoon'
import { Switch, Route, Redirect } from 'react-router-dom'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
// 引入header action
import {changetitle} from '../../redux/actions/header'
const Movie = () => {

    // componentDidMount
    React.useEffect(() => {
        changetitle({title: '喵喵影院', render: null })
    }, [])

    return (
        <div>
            <div id="main">
                <div id="content">
                    <div className="movie_menu">
                        <MyNavLink to="/movie/city" className="city_name">
                            <span>大连</span>
                            <i className="iconfont icon-lower-triangle"></i>
                        </MyNavLink>
                        <div class="hot_swtich">
                            <MyNavLink to="/movie/nowPlaying" className="hot_item">正在热映</MyNavLink>
                            <MyNavLink to="/movie/comingSoon" className="hot_item">即将上映</MyNavLink>
                        </div>
                        <MyNavLink to="/movie/search" className="search_entry">
                            <i className="iconfont icon-sousuo"></i>
                        </MyNavLink>
                    </div>
                    {/* 注册路由 */}
                    <Switch>
                        <Route path="/movie/nowPlaying" component={NowPlaying} />
                        <Route path="/movie/comingSoon" component={CommingSoon} />
                        <Redirect to="/movie/nowPlaying" />
                    </Switch>
                </div>
            </div>
        </div>
    );
}
export default connect(
    state => ({
        
    }),
    {
        changetitle
    }
)(Movie);
