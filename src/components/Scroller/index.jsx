// 封装BetterScroll
import React from 'react';
import BScroll from '@better-scroll/core'
import PropTypes from 'prop-types'

const Scroller = (props) => {
    const wrapper = React.useRef()
    const { handleToScroll, handleToTouchEnd, render } = props
    const [bScroll, setBScroll] = React.useState()
    React.useEffect(() => {
        const bs = new BScroll(wrapper.current, {
            // tap: true,
            click: true,
            // 决定是否分发scroll事件
            probeType: 1,
            // 以下是better-scroll刷新后才能滑动的解决方案
            mouseWheel: true,//开启鼠标滚轮
            disableMouse: false,//启用鼠标拖动
            disableTouch: false//启用手指触摸

        })
        setBScroll(bs)
        return () => {
            // 组件卸载时销毁BScroll
            setBScroll(null)
        }
    }, [])
    React.useEffect(() => {
        if (!bScroll) return
        // 上拉加载
        bScroll.on('scroll', (pos) => {
            handleToScroll(pos)
        })
        bScroll.on('scrollEnd', (pos) => {
            handleToTouchEnd(pos)
        })
    })


    return (
        <div className="wrapper" style={{height: `${window.innerHeight - 51 - 52 - 46 + 'px'}`}} ref={wrapper}>
            {/* 这里相当于vue中的slot */}
            {render()}

        </div>
    );
}


Scroller.propTypes = {
    handleToScroll: PropTypes.func,
    handleToTouchEnd: PropTypes.func

}
Scroller.defaultProps = {
    handleToScroll: function () { },
    handleToTouchEnd: function () { }
}


export default Scroller;
