
function openDingdongApp(){
    console.log("买菜咯");
    // setScreenMetrics(1080, 1920);

    //Open app
    launch("com.yaya.zone");
    
    sleep(3000)

    //click back to close the pop
    // id("iv_close").findOne().click()
    back();
    sleep(3000);
    // id("iv_close").findOne().click()
    back();
    sleep(1000);

    //to my fragment
    click(device.width-100,device.height-100);
    sleep(250);
    //click jifen
    id("myList").findOne().children().forEach(child => {
        var target = child.findOne(id("rl_point"));
        target.click();
    });

    sleep(3000)
    className("android.view.View").desc("立即签到领积分").findOne().click()
    sleep(500);
    //close sign the pop
    back();
    sleep(250)

    swipe(device.width/2, device.height*0.87, device.width/2, device.height/5, 1000)
    
    className("android.view.View").desc("去逛逛").findOne().click()
    sleep(33000)

    back();

    sleep(1000);
    back();
    back();

}

openDingdongApp();


// module.exports = openDingdongApp;
