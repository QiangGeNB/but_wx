var mongoose = require('../db.js')

var ActivitySchema = new mongoose.Schema({
	activityID:Number,//活动ID
	activityTitle:String,//活动标题
	activityDes:String,//活动描述（详情页内容）
	activityInt:String,//活动介绍（一两句话）
	activityDate:Date,//活动开始日期
	onlineTime:Date,//发布时间
	duration:Number,//预计活动持续时间
	activityImage:[{
		url:String//活动图片地址
	}],
	enterNumber:Number,//报名人数
	collectionNumber:Number,//收藏人数
	joinNumber:Number,//参加人数
	viewNumber:Number//活动查看人数
})

module.exports = mongoose.model('bjut_activity',ActivitySchema);