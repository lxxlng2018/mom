import $ from 'jquery'
import {Toast} from 'antd-mobile'

$.ajaxSetup({
    complete: function (xhr) {
        if(xhr.readyState == 4 && xhr.responseJSON && xhr.responseJSON.data == "-9999"){
            return Toast.fail('登录失效',3,()=>{
                window.location.href = '#/login'
            })
        }
        
    },
});
export default {
    get:function(url,data,cb){
        $.get(url,{
            JKCBSSESSID:sessionStorage.getItem('token'),
            ...data
        },cb,'json')
    },
    post:function(url,data,cb){
        $.post(url,{
            JKCBSSESSID:sessionStorage.getItem('token'),
            ...data
        },cb,'json')
    }
}