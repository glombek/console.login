window.console = {
    _console: window.console,
    log: function (msg) {

        //TODO: Send to server
        this._console.log("TEST: " + msg + " from " + window.location);
    },
    logto: function (usr, msg) {
        //TODO: DM
        return "User offline.";
    },
    login: function () {
        //called automatically when first logged in, also if session expires.

        this._console.group();

        //TODO: OAuth

        this._console.log("Logged in. Type console.help() for help.");

        //TODO: Listen for updates
    },
    logout: function () {
        this._console.log("Logging out...");

        window.console = this._console;

        this._console.groupEnd();

        return "Logged out. Normality Restored.";
    },
    help: function () {
        return "Console.Login is a secret social network. It can be implemented into any site simply by including a single JavaScript file. Talk to others logged into Console.Login by using the console.log(...) command.";
    }
};
console.login();