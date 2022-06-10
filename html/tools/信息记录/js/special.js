// 农历日期与阳历不符的单独计算
function specals_c(nlmonth,nlday,i){
    var now_data_l_s = d_Year + "-" + d_month + "-" + d_day;
    // 今年农历生日日期
    var special_nl = calendar.lunar2solar(d_Year,nlmonth,nlday);
    jnnlsr[i].innerHTML = special_nl.cYear + '.' + special_nl.cMonth + "." + special_nl.cDay;
    special_nl_step = special_nl;
    if(special_nl_step.cYear != d_Year){
        // special_nl_bugou = calendar.lunar2solar(d_Year-1,calendar_nldjs.lMonth,calendar_nldjs.lDay);
        special_nl_bugou = calendar.lunar2solar(d_Year-1,nlmonth,nlday);
        jnnlsr[i].innerHTML = special_nl_bugou.cYear + "." +  special_nl_bugou.cMonth + "." + special_nl_bugou.cDay;
    }
    //农历倒计时
    var nlbirth_yldata = special_nl.date;
    var data_nl1 = toTimeStamp(nlbirth_yldata);
    var data_nl2 = toTimeStamp(now_data_l_s);
    nldaojishi[i].innerHTML=Math.round((data_nl1-data_nl2)/(24*60*60*1000));
    if(nldaojishi[i].innerHTML < 0){
        special_nl = calendar.lunar2solar((d_Year+1),nlmonth,nlday);
        nlbirth_yldata = special_nl.date;
        data_nl1 = toTimeStamp(nlbirth_yldata);
        nldaojishi[i].innerHTML=Math.round((data_nl1-data_nl2)/(24*60*60*1000));
    }
    special_nl = calendar.lunar2solar((d_Year+1),nlmonth,nlday);
    mnnlsr[i].innerHTML=special_nl.cYear + "." +  special_nl.cMonth + "." + special_nl.cDay;

    if(special_nl.cYear != d_Year+1){
        // special_nl_bugou = calendar.lunar2solar((d_Year),calendar_nldjs.lMonth,calendar_nldjs.lDay);
        special_nl_bugou = calendar.lunar2solar((d_Year),nlmonth,nlday);
        mnnlsr[i].innerHTML=special_nl_bugou.cYear + "." +  special_nl_bugou.cMonth + "." + special_nl_bugou.cDay;
    }
}
