    // 注意：涉及到农历日期计算，包括生肖都需要calendar.js，适用范围1900-2100年
    
    
    var date = new Date();              //读取当前时间
    var d_Year=date.getFullYear();      //读取当前年份
    var d_month=date.getMonth() +1;     //读取当前月份
    var d_day = date.getDate();         //读取当前日期
    var slist_num = document.getElementsByClassName('slist_nums')       //获取同学序号栏
    var flist_num = document.getElementsByClassName('flist_nums')       //获取家人亲戚序号栏
    var birth = document.getElementsByClassName("births");              //获取出生年份栏
    var age = document.getElementsByClassName("ages");                  //获取年龄栏
    var yldate = document.getElementsByClassName('yldatas');            //获取阳历出生日期栏
    var xingzuo = document.getElementsByClassName('xingzuos');          //获取星座栏
    var daojishi = document.getElementsByClassName('daojishis');        //获取生日倒计时栏
    var nongli = document.getElementsByClassName('nonglis');            //获取农历生日日期
    var shengxiao = document.getElementsByClassName('shengxiaos')       //获取农历生肖
    var jnnlsr = document.getElementsByClassName('jnnlsrs');            //获取今年农历生日日期
    var nldaojishi = document.getElementsByClassName('nldaojishis');    //农历倒计时
    var mnnlsr = document.getElementsByClassName('mnnlsrs');            //明年农历生日
    
    // 自动加载
    function loading_c(){
        list_num_c(flist_num);  // 家人列表序号
        list_num_c(slist_num);  // 同学列表序号
        age_c();                // 执行年龄计算
        xingzuo_c();            // 执行星座计算
        daojishi_c();           // 执行生日倒计时计算
        nongli_c();             //执行农历日期计算
        shengxiao_c();          //执行农历生肖计算
        jnnlsr_c();             //执行今年农历生日日期计算
        specals_c(5,16,1);      //特殊情况，specal_c(农历月份，农历日期，从上往下数第i+1行)
        specals_c(5,2,2);
        err_c();
    }

    // 列表序号自增
    function list_num_c(list_obj){
        for(var i = 0 ; i < list_obj.length; i++ ){
            list_obj[i].innerHTML = i+1;
        }
    }   

    // 计算年龄
    function age_c(){
        var age_result;
        for(var i = 0 ; i < birth.length; i++ ){
            if(birth[i].innerHTML == ''){
                continue;
            };
            age_result = d_Year-birth[i].innerHTML+1;
            age[i].innerHTML= age_result;
        }
    }

    // 计算星座
    function xingzuo_c(){
        for(var i = 0 ; i < yldate.length; i++ ){
            if(yldate[i].innerHTML == ''){
                continue;
            };
            if(Number(yldate[i].innerHTML) >= 1.20 && Number(yldate[i].innerHTML <= 2.18)){
                xingzuo[i].innerHTML = "♒水瓶座";
            }else if(Number(yldate[i].innerHTML) >= 2.19 && Number(yldate[i].innerHTML <= 3.20)){
                xingzuo[i].innerHTML = "♓双鱼座";
            }else if(Number(yldate[i].innerHTML) >= 3.21 && Number(yldate[i].innerHTML <= 4.19)){
                xingzuo[i].innerHTML = "♈白羊座";
            }else if(Number(yldate[i].innerHTML) >= 4.20 && Number(yldate[i].innerHTML <= 5.20)){
                xingzuo[i].innerHTML = "♉金牛座";
            }else if(Number(yldate[i].innerHTML) >= 5.21 && Number(yldate[i].innerHTML <= 6.21)){
                xingzuo[i].innerHTML = "♊双子座";
            }else if(Number(yldate[i].innerHTML) >= 6.22 && Number(yldate[i].innerHTML <= 7.22)){
                xingzuo[i].innerHTML = "♋巨蟹座";
            }else if(Number(yldate[i].innerHTML) >= 7.23 && Number(yldate[i].innerHTML <= 8.22)){
                xingzuo[i].innerHTML = "♌狮子座";
            }else if(Number(yldate[i].innerHTML) >= 8.23 && Number(yldate[i].innerHTML <= 9.22)){
                xingzuo[i].innerHTML = "♍处女座";
            }else if(Number(yldate[i].innerHTML) >= 9.23 && Number(yldate[i].innerHTML <= 10.23)){
                xingzuo[i].innerHTML = "♎天秤座";
            }else if(Number(yldate[i].innerHTML) >= 10.24 && Number(yldate[i].innerHTML <= 11.22)){
                xingzuo[i].innerHTML = "♏天蝎座";
            }else if(Number(yldate[i].innerHTML) >= 11.23 && Number(yldate[i].innerHTML <= 12.21)){
                xingzuo[i].innerHTML = "♐射手座";
            }else{
                xingzuo[i].innerHTML = "♑摩羯座";
            }
        }
    }
    

    // 计算距离阳历生日时间
    function toTimeStamp(dateString){
        return + new Date(dateString);
      }

    function daojishi_c(){
        var birth_yldata;
        var data_1,data_2;
        var now_data = d_Year + "-" + d_month + "-" + d_day;
        for(var i = 0 ; i < daojishi.length; i++ ){
            if(yldate[i].innerHTML == '' || birth[i].innerHTML == ''){
                continue;
            };
            birth_yldata = d_Year + "-" + yldate[i].innerHTML.slice(0,2) + "-" + yldate[i].innerHTML.slice(3,5);
            data_1 = toTimeStamp(birth_yldata);
            data_2 = toTimeStamp(now_data);
            daojishi[i].innerHTML=Math.round((data_1-data_2)/(24*60*60*1000));
            if (daojishi[i].innerHTML < 0){
                birth_yldata = (d_Year+1) + "-" + yldate[i].innerHTML.slice(0,2) + "-" + yldate[i].innerHTML.slice(3,5);
                data_1 = toTimeStamp(birth_yldata);
                daojishi[i].innerHTML=Math.round((data_1-data_2)/(24*60*60*1000));
            }
        }
    }

    
    // 计算1900~2100年之间的农历日期，解决闰月问题，需要calendar.js;
    function nongli_c(){
        for(var i = 0 ; i < nongli.length; i++ ){
            if(yldate[i].innerHTML == '' || birth[i].innerHTML == ''){
                continue;
            };
            if(nongli[i].hasAttribute('id')){
                continue;
            };
            var calendar_c={};
            calendar_c = calendar.solar2lunar(birth[i].innerHTML,yldate[i].innerHTML.slice(0,2),yldate[i].innerHTML.slice(3,5));
            nongli[i].innerHTML = calendar_c.IMonthCn + calendar_c.IDayCn;
        }
    }

    //根据阳历日期计算生肖，这里生肖以农历来算，只适用于1900-2100，需要calendar.js；
    function shengxiao_c(){
        var calendar_x={};
        for(var i = 0 ; i < shengxiao.length; i++ ){
            if(yldate[i].innerHTML == '' || birth[i].innerHTML == ''){
                continue;
            };
            calendar_x = calendar.solar2lunar(birth[i].innerHTML,yldate[i].innerHTML.slice(0,2),yldate[i].innerHTML.slice(3,5));
            shengxiao[i].innerHTML = calendar_x.Animal;
        }
    }

    // 计算当明年农历生日和农历生日倒计时,只适用于1900-2100，需要calendar.js；
    function jnnlsr_c(){
        var calendar_nldjs={},nl_yl,nlbirth_yldata,data_nl1,data_nl2;
        var now_data_l = d_Year + "-" + d_month + "-" + d_day;
        for(var i = 0 ; i < jnnlsr.length; i++ ){
            if(yldate[i].innerHTML == '' || birth[i].innerHTML == ''){
                continue;
            };
            if(nongli[i].hasAttribute('id')){
                continue;
            };
            // 今年农历生日
            calendar_nldjs = calendar.solar2lunar(birth[i].innerHTML,yldate[i].innerHTML.slice(0,2),yldate[i].innerHTML.slice(3,5));
            nl_yl = calendar.lunar2solar(d_Year,calendar_nldjs.lMonth,calendar_nldjs.lDay);
            jnnlsr[i].innerHTML = nl_yl.cYear + "." +  nl_yl.cMonth + "." + nl_yl.cDay;

            nl_yl_step = nl_yl; //个别腊月农历会到下一年
            if(nl_yl_step.cYear != d_Year){
                nl_yl_bugou = calendar.lunar2solar(d_Year-1,calendar_nldjs.lMonth,calendar_nldjs.lDay);
                jnnlsr[i].innerHTML = nl_yl_bugou.cYear + "." +  nl_yl_bugou.cMonth + "." + nl_yl_bugou.cDay;
            }
            // 倒计时

            nlbirth_yldata = nl_yl.date;
            data_nl1 = toTimeStamp(nlbirth_yldata);
            data_nl2 = toTimeStamp(now_data_l);
            nldaojishi[i].innerHTML=Math.round((data_nl1-data_nl2)/(24*60*60*1000));
            if(nldaojishi[i].innerHTML < 0){
                nl_yl = calendar.lunar2solar((d_Year+1),calendar_nldjs.lMonth,calendar_nldjs.lDay);
                nlbirth_yldata = nl_yl.date;
                data_nl1 = toTimeStamp(nlbirth_yldata);
                nldaojishi[i].innerHTML=Math.round((data_nl1-data_nl2)/(24*60*60*1000));
            }

            //明年农历生日
            nl_yl = calendar.lunar2solar((d_Year+1),calendar_nldjs.lMonth,calendar_nldjs.lDay);
            mnnlsr[i].innerHTML=nl_yl.cYear + "." +  nl_yl.cMonth + "." + nl_yl.cDay;

            if(nl_yl.cYear != d_Year+1){ //个别腊月农历会到下一年
                nl_yl_bugou = calendar.lunar2solar((d_Year+1),calendar_nldjs.lMonth,calendar_nldjs.lDay);
                mnnlsr[i].innerHTML=nl_yl_bugou.cYear + "." +  nl_yl_bugou.cMonth + "." + nl_yl_bugou.cDay;
            }
        }
    }

    function err_c(){       //并不是每年的农历月份都有三十的，这里进行问题说明
        for(var i = 0 ; i < nongli.length; i++ ){
            if(nongli[i].innerHTML.slice(-2) == "三十"){
                if(jnnlsr[i].innerHTML == "undefined.undefined.undefined"){
                    jnnlsr[i].innerHTML = "今年不存在" + nongli[i].innerHTML
                }
                if(mnnlsr[i].innerHTML == "undefined.undefined.undefined"){
                    mnnlsr[i].innerHTML = "明年不存在" + nongli[i].innerHTML
                }
            }
        }
    }




