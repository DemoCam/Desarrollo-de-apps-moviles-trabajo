import { StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>¿Qué es Expo?</Text>
      <Text>Expo es una herramienta que facilita el desarrollo de aplicaciones móviles para iOS y Android usando JavaScript y React Native, sin necesidad de trabajar directamente con lenguajes más complejos como Swift o Kotlin. Su principal ventaja es que hace el proceso más rápido, práctico y accesible, ya que ofrece un entorno con herramientas listas para probar, desarrollar y mejorar la app de forma sencilla.</Text>

      <Text>Navega por la aplicación</Text>
      <Text>Usa la pestaña Agregar Amigos para añadir tus amigos a la base de datos</Text>
      <Text>Usa la pestaña Perfil para ver la lista de tus amigos guardados</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 }
});
