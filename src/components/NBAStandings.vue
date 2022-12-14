<template>
    <h1>NBA Standings</h1>
    <body>
        <div class="box">
            <div class="conf">
                <h2>Western Conference</h2>
            </div>
            <div class="conf">
                <h2>Eastern Conference</h2>
            </div>
        </div>
    </body>
</template>
  
<style scoped>


.box{
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    border: 5px solid green;
}

.conf{
    height: 1000px;
    width: 330px;
    text-align: center;
}

h2{
    border-bottom: 3px solid green;
}

h1{
    font-weight: bold; 
    display: flex;
    justify-content: center;
}

</style>