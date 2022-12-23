import { APP_SET_TRANSPLANTS_ALL } from './../../actions/app/appTypes';

const initialState = {
    transplantsAll: []
};

export const appReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case APP_SET_TRANSPLANTS_ALL:
            return { ...state, transplantsAll: payload.transplantsAll };
        default:
            return state;
    }
};