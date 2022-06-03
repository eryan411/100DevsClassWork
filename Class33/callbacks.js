function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`Script load error for ${src}`))

    document.head.append(script);

}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(script){
    alert(`Cool, the script ${script.src} is loaded`);

    loadScript('/my/script2.js', function(script){
        alert(`Cool, the second script is loaded`)
        loadScript('/my/script3.js', function(script){
            alert(`Cool, the third script is loaded`)
        })
    })
});

newFunction();

