import React from 'react';

import { Text, View, Image } from 'react-native';
import style from './style';
import PropTypes from "prop-types";
import { title } from 'process';

const UserStory = props => {
    const user = props.user.item;
    return <View style={style.storyContainer}>
        <View style={style.profileImageContainer}>
            <Image source={user.profileImage} />
        </View>
        <Text style={style.userName}>{user.firstName}</Text>
    </View>;
};

UserStory.props = {
    user: PropTypes.object.isRequired,
};

export default UserStory;