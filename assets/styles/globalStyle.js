import { StyleSheet } from "react-native";
import { getFontFamily } from "../../helpers/fonts_helper";

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    messageIcon: {
        padding: 14,
        backgroundColor: '#F9FAFB',
        borderRadius: 50,
    },
    messageBadgeContainer: {
        backgroundColor: '#F35BAC',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 10,
        height: 10,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 10
    },
    messageBadge: {
        color: "#FFFFFF",
        fontSize: 6,
        fontFamily: getFontFamily('Inter', '600')
    },
});

export default style;