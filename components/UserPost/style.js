import { StyleSheet } from "react-native";
import { getFontFamily } from "../../helpers/fonts_helper";

const style = StyleSheet.create({
    postContainer: {
        marginTop: 35,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#EFF2F6'
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTextContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    profileImageContainer: {
        borderColor: '#F35BAC',
        borderWidth: 1,
        padding: 3,
        borderRadius: 65
    },
    name: {
        fontWeight: '700',
        fontSize: 16,
    },
    location: {
        color: "#79869F",
        fontWeight: '400',
        fontSize: 12,
        marginTop: 5,
    },
    postContent: {
        alignItems: 'center',
        marginVertical: 20,
    }


});

export default style;