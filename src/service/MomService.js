import $ from 'jquery'
import base from '../config/base'
const host = base.host
export default {
    getVedios: () => {
        $.post(`${host}/wap/mom/ajaxVediolist`, {}, res => {
            console.log(res)
        }, 'json')
    },
    /**
     * @name 获取公共文章
     */
    getPublicList: (t) => {
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/health/alist`, {
                t
            }, res => {
                if(res.status){
                    reslove(res.data||[])
                }
            }, 'json')
        })
    },
    getHomeSpeech:()=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/health/homeSpeech`,res => {
                if(res.status){
                    reslove(res.data||[])
                }
            }, 'json')
        })
    },
    getHomeHlxz:()=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/health/hlxz`,res => {
                if(res.status){
                    reslove(res.data||[])
                }
            }, 'json')
        })
    },
    getHomePhotos:()=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/health/photos`,res => {
                if(res.status){
                    reslove(res.data||[])
                }
            }, 'json')
        })
    },
    getHomeFirends:()=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/health/friendCards`,res => {
                if(res.status){
                    reslove(res.data||[])
                }
            }, 'json')
        })
    },
    get24Xiao:()=>{
        return new Promise((reslove, rejcet) => {
            $.post(`${host}/wap/health/alist`,{
                t:11
            },res => {
                if(res.status){
                    reslove(res.data||[])
                }
            }, 'json')
        })
    }
}