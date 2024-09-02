import React from 'react';

import { Text, View, Image } from 'react-native';
import style from './style';
import PropTypes from "prop-types";
import { title } from 'process';
import { Image } from 'react-native-svg';

const UserStory = props => {
    return <View style={style.storyContainer}>
        <View style={style.profileImageContainer}>
            <Image source={props.profileImage} />
        </View>
        <Text style={style.userName}>{props.title}</Text>
    </View>;
};

UserStory.props = {
    user: PropTypes.object.isRequired,
};

export default UserStory;