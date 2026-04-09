function click(element: string):Promise<void>{
    console.log("click on ", element);
    return Promise.resolve();
}

// generic util/function
async function doClick(element:string){
    await click(element);

}
// in the test code
doClick("#login");