import React from 'react';
import {changeTextAction,buttonClickAction} from '../../redux/login/index'
import {  connect } from 'react-redux';

//定义组件
class Login extends React.Component{
    render() {
        console.log(this.props)
        const {login, onChangeText, onButtonClick} = this.props;
        return (
            <div>
                <h1>login</h1>
                <h1 onClick={onChangeText}> {login.text} </h1>
                <button onClick={onButtonClick}>click me</button>
            </div>
        );
    }
}


//映射Redux state到组件的属性
function mapStateToProps(state) {
    console.log(state)
    return { login: state.login }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        onButtonClick:()=>dispatch(buttonClickAction),
        onChangeText:()=>dispatch(changeTextAction)
    }
}

//连接组件
export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)



