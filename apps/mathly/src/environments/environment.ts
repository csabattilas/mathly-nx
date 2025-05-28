import { ApiProvider } from '@mathly-nx/api-config';

export const environment = {
  production: false,
  api: {
    provider: ApiProvider.MATHLY,
    baseUrls: {
      [ApiProvider.MATHLY]: 'http://localhost:3333/api',
      [ApiProvider.PYTHON]: 'http://localhost:3000/api',
      [ApiProvider.MOCK]: 'http://localhost:3333/mock-api',
    },
    timeout: 30000, // 30 seconds timeout for development
  },
  firebase: {
    projectId: 'math-8d8cf',
    appId: '1:55507240288:web:747118ecc8228ac99b4a05',
    storageBucket: 'math-8d8cf.appspot.com',
    apiKey: 'AIzaSyDLXD0RK6jzQA0yTT683lYCWLEm8xpo4j4',
    authDomain: 'math-8d8cf.firebaseapp.com',
    messagingSenderId: '55507240288',
    measurementId: 'G-RVRRP7JPK8',
  },
};
