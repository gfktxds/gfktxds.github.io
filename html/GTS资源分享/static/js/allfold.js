//单目录页展开/隐藏,并判断是否全展开/隐藏
var fold_num= 0 ,fold_allnum=2 
//全局变量，num不需要改，fold_allnum为目录的总数
function r_fold(id){
    if (document.getElementById(id).style.display=="none"){
        document.getElementById(id).style.display="block";
        fold_num++;
    }else{
    document.getElementById(id).style.display="none";
        fold_num--;
    }
    if(fold_num>=fold_allnum){
        document.getElementById("r_checkbox").checked = true;
    }else{
        document.getElementById("r_checkbox").checked = false;
    }
}

//目录页全展开/隐藏,可实现多级目录
function r_judgefold(id){
    if(document.getElementById("r_checkbox").checked == true){
        document.getElementById(id).style.display="block";
        fold_num=fold_allnum;
    }else{
        document.getElementById(id).style.display="none";
        fold_num=0;
    }
}


function r_allfold(){
        r_judgefold('r_gamefold');
        r_judgefold('r_picfold');
}
