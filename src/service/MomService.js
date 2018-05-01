import $ from 'jquery'
import base from '../config/base'
const host = base.host
export default {
    getVedios:()=>{
        $.post(`${host}/wap/mom/ajaxVediolist`,{},res=>{
            console.log(res)
        },'json')
    }
}