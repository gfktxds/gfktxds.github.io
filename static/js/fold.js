// 单目录页展开/隐藏
function one_fold(id){
    if (document.getElementById(id).style.display=="none"){
        document.getElementById(id).style.display="block";
    }else{
         document.getElementById(id).style.display="none";
    }
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