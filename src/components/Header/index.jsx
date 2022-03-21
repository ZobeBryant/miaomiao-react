import React from 'react';
import PropTypes from 'prop-types'
import './index.css'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
const Header = (props) => {
    
    const { title, render } = props

    return (
        <div>
            <header id='header'>
                {render ? render() : ""}<h1>{title}</h1>
            </header>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
Header.defaultProps = {
    title: '喵喵电影'
}

export default connect(
    state => ({
        title: state.header.title,
        render: state.header.render
    }),
    {}
)(Header)
