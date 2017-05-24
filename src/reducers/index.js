import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth : AuthReducer,
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;