import React from 'react';

import { Text, View } from 'react-native';
import style from './style';
import PropTypes from "prop-types";
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserPost = props => {
    const post = props.post.item;
    return <View style={style.storyContainer}>

    </View>;
};

UserPost.props = {
    post: PropTypes.object.isRequired,
};

export default UserPost;