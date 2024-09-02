
import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, FlatList } from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 0,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Angel',
      id: 1,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'White',
      id: 2,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Oliver',
      id: 3,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Jhon',
      id: 4,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Darek',
      id: 5,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Bob',
      id: 6,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Toast',
      id: 7,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Mick',
      id: 8,
      profileImage: require('./assets/images/default_profile.png')
    },
  ];

  const userStroiesPageSize = 4;
  const [userStroiesCurrentPage, setUserStroiesCurrentPage] = useState(1);
  const [userStroiesRenderedData, setUserStroiesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStroiesPageSize);
    setUserStroiesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  return <SafeAreaView>
    <View style={globalStyle.header}>
      <Title title={'Let`s Explore'} />
      <TouchableOpacity style={globalStyle.messageIcon}>
        <FontAwesomeIcon icon={faEnvelope} size={20} color='#898DAE' />
        <View style={globalStyle.messageBadgeContainer}>
          <Text style={globalStyle.messageBadge}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={globalStyle.userStoryContainer}>
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
    </View>
  </SafeAreaView >;
};


export default App;
