import React, {useRef} from 'react';
import BorderedInput from './BorderedInput';

export default function SignForm({isSignUp, onSubmit, form, onChangeText}) {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <BorderedInput
        hasMarginBottom
        placeholder="이메일"
        autoCompleteType="email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={text => onChangeText({name: 'email', text})}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <BorderedInput
        placeholder="비밀번호"
        hasMarginBottom={isSignUp}
        secureTextEntry
        value={form.password}
        onChangeText={text => onChangeText({name: 'password', text})}
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={
          isSignUp ? () => passwordConfirmRef.current.focus() : onSubmit
        }
      />
      {isSignUp && (
        <BorderedInput
          placeholder="비밀번호확인"
          secureTextEntry
          value={form.passwordConfirm}
          onChangeText={text => onChangeText({name: 'passwordConfirm', text})}
          ref={passwordConfirmRef}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      )}
    </>
  );
}
