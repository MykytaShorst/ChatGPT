import { Container } from "react-bootstrap"
import View from "../components/UI/View"

const PublicLayout = (props) => {
  return <View>
    <View className="outlet">
      { props.view }
    </View>
  </View>
}

export default PublicLayout