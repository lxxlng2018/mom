import $ from 'jquery';
import base from '../config/base'
const {host} = base;
export default {
    getTypes:()=>{
        return new Promise((reslove, rejcet) => {
            $.get(`${host}/wap/healthuser/addMyzbjx`, {
                JKCBSSESSID: localStorage.getItem('token')
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
                JKCBSSESSID: localStorage.getItem('token'),
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
        content
    })=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/addMyzbjx`, {
                JKCBSSESSID: localStorage.getItem('token'),
                title,
                content
            },res=>{
                reslove(res)
            },'json')
        })
    }
}