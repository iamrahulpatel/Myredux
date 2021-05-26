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

  }
  catch (error) {
    console.log("checkSaga error", error)
  }
}



//TO display detail list from api
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


//to delete posts from api
function* deleteSaga(value) {
  try {

    const delresp = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${value.payload}`,
        {
          method: 'DELETE',
        }).then(res => res.json()))

    console.log(delresp);

    yield put({
      type: types.DISPLAY_DETAIL,
      payload: value.payload
    })
  }
  catch (err) {
    console.log(err);
  }
}

//to update data from API
function* updateSaga(updatedData) {
  try {
    const { item, newTitle, newId } = updatedData.payload

    let body = JSON.stringify({
      id: item.id,
      title: newTitle,
      body: item.body,
      userId: newId,
    })
    const putresp = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`,
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: body
        }).then(response => response.json()).
        then(myJson => myJson))

    console.log("putresp id", putresp);
    yield put({
      type: types.DISPLAY_DETAIL,
      payload: item.id
    })

  }
  catch (err) {
    console.log(err);
  }
}




function* firstSaga() {
  console.log("Hello this is my first saga")
  yield takeLatest(types.STORE_DEMO_SAGA, checkSaga);
  yield takeLatest(types.DETAIL_API, detailSaga);

  //DELETE AND UPDATE
  yield takeLatest(types.DELETE_SAGA, deleteSaga);
  yield takeLatest(types.UPDATE_SAGA, updateSaga);
}
export { firstSaga };