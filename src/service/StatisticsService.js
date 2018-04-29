import AV from '../../common/service/HttpService';
import moment from 'moment'
import {
    notification
} from "antd";
export default {
    getCount: (date) => {
        return AV.Cloud.run('statisticsToday',{date})
    },
    getExtractToday: (date) => {
        return AV.Query.and(
            new AV.Query('Extract').greaterThanOrEqualTo('createdAt', new Date(`${date} 00:00:00`)),
            new AV.Query('Extract').lessThanOrEqualTo('createdAt', new Date(`${date} 23:59:59`))
        ).limit(1000).descending('createdAt')
        .find()
    },
    getredPacketToday(date) {
        return AV.Query.and(
            new AV.Query('RedPacketList').greaterThanOrEqualTo('updatedAt', new Date(`${date} 00:00:00`)),
            new AV.Query('RedPacketList').lessThanOrEqualTo('updatedAt', new Date(`${date} 23:59:59`))
        ).include('packetType').limit(1000).equalTo('use', true).descending('updatedAt').find()
    }
}