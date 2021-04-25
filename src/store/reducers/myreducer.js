import { SAVE_DATA, TEST_SAGA, STORE_DEMO_SAGA } from "../actions/actionType";

const initialState = {
    userData: null,
    data: null,
    sagaData: null
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
                sagaData: action.payload
            }

        default:
            return state;
    }
}