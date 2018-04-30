import $ from 'jquery'
export default {
    login : () => {
        return new Promise((reslove, reject) => {
            $
                .post('http://www.669669669.com/wap/health/login', 'login_acc=cb1&login_pwd=123456', function (res) {
                    reslove(res)
                }, 'json')
        })
    },
    getEveryDayNotice : () => {
        return new Promise((reslove, reject) => {
            $
                .post('http://www.669669669.com/Wap/healthuser/mrjktx', {
                    JKCBSSESSID: '2qo9i2aglkm676paombiee2eo1',
                    page: 1
                }, function (res) {
                    reslove(res)
                }, 'json')
        })
    }
}