import { Link } from 'react-router-dom';
import View from '../../components/UI/View/index';
import "./style.scss";
import rectangle from "../../assests/images/Rectangle.png";
import msg from "../../assests/images/msg.png";
import Item from './Item';
const history = (props) => {

    const customArra = [
        {
            title: "FlashBot",
            content: "Hello Mattsmith! I am Flashbot, how can I assist you today? "
        },
        {
            title: "FlashBot",
            content: "Hello Mattsmith! What services you want today? I am available 24/7 to help you out "
        },
    ];
    const customArre = [
        {
            title: "FlashBot - June 21 , 2025  ",
            content: "Hello Mattsmith! I am Flashbot, how can I assist you today? "
        },
        {
            title: "FlashBot - June 21 , 2025  ",
            content: "Hello Mattsmith! I am Flashbot, how can I assist you today? "
        },
    ];

    return (
        <View className='main-page '>
            <View className='top d-flex align-center'>
                <img className='left' src={rectangle} style={{ width: "107px", height: "107px" }} />
                <p className='left-text'>FlashBot</p>
            </View>
            <View className='chat-history  d-flex align-center '>
                <View className="active-history">
                    <p className='headline'>Active Chats</p>
                    <>
                        {
                            customArra.map(item => {
                                return (
                                    <Item
                                        title={item.title}
                                        content={item.content}
                                    />
                                )
                            })
                        }
                    </>
                </View>
                <View className='ended-history'>
                    <View className='ended-history-header'>
                        <p className='headline'> Ended Chats</p>
                        <Link to="/ended" style={{ textDecoration: "none" }}>
                            <p className='see-all'> See all</p>
                        </Link>
                    </View>
                    <>
                        {
                            customArre.map(item => {
                                return (
                                    <Item
                                        title={item.title}
                                        content={item.content}
                                    />
                                )
                            })
                        }
                    </>
                </View>
                <View className='start-another d-flex align-center  j-c-center'>
                    <Link to="/chatbox" style={{ textDecoration: "none" }}>
                        <p className='bottom-tilte'>Start Another Chat with Flash</p>
                    </Link>
                </View>
            </View>
        </View>
    );
}

export default history;