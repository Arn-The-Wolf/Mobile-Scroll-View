import { Tabs } from 'expo-router';
import { Car, Search, Info } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1E3A8A',
          borderTopColor: '#3B82F6',
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarActiveTintColor: '#F59E0B',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Luxury Cars',
          tabBarIcon: ({ size, color }) => (
            <Car size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ size, color }) => (
            <Search size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ size, color }) => (
            <Info size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}