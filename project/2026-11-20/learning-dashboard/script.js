const title = document.querySelector('h1');
title.textContent = "我的第一个JavaScript页面";
const description = document.querySelector('.description');
description.textContent = "这是一个简单的JavaScript修改的页面";
const resetButton =  document.querySelector("#resetButton");
const taskProgress = document.querySelector("#taskProgress");
resetButton.addEventListener("click",function(){
    const shouldReset = confirm("确定要重置吗？");
    if(shouldReset){
        setProgress(0);
        resetButton.textContent = "已重置"
    } else{
        resetButton.textContent = "已取消";
    }
});
const progressBar =  document.querySelector("#progressBar");
let  currentProgress = localStorage.getItem("progress") ;

if (currentProgress === null) {
    currentProgress = 75;
}
currentProgress = Number(currentProgress);
console.log("浏览器保存的进度为:"+currentProgress+"%");
const progressPercent = document.querySelector("#progressPercent");
function setProgress(value){
    if(value > 100){
        value = 100;
    }else if(value < 0){
        value = 0;
    }
    currentProgress = value;
    localStorage.setItem("progress",currentProgress);
    progressBar.style.width = value + "%";
    progressPercent.textContent = value + "%";
    taskProgress.textContent = "当前进度为:" +value+"%";
    console.log("当前进度为:"+ value +"%");
}
setProgress(currentProgress);
progressPercent.addEventListener("click",function(){
    setProgress(currentProgress + 5);
});
