import { fetchUsersWatcherSaga } from './users-saga.js';


export default function *rootSaga() {
  yield [
    fetchUsersWatcherSaga(),
  ];
}
