import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, DrawerActions} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList,  DrawerItem,} from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle Drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Button
        title="Jump to Profile"
        onPress={() => navigation.dispatch(jumpToAction)}
      />
    </View>
  );
}

function ProfileScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile!</Text>
      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Life () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> My life</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Lify" component={Life} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    
<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
       );
      }


      


export default function App() {
  return (
    <NavigationContainer>
      {/* <MyTabs /> */}
      <MyDrawer />
    </NavigationContainer>
  );
}
