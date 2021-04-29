import { call, put, takeLatest } from "redux-saga/effects";
import { TEST_SAGA, STORE_DEMO_SAGA, SHOW_DEMO_SAGA } from "../actions/actionType";

// const userReducerStates = (state) => state.reducer;

function* checkSaga(value) {

  try {
    // let details = yield select(userReducerStates);
    // const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts/1');
    // console.log(response);

    //Method GET
    const getresp = yield call(() =>
      fetch('https://reqres.in/api/users',
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
    console.log("response ::",getresp);
    console.log('Saga data ::', value.payload);

    //Method POST
    // const postresp = yield call(() =>
    //   fetch("http://dummy.restapiexample.com/api/v1/employees")
    //     .then(response => response.json())
    //     .then(myJson => myJson),
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application.json',
    //     },
    //     body: JSON.stringify(postresp)
    //   }
    // );
    // console.log('POST response ', value.payload);

    yield put({
        type: SHOW_DEMO_SAGA,
        payload: getresp.data
    })

  } catch (error) {
    console.log(error)
  }
}

function* firstSaga() {
  console.log("Hello this is my first saga")
  yield takeLatest(STORE_DEMO_SAGA, checkSaga);
}
export { firstSaga };