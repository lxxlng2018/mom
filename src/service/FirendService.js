import AV from '../../common/service/HttpService';
export default {
    getUsers: () => {
        const User = new AV.Query('_User');
        return User.find();
    },
    getUser: () => {

    },
    getLatestUser: () => {
        return AV.Cloud.run('latestNewUser')
    },
    getLatestMember: (cb) => {
        let MemberQuery = new AV.Query('Member')
            MemberQuery.limit(10)
            MemberQuery.descending('createdAt')
            MemberQuery.include('user')
            return MemberQuery.subscribe()
            .then(query => {
                query.on('create',user=>{
                    cb && cb('create',user)
                })
                query.on('update',user=>{
                    cb && cb('update',user)
                })
                return MemberQuery.find()
            })
    }
}