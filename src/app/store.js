import { createStore, applyMiddleware, compose } from 'redux';
import { LOGIN, LOGOUT } from '../actions';
import reducers from '../reducers/index';

// eslint-disable-next-line no-unused-vars
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

const store = createStore(reducers, composeEnhancers(applyMiddleware(persistUser)));

export default store;
