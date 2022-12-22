import { APP_SET_TRANSPLANTS_0, APP_SET_TRANSPLANTS_ALL, APP_SET_TRANSPLANTS_1, APP_SET_TRANSPLANTS_2, APP_SET_TRANSPLANTS_3 } from './../../actions/app/appTypes';

const initialState = {
    transplantsAll: false,
    transplants0: false,
    transplants1: false,
    transplants2: false,
    transplants3: false,
};

export const appReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case APP_SET_TRANSPLANTS_ALL:
            return { ...state, transplantsAll: payload.transplantsAll };
        case APP_SET_TRANSPLANTS_0:
            return { ...state, transplants0: payload.transplants0 };
        case APP_SET_TRANSPLANTS_1:
            return { ...state, transplants1: payload.transplants1 };
        case APP_SET_TRANSPLANTS_2:
            return { ...state, transplants2: payload.transplants2 };
        case APP_SET_TRANSPLANTS_3:
            return { ...state, transplants3: payload.transplants3 };
        default:
            return state;
    }
};