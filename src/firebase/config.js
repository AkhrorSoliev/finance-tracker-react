import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAIOv2IeFu5206P0XvU7re9_GeAdQzKlCA',
  authDomain: 'my-money-6aff4.firebaseapp.com',
  projectId: 'my-money-6aff4',
  storageBucket: 'my-money-6aff4.appspot.com',
  messagingSenderId: '196282765331',
  appId: '1:196282765331:web:97d6dac5b5eeb6aa8b2fe6',
  measurementId: 'G-LVZ073W8WZ',
}

// init config
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
