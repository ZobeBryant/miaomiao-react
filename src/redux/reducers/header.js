/* 
	1.该文件是用于创建一个为Header组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {CHANGETITLE} from '../constant'


const initState = [{title: '喵喵影院', render: null}]
export default function headerReducer(preState=initState, action){
    const {type, data} = action
    switch(type){
        case CHANGETITLE: // 如果更换title
            return data
        default:
            return preState
    }
}