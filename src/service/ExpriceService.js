import $ from './httpService';
import base from '../config/base'
const {host} = base;
export default {
    getTypes:()=>{
        return new Promise((reslove, rejcet) => {
            $.get(`${host}/wap/healthuser/addMyzbjx`, {
            }, res => {
                if (res.status) {
                    reslove(res.data)
                }
            }, 'json')
        })
    },
    getList: ({
        title,
        small_type,
        page
    }) => {
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/myzbjy`, {
                small_type,
                title,
                page
            },res=>{
                if(res.status){
                    reslove(res.data)
                }
            },'json')
        })
    },
    add:({
        title,
        content,
        small_type
    })=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/addMyzbjx`, {
                title,
                content,
                small_type
            },res=>{
                reslove(res)
            },'json')
        })
    }
}