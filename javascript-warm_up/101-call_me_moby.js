//create a const callmemoby
const callMeMoby = (x, theFunction) => {
    for (i = 0; i < x; i++){
        theFunction();
    }
}

module.export = {callMeMoby}