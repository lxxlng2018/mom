import $ from './httpService';
import base from '../config/base'
const {host} = base;
export default {
    getTypes:()=>{
        return new Promise((reslove, rejcet) => {
            $.get(`${host}/wap/healthuser/addMyzbjx`,{},res => {
                if (res.status) {
                    reslove(res.data)
                }
            }, 'json')
        })
    },
    getList: () => {
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/jksbm`,{},res=>{
                if(res.status){
                    reslove(res.data)
                }
            },'json')
        })
    },
    add:({
        title,
        content
    })=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/addMyzbjx`, {
                title,
                content
            },res=>{
                reslove(res)
            },'json')
        })
    }
}