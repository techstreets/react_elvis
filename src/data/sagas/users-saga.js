import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';


function *fetchUsers() {
  try {
    const users = yield call(
      axios.get, 'https://jsonplaceholder.typicode.com/users'
    );
    yield put({type: 'USER_FETCH_SUCCEEDED', users: users.data});
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

export function *fetchUsersWatcherSaga() {
  yield takeLatest('USER_FETCH', fetchUsers);
}
