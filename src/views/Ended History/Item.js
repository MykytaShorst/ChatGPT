import React from 'react'
import View from '../../components/UI/View/index';
import msg from "../../assests/images/msg.png";
import "./style.scss";


export default function Item(props) {
    return (
        <View className='ended-history-chat'>
            <View className='image  d-flex align-center j-c-center'>
                <img src={msg} width="81px" height="93px" />
            </View>
            <View className='flashbot'>
                <p className='flashbot-title'>{props.title}</p>
                <p className='content-title'>{props.content}</p>
            </View>
        </View>
    )
}
