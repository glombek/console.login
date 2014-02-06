if (!!console) {

    console.login = function () {
        console.group();
        if (!window.console.consolelogin) {
            console.log("Logging in...");
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", "/Scripts/console.loggedin.js");
            document.getElementsByTagName("head")[0].appendChild(fileref);
            return "...";
        } else {
            console.log("Already set up, logging in...");
            return window.console.consolelogin.login();
        }
    };

    console.log("Join in by typing console.login().");

}