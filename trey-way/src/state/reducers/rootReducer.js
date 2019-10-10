import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import reducers from "./reducers";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  reducers: reducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;

// the key name will be the data property on the state object
