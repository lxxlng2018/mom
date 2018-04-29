import AV from '../../common/service/HttpService';
export default {
   getLatestEvaluate:()=>{
       return new AV.Query('Evaluate')
        .include('user')
        .include('store')
        .descending('updatedAt')
        .limit(10)
        .find()
   }
}