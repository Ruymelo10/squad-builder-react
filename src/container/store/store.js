import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { LOGIN, LOGOUT } from '../user/userAction';
import thunk from 'redux-thunk';
import { userReducer } from '../user/userReducer';
import { fetchUserReducer } from '../fetchUser/fetchUserReducer';

const reducers = combineReducers({
  user: userReducer,
  fecthUsers: fetchUserReducer,
});

const persistUser = () => {
  return (next) => (action) => {
    if (action.type === LOGIN) {
      localStorage.setItem('user', action.payload.name);
      localStorage.setItem('role', action.payload.role);
    } else if (action.type === LOGOUT) {
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    }
    return next(action);
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, persistUser)));

export default store;
