# React Native Todo App

### React Native 기반 할 일 관리 모바일 애플리케이션

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white)

**2024 명지대학교 리더스플러스 멘토링 팀 프로젝트**

</div>

---

## 01. 프로젝트 소개 | Overview

할 일을 등록하고 완료·삭제할 수 있는 모바일 애플리케이션입니다.
컴포넌트 기반 UI 구성, Redux 상태 관리, Firebase 인증 연동을 하나의 앱에서 구현했습니다.

| 구분 | 내용 |
|---|---|
| 진행 기간 | 2024.09 ~ 2024.12 |
| 프로젝트 유형 | 명지대학교 리더스플러스 멘토링 팀 프로젝트 |
| 개발 환경 | Expo SDK 50, React Native 0.73 |
| 주요 기능 | 회원가입·로그인·로그아웃, 할 일 추가·완료·삭제 |
| 참고 자료 | 인프런 「따라하며 배우는 리액트 네이티브 기초」 |

---

## 02. 실행 화면 | Screenshots

<div align="center">

| 로그인 화면 | 메인 화면 |
|:---:|:---:|
| <img src="screenshots/login.png" width="260" alt="로그인 화면" /> | <img src="screenshots/main.png" width="260" alt="메인 화면" /> |
| 이메일·비밀번호로 회원가입 및 로그인 | 할 일 / 완료된 일 목록, 로그아웃 |

</div>

---

## 03. 기술 스택 | Tech Stack

| 분류 | 기술 | 활용 내용 |
|---|---|---|
| Language | JavaScript | 애플리케이션 기능 구현 |
| Framework | React Native (Expo) | 모바일 화면 및 컴포넌트 개발 |
| State Management | Redux Toolkit | 할 일 목록 상태 관리 |
| Authentication | Firebase Authentication | 이메일·비밀번호 인증 |
| Navigation | React Navigation | 로그인 화면 ↔ 메인 화면 이동 |

---

## 04. 폴더 구조 | Structure

```text
├── App.js                  # 화면 이동(Login → Main)과 Redux Provider 설정
├── firebase.js             # Firebase 초기화
├── screens/
│   ├── LoginScreen.js      # 회원가입·로그인 화면
│   └── MainScreen.js       # 할 일 / 완료된 일 목록, 로그아웃
├── components/
│   ├── InputForm.js        # 할 일 입력창과 추가 버튼
│   └── TodoItem.js         # 할 일 한 줄(체크박스, 내용, 삭제 버튼)
├── redux/
│   ├── store.js            # Redux store 생성
│   └── slices/
│       └── todoSlice.js    # addTodo · updateTodo · deleteTodo
└── assets/                 # 아이콘(SVG)
```

---

## 05. 주요 구현 | Implementation

### 컴포넌트 기반 화면 구성
- 입력창(`InputForm`)과 할 일 항목(`TodoItem`)을 별도 컴포넌트로 분리
- 상태(`todo` / `done`)에 따라 '할 일'과 '완료된 일' 목록으로 나누어 표시

### Redux 상태 관리
- `addTodo`: 입력한 할 일을 목록에 추가
- `updateTodo`: 체크 시 완료 / 미완료 상태 전환
- `deleteTodo`: 선택한 할 일 삭제
- `useSelector`, `useDispatch`로 컴포넌트와 store 연결

### Firebase 사용자 인증
- `createUserWithEmailAndPassword`로 회원가입, `signInWithEmailAndPassword`로 로그인
- `onAuthStateChanged`로 로그인 상태를 감지해 메인 화면으로 이동
- `signOut`으로 로그아웃

---

## 06. 실행 방법 | Getting Started

```bash
npm install
npx expo start
```

터미널에서 `w`를 누르면 웹 브라우저에서, `i`를 누르면 iOS 시뮬레이터에서 실행됩니다.

---

## 07. 기록 | History

| 시기 | 내용 |
|---|---|
| 2024.09 ~ 2024.12 | 리더스플러스 멘토링에서 Todo 앱 구현 (화면 구성, Redux 상태 관리, Firebase 로그인) |
| 2026.10 | 코드 오류 수정 및 패키지 버전 정리 |
