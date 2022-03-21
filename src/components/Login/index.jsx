import React from 'react';
import './index.css'

const Login = () => {
    const textRef = React.useRef()
    const pwdRef = React.useRef()
    function handleToLogin(){
        console.log(textRef.current.value)
        console.log(pwdRef.current.value)
    }
    return (
        <div className="login_body">
            <div>
                <input ref = {textRef} className="login_text" type="text" placeHolder="账户名/手机号/Email" />
            </div>
            <div>
                <input ref = {pwdRef} className="login_text" type="password" placeHolder="请输入您的密码" />
            </div>
            <div className="login_btn">
                <input type="submit" value="登录" onClick={handleToLogin} />
            </div>
            <div className="login_link">
                <a href="#">立即注册</a>
                <a href="#">找回密码</a>
            </div>
        </div>
    );
}

export default Login;
