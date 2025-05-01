#step-1
push the code github

#step-2
Install NPM
command ==> npn init (we can use npm init -y but it will skip the some the packages)
it will install the package.json file

#step-3
install parcel
command ==> npm install -D parcel(it will install parcel as dev dependencies)
it will install the package.lock.json and node-modules folder

#step-4
Run command ==> npx parcel index.html
it will host the project localhost1234(server) and It will generate the devlopment build of your project

#step-5
Add scripts in package.json file ==> "start": "parcel index.html",
                                     "build": "parcel index.html",
It will aloow you to run project using start and build keyword in terminal.   

#step-6
React router:-
command ==> npm install react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";


#Redux Steps
1. install reduxjs/toolkit and react-redux
2. create store in utils
3. configure store => import { configureStore } from "@reduxjs/toolkit";
4. import store to app => import {Provider} from react-redux;
5. Wrap up the <app> in <Provider store={your_store_name}>


#Steps to install testing library
1.  install react testing library
2.  install jest library
3.  install babel dependency
4.  create babel.config.js file and Module file(configure babel)
5.  create .parcelrc file and configure parcel config file to disable the default babel transpilatiion
6.  jest configration
7.  install jsdom library if using jest version above 28
8.  install @babel/preset-react - to make JSX work in test cases
9.  Include @babel/preset-react inside my babel config
10. Install @testing-library/jest-dom 

# Steps to do FireBase Authentication
1. Setup firebase acount and add a project 
2. Do -> npm install firebase on cmd
3. copy the sdk code from firebase and paste  in your firebase.js file
4. Design your register and login page 
5. Do -> npm install react-toastify => for the toast message if you registered succesfully
6. Add <ToastContainer /> in the app after Layout .
7. Setup the Authentication in  the firebase ater continue to console
8. Add the email/password and google signIn/login methods and enable it
9. export const auth = getAuth() ; // from the firebase/auth => which helps us to register the user 
10. export your app in the firebase.js
11. Define function in the register.js to handle register user
11. All of this can only helps to register the email and password .
12. if we wanted to store the name
13. We can handle this using => Cloud fireStore in the firebase 
14. In the firebase.js => do export const db = getFirestore(app); // pass the app in this
15. In the register.jsx => here also imports the fireStore 