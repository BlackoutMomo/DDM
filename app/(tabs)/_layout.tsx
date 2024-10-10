import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
      backgroundColor: '#25292e',
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Câmera',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'camera-outline' : 'camera-reverse'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="localiza"
        options={{
          title: 'Localização',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'location-outline' : 'location-sharp'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}