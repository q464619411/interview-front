<template>
	<div class="friend">
		<el-card class="box-card">
		  <div slot="header" class="d-flex align-items-center">
		  	<img class="card-icon" src="../assets/lianjie.png"/>
		    <span>{{$t('friend.friend')}}</span>
		  </div>
		  <div class="text item"><a href="#">某某的博客</a></div>
		  <div class="text item"><a href="#">某某的博客</a></div>
		</el-card>
	</div>
</template>

<script>
export default {
  name: 'friend'
}
</script>

<style scoped>
.box-card .item a{
	text-decoration: none;
	/*color: #F56C6C;*/
}
.box-card span{
	font-weight: bold;
}
.card-icon{
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
</style>