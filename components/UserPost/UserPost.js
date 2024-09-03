import React from 'react';

import { Text, View, Image } from 'react-native';
import style from './style';
import PropTypes from "prop-types";
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faBookmark, faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
    const post = props.post.item;
    console.log('object :>> ', post);
    return <View style={style.postContainer}>
        <View style={style.postHeader}>
            <View style={{ flexDirection: 'row' }}>
                <UserProfileImage image={post.profileImage} imageDimentions={48} />
                <View style={style.headerTextContainer}>
                    <Text style={style.name}>{post.firstName} {post.firstName}</Text>
                    {post.location && <Text style={style.location}>{post.location}</Text>}
                </View>
            </View>
            <FontAwesomeIcon icon={faEllipsisH} size={24} color='#79869F' />
        </View>
        <View style={style.postContent}>
            <Image source={post.image} />
        </View>
        <View style={{ marginLeft: 10, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
                <FontAwesomeIcon icon={faHeart} color='#79869F' />
                <Text style={{ marginLeft: 3, color: '#79869F' }}>{post.likes}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 27 }}>
                <FontAwesomeIcon icon={faMessage} color='#79869F' />
                <Text style={{ marginLeft: 3, color: '#79869F' }}>{post.comments}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 27 }}>
                <FontAwesomeIcon icon={faBookmark} color='#79869F' />
                <Text style={{ marginLeft: 3, color: '#79869F' }}>{post.bookmarks}</Text>
            </View>
        </View>
    </View>;
};

UserPost.props = {
    post: PropTypes.object.isRequired,
};

export default UserPost;