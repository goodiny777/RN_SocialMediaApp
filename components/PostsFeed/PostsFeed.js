import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import UserPost from '../UserPost/UserPost';
import style from './style';

const PostsFeed = () => {
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
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 1,
                firstName: 'Sophia',
                lastName: 'Smith',
                location: 'Paris, France',
                likes: 256,
                comments: 34,
                bookmarks: 5,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 2,
                firstName: 'Liam',
                lastName: 'Johnson',
                location: 'New York, USA',
                likes: 489,
                comments: 89,
                bookmarks: 7,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 3,
                firstName: 'Emily',
                lastName: 'Davis',
                location: 'London, UK',
                likes: 342,
                comments: 21,
                bookmarks: 9,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 4,
                firstName: 'Noah',
                lastName: 'Brown',
                location: 'Toronto, Canada',
                likes: 178,
                comments: 18,
                bookmarks: 3,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 5,
                firstName: 'Ava',
                lastName: 'Wilson',
                location: 'Sydney, Australia',
                likes: 314,
                comments: 45,
                bookmarks: 4,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 6,
                firstName: 'William',
                lastName: 'Taylor',
                location: 'Tokyo, Japan',
                likes: 287,
                comments: 67,
                bookmarks: 6,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 7,
                firstName: 'Isabella',
                lastName: 'Miller',
                location: 'Los Angeles, USA',
                likes: 432,
                comments: 56,
                bookmarks: 8,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 8,
                firstName: 'James',
                lastName: 'Anderson',
                location: 'Amsterdam, Netherlands',
                likes: 213,
                comments: 29,
                bookmarks: 2,
                profileImage: require('../../assets/images/default_profile.png')
            },
            {
                id: 9,
                firstName: 'Mia',
                lastName: 'Martinez',
                location: 'Barcelona, Spain',
                likes: 391,
                comments: 32,
                bookmarks: 10,
                profileImage: require('../../assets/images/default_profile.png')
            }
        ];

    const userPostsPageSize = 4;
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
    const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

    useEffect(() => {
        setIsLoadingUserPosts(true);
        const getInitialData = pagination(posts, 1, userStroiesPageSize);
        setUserPostsRenderedData(getInitialData);
        setIsLoadingUserPosts(false);
    }, []);

    const pagination = (database, currentPage, pageSize) => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= database.length) {
            return [];
        }
        return database.slice(startIndex, endIndex);
    };

    return <View style={style.userPostsContainer}>
        <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (isLoadingUserPosts) return;
                setIsLoadingUserPosts(true);
                const contentToAppend = pagination(posts, userStroiesCurrentPage + 1, userStroiesPageSize);
                if (contentToAppend.length > 0) {
                    setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
                    setUserPostsCurrentPage(userStroiesCurrentPage + 1);
                }
                setIsLoadingUserPosts(false);
            }}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={userStroiesRenderedData}
            renderItem={(item) => <UserPost key={item.id} user={item} />} />
    </View>;
}

export default PostsFeed;

