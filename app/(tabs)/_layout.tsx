import { Tabs } from 'expo-router';

import { en } from '@/i18n/en';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: en.tabs.today }} />
      <Tabs.Screen name="plan" options={{ title: en.tabs.plan }} />
      <Tabs.Screen name="life" options={{ title: en.tabs.life }} />
      <Tabs.Screen name="coach" options={{ title: en.tabs.coach }} />
      <Tabs.Screen name="me" options={{ title: en.tabs.me }} />
    </Tabs>
  );
}
