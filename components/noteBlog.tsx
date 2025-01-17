import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Note {
  id: string;
  content: string;
  createdAt: Date;
}

export default function ImprovedNoteBlog() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([{ id: Date.now().toString(), content: newNote, createdAt: new Date() }, ...notes]);
      setNewNote('');
    }
  };

  const deleteNote = (id: string) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => {
          setNotes(notes.filter(note => note.id !== id));
        }}
      ]
    );
  };

  const renderNote = ({ item }: { item: Note }) => (
    <View style={styles.noteItem}>
      <View style={styles.noteContent}>
        <Text style={styles.noteText}>{item.content}</Text>
        <Text style={styles.noteDate}>{item.createdAt.toLocaleString()}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteNote(item.id)} style={styles.deleteButton}>
        <Feather name="trash-2" size={20} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>My Notes</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newNote}
          onChangeText={setNewNote}
          placeholder="Write a new note..."
          multiline
          maxLength={280}
        />
        <Text style={styles.charCount}>{newNote.length}/280</Text>
        <TouchableOpacity style={styles.addButton} onPress={addNote} disabled={newNote.trim() === ''}>
          <Feather name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
        style={styles.noteList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F2F7',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1C1C1E',
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    padding: 15,
    paddingRight: 50,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  charCount: {
    position: 'absolute',
    right: 60,
    bottom: 10,
    fontSize: 12,
    color: '#8E8E93',
  },
  addButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteList: {
    flex: 1,
  },
  noteItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  noteContent: {
    flex: 1,
  },
  noteText: {
    fontSize: 16,
    color: '#1C1C1E',
    marginBottom: 5,
  },
  noteDate: {
    fontSize: 12,
    color: '#8E8E93',
  },
  deleteButton: {
    padding: 5,
  },
});