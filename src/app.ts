(function(appDiv:HTMLDivElement){
    function main(){
        appDiv.innerHTML = `<h1>App load Successfuly</h1>`;
    }

    window.addEventListener("load",main);
})(document.querySelector("#app")!);