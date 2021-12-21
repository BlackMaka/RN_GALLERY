# RN_GALLERY

## 환경설정

---

### 1. VS code 설치 <br/>
[Vs Code](https://code.visualstudio.com/)

이 후 ( Eslint, Prettier 플러그인 설치 )

### 2. Node.js 설치 <br/>

[Node.js](https://nodejs.org/ko/)

### 3. chocolaty 설치

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

버전확인

```bash
choco -v
```

jdk8 설치

```bash
choco install -y openjdk8
```

### 4. 안드로이드 스튜디오 설치
[Android Studio](https://developer.android.google.cn/studio/install?hl=ko)

| 시스템 변수  | 값                                       |
| ------------ | ---------------------------------------- |
|ANDROID_HOME	| C:\Users\[ㄹㅇㄴ]\AppData\Local\Android\Sdk|

AVD 매니저 -> 앱 생성<br>
또는<br>
안드로이드 휴대폰 연결


---

---

<br>

# Setting

<br/>

### settings.json

(eslint 문법에 맞게 오토 세이브기능 설정)

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

<br/>

### .eslint.js

<br/>

컴포넌트 및 html 태그 셀프 클로징 <br/>
elint 문제 중.. 라인 끝 에러표시 제거 <br/>
prettier와 eslint 충돌 제거 (dangle) 더블콤마 <br/>

```js
module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'comma-dangle': [
      0,
      {
        arrays: 'always',
        objects: 'never',
        imports: 'always',
        exports: 'always',
        functions: 'always',
      },
    ],
  },
};
```

<br/>

### build.gradle

<br/>

/android/app/build.gradle
<br/> 네이티브 벡터 아이콘 설정 (하단에 작성)

```js
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ]
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

<br/>

### install

<br/>

공통 설치

```bash
npm install @react-navigation/native
npm install react-native-screens
npm install react-native-safe-area-context
>>>
npm install @react-navigation/native react-native-screens react-native-safe-area-context
```

네이티브 스택 네비게이터

```bash
npm install @react-navigation/native-stack
```

네이티브 하단 탭 네비게이터

```bash
npm i @react-navigation/bottom-tabs
```

네이티브 아이콘

```bash
npm i react-native-vector-icons
```

<br>
프로젝트 생성

```bash
npx react-native init [프로젝트명]
```

프로젝트 시작

```bash
yarn android

또는 

npm run android
```
<br>

기타 유용 라이브러리 

<br>

```bash
npm i uuid
npm i react-native-get-random-values
```

-> index.js
import 'react-native-get-random-values';

<br>

```bash
npm i date-fns
```

```bash

npm i react-native-calendars
npm i react-native-modal-datetime-picker @react-native-community/datetimepicker

npm i @react-native-community/async-storage
```

동영상 재생, 파일 선택, 카메라 촬영..
네이티브...

ios는 mac에서만


### FireBase

# firebase SHA1 키 확인

```bash
keytool -J-Duser.language=en -list -v -alias androiddebugkey -keystore ./android/app/debug.keystore
```

app/ 
google-services.json 다운 복사


## build.gradle

```javascript

android/build.gradle
dependencies{
	(…)
	classpath 'com.google.gms:google-services:4.3.10'
}

android/app/build.gradle

apply plugin: 'com.google.gms.google-services' // <- Add this line

dependencies{
	(…)
	implementation platform('com.google.firebase:firebase-bom:29.0.2')
}
defaultConfig{
	(…)
	multiDexEnabled true
}!

```


```bash

npm i @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-firebase/storage

```

```javascript

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
          //request.time < timestamp.date(2022, 1, 19);
    }
  }
}


```
