import $ from './httpService';
import base from '../config/base'
const {host} = base;
export default {
    getList : () => {
        //获取所有的谢谢列表
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/djlbz`, {
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
                title,
                content
            }, res => {
                if (res.status) {
                    reslove(res)
                }
            }, 'json')
        })
    },
    /**
     * @name 回答帮助内容
     */
    addXX:({
        title,
        content,
        reply_id
    })=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/addxxbz`, {
                title,
                content,
                reply_id
            }, res => {
                if (res.status) {
                    reslove(res)
                }
            }, 'json')
        })
    },

    addThank:({
        title,
        content,
        reply_id
    })=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/healthuser/addzryl`, {
                title,
                content,
                reply_id
            }, res => {
                if (res.status) {
                    reslove(res)
                }
            }, 'json')
        })
    }
}