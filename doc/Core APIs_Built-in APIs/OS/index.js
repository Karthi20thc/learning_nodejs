const os = require("os");


console.log("welcome to nodejs")

console.log({
    platform: os.platform(),
    arch: os.arch(),        // x64, arm64, etc
    release: os.release(),  // OS version
    hostname: os.hostname(),
    version: os.version()
});

