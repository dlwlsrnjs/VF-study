<template>
  <div class="menu">
    <a class="wh" v-for="menu in 메뉴들" :key="menu">{{menu}}</a>
  </div>
  
  <div class="mt-5" v-for=" x in rooms" :key="x">
    <h1>{{x.title}}</h1>
    <h3>선생님 : {{x.teacher}}</h3>
    <h4>학생 : {{x.student}}</h4>
    <br>
    <br>
  </div>  
</template>

<script>
import { rooms } from './main.js'


export default {
  name: 'App',
  data() {
    return {
      rooms : rooms,
      메뉴들 : ['Home', '내 강의실', 'MY'],
    }
  },
  
  components: {
   
  }
}
</script>

<style>
body {
  margin:0;
}
div {
  box-sizing: border-box;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.wh {
  color: white;
  padding: 10px;
}

</style>
