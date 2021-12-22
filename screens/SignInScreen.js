import React, {useRef, useState} from 'react';
import {Alert, Keyboard, StyleSheet, Text, View} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import SignButton from '../components/SignButton';
import SignForm from '../components/SignForm';
import {useUserContext} from '../contexts/UserContext';
import {signIn, signUp} from '../lib/auth';
import {getUser} from '../lib/users';

export default function SignInScreen({navigation, route}) {
  const {isSignUp} = route.params ?? {};

  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [loading, setLoading] = useState(false);

  const onChangeText = ({name, text}) => {
    setForm({...form, [name]: text});
  };

  const {setUser} = useUserContext();

  // 회원가입, 로그인
  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password, passwordConfirm} = form;
    const info = {email, password};

    if (isSignUp && password !== passwordConfirm) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }
    setLoading(true);
    try {
      const {user} = isSignUp ? await signUp(info) : await signIn(info);
      const profile = await getUser(user.uid);
      //const succContents = `${isSignUp ? '회원가입' : '로그인'} 성공`;
      // Alert.alert('성공', succContents, [
      //   {
      //     text: '확인',
      //     onPress: async () => {
      //       if (!profile) {
      //         //프로필 없을 때 처리
      //         navigation.navigate('Welcome', {uid: user.uid});
      //       }
      //     },
      //   },
      // ]);
      if (!profile) {
        //프로필 없을 때 처리
        navigation.navigate('Welcome', {uid: user.uid});
      } else {
        //프로필 있을 때 처리
        setUser(profile);
      }
    } catch (error) {
      console.log(error);
      const message = {
        'auth/email-already-in-use': '이미 존재하는 계정 입니다.',
        'auth/wrong-password': '비밀번호가 일치하지 않습니다.',
        'auth/user-not-found': '존재하지 않는 계정 입니다.',
        'auth/invalid-email': '이메일 형식이 유효하지 않습니다.',
        'auth/user-disabled': '중지  된 사용자 계정입니다.',
      };
      Alert.alert(
        `${isSignUp ? '회원가입' : '로그인'} 실패`,
        `${message[error.code] ? message[error.code] : error.code}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.fullscreen}>
      <Text style={styles.text}>PublicGallery</Text>
      <View style={styles.form}>
        <SignForm
          onSubmit={onSubmit}
          form={form}
          onChangeText={onChangeText}
          isSignUp={isSignUp}
        />
        <SignButton isSignUp={isSignUp} onSubmit={onSubmit} loading={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});
