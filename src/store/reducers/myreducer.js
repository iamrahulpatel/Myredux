import { SAVE_DATA, TEST_SAGA,STORE_DEMO_SAGA, DISPLAY_DUMMY_SAGA } from "../actions/actionType";

const initialState = {
    userData: null,
    data: null,

    storeSaga: null,
    displaySaga: null
}

export default myReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case TEST_SAGA:
            return {
                ...state,
                data: action.payload
            }
        case STORE_DEMO_SAGA:
            return {
                ...state,
                storeSaga: action.payload
            }
        case DISPLAY_DUMMY_SAGA:
            return {
                ...state,
                displaySaga: action.payload
            }
        default:
            return state;
    }
}