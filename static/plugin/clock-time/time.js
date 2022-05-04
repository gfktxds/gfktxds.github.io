var textAnimate = eval(Jscex.compile("async", function () 
{
	var together = new Date();
	together.setFullYear(2022,03, 19); 			//时间年月日，注意月份是0-11
	together.setHours(0);						//小时	
	together.setMinutes(0);						//分钟
	together.setSeconds(0);						//秒前一位
	together.setMilliseconds(0);				//秒第二位
     $("#clock-box").fadeIn(500);
        while (true) {
            timeElapse(together);
            $await(Jscex.Async.sleep(1000));
        }
}));
 
	textAnimate().start();
