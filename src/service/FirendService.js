import $ from 'jquery'
import base from '../config/base'
const host = base.host
export default {
    getTypes: () => {
        return new Promise((reslove, reject) => {
            $
                .get(`${host}/Wap/healthuser/friendCardList`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    page: 1
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')

        })
    },
    getCardList: (con) => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/friendCardList`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    page: 1,
                    ...con
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    },
    myInvitate: con => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/myInvitate`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    page: 1,
                    ...con
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    },
    myInvitated: con => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/myInvitated`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    page: 1,
                    ...con
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    },
    getMyCard: () => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    }
    ,
    add: data => {
        return new Promise((reslove, rejcect) => {
            $
                .post(`${host}/Wap/healthuser/addCard`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    ...data
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    },
    /**
     * 我的传播朋友
     * 
     * @param {any} con 
     */
    getMyFriends: con => {
        return new Promise((reslove, rejcect) => {
            $
                .post(`${host}/Wap/healthuser/myFriends`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    ...con
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    }
}