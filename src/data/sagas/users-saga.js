import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsers } from '../../data/routines';

function *fetchUsersHandler() {
  try {
    yield put(fetchUsers.request());
    const users = yield call(
      axios.get, 'https://jsonplaceholder.typicode.com/users'
    );
    yield put(fetchUsers.success({users: users.data}));
  } catch (error) {
    yield put(fetchUsers.failure({message: error.message}));
  } finally {
    yield put(fetchUsers.fulfill());
  }
}

export function *fetchUsersWatcherSaga() {
  yield takeLatest(fetchUsers.TRIGGER, fetchUsersHandler);
}
