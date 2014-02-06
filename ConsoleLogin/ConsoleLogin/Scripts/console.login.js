if (!console) console = { log: function () { } };

console.login = function () {
    console.log("Logging in...");
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", "/Scripts/console.loggedin.js");
    document.getElementsByTagName("head")[0].appendChild(fileref);
    return "...";
};

console.log("Join in by typing console.login().");