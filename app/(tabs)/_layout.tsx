import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return(

    //adding the clickable tabs? and adding the names
    <Tabs screenOptions={{
      //icon color for home
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        //background of the header title "home"
        backgroundColor: '#25292e'
      },
      headerShadowVisible: false,
      // on the home page, it changes the title "home color"
      headerTintColor: '#fff', 
      tabBarStyle: {
      //background of the button icons
      backgroundColor: '#25292e'
      }
    }}>

      <Tabs.Screen 
        name="index" 
        options={{ 
          //name under the icon
          title: 'Home',
          //Icon shape, color, and size
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }} 
      />

      <Tabs.Screen 
      //changing style of the about button ^
        name="about" 
        options={{ 
          title: 'About', 
          tabBarIcon:({ color, focused}) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  
  );

}