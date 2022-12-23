import { APP_SET_TRANSPLANTS_ALL } from './appTypes';

export const appSetTransplantsAll = (transplantsAll) =>{
    return{
        type: APP_SET_TRANSPLANTS_ALL,
        payload:{
            transplantsAll
        }
    }
}