
function addRow() {
    const table = document.getElementsByTagName("tbody")[0];
    const new_row = table.insertRow();
    let in1 = document.createElement("input");
    in1.className = "userIn";
    in1.id = "weight" + new_row.rowIndex;
    in1.type = "number";
    let new_form = document.createElement("form");
    new_form.id = "formRow" + new_row.rowIndex;
    let in2 = document.createElement("input");
    in2.className = "userIn";
    in2.id = "gradeNumer" + new_row.rowIndex;
    in2.type = "number";
    in2.oninput = percentCalc;
    let in3 = document.createElement("input");
    in3.className="userIn";
    in3.id = "gradeDenom" + new_row.rowIndex;
    in3.type = "number";
    in3.oninput = percentCalc;
    new_row.insertCell().innerHTML="Activity " + new_row.rowIndex;
    new_row.insertCell().innerHTML="A" + new_row.rowIndex;
    new_row.insertCell().append(in1);
    new_row.insertCell().appendChild(new_form).append(in2, " / ", in3);
    new_row.insertCell().id = "percRow" + new_row.rowIndex;
}

function percentCalc(){
    const table = document.getElementsByTagName("tbody")[0];
    for(let i = 1; i <= table.rows.length; i++){
        const numer = document.getElementById("gradeNumer" + i);
        const denom = document.getElementById("gradeDenom" + i);
        let perc = document.getElementById("percRow" + i);
        perc.innerHTML = (+numer.value >= 0 && +denom.value > 0) ? (((+numer.value) * 100) / (+denom.value)) + "%" : "";
    }
}

function weightedMean(){
    const table = document.getElementsByTagName("tbody")[0];
    let wTotal = 0, gSum = 0;
    for(let i = 1; i <= table.rows.length; i++){
        const weight = document.getElementById("weight" + i);
        const numer = document.getElementById("gradeNumer" + i);
        const denom = document.getElementById("gradeDenom" + i);

        if(+numer.value < 0 || +denom.value <= 0 || +weight.value < 0) continue;

        const grade = (((+numer.value) * 100) / (+denom.value));
        gSum += grade * +weight.value;
        wTotal += +weight.value;
    }
    if(wTotal < 1){
        document.getElementById("result").innerHTML = "Enter Valid Inputs."

    } else {
        document.getElementById("result").innerHTML = +(gSum / wTotal).toFixed(2) + "/100";
    }
}

function meanCalc(){
    const table = document.getElementsByTagName("tbody")[0];
    let i = 0, gSum = 0, skips = 0;
    for(i = 1; i <= table.rows.length; i++){
        const numer = document.getElementById("gradeNumer" + i);
        const denom = document.getElementById("gradeDenom" + i);

        if(+numer.value < 0 || +denom.value <=0){ skips++; continue;}

        const grade = (((+numer.value) * 100) / (+denom.value));
        gSum += grade
    }
    if(skips){
        document.getElementById("result").innerHTML = "Enter Valid Inputs."
    }else {
        document.getElementById("result").innerHTML = +(gSum / (i - 1)).toFixed(2) + "/100";
    }
}
