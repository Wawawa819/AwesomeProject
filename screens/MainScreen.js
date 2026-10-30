import { FlatList, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import TodoItem from '../components/TodoItem';
import InputForm from '../components/InputForm';

const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === 'todo');
  const completedTasks = todos.filter((item) => item.state === 'done');
  const navigation = useNavigation();

  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.pageTitle}>Todo App</Text>
        <Pressable onPress={handleLogout}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </Pressable>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length > 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => String(item.id)}
          />
        ) : (
          <Text style={styles.emptyListText}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {completedTasks.length > 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => String(item.id)}
          />
        ) : (
          <Text style={styles.emptyListText}>완료된 일이 없습니다.</Text>
        )}
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Platform.OS === 'android' ? 20 : 0, backgroundColor: '#f7f8fa' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 15 },
  pageTitle: { marginBottom: 35, paddingHorizontal: 15, fontSize: 54, fontWeight: '600' },
  logoutText: { fontSize: 14, color: '#737373' },
  separator: { marginHorizontal: 10, marginTop: 25, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)' },
  listView: { flex: 1 },
  listTitle: { marginBottom: 25, paddingHorizontal: 15, fontSize: 41, fontWeight: '500' },
  emptyListText: { paddingTop: 10, paddingBottom: 15, paddingHorizontal: 15, fontSize: 15, lineHeight: 20, color: '#737373' },
});
