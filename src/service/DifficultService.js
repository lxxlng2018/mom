import $ from 'jquery';
import base from '../config/base'
const {host} = base;
export default {
    getList : () => {
        //获取所有的谢谢列表
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/djlbz`, {
                JKCBSSESSID: localStorage.getItem('token'),
                page: 1
            }, res => {
                if (res.status) {
                    reslove(res.data)
                }
            }, 'json')
        })
    },
    getMyList : () => {
        //获取我自己的谢谢列表
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/xxbz`, {
                JKCBSSESSID: localStorage.getItem('token'),
                page: 1
            }, res => {
                if (res.status) {
                    reslove(res.data)
                }
            }, 'json')
        })
    },
    getzurl : () => {
        //获取助人有乐列表
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/zryl`, {
                JKCBSSESSID: localStorage.getItem('token'),
                page: 1
            }, res => {
                if (res.status) {
                    reslove(res.data)
                }
            }, 'json')
        })
    },
    add : ({title, content}) => {
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/addDjlbz`, {
                JKCBSSESSID: localStorage.getItem('token'),
                title,
                content
            }, res => {
                if (res.status) {
                    reslove(res)
                }
            }, 'json')
        })
    }
}