import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const friends = [
  { id: '1', name: 'Andine', description: 'andine is a student.' },
  { id: '2', name: 'mikou', description: 'mikou is a cat.' },
  { id: '1', name: 'celine', description: 'celine is a cat.' },
  { id: '2', name: 'ciki', description: 'ciki is a cat .' },
  { id: '1', name: 'ciko', description: 'ciko is a cat.' },

  // Tambahkan teman lainnya di sini
];

const FriendsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FriendDetail', { friend: item })}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendName: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#E493B3', // Warna tombol
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Warna teks tombol
    fontSize: 16,
  },
});

export default FriendsList;