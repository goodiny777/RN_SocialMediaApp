import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import UserStory from '../UserStory/UserStory';
import style from './style';

const StroiesFeed = () => {
    const userStories = [
        {
            firstName: 'Joseph',
            id: 0,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'Angel',
            id: 1,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'White',
            id: 2,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'Oliver',
            id: 3,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'Jhon',
            id: 4,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'Darek',
            id: 5,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'Bob',
            id: 6,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'Toast',
            id: 7,
            profileImage: require('../../assets/images/default_profile.png')
        },
        {
            firstName: 'Mick',
            id: 8,
            profileImage: require('../../assets/images/default_profile.png')
        },
    ];

    const userStroiesPageSize = 4;
    const [userStroiesCurrentPage, setUserStroiesCurrentPage] = useState(1);
    const [userStroiesRenderedData, setUserStroiesRenderedData] = useState([]);
    const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

    useEffect(() => {
        setIsLoadingUserStories(true);
        const getInitialData = pagination(userStories, 1, userStroiesPageSize);
        setUserStroiesRenderedData(getInitialData);
        setIsLoadingUserStories(false);
    }, []);

    const pagination = (database, currentPage, pageSize) => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= database.length) {
            return [];
        }
        return database.slice(startIndex, endIndex);
    };

    return <View style={style.userStoryContainer}>
        <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (isLoadingUserStories) return;
                setIsLoadingUserStories(true);
                const contentToAppend = pagination(userStories, userStroiesCurrentPage + 1, userStroiesPageSize);
                if (contentToAppend.length > 0) {
                    setUserStroiesRenderedData(prev => [...prev, ...contentToAppend]);
                    setUserStroiesCurrentPage(userStroiesCurrentPage + 1);
                }
                setIsLoadingUserStories(false);
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={userStroiesRenderedData}
            renderItem={(item) => <UserStory key={item.id} user={item} />} />
    </View>;
}

export default StroiesFeed;

