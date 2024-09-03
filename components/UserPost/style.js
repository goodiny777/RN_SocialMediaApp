import { StyleSheet } from "react-native";
import { getFontFamily } from "../../helpers/fonts_helper";

const style = StyleSheet.create({
    postContainer: {
        marginRight: 20,
    },
    profileImageContainer: {
        borderColor: '#F35BAC',
        borderWidth: 1,
        padding: 3,
        borderRadius: 65
    },
    userName: {
        color: '#022150',
        fontFamily: getFontFamily('Inter', '500'),
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center'
    },

});

export default style;