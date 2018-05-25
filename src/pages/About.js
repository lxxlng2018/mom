/**
 * @name 关于我们
 */
import React, {Component} from 'react';
import moment from 'moment';
import {
    Flex,
    WhiteSpace,
    NavBar,
    Icon,
    Carousel,
    Grid,
    List,
    WingBlank,
    Tabs,
    SearchBar,
    Button,
    Popover,
    TextareaItem,
    Tag,
    Picker,
    InputItem
} from 'antd-mobile';
import UserService from '../service/UserService'

const Item = List.Item

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article:''
        }
    }

    componentDidMount() {
    }

    handleBack = ()=>{
    }

    render() {
        return <div className="home">
            <div className="content" style={{padding:20,fontSize:16}}>
                关于我们

一、什么是健康传播

健康传播是一种将医学研究成果转化为大众的健康知识，并通过态度和行为的改变，以降低疾病的患病率和死亡率，有效提高一个社区或国家生活质量和健康水准为目的的行为。健康传播以大众传媒为信道来传递与健康相关的资讯以预防疾病、促进健康。大众传播媒介在将医疗成果转化成大众健康知识加以传播，正确构建社会图景以帮助受众建立预防观念等方面都发挥着重要作用。健康传播即人们寻找、处理、共享医疗资讯的过程，其关心的范围不仅在个人寻求医疗资讯的过程，或医患之间的沟通，更在整个医疗体系内信息的流动和处理。

二、为什么进行健康传播

悠悠万事，健康为大。一系列严重的健康问题正对民族人口素质造成重大影响和危害。每年缺陷儿90万，10年近千万，造成了无数家庭悲剧和孩子的终生痛苦；中老年疾病防治形势严峻，心血管疾病、糖尿病导致的死亡人数逐年呈上升趋势；自以为做对了实际做错了的日常生活行为每天都在影响人们的身体健康甚至引发重大疾病；亚健康状况日益严重，30岁—50岁人群死亡率越来越高，等等。进行全民健康教育，传播健康知识，刻不容缓。为此，中国妇幼保健协会、重庆红十字基金会会组织一批专家，开展健康传播公益慈善活动，招募志愿者进行健康宣传。如果通过大家的传播，能够减少一个人的疾病，挽救一个人的生命，就是为国家做了贡献，为他人做了善事，为自己积了功德。



三、健康传播的主要内容

1	每日健康提醒

通过每天推送专家提醒的方式，纠正一系列影响身体健康甚至引发重大疾病、自以为做对了实际做错了的日常生活行为。

2	我的治病经验

汇集全国各地亲生经历过的、疗效显著的治病经验，供随时查阅、使用，迅速解除病痛。

3	疑难杂症120

如遇当地医生无法解决的疑难杂症，可发送求助信息，经审查后推送给广大志愿者，让大家伸出援手，为求助者提供最合适的医疗信息。

4	健康送爸妈

通过儿女每周问候提醒的形式，给父母赠送一份权威、实用的“中老年疾病防治专家提示”健康服务，让父母逐步掌握完整的自我防治医疗知识，表达子女对父母真情的孝敬。

5	出生缺陷预防

育龄夫妇通过趣味性、科学性的“预防知识测试”，“预防行为检测”和“视频大课堂”学习，全面掌握出生缺陷预防知识，自觉采取预防行为，有效预防出生缺陷，避免家庭悲剧。

6	专家孕哺讲座

提供具有集合阅读、快速查询功能的10多本知名妇产专家专著，让孕产妇在孕产过程中遇到问题，便能很快在专家的讲座中找到答案，不需要再去翻书或上网查询。

四、健康传播的任务和方法

健康传播通过招募志愿者进行。志愿者的任务就是传播健康、传播孝道，让人们学习预防知识，采取预防行为，不进医院或少进医院。传播方法是：在健康传播平台（www.669669669.com）首页自主报名注册，（报名时都须输入前一个传播人赠送的传播码），获得一个专属于志愿者个人的健康传播室、一个传播码和一张孝敬卡。然后在“健康传播室”点击“我要传播”，把有关传播语和自己的传播码分享赠送给亲朋好友，亲朋好友又用志愿者赠送的传播码报名注册，成为新的志愿者，一轮一轮传播下去。任务轻松，操作简单，效果显著。

五、志愿者报名方法

参加健康传播慈善公益活动实行自愿报名获得志愿者资格的办法。凡热心健康传播慈善公益事业自愿参加的，登陆“健康传播”平台点击首页“报名”，一次注册，永久使用。

六、声明与承诺

《健康传播》是由卫生部下属的中国妇幼保健协会和重庆红十字基金会主导的慈善公益行动。所有健康知识均来自专家，具有科学性、权威性和实用性 ，不同于一般微信转发的健康知识。服务功能以及志愿者传播效果统计、津贴计算和支付，全部真实可信，如有任何虚假，可向相关管理机构举报；如有不明确的可随时通过QQ：3341942041咨询。
            </div>
        </div>

    }
}