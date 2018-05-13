import $ from './httpService'
import base from '../config/base'
const host = base.host
export default {
    getTypes: () => {
        return new Promise((reslove, reject) => {
            $
                .get(`${host}/Wap/healthuser/friendCardList`, {
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
                .post(`${host}/Wap/healthuser/getCard`, {
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
                    ...data
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    },
    toFriendWord:data=>{
        return new Promise((reslove, rejcect) => {
            $
                .post(`${host}/Wap/healthuser/toFriendWord`, {
                    ...data
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    },
    getMyFriendsNumb: con => {
        return new Promise((reslove, rejcect) => {
            $
                .get(`${host}/Wap/healthuser/myFriends`, {
                    ...con
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
                    ...con
                }, function (res) {
                    if (res.status) {
                        reslove(res.data)
                    }
                }, 'json')
        })
    }
}