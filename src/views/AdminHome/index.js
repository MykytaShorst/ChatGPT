import React, { useState, useEffect, useRef } from "react";
import View from '../../components/UI/View/index';
import "./style.scss";
import rectangle from "../../assests/images/Rectangle.png";
import msg from "../../assests/images/msg.png";
import importing from "../../assests/images/import.png";
import history from "../../assests/images/history.png";
import send from "../../assests/images/send.png";
import { Input, Button } from 'react-chat-elements'


const AdminHome = (props) => {
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
                {chatContent.length > 0 && chatContent.map((c) => {
                    if (c.sender === 'you') {
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
                    <img alt="img" className="history" src={history} />
                    <img alt="img" className="import" src={importing} />
                    <Input
                        value={umsg}
                        referance={inputReferance}
                        placeholder='Add URL...'
                        multiline={true}
                        className="add-url"
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

export default AdminHome;