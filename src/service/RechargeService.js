import AV from '../../common/service/HttpService';
export default {
    getRecharge : () => {
        const Recharge = new AV.Query('Recharge')
        Recharge.include('user')
        Recharge.descending('updatedAt')
        return Recharge.find();
    }
}