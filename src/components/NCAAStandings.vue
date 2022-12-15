<template>
    <h1>NCAA Standings</h1>
    <body>
        <div class="box">
            <div class="conf">
                <h2>Western Conference</h2>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            <div class="conf">
                <h2>Eastern Conference</h2>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
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
    height: 950px;
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

li {
    margin-top: 25px;
    border-bottom: 3px solid grey;
    font-size: large;
}

</style>