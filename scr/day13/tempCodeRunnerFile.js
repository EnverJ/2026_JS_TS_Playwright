function launchBrowser(browserName, callback){

   return  callback(browserName);
}

launchBrowser('chrome', (browserName)=> {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
    
        default:
            console.log('please enter the right browser name: ', browserName);
            return false;
    }
});