import { Link } from 'react-router-dom';
import View from '../../../components/UI/View/index';
import {ConfigProvider, Input} from 'antd';
import "./style.scss";
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import icon from"../../../assests/images/Icon.png";

const AdminLogin = (props) => {
    return (
        <View className='login-page'>
            <View className='page d-flex j-c-center align-center' >
                <View className = 'login d-flex  '>
                <View className='backspace d-flex align-center j-c-center'>
                    <img className='backspace-image' src={icon}/>
                </View>
                     <p className='login-title j-c-center align-center '>Login As<br/>Admin</p>
                </View>
                <View className='input d-flex j-c-center align-center'>
                    <View className='email'>
                        <span className='input-tilte' >Email</span>
                        <ConfigProvider
                            theme={{token: {colorPrimary: '#F79052',},}}>
                                <Input 
                                    placeholder='Input Email'
                                    style={{ width: '100%', height:'48px' }} 
                                    />
                            </ConfigProvider>
                    </View> 
                    <View className='password'>
                        <span className='input-tilte'>Password</span>
                        <ConfigProvider
                            theme={{token: {colorPrimary: '#F79052',},}}>
                            <Input.Password
                                placeholder='input password'
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                style={{ width: '100%', height:'48px' }}
                            />
                        </ConfigProvider>
                    </View>
                </View>
                <View className='login-button d-flex align-center j-c-center'>
                    <Link to="/history" style={{textDecoration:"none"}}>
                        <p className='button-title'>Login</p>
                    </Link>
                </View>
            </View>
        </View>
    );
}
export default AdminLogin;