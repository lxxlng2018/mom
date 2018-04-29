import AV from '../../common/service/HttpService';
import {
    notification
} from "antd";
// const play = require('audio-play');
// const load = require('audio-loader');
export default {
    getOrders: (cb) => {
        const Orders = new AV.Query('Order');
        Orders.include('store')
        Orders.include('servies')
        Orders.include('user')
        Orders.include('redPacket')
        Orders.descending('createdAt')
        Orders.limit(10)
        Orders.subscribe().then(query => {
            query.on('create', order => {
                // notification['warning']({
                //     message: '新订单'
                // });
                cb && cb('create',order)
            })

            query.on('update', (updatedItem, updatedKeys) => {
                // console.log(updatedItem,updatedKeys)
                // notification['success']({
                //     message: '订单支付'
                // });
                cb && cb('update',updatedItem)
                // load('../audio/62c888piC4UI.mp3').then(play);
            })
        })
        return Orders.find()
    }
}