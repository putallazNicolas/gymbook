import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New session</Text>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="arrow-down-circle" size={24} color="#111318" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Create a new session</Text>
      <Text style={styles.sectionSubtitle}>Use this to create a session from scratch or start with a template.</Text>

      <View style={styles.sessionBox}>
        <View style={styles.sessionItem}>
          <AntDesign name="pluscircle" size={24} color="#111318" style={styles.icon} />
          <View style={styles.sessionText}>
            <Text style={styles.sessionTitle}>Empty session</Text>
            <Text style={styles.sessionSubtitle}>Start from scratch</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sessionBox}>
        <View style={styles.sessionItem}>
          <Ionicons name="document-text" size={24} color="#111318" style={styles.icon} />
          <View style={styles.sessionText}>
            <Text style={styles.sessionTitle}>My custom template</Text>
            <Text style={styles.sessionSubtitle}>5 exercises · 15 sets · 45 minutes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sessionBox}>
        <View style={styles.sessionItem}>
          <Ionicons name="document-text" size={24} color="#111318" style={styles.icon} />
          <View style={styles.sessionText}>
            <Text style={styles.sessionTitle}>Leg day</Text>
            <Text style={styles.sessionSubtitle}>3 exercises · 9 sets · 30 minutes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sessionBox}>
        <View style={styles.sessionItem}>
          <Ionicons name="document-text" size={24} color="#111318" style={styles.icon} />
          <View style={styles.sessionText}>
            <Text style={styles.sessionTitle}>Chest day</Text>
            <Text style={styles.sessionSubtitle}>4 exercises · 12 sets · 40 minutes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addExerciseContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add exercise</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#111318',
  },
  button: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111318',
    padding: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#636e88',
    paddingHorizontal: 16,
  },
  sessionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f2f4',
  },
  sessionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#f0f2f4',
    padding: 8,
    borderRadius: 12,
  },
  sessionText: {
    marginLeft: 16,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111318',
  },
  sessionSubtitle: {
    fontSize: 12,
    color: '#636e88',
  },
  startButton: {
    backgroundColor: '#f0f2f4',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  startText: {
    fontSize: 14,
    color: '#111318',
  },
  addExerciseContainer: {
    padding: 16,
  },
  addButton: {
    backgroundColor: '#f0f2f4',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  addText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111318',
  },
});
