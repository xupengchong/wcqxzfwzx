<template>
	<view class="u-skeleton">
 		<!-- <learn-time ref="learnTime" learnContent="法律法规"></learn-time> -->
		<!-- 搜索 -->
	<!--	<view class="top-search u-flex u-col-center u-border-bottom">
			<view class="top-search-left u-flex u-flex-1">
				<u-image src="@/static/img/top-search.png" width="35rpx" height="35rpx"></u-image>
				<u-input v-model="searchValue" type="text" class="u-flex-1 u-m-l-20"></u-input>
			</view>
			<view class="top-search-right">
				<view class="top-search-right-btn u-flex u-row-center u-col-center" @click="handleSearch">
					<u-image src="@/static/img/filter.png" width="28rpx" height="28rpx" class="img"></u-image>
					<text>筛选</text>
				</view>
			</view>
		</view> -->
		<view class="container-top">
			<view class="title">
				<text class="u-line-2 u-skeleton-rect">{{ detailData.title }}</text>
			</view>
			<!-- <view class="b-title jg-icon">
				<text class="u-skeleton-rect">发布机关：</text>
				<text class="u-skeleton-rect">{{ detailData.issueDept }}</text>
			</view>
			<view class="b-title sz-icon">
				<text class="u-skeleton-rect">发布时间：</text>
				<text class="u-skeleton-rect">{{ detailData.issueTime }}</text>
			</view> -->
			<!-- <view class="b-title sz-icon">
				<text class="u-skeleton-rect">实施时间：</text>
				<text class="u-skeleton-rect">{{ detailData.implementationTime }}</text>
			</view> -->
		</view>
		<!-- <u-gap bg-color="#F5F5F5" style="height: 10px;"></u-gap> -->
		<!-- 主体 -->
		<view class="container">
			<!-- <scroll-view class="u-skeleton-rect" :scroll-y="true" :show-scrollbar="true" style="height: calc(100vh - 251px);"> -->
				<!-- <u-parse :html="detailData.content" :show-with-animation="true"></u-parse> -->
        <rich-text :nodes="detailData.content"></rich-text>
			<!-- </scroll-view> -->
		</view>
		<!-- <u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton> -->
	</view>
</template>

<script>

	export default {
		components: {},
		data() {
			return {
				detailId: null,
				detailData: {
					title: '律师协会简介',
					// issueDept: '浙江省人民政府',
					// issueTime: '2022-03-10',
					// implementationTime: '2022-03-10',
					content: '<p>******律师协会经1985年7月25日中央书记处第221次会议决定成立，在司法部指导下进行工作。1986年7月5日，第一次全国律师代表大会在北京举行。******律师协会是全国性的律师自律组织，依法对律师实施行业管理。</p><p>******律师协会的宗旨是：坚持以习近平新时代中国特色社会主义思想为指导，学习贯彻习近平法治思想，坚持中国共产党领导，团结带领会员高举中国特色社会主义伟大旗帜，增强政治意识、大局意识、核心意识、看齐意识，坚定中国特色社会主义道路自信、理论自信、制度自信、文化自信，坚决维护习近平总书记党中央的核心、全党的核心地位，坚决维护党中央权威和集中统一领导，坚持正确政治方向，忠实履行中国特色社会主义法治工作队伍的职责使命，加强律师队伍思想政治建设，把拥护中国共产党领导、拥护社会主义法治作为律师从业的基本要求，增强广大律师走中国特色社会主义法治道路的自觉性和坚定性，忠于宪法和法律，维护当事人合法权益，维护法律正确实施，维护社会公平和正义，依法依规诚信执业，认真履行社会责任，为深入推进全面依法治国、建设中国特色社会主义法治体系、建设社会主义法治国家，推进国家治理体系和治理能力现代化，把我国建设成为富强民主文明和谐美丽的社会主义现代化强国，实现中华民族伟大复兴的中国梦而奋斗。本会遵守宪法、法律、法规和国家政策，自觉践行社会主义核心价值观，弘扬爱国主义精神，遵守社会道德风尚，自觉加强诚信自律建设。</p><p>******律师协会的最高权力机构为全国律师代表大会，每届四年，选举产生理事会、监事会。理事会选举产生会长、副会长和常务理事，监事会全体会议推举产生监事长、副监事长。在全国律师代表大会和理事会闭会期间，常务理事会主持协会工作。监事会是全国律师代表大会的监督机构，对全国律师代表大会负责。</p><p>******律师协会履行下列职责：</p><p>（一）加强律师行业管理，规范律师执业行为；</p><p>（二）保障律师依法执业，维护律师的合法权益；</p><p>（三）总结、交流律师工作经验；</p><p>（四）制定行业规范和惩戒规则；</p><p>（五）组织律师业务培训和职业道德、执业纪律教育，对律师的执业活动进行考核；</p><p>（六）组织管理申请律师执业人员的实习活动，对实习人员进行考核；</p><p>（七）对律师、律师事务所实施奖励和惩戒；</p><p>（八）受理对律师的投诉或者举报，调解律师执业活动中发生的纠纷；</p><p>（九）法律、行政法规和规章规定的其他职责。</span></p><p>******律师协会设秘书处，负责实施全国律师代表大会、理事会、常务理事会的各项决议、决定，承担协会日常工作。秘书处由秘书长领导，下设：办公室、会员部、业务部、培训部、国际部（中国国际律师交流中心）、调研部、联络部、宣传部，主办会刊《中国律师》杂志和网站“中国律师网”。</p>'
        },
				content: '',
				loading: true,
			}
		},
		watch: {
		},
		methods: {

		},
		onLoad() {
		}

	}
</script>

<style lang="scss">
.container-top {
	background-color: #fff;
	padding-top: 15px;
	padding-bottom: 15px;
	.title {
		font-size: 18px;
    text-align: center;
		font-weight: 700;
		// margin-bottom: 10px;
		padding: 0 15px;
	}
	.b-title {
		font-size: 12px;
		color: #808080;
		// margin-bottom: 6px;
		padding: 0 15px 0 35px;
		// &.jg-icon {
		// 	background: url(../../../static/icon/jg.png) no-repeat 15px center / contain;
		// }
		// &.sz-icon {
		// 	background: url(../../../static/icon/sz.png) no-repeat 15px center / contain;
		// }
	}
}
.container {
	background-color: #FFFFFF;
	padding: 0 30rpx 15px;
	overflow-y: auto;
  font-size: 28rpx;
  text-indent: 2em;
}
.top-search {
	width: 100%;
	height: 51px;
	background-color: #fff;
	padding: 0 30rpx;
	// box-shadow: 0px 2px 10px 0px rgba(46, 92, 167, 0.1);
	position: fixed;
	top: 40px;
	left: 0;
	z-index: 10;
	/* #ifdef H5 */
	top: 84px;
	/* #endif */
	&-left {
		height: 68rpx;
		background-color: #F5F5F5;
		border-radius: 68rpx;
		padding: 0 20rpx;
		margin-right: 20rpx;
	}
	&-right {
		&-btn {
			width: 136rpx;
			height: 68rpx;
			border-radius: 68rpx;
			background-color: #327BF0;
			color: #fff;
			font-size: 28rpx;
			transition: all 0.5s;
			.img {
				margin-right: 10rpx;
			}
			&:active {
				opacity: 0.3;
			}
		}
	}
}
</style>
