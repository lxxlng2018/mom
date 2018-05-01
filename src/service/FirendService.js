import $ from 'jquery'
import base from '../config/base'
const host = base.host
export default {
    getTypes:()=>{
        return new Promise((reslove, reject) => {
            $
                .get(`${host}/Wap/healthuser/friendCardList`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    page: 1
                }, function (res) {
                    if(res.status){
                        reslove(res.data)
                    }
                }, 'json')
        })
    },
    getCardList:()=>{
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/friendCardList`, {
                    JKCBSSESSID: localStorage.getItem('token'),
                    page: 1
                }, function (res) {
                    if(res.status){
                        reslove(res.data)
                    }
                }, 'json')
        })
    }
}