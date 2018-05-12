import $ from './httpService'
import base from '../config/base'
const host = base.host
export default {
    login : ({
        username,
        password
    }) => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/wap/health/login`, {
                   login_acc:username,
                   login_pwd:password
                }, function (res) {
                    reslove(res)
                }, 'json')
        })
    },
    getUserInfo:()=>{
        return new Promise((reslove,reject)=>{
            $.post(`${host}/wap/healthuser/getUser`,{},function(data){
                if (data.status){
                    reslove(data.info)
                }
            },'json')
        })
    },
    getEveryDayNotice : () => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/mrjktx`, {
                    page: 1
                }, function (res) {
                    reslove(res)
                }, 'json')
        })
    },
    getXjk:()=>{
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/myxjk`, {
                }, function (res) {
                    if(res.status){
                        reslove(res.info)
                    }
                }, 'json')
        })
    },
    getMyAccount:()=>{
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/myAccount`, {
                    oper: 'qry'
                }, function (res) {
                    if (res.status) {
                        reslove(res.info)
                    }
                }, 'json')
        })
    },
    updateAlipay:data=>{
        return new Promise((reslove,reject)=>{
            $
                .post(`${host}/Wap/healthuser/myAccount`, {
                    oper:'up',
                    my_acc: data.my_alipay
                }, function (res) {
                    if (res.status) {
                        reslove(res.info)
                    }
                }, 'json')
        })
    },
    updateUserInfo:data=>{
        return new Promise((reslove,reject)=>{
            $
                .post(`${host}/Wap/healthuser/upUserInfo`, {
                    ...data
                }, function (res) {
                    if (res.status) {
                        reslove(res.info)
                    }
                }, 'json')
        })
    },
    read:id=>{
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/health/adetail`, {
                    aid:id
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    }
}