<template>
    <h1>NFL Standings</h1>
    <body>
        <div class="box">
            <div class="american">
                <h2>American Football Conference</h2>
                <div class="aeast">
                    <h2>East</h2>
                </div>
                <div class="aeast">
                    <h2>West</h2>
                </div>
                <div class="aeast">
                    <h2>North</h2>
                </div>
                <div class="aeast">
                    <h2>South</h2>
                </div>
            </div>
            <div class="national">
                <h2>National Football Conference</h2>
                <div class="aeast">
                    <h2>East</h2>
                </div>
                <div class="aeast">
                    <h2>West</h2>
                </div>
                <div class="aeast">
                    <h2>North</h2>
                </div>
                <div class="aeast">
                    <h2>South</h2>
                </div>
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

.american{
    height: 1000px;
    width: 330px;
    text-align: center;
}

.national{
    height: 1000px;
    width: 300px;
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

.aeast{
    height: 200px;
    width: 70px;
}
</style>