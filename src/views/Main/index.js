
import Main from '../../components/UI/View/index';
import "./style.scss";

const Main = (props) => {
    return ( 
        <View className = 'main-page'>
            <View className = 'top'>
                <image className='left' src="./Rectangle.png"/>
                <p className = 'left-text'>FlashBot</p>
                <View className = 'bar d-flex align-center j-c-center'>
                    <img src="./minimize.png" />
                    <img src="./maximize.png" />
                    <img src="./vector.png" />
                </View>
            </View>
        </View>
    );
}

export default Main;