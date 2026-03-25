import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import { useState, useCallback } from 'react';
import { getFriends, deleteFriend } from '../../utils/database';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

interface Friend {
  id: number;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
}

export default function FriendsScreen() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      loadFriends();
    }, [])
  );

  const loadFriends = async () => {
    setLoading(true);
    try {
      const data = await getFriends() as Friend[];
      setFriends(data || []);
    } catch (error) {
      console.log('Error loading friends:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFriend = (id: number, name: string) => {
    Alert.alert(
      'Eliminar Amigo',
      `¿Estás seguro que deseas eliminar a ${name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: async () => {
            try {
              await deleteFriend(id);
              await loadFriends();
            } catch (error) {
              Alert.alert('Error', 'No se pudo eliminar el amigo');
            }
          },
        },
      ]
    );
  };

  if (loading && friends.length === 0) {
    return <Text>Cargando amigos...</Text>;
  }

  if (friends.length === 0) {
    return <Text>No hay amigos aún</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>{friends.length} amigos</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nombre: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            {item.phone ? <Text>Teléfono: {item.phone}</Text> : null}
            <Button title="Eliminar" onPress={() => handleDeleteFriend(item.id, item.name)} color="red" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
  }
});
