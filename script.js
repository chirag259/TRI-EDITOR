function run(){
    let htmlcode= document.getElementById("html-code");
    let csscode= document.getElementById("css-code");
    let jscode= document.getElementById("js-code");
    let output= document.getElementById("output");

    
    try {
        // Set the HTML and CSS
        output.contentDocument.body.innerHTML = htmlcode.value + "<style>" + csscode.value + "</style>";
        
        // Run the JavaScript
        output.contentWindow.eval(jscode.value);
    } catch (e) {
        console.error("Error in executing JS code: ", e);
    }
    


}