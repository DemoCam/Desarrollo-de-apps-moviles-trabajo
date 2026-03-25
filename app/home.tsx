import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { addFriend } from '../utils/database';
import React from 'react';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddFriend = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Error', 'Por favor completa el nombre y el correo electrónico');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido');
      return;
    }

    setLoading(true);
    try {
      await addFriend(name, email, phone);
      Alert.alert('Éxito', '¡Amigo agregado correctamente!');
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      Alert.alert('Error', 'No se pudo agregar el amigo. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Agregar Amigo</Text>

      <Text>Nombre *</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        editable={!loading}
      />

      <Text>Correo Electrónico *</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />

      <Text>Teléfono (Opcional)</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        editable={!loading}
      />

      <Button 
        title={loading ? 'Guardando...' : 'Guardar Amigo'}
        onPress={handleAddFriend}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  }
});
