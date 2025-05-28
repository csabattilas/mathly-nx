import { ApiProvider } from '@mathly-nx/api-config';

export const environment = {
  production: true,
  api: {
    provider: ApiProvider.MATHLY,
    baseUrls: {
      [ApiProvider.MATHLY]: 'https://api.mathly.com/api',
      [ApiProvider.PYTHON]: 'https://api.mathly.com/python-api',
      [ApiProvider.MOCK]: 'https://api.mathly.com/mock-api',
    },
    timeout: 15000, // 15 seconds timeout for production (stricter)
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
