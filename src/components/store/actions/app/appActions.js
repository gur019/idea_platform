import { APP_SET_TRANSPLANTS_0, APP_SET_TRANSPLANTS_ALL, APP_SET_TRANSPLANTS_1, APP_SET_TRANSPLANTS_2, APP_SET_TRANSPLANTS_3 } from './appTypes';

export const appSetTransplantsAll = (transplantsAll) =>{
    return{
        type: APP_SET_TRANSPLANTS_ALL,
        payload:{
            transplantsAll
        }
    }
}

export const appSetTransplants0 = (transplants0) =>{
    return{
        type: APP_SET_TRANSPLANTS_0,
        payload:{
            transplants0
        }
    }
}

export const appSetTransplants1 = (transplants1) =>{
    return{
        type: APP_SET_TRANSPLANTS_1,
        payload:{
            transplants1
        }
    }
}

export const appSetTransplants2 = (transplants2) =>{
    return{
        type: APP_SET_TRANSPLANTS_2,
        payload:{
            transplants2
        }
    }
}

export const appSetTransplants3 = (transplants3) =>{
    return{
        type: APP_SET_TRANSPLANTS_3,
        payload:{
            transplants3
        }
    }
}