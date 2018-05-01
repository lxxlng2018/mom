import $ from 'jquery'
import base from '../config/base'
const host = base.host
export default {
    login : () => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/wap/health/login`, 'login_acc=cb1&login_pwd=123456', function (res) {
                    reslove(res)
                }, 'json')
        })
    },
    getUserInfo:()=>{
        return new Promise((reslove,reject)=>{
            $.post(`${host}/wap/healthuser/getUser`,{
                JKCBSSESSID: '2qo9i2aglkm676paombiee2eo1'
            },function(userinfo){
                reslove(userinfo)
            })
        })
    },
    getEveryDayNotice : () => {
        return new Promise((reslove, reject) => {
            $
                .post(`${host}/Wap/healthuser/mrjktx`, {
                    JKCBSSESSID: '2qo9i2aglkm676paombiee2eo1',
                    page: 1
                }, function (res) {
                    reslove(res)
                }, 'json')
        })
    }
}