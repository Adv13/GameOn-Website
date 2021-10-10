function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  //FERMER LA MODALE : ISSUE 1
  // close modal form
  function closeModal(){
    modalbg.style.display = "none";
  }
  
  // close with 'Escape' key
  function escapeModal(e) {
    if (e.key === 'Escape' && modalbg.style.display === "block") {
      closeModal();
    }
  }
  document.addEventListener('keydown', escapeModal);
  
  //close with click button
  document.querySelectorAll('.close').forEach(elem => {
    elem.onclick = closeModal;
  });
  
// IMPLEMENTER LES ENTREES DU FORMULAIRE SOUS CONDITIONS : ISSUE 2
// (1) Le champ prénom a un minimum de 2 caractères / n'est pas vide.
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// (3) L'adresse électronique est valide.
// (4) Pour le nombre de concours, une valeur numérique est saisie.

//form validation

// functions in order to check format and if values is empty

// show a msg with a type of the input
function showMessage(input, message, type){
    //get the <small> element and set the msg
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;

    //update the class for the input
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message){
    return showMessage(input, message, false);
}

function showSuccess(input){
    return showMessage(input, "", true);
}

function hasValue(input, message){
    if(input.value.trim() === "" && input.value <2){
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg){
    //check if value not empty
    if(!hasValue(input, requiredMsg)){
        return false;
    }
    //validate email format
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = input.value.trim();
    if(!emailRegex.test(email)){
        return showError(input, invalidMsg);
        }
        return true;
    
}

function validateBirthdate(input, requiredMsg){
    if(input.value.trim() === ""){
        return showError(input, requiredMsg);
    }
    return showSuccess(input);
}

function validateTournamentNbre(input,requiredMsg, invalidMsg){
    //check if not empty
    if(!hasValue(input, requiredMsg)){
        return false;
    }
    //validate tournament format
    const tournamentNbreFormat = /\d+/g;
    const tournamentNbre = input.value.trim();
    if(!tournamentNbreFormat.test(tournamentNbre)){
        return showError(input, invalidMsg);
    }
    return true;
}

function validateLocation(input, requiredMsg, invalidMsg){
    //check if not empty
    if(!hasValue(input, requiredMsg)){
        return false;
    }
}

/* location V2 
    let radioValid = false;
    for (let i = 0; i<radios.length; i++) {
          
      if(radios[i].checked) {
        radioValid = true;
        divCheckboxLoc.setAttribute('data-error-visible', 'false');
        counter++;
        break;
      } 
    } if(!radioValid) {
      divCheckboxLoc.setAttribute('data-error', 'Merci de choisir une ville.');
      divCheckboxLoc.setAttribute('data-error-visible', 'true');
    }*/

function validateCheckbox1(input,requiredMsg,invalidMsg){
    //check if not checked
    if(!checkbox1.checked(input,requiredMsg)){
        return false;
    }
}

const FIRSTNAME_REQUIRED = "Merci d\'écrire votre prénom.";
const LASTNAME_REQUIRED = "Merci d\'écrire votre nom.";
const EMAIL_REQUIRED = "Merci d\'écrire une adresse email correcte.";
const BIRTHDATE_REQUIRED = "Merci de donner une date.";
const TOURNAMEMENTNBRE_REQUIRED = "Merci de donner un nombre entre 0 et 99.";
const LOCATION_REQUIRED = "Merci de donner une ville.";
const CHECKBOX1_REQUIRED = "Merci de lire et d'\'accepter les conditions d\'utilisation.";

//to access the elements of the form, you get the form element first

form.addEventListener("submit", function(event){
    //stop form submission
    event.preventDefault();

    //validate the form
    let firstNameValid = hasValue(form.elements["first"], FIRSTNAME_REQUIRED);
    let lastNameValid = hasValue(form.elements["last"], LASTNAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED);
    let birthDateValid = validateBirthdate(form.elements["birthdate"], BIRTHDATE_REQUIRED);
    let tournamentNbreValid = validateTournamentNbre(form.elements["quantity"], TOURNAMEMENTNBRE_REQUIRED);
    let locationValid = validateLocation(form.elements["location"], LOCATION_REQUIRED);
    let checkbox1Valid = validateCheckbox1(form.elements["checkbox1"], CHECKBOX1_REQUIRED);

    // if valid, submit the form
    if (firstNameValid && lastNameValid && emailValid && birthDateValid && tournamentNbreValid && locationValid && checkbox1Valid){
        form.submit();
    }

})