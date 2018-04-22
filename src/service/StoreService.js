import AV from '../../common/service/HttpService';
export default {
    getStores : (pramas) => {
        const Store = new AV.Query('Store');
        if (pramas.title) {
            Store.contains('title', pramas.title);
        }
        if (pramas.mobile) {
            Store.contains('mobile', pramas.mobile);
        }
        if (pramas.status != null) {
            Store.equalTo('status', Boolean(pramas.status));
        }
        if (pramas.hidden != null) {
            Store.equalTo('hidden', pramas.hidden);
        } else {
            Store.equalTo('hidden', false);
        }

        if (pramas.district && pramas.district !== '武汉市') {
            Store.equalTo('district', pramas.district);
        }

        if (pramas.limit) {
            Store.limit(pramas.limit)
        }

        if (pramas.page) {
            Store.skip(pramas.page <= 1
                ? 0
                : pramas.page * pramas.limit)
        }
        return Store.find();
    },
    getTotals : () => {
        const cql = 'select count(*) from Store where hidden=false';
        return AV
            .Query
            .doCloudQuery(cql)
            .then((data) => {
                // 获取符合查询的数量
                var count = data.count;
                return Promise.resolve(count)
            }, function (error) {
                return Promise.reject(error)
            });
    },
    verify : (id) => {
        let mod = AV
            .Object
            .createWithoutData('Store', id)
        mod.set('status', true)
        mod
            .save()
            .then(res => {})

    },
    getStoreWithService : () => {
        let query = new AV.Query('Store')
        query.limit(10)
        query
            .find()
            .then(list => {
                list.map(store => {
                    //let store = AV.Object.createWithoutData('Servies');
                })

            })
    },
    getStoreCount : ({page, limit}) => {
        return AV
            .Cloud
            .run('all_store_count', {page, limit})
    },
    setWater : ({store, op, glassWaterInventory}) => {
        return new AV
            .Query('Store')
            .get(store.objectId)
            .then(store => {
                store.increment('glassWaterInventory', op === 'add'
                    ? glassWaterInventory
                    : -glassWaterInventory)
                return store.save(null, {fetchWhenSave: true})
            })
    }
}