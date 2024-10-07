import React, { useEffect, useState } from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import UserPost from '../../components/UserPost/UserPost.js';
import globalStyle from '../../assets/styles/globalStyle.js';
import style from './style.js';
import StroiesFeed from '../../components/StoriesFeed/StoriesFeed.js';
import Title from '../../components/Title/Title.js';
import pagination from '../../helpers/pagination.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from '../../navigation/Routes.js';

const Home = ({ navigation }) => {
    const posts =
        [
            {
                id: 0,
                firstName: 'Joseph',
                lastName: 'Black',
                location: 'Berlin, Germany',
                likes: 123,
                comments: 13,
                bookmarks: 1,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 1,
                firstName: 'Sophia',
                lastName: 'Smith',
                location: 'Paris, France',
                likes: 256,
                comments: 34,
                bookmarks: 5,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 2,
                firstName: 'Liam',
                lastName: 'Johnson',
                location: 'New York, USA',
                likes: 489,
                comments: 89,
                bookmarks: 7,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 3,
                firstName: 'Emily',
                lastName: 'Davis',
                location: 'London, UK',
                likes: 342,
                comments: 21,
                bookmarks: 9,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 4,
                firstName: 'Noah',
                lastName: 'Brown',
                location: 'Toronto, Canada',
                likes: 178,
                comments: 18,
                bookmarks: 3,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 5,
                firstName: 'Ava',
                lastName: 'Wilson',
                location: 'Sydney, Australia',
                likes: 314,
                comments: 45,
                bookmarks: 4,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 6,
                firstName: 'William',
                lastName: 'Taylor',
                location: 'Tokyo, Japan',
                likes: 287,
                comments: 67,
                bookmarks: 6,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 7,
                firstName: 'Isabella',
                lastName: 'Miller',
                location: 'Los Angeles, USA',
                likes: 432,
                comments: 56,
                bookmarks: 8,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 8,
                firstName: 'James',
                lastName: 'Anderson',
                location: 'Amsterdam, Netherlands',
                likes: 213,
                comments: 29,
                bookmarks: 2,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            },
            {
                id: 9,
                firstName: 'Mia',
                lastName: 'Martinez',
                location: 'Barcelona, Spain',
                likes: 391,
                comments: 32,
                bookmarks: 10,
                profileImage: require('../../assets/images/default_profile.png'),
                image: require('../../assets/images/default_post.png'),
            }
        ];

    const userPostsPageSize = 2;
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
    const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

    useEffect(() => {
        setIsLoadingUserPosts(true);
        const getInitialData = pagination(posts, 1, userPostsPageSize);
        setUserPostsRenderedData(getInitialData);
        setIsLoadingUserPosts(false);
    }, []);

    return <SafeAreaView>
        <View style={style.userHomeContainer}>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <View style={globalStyle.header}>
                            <Title title={'Let`s Explore'} />
                            <TouchableOpacity style={globalStyle.messageIcon}>
                                <FontAwesomeIcon icon={faEnvelope} size={20} color='#898DAE' />
                                <View style={globalStyle.messageBadgeContainer}>
                                    <Text style={globalStyle.messageBadge}>2</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <StroiesFeed />
                    </View>

                }
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (isLoadingUserPosts) return;
                    setIsLoadingUserPosts(true);
                    const contentToAppend = pagination(posts, userPostsCurrentPage + 1, userPostsPageSize);
                    if (contentToAppend.length > 0) {
                        setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
                        setUserPostsCurrentPage(userPostsCurrentPage + 1);
                    }
                    setIsLoadingUserPosts(false);
                }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                data={userPostsRenderedData}
                renderItem={(item) =>
                    <UserPost key={item.id} post={item} />} />
        </View>
    </SafeAreaView>;
}

export default Home;

