
// enum BROWSERS{
//     CHROME,
//     EDGE,
//     FIREFOX,
//     SAFARI
// }

// console.log(BROWSERS.CHROME); // 0
// console.log(BROWSERS.EDGE);//1


enum BROWSERS{
    CHROME = "chrome",
    EDGE="edge",
    FIREFOX = "firefox",
    SAFARI = "safari"
}

// console.log(BROWSERS.CHROME); // chrome
// console.log(BROWSERS.EDGE);//edge

enum ENVS{
    QA = "qa",
    DEV = "dev",
    PROD = 'prod'
}

export {BROWSERS, ENVS};