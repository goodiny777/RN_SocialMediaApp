import { StyleSheet } from "react-native";
import { getFontFamily } from "../../helpers/fonts_helper";

const style = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily: getFontFamily('Inter', '100'),
        fontSize: 24,
    },
});

export default style;