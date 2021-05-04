import { types } from "../actions/actionType";

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
        case types.SAVE_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case types.TEST_SAGA:
            return {
                ...state,
                data: action.payload
            }
        case types.STORE_DEMO_SAGA:
            return {
                ...state,
                storeSaga: action.payload
            }
        case types.DISPLAY_DUMMY_SAGA:
            return {
                ...state,
                displaySaga: action.payload
            }
        case types.DISPLAY_FROM_API:
            return {
                ...state,
                displayApiSaga: action.payload
            }
        case types.DETAIL_API:
            return {
                ...state,
                detailApi: action.payload
            }
            case types.DISPLAY_DETAIL:
            return {
                ...state,
                displayDetail: action.payload
            }
        default:
            return state;
    }
}