
import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';

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
  </SafeAreaView >;
};


export default App;
