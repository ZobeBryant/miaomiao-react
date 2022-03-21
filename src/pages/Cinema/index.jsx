import React from 'react';
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入header action
import { changetitle } from '../../redux/actions/header'
import './index.css'

import CiList from '../../components/CiList'

const Cinema = (props) => {
    const { changetitle } = props
    // componentDidMount
    React.useEffect(() => {
        changetitle({ title: '喵喵影院', render: null })
    }, [])
    return (
        <div id="main">
            <div id="content">
                <div className="cinema_menu">
                    <div className="city_switch">
                        全城 <i className="iconfont icon-lower-triangle"></i>
                    </div>
                    <div className="brand_swtich">
                        品牌 <i className="iconfont icon-lower-triangle"></i>
                    </div>
                    <div className="feature_switch">
                        特色 <i className="iconfont icon-lower-triangle"></i>
                    </div>
                </div>
                <CiList />
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
)(Cinema);

