var tabs = document.querySelectorAll(".nav-item");

for(i = 0; i < tabs.length; i++){
    var tab = tabs[i];
    setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos){
    tab.onclick = function(){
        document.querySelector('.nav-item-active').setAttribute('class', 'nav-item');
        tab.setAttribute("class", "nav-item-active");
    };
}