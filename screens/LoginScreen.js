import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import ListIcon from '../assets/list.svg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // 로그인 상태가 되면 메인 화면으로 이동
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigation.replace('Main');
    });
    return unsubscribe;
  }, []);

  // 회원가입: Firebase에 새 계정 생성
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert('회원가입 실패', error.message);
    }
  };

  // 로그인: Firebase에서 이메일과 비밀번호 확인
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert('로그인 실패', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ListIcon />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignUp}>
          <Text style={styles.buttonOutlineText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  inputContainer: { width: '80%', marginTop: 30 },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: { width: '50%', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
  button: { backgroundColor: 'black', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonOutline: { backgroundColor: 'white', marginTop: 5, borderColor: 'black', borderWidth: 1 },
  buttonText: { color: 'white', fontWeight: '500', fontSize: 16 },
  buttonOutlineText: { color: 'black', fontWeight: '500', fontSize: 16 },
});
