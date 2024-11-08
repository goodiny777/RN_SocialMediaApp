import React from 'react';

import { Text } from 'react-native';
import style from './style';
import PropTypes from "prop-types";

const TabTitle = props => {
    return <Text style={[style.title, props.isFocused && style.titleFocused]}>{props.title}</Text>;
};

TabTitle.props = {
    title: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired
}

export default TabTitle;