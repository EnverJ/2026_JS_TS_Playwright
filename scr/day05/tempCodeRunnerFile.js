let browser = "nano";
switch (browser.trim().toLowerCase()){

    case "chrome":
        console.log("launch chrome");
        break;
    case "edge", "nano":
        console.log("launch edge");
        break;
    case "safari":
        console.log("launch safari");
        break;
    default:
        console.log("invalid browser");
        break;
    case "opera":
        console.log("launch opera");
        break;

}

console.log("byee");