import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-svg';
import style from './style';
import UserProfileImage from '../../components/UserProfileImage/UserProfileImage';
import { ProfileTabsavigator } from '../../navigation/MainNavigator';

const Profile = () => {

    return <SafeAreaView>
        <ScrollView style={{ flexGrow: 1 }}>
            <View style={style.profileImageContainer}>
                <UserProfileImage image={require('../../assets/images/default_profile.png')} imageDimentions={110} />
            </View>
            <Text style={style.profileName}>Mikhail Babozhko</Text>
            <View style={style.statsContainer}>
                <View >
                    <Text style={style.statsAmount}>50</Text>
                    <Text style={style.statsTitle}>Following</Text>
                </View>
                <View style={style.statsDivider} />
                <View >
                    <Text style={style.statsAmount}>300k</Text>
                    <Text style={style.statsTitle}>Followers</Text>
                </View>
                <View style={style.statsDivider} />
                <View >
                    <Text style={style.statsAmount}>300</Text>
                    <Text style={style.statsTitle}>Posts</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ProfileTabsavigator />
            </View>
        </ScrollView>
    </SafeAreaView>;
}

export default Profile;

