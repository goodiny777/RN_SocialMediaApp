import React from 'react';

import { Text, View } from 'react-native';
import style from './style';
import PropTypes from "prop-types";
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
    const user = props.user.item;
    return <View style={style.storyContainer}>
        <UserProfileImage image={user.profileImage} imageDimentions={65} />
        <Text style={style.userName}>{user.firstName}</Text>
    </View>;
};

UserStory.props = {
    user: PropTypes.object.isRequired,
};

export default UserStory;