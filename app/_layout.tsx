import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { initDB } from '../utils/database';
import React from 'react';

export default function RootLayout() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="home" options={{ title: 'Agregar Amigos' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil', headerShown: false }} />
    </Tabs>
  );
}
