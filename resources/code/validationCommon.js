function validateFormCar() {
    const marka = document.getElementById('maker');
    const model = document.getElementById('model');
    const plates = model.getElementsByTagName('plates');

    const errorMaker = document.getElementById('errorMaker');
    const errorModel = document.getElementById('errorModel');
    const errorPlates = model.getElementsById('errorCarPlates');

    resetErrors([marka, model, plates], [errorMaker, errorModel, errorPlates]);

    let valid = true;

    if(!checkRequired(marka.value)){
        valid = false;
        marka.classList.add('error-input');
        errorMaker.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(marka.value, 2, 60)){
        valid = false;
        marka.classList.add('error-input');
        errorMaker.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    if(!checkRequired(model.value)){
        valid = false;
        model.classList.add('error-input');
        errorModel.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(model.value, 2, 60)){
        valid = false;
        model.classList.add('error-input');
        errorModel.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    checkPlates();

    if(!checkRequired(model.plates)){
        valid = false;
        model.classList.add('error-input');
        errorPlates.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(plates.value, 3, 7)){
        valid = false;
        plates.classList.add('error-input');
        errorModel.innerText = "Pole powinno zawierac od 3 do 7 znaków";
    }

    if(!valid){
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}

function resetErrors(inputs, errorTexts, errorInfo) {
    for(let i=0; i<inputs.length; i++){
        inputs[i].classList.remove("error-input");
    }
    for(let i=0; i<errorTexts.length; i++){
        errorTexts[i].innerText="";
    }
    errorInfo.innerText = "";
}

function checkRequired(value){
    if(!value){
        return false;
    }
    value = value.toString().trim();

    if(value ===""){
        return false;
    }
}

