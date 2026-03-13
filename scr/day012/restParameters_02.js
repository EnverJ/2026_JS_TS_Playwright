// var args : rest parameters ...
function selectCountryFromDropDown (...countryName) 
{
    console.log(`select ${countryName}`);
    console.log(countryName.length);

    for(let e of countryName) 
    {
        console.log(e);

    }

}

/**
 * @param {String} name
 * @param  {...any} details 
 */
function fillValue (name, ...details)
{
     console.log('checking the details for ' + name,details); // checking the details for Rock [ 101, 'California', 'Sector 5', 'LA' ]
    console.log(details.length);

    for(let e of details) 
    {
        console.log(e);

    }

}
selectCountryFromDropDown('US'); // select US
selectCountryFromDropDown('US','UK','India','AUS'); // select US,UK,India,AUS

fillValue('Rock', 101, 'California', 'Sector 5', 'LA');