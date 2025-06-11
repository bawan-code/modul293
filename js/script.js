window.onload = (event) => {
    let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    let main = document.getElementsByTagName("main")[0];
    let mainHeight = main.offsetHeight;
    let viewHeight = window.innerHeight;
    if (mainHeight + headerHeight < viewHeight){
        main.style.height = `${viewHeight - headerHeight}px`;
    }
}