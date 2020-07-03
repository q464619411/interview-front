<template>
  <div class="tabid">
    <div display:flex v-for="(item,index) in listData" :style="{'display': item.isHidden? 'block': 'inline-block'}">
      <div display:flex class="list-item">
        <a-button @click="open(index)">展开</a-button>
        <div class="content" v-show="item.isHidden">
          <div class="name">{{item.name}}</div>
          <div class="buttons">
            <a-button @click="addNode(index)" style="display: block; margin-bottom: 20px">插入</a-button>
            <a-button @click="fold(index)" style="display: block; margin-bottom: 20px">折叠</a-button>
            <a-button @click="deleteNode(index)" style="display: block; margin-bottom: 20px">删除</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <a-button @click="addLast" style=" margin-right: 20px">
		  新增
		  </a-button>
		  <a-spin :spinning="spinning">
		  </a-spin>
      <a-button @click="sort" style="margin-left: 20px;">随机排序</a-button>
    </div>
  </div>
</template>
<script>
import list from '../assets/list.json'

const listData = list.list
export default {
  data() {
    return {
      listData,
      spinning: false,
      delayTime: 500
    };
  },
  methods: {
    // 绑定点击事件，使用v-show展示列表元素
    open(index) {
      var temp = this.listData
      this.spinning = true
      setTimeout(() => {
        this.spinning = false
      }, 250)
      temp[index].isHidden = ! temp[index].isHidden
      this.listData = temp
    },
    // 绑定点击事件，使用v-show进行隐藏
    fold(index) {
      var temp = this.listData
      this.spinning = true
      setTimeout(() => {
        this.spinning = false
      }, 250)
      temp[index].isHidden = ! temp[index].isHidden
      this.listData = temp
    },
    // 插入元素按钮事件
    addNode(index) {
      this.listData.splice(index,0,{id: index+1,name: '新增元素',isHidden: false})
    },
    // 删除元素按钮事件
    deleteNode(index) {
      this.listData.splice(index,1)
    },
    // 新增元素按钮事件
    addLast(index) {
      this.spinning = true
      setTimeout(() => {
        this.spinning = false
      }, 250)
      this.$axios.get('http://123.57.220.17:8081/element').then((res)=>{
        let rand = parseInt(Math.random()*listData.length)
        this.listData.push({id: res.data.result[rand].id, name: res.data.result[rand].name, isHidden: false})
      })
    },
    // 随机排序元素
    sort(index) {
      const listData = this.listData;
      this.spinning = true
      setTimeout(() => {
        this.spinning = false
      }, 250)
      var t;
      for (let i = 0; i < listData.length; i++) {
        var rand = parseInt(Math.random()*listData.length)
        t = listData[rand]
        listData[rand] = listData[i]
        listData[i] = t
      }
      // 消除对数据设置的监控器Observer
      this.listData = JSON.parse(JSON.stringify(listData))
    },
  },
  mounted() {
    console.log(listData)
  }
};
</script>

<style>
  .tabid{
	width: 100%;
	margin: 0 auto;
	overflow: auto;
	/* position: fixed; */
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
        }
		.tabid a-spin{
			display: inline-block;
			float: left;
			left: 50%;
			margin-top: 50%;
		}
        .tabidv ul{
            list-style: none;
            background-color: rgb(57, 57, 219);
        }
        .tabid ul li{
            display: inline-block;
            padding: 0 20px;
            height: 65px;
            line-height: 65px;
            color: #ffffff;
            cursor: pointer;
        }
  .content {
    height: 200px;
    border: 1px solid #E4E4E4;
    position: relative;
  }
  .name {
    position: absolute;
    height: 50px;
    width: 100px;
    top: 0;        
    right: 0;        
    bottom: 0;        
    left: 0;        
    margin: auto;
  }
  .buttons {
    margin-top: 25px;
    position: absolute;
    right: 0
  }
  .ant-btn {
    display: block
  }
  .bottom {
    margin-top: 30px;
    text-align: center

  }
    
</style>