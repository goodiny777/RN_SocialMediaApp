import { StyleSheet } from "react-native";
import { getFontFamily } from "../../helpers/fonts_helper";

const style = StyleSheet.create({
    profileImage: {
        width: 110,
        height: 110
    },
    profileImageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32
    },
    profileName: {
        marginTop: 20,
        textAlign: 'center',
        fontFamily: getFontFamily('Inter', 600),
        fontWeight: 600,
        fontSize: 20
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 30,
        borderBottomWidth: 3,
        borderBottomColor: '#E9EFF1',
        paddingVertical: 30

    },
    statsAmount: {
        fontFamily: getFontFamily('Inter', 600),
        fontWeight: 600,
        fontSize: 20,
        color: '#022150',
        textAlign: 'center'
    },
    statsTitle: {
        fontFamily: getFontFamily('Inter', 400),
        fontWeight: 400,
        fontSize: 16,
        color: '#79869F',
        textAlign: 'center'
    },
    statsDivider: { borderRightWidth: 3, borderColor: '#E9EFF1' }
});

export default style;