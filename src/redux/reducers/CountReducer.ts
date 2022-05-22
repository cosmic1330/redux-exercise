import { Increment, Decrement } from "../constant";
import type { Action } from "redux";

const init = 0
export default function CountReducer(preState:number=init,action:Action){
    const {type, data} = <any>action
    console.log(type,data)
    switch (type) {
        case Increment:
            return preState+=data;
        case Decrement:
            return preState-=data;
        // 初始化 第一次store會帶type = @@redux/xxxxxxx
        default:
            return preState;
    }
}