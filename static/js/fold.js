// 展开/隐藏
function one_fold(id){
    if (document.getElementById(id).style.display=="none"){
        document.getElementById(id).style.display="block";
    }else{
         document.getElementById(id).style.display="none";
    }
}
// 目录展开隐藏
function one_fold_list(id){
    one_fold(id);
    eye_icon_judege(id);
}

function eye_icon_judege(id){
    if(document.getElementById(id).style.display=="none"){
       document.getElementById("i_eyes_home").style.display="none";
       document.getElementById("i_eyes_slash_home").style.display = "inline";
    }else{
       document.getElementById("i_eyes_home").style.display="inline";
       document.getElementById("i_eyes_slash_home").style.display = "none";
    }
}



// 模式变更开关
function one_fold_moshi(){
    moshi_judege();
    r_judgefold();
}

// 模式文字文本变换
function moshi_judege(){
    if(document.getElementById("moshi_jj").style.display=="none"){
       document.getElementById("moshi_pp").style.display="none";
       document.getElementById("moshi_jj").style.display = "inline";
    }else{
       document.getElementById("moshi_pp").style.display="inline";
       document.getElementById("moshi_jj").style.display = "none";
    }
}

// 模式变更执行
function r_judgefold(){
    if(document.getElementById("moshi_pp").style.display=="none"){
        alljj();
    }else{
        allpp();
    }
}

// 简洁模式
function alljj(){
    document.getElementById("dao_jj").style.display="inline";
    document.getElementById("dao_pp").style.display="none";
    for(var i = 0 ; i < document.getElementsByClassName("tool").length; i++ ){
        document.getElementsByClassName("tool")[i].style.display="none";
    }
    for(var i = 0 ; i < document.getElementsByClassName("little_tit").length; i++ ){
        document.getElementsByClassName("little_tit")[i].style.display="none";
    }
}

// 平铺模式
function allpp(){
    document.getElementById("dao_jj").style.display="none";
    document.getElementById("dao_pp").style.display="inline";
    for(var i = 0 ; i < document.getElementsByClassName("tool").length; i++ ){
        document.getElementsByClassName("tool")[i].style.display="inline";
    }
    for(var i = 0 ; i < document.getElementsByClassName("little_tit").length; i++ ){
        document.getElementsByClassName("little_tit")[i].style.display="block";
    }
    hr_show();
}

// tool_hr线条显示与隐藏
function hr_show(){
    for(var s = 0 ; s < document.getElementsByClassName("tool_hr").length; s++ ){
        document.getElementsByClassName("tool_hr")[s].style.display="block";
    }
}
function hr_hidden(){
    for(var u = 0 ; u < document.getElementsByClassName("tool_hr").length; u++ ){
        document.getElementsByClassName("tool_hr")[u].style.display="none";
    }
}

// 简洁模式下单击显示内容并隐藏其他标题内容
function only_one(){
    for(var i = 0 ; i < document.getElementsByClassName("tool").length; i++ ){
        document.getElementsByClassName("tool")[i].style.display="none";
    }
}
function click_show(id){
    only_one();
    document.getElementById(id).style.display="inline";
    hr_hidden();
}
