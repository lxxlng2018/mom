import $ from 'jquery'


export default {
    get:({
        url,
        data,
        type='json'
    })=>{
        return new Promise((reslove, rejcect) => {
            $.get(url,data,res=>{
                reslove(res)
            },type)
        })
    }
}