import packageJson from '../../package.json';

const config = {
  get PUBLIC_URL() {
    return process.env.PUBLIC_URL;
  },
  get SERVER_URL() {
    return process.env.REACT_APP_SERVER_URL;
  },
  get DEBUG() {
    return process.env.NODE_ENV !== 'production';
  },
  get NODE_ENV() {
    return process.env.NODE_ENV;
  },
  get VERSION() {
    return packageJson.version;
  },
  get FirebaseConfig(){
    return {
      apiKey: "AIzaSyClNj0DJgcEJUVYJ6GUDt4evTWfaa9_aK0",
      authDomain: "fir-8c243.firebaseapp.com",
      databaseURL: "https://fir-8c243.firebaseio.com",
      projectId: "fir-8c243",
      storageBucket: "fir-8c243.appspot.com",
      messagingSenderId: "255974233649",
      appId: "1:255974233649:web:9402b696253a881ccfe710"
    }
  },
};

export default config;
