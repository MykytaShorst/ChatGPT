import React, { useState, useEffect, useRef } from "react";
import View from '../../components/UI/View/index';
import "./style.scss";
import rectangle from "../../assests/images/Rectangle.png";
import msg from "../../assests/images/msg.png";
import download from "../../assests/images/download.png";
import add from "../../assests/images/add.png";
import send from "../../assests/images/send.png";
import VC from "../../assests/images/VC.png";
import { Input, Button } from 'react-chat-elements'


const ChatBox = (props) => {
    const inputReferance = React.createRef();
    const [input, setInput] = useState(null);
    const [chatContent, setChatContent] = useState([]);
    const [umsg, setUMsg] = useState("");
    const [message, setMessage] = useState('');

    useEffect(() => {
        const BotMsg = () => {
            var arr = {};
        };
    }, []);

    const handleSend = () => {
        if (umsg.trim() !== '') {
            console.log('=======================-', umsg.split('\n'));
            let tempMsg = [];
            umsg.split('\n').forEach((e, i) => {
                tempMsg.push(e);
                if (i !== umsg.split('\n').length - 1) {
                    tempMsg.push(<br />);
                }
            })
            let temp = [...chatContent];
            temp.push({ sender: 'you', content: tempMsg });
            temp.push({ sender: 'bot', content: "I'm bot" });
            setChatContent([...temp]);
            setUMsg('');
            inputReferance.current.value = '';
        }
    }

    const changeQuery = (e) => {
        document.querySelector("textarea").style.height = "100px";
        setUMsg(e.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey && umsg.trim() !== '') {
            handleSend();
            event.preventDefault()
        }
    };

    return (
        <View className='main-page '>
            <View className='top d-flex align-center'>
                <img className='left' src={rectangle} style={{ width: "107px", height: "107px" }} />
                <p className='left-text'>FlashBot</p>
            </View>
            <View className="main">
                <View className="message">
                    <View className="photo">
                        <img className="image" alt="img" src={msg} />
                    </View>
                    <p className="text-bot"> Hello! My name is Flash AI Bot </p>
                </View>
                <View className="message">
                    <View className="photo">
                        <img className="image" alt="img" src={msg} />
                    </View>
                    <p className="text-bot"> How can I help you today? </p>
                </View>
                <View className="d-flex">
                    <View className="message" style={{ marginLeft: "154px" }}>
                        <p className="text-option"> Plan a Trip </p>
                    </View>
                    <View className="message" style={{ marginLeft: "42px" }}>
                        <p className="text-option"> Modify Booking </p>
                    </View>
                    <View className="message" style={{ marginLeft: "32px" }}>
                        <p className="text-option"> Rewards program </p>
                    </View>
                </View>
                <View className="d-flex">
                    <View className="message" style={{ marginLeft: "154px" }}>
                        <p className="text-option">Airport Transfers</p>
                    </View>
                    <View className="message" style={{ marginLeft: "15px" }}>
                        <p className="text-option">My problem is not listed here</p>
                    </View>
                </View>

                <View className="message">
                    <View className="photo">
                        <img className="image" alt="img" src={msg} />
                    </View>
                    <p className="text-bot"> Sure I can help you, Do you have any picture of your pasassport or any copy of it? </p>
                </View>
                {chatContent.length > 0 && chatContent.map((c) => {
                    if (c.sender === 'you') {
                        return (
                            <View className="message" key={c.id}>
                                <p className="text-you">{c.content}</p>
                            </View>
                        );
                    } else {
                        return (
                            <View className="message" key={c.id}>
                                <View className="photo">
                                    <img className="image" alt="img" src={msg} />
                                </View>
                                <p className="text-bot">{c.content}</p>
                            </View>
                        );
                    }
                })}

            </View>
            <View className="footer">
                <View className="footer-chat">
                    <img alt="img" className="add-icon" src={add} />
                    <img alt="img" className="download-icon" src={download} />
                    <Input
                        value={umsg}
                        referance={inputReferance}
                        placeholder='Type something...'
                        multiline={true}
                        className="write-message"
                        onChange={changeQuery}
                        onKeyPress={handleKeyPress}
                        rightButtons={<button className="send-btn" onClick={handleSend}><img alt="img" className="send-icon" src={send} /></button>}
                    />
                    {/* <textarea id="auto-resize-textarea" className="write-message" rows="6" placeholder="Type something" onChange={changeQuery} ></textarea> */}

                </View>
            </View>
        </View>
    );
}

export default ChatBox;