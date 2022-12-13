<template>
    <div class="wrapper">
      <div class="header">
        <label class="header-title">Sports Hub</label>
        <br />
      </div>

      <div class="container" v-cloak>
        <div class="fleague1"><a href = 'leagues.html'><span>NFL League</span></a></div>
        <div class="fleague2"><a href = 'leagues.html'><span>NCAA League</span></a></div>
      </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    user-select: none;
    box-sizing: border-box;
}
.header{
    text-align: center;
    padding: 20px;
    font-size: 100px;
}
.header-title{
    color:#0c0c0c;
    text-align: center;
    font-size: 50px;
}
.container{
    width: 450px;
    margin: 30px auto;
}
.fleague1,
.fleague2 {
    width: 50%;
    background: #fff;
    float: left;
    height: 60px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
}
</style>