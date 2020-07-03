<template>
	<div>
		<el-row class="main" type="flex" justify="center">
			<el-col :span="16">
				<div id="artcle-info">
					<h2 class="text-center"><strong>Vue+Echarts疫情数据可视化</strong></h2>
					<!-- 描述：文章信息 -->
					<div class="text-center timeAndView">
						<span class="article-time">
							<i class="el-icon-time"></i>
							发表于：<span>2020-06-14</span>
						</span>
						&nbsp;|&nbsp;
						<span class="article-views">
							<i class="el-icon-view"></i>
							阅读量：<span>0.2</span>万
						</span>
					</div>
					<p class="abstract">
						前言：ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。
					</p>
				</div>
				<hr />
				<div id="artcle-content">
					<p>Demo地址：
						<a href="http://123.57.220.17:50120/#/dashboard" rel="nofollow" target="_blank">http://123.57.220.17:50120/#/dashboard</a>
					</p>

					<p>&nbsp;</p>

					<h3><a name="t0"></a>1、主页点击窗口效果</h3>

					<p>使用transform的scale变换进行不同图表间的位置的切换以及大小的变换</p>

					<img alt="" class="has" src="../assets/HtmlStructure.png" >

					<p>点击子窗口进行切换，效果如下：</p>

					<p><img alt="" class="has" src="../assets/Frontend.png" ></p>

					<p><img alt="" class="has" src="../assets/frontend-change.png" ></p>

					<h3><a name="t2"></a>2、Echats配置</h3>

					<p>
					ECharts 是一个使用 JavaScript 实现的开源可视化库，涵盖各行业图表，满足各种需求。
					ECharts 遵循 Apache-2.0 开源协议，免费商用。
					ECharts 兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等）及兼容多种设备，可随时随地任性展示。
					</p>
					
					<p>Echarts官网:<a href="https://echarts.apache.org/" rel="nofollow" target="_blank">https://echarts.apache.org/</a></p>
					
					<h3>&nbsp;</h3>

					<h3><a name="t4"></a>3、axios异步获取数据</h3>

					<p>Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。</p>
					
					<p>
						<ul>
							<li>从浏览器中创建 XMLHttpRequests</li>
							<li>从 node.js 创建 http 请求</li>
							<li>支持 Promise API</li>
							<li>拦截请求和响应</li>
							<li>转换请求数据和响应数据</li>
							<li>取消请求</li>
							<li>自动转换 JSON 数据</li>
							<li>客户端支持防御 XSRF</li>
						</ul>
					</p>
					
					<p>axios示例：</p>
					
					<p><img alt="" class="has" src="../assets/axios1.png" ></p>
					
					<h3>&nbsp;</h3>

					<h3><a name="t6"></a>4、async和await</h3>
					
					<p>用async/await来发送异步请求,从服务端获取数据</p>
					
					<p>
						<ul>
							<li>await后面接一个会return new promise的函数并执行它</li>
							<li>await只能放在async函数里</li>
						</ul>
					</p>
					
					<p>使用async和await获取成功的案例：</p>
					
					<p><img alt="" class="has" src="../assets/async1.png" ></p>
					
					<p>上面这段代码async中使await 摇色子()先执行，等到三秒后执行完再把得到的结果赋值给左边的n，也就是说test函数需要三秒钟才执行完成，所以test函数是异步的，因此前面必须写async</p>

					<h3>&nbsp;</h3>

					<p>总结：是不是很简单，这里只是简单的展示了方法，它还有更多的注解来描述接口、参数、返回值 。需要学习更多的可以到官网阅读文档。</p>

					<p>希望对大家有所微薄的帮助。</p>

					<p>&nbsp;</p>

				</div>
				<div id="statement">
					<div class="item">{{$t('article.author')}}：xiaoy</div>
					<!-- <div class="item">{{$t('article.originalLink')}}：
					</div> -->
					<div class="item">{{$t('article.copyright')}}：本博客所有文章除特别声明外,转载请注明出处!</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'article'
	}
</script>

<style scoped>
	#artcle-info {
		padding: 20px;
		background-image: url(../assets/vue.jpg);
		margin-bottom: 40px;
	}
	
	#artcle-info .abstract {
		color: #ffffff;
		border-left: 3px solid #F56C6C;
		padding: 10px;
		background-color: rgba(126, 129, 135, 0.3);
	}
	
	#artcle-info .timeAndView {
		padding: 20px;
		line-height: 30px;
		font-size: 16px;
		color: #ffffff;
	}
	
	pre.has {
		color: #ffffff;
		background-color: rgba(0, 0, 0, 0.8);
	}
	
	img.has {
		width: 100%;
	}
	
	#statement {
		border-left: 3px solid #F56C6C;
		padding: 20px;
		background-color: #EBEEF5;
	}
</style>