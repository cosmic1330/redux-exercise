// 為Count生成action
// Object是同步action
// Func是異步action
import type { Dispatch, Action } from "redux";
import { Increment, Decrement } from "../constant";
export const createIncrementAction = (data:number) => ( {type:Increment, data} )
export const createDecrementAction = (data:number) => ( {type:Decrement, data} )

// 使用函數store不會交給reducer幹活，只會執行函數，所以需要middleware
export const createIncrementAsyncAction = (data:number, time:number) => {
    return (dispatch:Dispatch<any>) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}
