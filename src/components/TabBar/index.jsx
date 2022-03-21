import React from 'react';
import MyNavLink from '../MyNavLink'
import './index.css'
const TabBar = () => {
    return (
        <div>
            <footer id='footer'>
                {/* 通过路由链接切换组件 */}
                <ul>
                    <li>
                        <MyNavLink to='/movie'>
                            <i className="iconfont icon-dianying"></i>
                            <p >电影</p>
                        </MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to='/cinema'>
                            <i className="iconfont icon-yingyuan"></i>
                            <p >影院</p>
                        </MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/mine">
                            <i className="iconfont icon-wode"></i>
                            <p >我的</p>
                        </MyNavLink>
                    </li>

                </ul>

            </footer>
        </div>
    );
}

export default TabBar;

