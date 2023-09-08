import View from '../../components/UI/View/index';
import "./style.scss";
import rectangle from "../../assests/images/Rectangle.png";
import msg from "../../assests/images/msg.png";
const Start = (props) => {
    return ( 
        <View className="main-page">
            <img className='start-img' src={rectangle} width="451px" height="451px" />
            <View className="help">
                <View className="help-message">
                    <p className="help-font">Hi! let us know how can we help</p>
                </View>
                <img  src={msg} width="132px" height= "120px"/>
            </View>
        </View>
       );
}

export default Start;