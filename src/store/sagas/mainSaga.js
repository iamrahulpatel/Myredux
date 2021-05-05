import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../actions/actionType";

function* checkSaga(value) {

  try {
    //Method GET
    const getresp = yield call(() =>
      fetch('https://jsonplaceholder.typicode.com/posts',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application.json'
          },
          body: null
        })
        .then((response) => response.json())
        .then(myJson => myJson)
    )
    console.log("response ::", getresp);
    console.log('Saga data ::', value.payload);

    yield put({
      type: types.DISPLAY_FROM_API,
      payload: getresp
    })

  } catch (error) {
    console.log("checkSaga error", error)
  }
}

function* detailSaga(value) {

  try {
    //Method GET
    const getresp = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${value.payload}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application.json'
          },
          body: null
        })
        .then((response) => response.json())
        .then(myJson => myJson)
    )
    console.log("response ::", getresp);
    console.log('Saga data ::', value.payload);

    yield put({
      type: types.DISPLAY_DETAIL,
      payload: getresp
    })

  } catch (error) {
    console.log("checkSaga error", error)
  }
}


function* firstSaga() {
  console.log("Hello this is my first saga")
  yield takeLatest(types.STORE_DEMO_SAGA, checkSaga);
  yield takeLatest(types.DETAIL_API, detailSaga);

  // //DELETE AND UPDATE
  // yield takeLatest(types.STORE_DEMO_SAGA, checkSaga);
  // yield takeLatest(types.DETAIL_API, detailSaga);
}
export { firstSaga };