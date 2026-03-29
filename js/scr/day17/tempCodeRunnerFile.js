function waitForElement(locator, timeout){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let isElementFound = true;
            if(isElementFound){
                let webElement = `driver.findElement(${locator})`;
                resolve(webElement);
            }
            else{
                reject(null)
            }
        },timeout)
    })

}

function click(element){
    console.log(`click on the element ${element}`);
}

waitForElement('#loginBtn', 5000)
                                .then((element => click(element)))
                                .catch(error => console.log('element not found ....'));