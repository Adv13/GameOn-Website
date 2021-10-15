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

// Form validation

  // Retrieve nodes for validation

    // firstname
    const firstName = document.querySelector('#first');
    const divPrenom = document.querySelector('#divPrenom');
    // lastname
    const lastName = document.querySelector('#last');
    const divNom = document.querySelector('#divNom');
    // email
    const email = document.querySelector('#email');
    const divEmail = document.querySelector('#divEmail');
    // birthdate 
    const birthDate = document.querySelector('#birthdate');
    const divBirthdate = document.querySelector('#divBirthdate');
    // number of tournaments
    const tournamentNbre = document.querySelector('#quantity');
    const divTournament = document.querySelector('#divTournament');
    // cities
    const radios = document.getElementsByName('location');
    const divCheckboxLoc = document.querySelector('#divLocation');
    // terms of use
    const checkbox1 = document.querySelector("#checkbox1");
    const divCheckbox1 = document.querySelector('#divCheckbox1');
      
      
      
  // Manage form submission
      
  document.querySelector('form').addEventListener('submit', e =>{
  e.preventDefault();
      
    //add a counter to check each form input
    let counter = 0;
        
    // Validation and conditions
        
    // input values dont accept blanks
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
        
    //define email format
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    /*const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;*/
    //define tournamentNbre format
    const tournamentNbreFormat = /\d+/g;
      
    // AJOUTER MESSAGE DE VALIDATION OU D'ERREUR : ISSUE 3
    // check firstname
    if(firstNameValue.length <=1){
      divPrenom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
      divPrenom.setAttribute('data-error-visible', 'true');
    } else {
      divPrenom.setAttribute('data-error-visible', 'false');
      counter++;
    }
    // check lastname
    if(lastNameValue.length <=1){
      divNom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
      divNom.setAttribute('data-error-visible', 'true');
    } else {
      divNom.setAttribute('data-error-visible', 'false');
      counter++;
    }
    // check email
    if (mailFormat.test(email.value)){
      divEmail.setAttribute('data-error-visible', 'false');
      counter++;
    } else {
      divEmail.setAttribute('data-error', 'Merci d\'écrire une adresse email valide.');
      divEmail.setAttribute('data-error-visible', 'true');
    }
    // check date
    if (birthDate.value ===""){
      divBirthdate.setAttribute('data-error', 'Merci de donner une date valide.');
      divBirthdate.setAttribute('data-error-visible', 'true');
    } else {
      divBirthdate.setAttribute('data-error-visible', 'false');
      counter++;
    }
    // check number of tournaments
    if (isNaN(tournamentNbre.value)){
      divTournament.setAttribute('data-error-visible', 'false');
      counter++;
    } else {
      divTournament.setAttribute('data-error', 'Merci de donner un nombre entre 0 et 99.');
      divTournament.setAttribute('data-error-visible', 'true');
    }
    // check city 
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
    }
    // check usage conditions 
    if(!checkbox1.checked) {
      divCheckbox1.setAttribute('data-error', 'Merci de lire et d\'accepter les conditions d\'utilisation.');
      divCheckbox1.setAttribute('data-error-visible', 'true');
    } else {
      divCheckbox1.setAttribute('data-error-visible', 'false');
      counter++;
    }

    // AJOUTER UNE CONFIRMATION QUAND L'ENVOIE DU FORMULAIRE EST REUSSI : ISSUE 4

    const divBground = document.querySelector(".bground");
    const divSuccess = document.querySelector("#divSuccess");
    const closeSuccess = document.querySelector(".divCloseSuccess")
    // close modal form
    closeSuccess.addEventListener('click', successCrossClose);

    function successCrossClose() {
      divSuccess.style.display = "none";
    }

    const validate = () => {
      document.querySelector(".subscribe").reset();
    }

    if(counter===7) {
      divBground.style.display = "none";
      divSuccess.style.display= "block";
      validate()
    }
       
  })