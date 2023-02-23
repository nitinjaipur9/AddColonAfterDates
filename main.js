function editable() {
    document.getElementById('box').style.display = "block";
    document.getElementById('output').style.display = "none";

    document.getElementById('edit').style.display = "none";
    document.getElementById('preview').style.display = "block";
    document.getElementById('submit').style.display = "none";
}


function transform() {
    var myLine = document.getElementById('txt').value;

    document.getElementById('box').style.display = "none";
    document.getElementById('output').style.display = "block";

    document.getElementById('edit').style.display = "block";
    document.getElementById('preview').style.display = "none";
    document.getElementById('submit').style.display = "block";

    let dateTypeA = /[1-9][/][1-9][/]\d{4}$|[1-9][/][1-2][0-9][/]\d{4}$|[1-9][/][3][0-1][/]\d{4}$|[1-9][/][0][0-9][/]\d{4}$|[1][0-2][/][1-9][/]\d{4}$|[1][0-2][/][1-2][0-9][/]\d{4}$|[1][0-2][/][3][0-1][/]\d{4}$|[1][0-2][/][0][0-9][/]\d{4}$|[0][1-9][/][1-9][/]\d{4}$|[0][1-9][/][1-2][0-9][/]\d{4}$|[0][1-9][/][3][0-1][/]\d{4}$|[0][1-9][/][0][0-9][/]\d{4}$/;
    let dateTypeB = /[1-9][/][1-9][/]\d{2}$|[1-9][/][1-2][0-9][/]\d{2}$|[1-9][/][3][0-1][/]\d{2}$|[1-9][/][0][0-9][/]\d{2}$|[1][0-2][/][1-9][/]\d{2}$|[1][0-2][/][1-2][0-9][/]\d{2}$|[1][0-2][/][3][0-1][/]\d{2}$|[1][0-2][/][0][0-9][/]\d{2}$|[0][1-9][/][1-9][/]\d{2}$|[0][1-9][/][1-2][0-9][/]\d{2}$|[0][1-9][/][3][0-1][/]\d{2}$|[0][1-9][/][0][0-9][/]\d{2}$/;
    let dateTypeC = /[1-9][/]\d{4}$|[1][0-2][/]\d{4}$|[0][1-9][/]\d{4}$/;
    let dateTypeD = /[1][0-2][/]\d{2}$|[0][1-9][/]\d{2}$|[1-9][/]\d{2}$/;

    const myArray = myLine.split(" ");

    const len = myArray.length;

    for (let i = 0; i < myArray.length; i++) {

        let matchComma = myArray[i].match(/[,]/);

        if (matchComma) {
            const mySubArray = myArray[i].split(",");
            let lastElement = mySubArray[mySubArray.length - 1]

            let matchA = lastElement.match(dateTypeA);
            let matchB = lastElement.match(dateTypeB);
            let matchC = lastElement.match(dateTypeC);
            let matchD = lastElement.match(dateTypeD);

            let match;

            if (matchA) {
                match = matchA;
            }
            else if (matchB) {
                match = matchB;
            }
            else if (matchC) {
                match = matchC;
            }
            else if (matchD) {
                match = matchD;
            }


            if (match) {
                if (myArray[i + 1] == ":") { }
                else {
                    nullPattern = myArray[i].replace(match[0], "");

                    let matchX = nullPattern.match(/[1-9]$/);

                    if (matchX) {
                    }
                    else {
                        myArray[i] = myArray[i] + ":";
                    }
                }
            }
        }

        else {
            let matchA = myArray[i].match(dateTypeA);
            let matchB = myArray[i].match(dateTypeB);
            let matchC = myArray[i].match(dateTypeC);
            let matchD = myArray[i].match(dateTypeD);

            let match;

            if (matchA) {
                match = matchA;
            }
            else if (matchB) {
                match = matchB;
            }
            else if (matchC) {
                match = matchC;
            }
            else if (matchD) {
                match = matchD;
            }


            if (match) {
                if (myArray[i + 1] == ":") { }
                else {
                    nullPattern = myArray[i].replace(match[0], "");

                    let matchX = nullPattern.match(/[1-9]$/);

                    if (matchX) {
                    }
                    else {
                        myArray[i] = myArray[i] + ":";
                    }
                }
            }
        }
    }

    const string = myArray.join(' ');
    document.getElementById('out').value = string;
    document.getElementById('out').readOnly = true;
}