// call backs
function loadScript(src,callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function() {
         console.log('loadScript'); 
         callback(null,src);
    }
    script.onerror = function() {new Error("Src got some error") }
    document.body.appendChild(script);
    
}
function siddharth(erro,a){
    if(erro){console.log("siddharth eror of function");
    }
    console.log('siddharth; is ='+a);
}
loadScript("https://cdn.jsdelivr.net/np/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",siddharth(1))