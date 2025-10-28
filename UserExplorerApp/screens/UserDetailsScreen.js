import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function UserDetailsScreen({ route }) {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{user.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{user.phone}</Text>

      <Text style={styles.label}>Website:</Text>
      <Text style={styles.value}>{user.website}</Text>

      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>
        {user.address.street}, {user.address.city}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontWeight: 'bold', marginTop: 10, fontSize: 16, color: '#333' },
  value: { marginBottom: 5, fontSize: 15, color: '#555' },
});
