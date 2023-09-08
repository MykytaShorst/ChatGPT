import View from '../../components/UI/View/index';
import "./style.scss";
import rectangle from "../../assests/images/Rectangle.png";
import Item from './Item';
import group from "../../assests/images/group.png";
import download from "../../assests/images/download.png";


const ended = (props) => {
    const customArr = [
        {
            title: "FlashBot Modification",
            content: "Hello Mattsmith! I am Flashbot, how can I assist you today? "
        },
        {
            title: "FlashBot",
            content: "Hello Mattsmith! What services you want today? I am available 24/7 to help you out "
        },
        {
            title: "FlashBot - June 21 , 2025  ",
            content: "Hello Mattsmith! I am Flashbot, how can I assist you today? "
        },
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
            <View className="all-history">
                <View className='all -history-header'>
                    <p className='headline'> History</p>
                    <p className='see-all'> Clear all</p>
                </View>
                <>
                    {
                        customArr.map(item => {
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
        </View>
    );
}

export default ended;