import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import colors from '../assets/colors';
import Icon from '../Components/Icon';
import ListItem from '../Components/ListItem';
import ListItemSeperator from '../Components/ListItemSeperator';

function AccountScreen(props) {
  const menuItem = [
    {
      title: 'My Listing',
      icon: {
        name: 'format-list-bulleted',
        background: colors.primary,
      },
    },
    {
      title: 'My Messages',
      icon: {
        name: 'email',
        background: colors.secondary,
      },
    },
  ];
  return (
    <View style={styles['screen']}>
      <View style={styles['container']}>
        <ListItem
          title={'Hasnain Ahmad'}
          subTitle={'hasnainahmad04@gmail.com'}
          image={require('../assets/jacket.jpg')}
        />
      </View>
      <View style={styles['container']}>
        <FlatList
          data={menuItem}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              Icon={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.background}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title={'Log Out'}
        Icon={<Icon name={'logout'} backgroundColor="#ffe66d" />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  screen: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
export default AccountScreen;