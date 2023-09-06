import React from 'react';
import { Link } from 'react-router-dom';
import View from '../../../components/UI/View/index';
import "./style.scss";
import {ConfigProvider, Input} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import icon from"../../../assests/images/Icon.png";
import google from"../../../assests/images/google.png";
import facebook from"../../../assests/images/facebook.png";
import apple from"../../../assests/images/apple.png";
const Signup = (props) => {
    return (
        <View className='signup-page'>
            <View className='page d-flex j-c-center align-center' >
                <View className = 'create-account d-flex  '>
                    <View className='backspace d-flex align-center j-c-center'>
                        <Link to= "/">
                            <img className='backspace-image' src={icon}/>
                        </Link>
                            
                    </View>
                    <p className='create-account-title j-c-center align-center '>Create your<br/>Account</p>
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
                            theme={{token: {colorPrimary: '#F79052',},}}></ConfigProvider>
                            <Input.Password
                                className='password-input'
                                placeholder='input password'
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                style={{ width: '100%', height:'48px' }}
                            />
                    </View>
                </View>
                <View className="d-flex j-c-center align-center" style={{marginTop:'40px'}}>
                    <input id = "remember" className='remember' type="checkbox" ></input>
                    <span>Remember me</span>
                </View>
                <View className='signup-button d-flex align-center j-c-center'>
                    <p className='button-title'>Sign up</p>
                </View>
                <View className='continue d-flex align-center j-c-center'>
                    <p className='continue-title'>or continue with</p>
                </View>
               <View className='social-media d-flex'>
                    <View className = 'social-media-white d-flex align-items-center'>
                        <img src = {apple} width="39px" height="39px" className='mx-auto'/>
                    </View>
                    <View className = 'social-media-white d-flex align-items-center'>
                        <img src = {google} width="39px" height="39px" className='mx-auto'/>
                    </View>
                    <View className = 'social-media-white d-flex align-items-center'>
                        <img src = {facebook} width="39px" height="39px" className='mx-auto'/>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Signup;