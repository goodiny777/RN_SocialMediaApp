import React from "react";
import { View, Image } from 'react-native';
import PropTypes from "prop-types";
import style from './style';


const UserProfileImage = props => {
    return <View style={[style.profileImageContainer, { borderRadius: props.imageDimentions }]}>
        <Image style={{ width: props.imageDimentions, height: props.imageDimentions }} source={props.image} />
    </View>;
}

UserProfileImage.props = {
    image: PropTypes.any.isRequired,
    imageDimentions: PropTypes.number.isRequired
};

export default UserProfileImage;