import { call, put, takeLatest } from "redux-saga/effects";
import { TEST_SAGA, STORE_DEMO_SAGA, DISPLAY_DEMO_SAGA } from "../actions/actionType";

// const userReducerStates = (state) => state.reducer;

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
          body: JSON.stringify(getresp)
        })
        .then((response) => response.json())
        .then(myJson => myJson)
    )
    console.log("response ::",getresp);
    console.log('Saga data ::', value.payload);

    yield put({
        type: DISPLAY_DEMO_SAGA,
        payload: getresp
    })

  } catch (error) {
    console.log("checkSaga error",error)
  }
}

function* displayDetailSaga(value) {

  try {
    //Method GET
    const getresp = yield call(() =>
      fetch(`https://dummy.restapiexample.com/api/v1/employee/${value.payload}`,
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
    console.log("displayDetailSaga response ::",getresp);
    console.log('displayDetailSaga Saga data ::', value.payload);

    yield put({
        type: DISPLAY_FROM_API,
        payload: getresp.data
    })

  } catch (error) {
    console.log(error)
  }
}

function* firstSaga() {
  console.log("Hello this is my first saga")
  yield takeLatest(STORE_DEMO_SAGA, checkSaga);
  yield takeLatest(DISPLAY_DEMO_SAGA, displayDetailSaga);
}
export { firstSaga };