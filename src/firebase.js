import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase_config';

firebase.initializeApp(firebaseConfig);


function App() {
    return (
        <div className="App">

        </div>
    );
}

export default App;
