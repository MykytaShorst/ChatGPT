import { Link } from 'react-router-dom';
import View from '../../components/UI/View/index';
import "./style.scss";
import rectangle from"../../assests/images/Rectangle.png";
import google from"../../assests/images/google.png";
import facebook from"../../assests/images/facebook.png";
import apple from"../../assests/images/apple.png";
const Register = (props) => {
    return (
        <View className="register-page" >
            <img src = {rectangle} className='center'/>
            <p className='text-center font-weight-bold'>Let's you in</p>
            <View className='social-media d-flex align-center j-c-center'>
                    <img src = {facebook} />
                    <p className='social-title'>Continue with facebook</p>
            </View>
            <View className='social-media d-flex align-center j-c-center'>
                <img src = {apple} />
                <p className='social-title'>Continue with facebook</p>
            </View>
            <View className='social-media d-flex align-center j-c-center'>
                <img src = {google} />
                <p className='social-title'>Continue with facebook</p>
            </View>
            <View className='d-flex align-center j-c-center'>
                <p className='face-or '>or</p>
            </View>
            <View className='signin-button d-flex align-center j-c-center'>
                <Link to="/login" style={{textDecoration:"none"}}>
                    <p className='button-title'>Sign in with password</p>
                </Link>
            </View>
            <View className='d-flex align-center j-c-center'>
                <Link to="/signup" style={{textDecoration:"none"}}>
                    <p className='no-account-title'>Don't have an account? <span className='signup-link'> Sign Up</span></p>
                </Link>
            </View>
            <View className='powerdby d-flex align-center j-c-center'>
                <p className='powerdby-title d-flex align-center j-c-center'>Powerd By OpenAI</p>
            </View>
        </View>
    );
}

export default Register;