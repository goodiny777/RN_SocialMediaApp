
import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, FlatList } from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import StroiesFeed from './components/StoriesFeed/StoriesFeed';
import PostsFeed from './components/PostsFeed/PostsFeed';

const App = () => {

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
    <StroiesFeed />
    <PostsFeed />
  </SafeAreaView >;
};


export default App;
