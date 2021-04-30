import { SAVE_DATA, TEST_SAGA, STORE_DEMO_SAGA, DISPLAY_DUMMY_SAGA, DISPLAY_FROM_API, DETAIL_API, DISPLAY_DETAIL } from "../actions/actionType";

const initialState = {
    userData: null,
    data: null,

    storeSaga: null,
    displaySaga: null,
    displayApiSaga: null,
    
    detailApi:null,
    displayDetail:null
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
        case DISPLAY_FROM_API:
            return {
                ...state,
                displayApiSaga: action.payload
            }
        case DETAIL_API:
            return {
                ...state,
                detailApi: action.payload
            }
            case DISPLAY_DETAIL:
            return {
                ...state,
                displayDetail: action.payload
            }
        default:
            return state;
    }
}