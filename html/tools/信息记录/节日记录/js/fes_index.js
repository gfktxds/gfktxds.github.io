var fes_list_num = document.getElementsByClassName('fes_list_nums');
var fests_list_num = document.getElementsByClassName('fests_list_nums')

function loading_fes(){
    list_num_c(fes_list_num);
    list_num_c(fests_list_num);
    specals_c(1,1,0);          //春节
    specals_c(1,15,1);          //元宵节
    specals_c(2,2,2);           //龙抬头
    specals_c(5,5,3);           //端午节
    specals_c(7,7,4);           //七夕节
    specals_c(7,15,5);          //中元节
    specals_c(8,15,6);          //中秋节
    specals_c(9,9,7);           //重阳节
    muqinjie_c();           // 母亲节
    fuqinjie_c()           //父亲节
    err_c();
}

//计算相差天数,id1为今年日期id,id2为明年日期的id,out为输出id
function daojishi_teshuc(id1,id2,out){
    var now_data = d_Year + "." + d_month + "." + d_day;
    data_1 = toTimeStamp(document.getElementById(id1).innerHTML);
    data_2 = toTimeStamp(now_data);
    document.getElementById(out).innerHTML = Math.round((data_1-data_2)/(24*60*60*1000));
    if (document.getElementById(out).innerHTML < 0){
        data_1 = toTimeStamp(document.getElementById(id2).innerHTML);
        document.getElementById(out).innerHTML = Math.round((data_1-data_2)/(24*60*60*1000));
    }
}


// 母亲节
function muqinjie_c(){
    var May_one_week;
    var May_one = calendar.solar2lunar(d_Year,05,01);
    var jnmuqinjie =  document.getElementById('jnmuqinjies');
    var mnmuqinjie =  document.getElementById('mnmuqinjies');
    // 获取5月1日的星期
    May_one_week = May_one.ncWeek;
    if (May_one_week == "星期一"){
        jnmuqinjie.innerHTML = d_Year + ".05.14" ;
    }else if (May_one_week == "星期二"){
        jnmuqinjie.innerHTML = d_Year + ".05.13" ;
    }else if (May_one_week == "星期三"){
        jnmuqinjie.innerHTML = d_Year + ".05.12" ;
    }else if (May_one_week == "星期四"){
        jnmuqinjie.innerHTML = d_Year + ".05.11" ;
    }else if (May_one_week == "星期五"){
        jnmuqinjie.innerHTML = d_Year + ".05.10" ;
    }else if (May_one_week == "星期六"){
        jnmuqinjie.innerHTML = d_Year + ".05.09" ;
    }else if (May_one_week == "星期日"){
        jnmuqinjie.innerHTML = d_Year + ".05.08" ;
    }

    May_one = calendar.solar2lunar( d_Year+1 ,05,01);
    May_one_week = May_one.ncWeek;
    if (May_one_week == "星期一"){
        mnmuqinjie.innerHTML = d_Year+1 + ".05.14" ;
    }else if (May_one_week == "星期二"){
        mnmuqinjie.innerHTML = d_Year+1 + ".05.13" ;
    }else if (May_one_week == "星期三"){
        mnmuqinjie.innerHTML = d_Year+1 + ".05.12" ;
    }else if (May_one_week == "星期四"){
        mnmuqinjie.innerHTML = d_Year+1 + ".05.11" ;
    }else if (May_one_week == "星期五"){
        mnmuqinjie.innerHTML = d_Year+1 + ".05.10" ;
    }else if (May_one_week == "星期六"){
        mnmuqinjie.innerHTML = d_Year+1 + ".05.09" ;
    }else if (May_one_week == "星期日"){
        mnmuqinjie.innerHTML = d_Year+1 + ".05.08" ;
    }
    daojishi_teshuc("jnmuqinjies","mnmuqinjies","muqinjie_daojishis");

}


//父亲节
function fuqinjie_c(){
    var June_one_week;
    var June_one = calendar.solar2lunar(d_Year,06,01);
    var jnfuqinjie =  document.getElementById('jnfuqinjies');
    var mnfuqinjie =  document.getElementById('mnfuqinjies');
    // 获取6月1日的星期
    June_one_week = June_one.ncWeek;
    if (June_one_week == "星期一"){
        jnfuqinjie.innerHTML = d_Year + ".06.21" ;
    }else if (June_one_week == "星期二"){
        jnfuqinjie.innerHTML = d_Year + ".06.20" ;
    }else if (June_one_week == "星期三"){
        jnfuqinjie.innerHTML = d_Year + ".06.19" ;
    }else if (June_one_week == "星期四"){
        jnfuqinjie.innerHTML = d_Year + ".06.18" ;
    }else if (June_one_week == "星期五"){
        jnfuqinjie.innerHTML = d_Year + ".06.17" ;
    }else if (June_one_week == "星期六"){
        jnfuqinjie.innerHTML = d_Year + ".06.16" ;
    }else if (June_one_week == "星期日"){
        jnfuqinjie.innerHTML = d_Year + ".06.15" ;
    }

    June_one = calendar.solar2lunar( d_Year+1 ,06,01);
    June_one_week = June_one.ncWeek;
    if (June_one_week == "星期一"){
        mnfuqinjie.innerHTML = d_Year+1 + ".06.21" ;
    }else if (June_one_week == "星期二"){
        mnfuqinjie.innerHTML = d_Year+1 + ".06.20" ;
    }else if (June_one_week == "星期三"){
        mnfuqinjie.innerHTML = d_Year+1 + ".06.19" ;
    }else if (June_one_week == "星期四"){
        mnfuqinjie.innerHTML = d_Year+1 + ".06.18" ;
    }else if (June_one_week == "星期五"){
        mnfuqinjie.innerHTML = d_Year+1 + ".06.17" ;
    }else if (June_one_week == "星期六"){
        mnfuqinjie.innerHTML = d_Year+1 + ".06.16" ;
    }else if (June_one_week == "星期日"){
        mnfuqinjie.innerHTML = d_Year+1 + ".06.15" ;
    }
    daojishi_teshuc("jnfuqinjies","mnfuqinjies","fuqinjie_daojishis");

}
