import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import myreducer from "./reducers/myreducer";
import { firstSaga } from "./sagas/mainSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    myreducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(firstSaga);
export { store }