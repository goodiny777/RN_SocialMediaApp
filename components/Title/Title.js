import React from 'react';

import { Text } from 'react-native';
import style from './style';
import PropTypes from "prop-types";
import { title } from 'process';

const Title = props => {
    return <Text style={style.title}>{props.title}</Text>;
};

Title.props = {
    title: PropTypes.string.isRequired
}

export default Title;