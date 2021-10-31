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
  document.querySelector(".subscribe").reset();
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
    const firstCheck = document.querySelector("#first");
    const divPrenom = document.querySelector('#divPrenom');
    // lastname
    const lastCheck = document.querySelector("#last");
    const divNom = document.querySelector('#divNom');
    // email
    const emailCheck = document.querySelector("#email");
    const email = document.querySelector('#email');
    const divEmail = document.querySelector('#divEmail');
    // birthdate 
    const birthdateCheck = document.querySelector("#birthdate");
    const birthDate = document.querySelector('#birthdate');
    const divBirthdate = document.querySelector('#divBirthdate');
    // number of tournaments
    const tournamentNbreCheck = document.querySelector("#quantity");
    const tournamentNbre = document.querySelector('#quantity');
    const divTournament = document.querySelector('#divTournament');
    // cities
    const locationCheck = document.querySelector('.checkbox-input-location');
    const radios = document.getElementsByName('location');
    const divCheckboxLoc = document.querySelector('#divLocation');
    const checkbox = document.querySelectorAll('.checkbox-input[type="radio"]');
    const optionsCity = document.querySelector(".optionsCity");
    // terms of use
    const checkbox1Check = document.querySelector("#checkbox1");
    const checkbox1 = document.querySelector("#checkbox1");
    const divCheckbox1 = document.querySelector('#divCheckbox1');
    //form
    const form = document.querySelector("form");
    const body = document.getElementById("body");
    const formulaire = document.querySelector(".modal-bground");
    const textControl = document.querySelectorAll(".text-control");

  //define email format
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //define tournamentNbre format
  const tournamentNbreFormat = /^\d+$/; 
  // limit of 2 caracters
  const regexMin = /^.{2,35}$/;

  let checkedCheckbox = false;
  
  //A la saisie des champs, je vérifie si c'est valide ou pas
  // firstName function
  firstCheck.addEventListener("change", validateFirstName);
  function validateFirstName(){
      if(document.querySelector("#first").value.trim().length <2){
          divPrenom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
          divPrenom.setAttribute('data-error-visible', 'true');    
      } else {
          divPrenom.setAttribute('data-error-visible', 'false');
      }
  }

  // lastName function
  lastCheck.addEventListener("change", function validateLastName(){
      if(document.querySelector("#last").value.trim().length <2){
      divNom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
      divNom.setAttribute('data-error-visible', 'true');
    } else {
      divNom.setAttribute('data-error-visible', 'false');
    }
  });

  // email function
  emailCheck.addEventListener("change", function validateEmail(){
      if (emailRegex.test(email.value)){
          divEmail.setAttribute('data-error-visible', 'false');
        } else {
          divEmail.setAttribute('data-error', 'Merci d\'écrire une adresse email valide.');
          divEmail.setAttribute('data-error-visible', 'true');
        } 
  });
    
  // birthdate function
  birthdateCheck.addEventListener("change", function validateBirthdate(){
    // pour la validation de la date selon si mineur ou majeur
    const teenager = new Date(2003, 1, 01);
    const dateNow = new Date(Date.now());
    let checkBirthdate = new Date(birthDate.value);
      if (birthDate ===""){
          divBirthdate.setAttribute('data-error', 'Merci de donner une date valide.');
          divBirthdate.setAttribute('data-error-visible', 'true');
      } else if(checkBirthdate > teenager && checkBirthdate <= dateNow){
          divBirthdate.setAttribute('data-error', 'Il faut avoir plus de 18 ans pour participer.');
          divBirthdate.setAttribute('data-error-visible', 'true');
      } else {
          divBirthdate.setAttribute('data-error-visible', 'false');
      }
    });

  // function number of tournaments
  tournamentNbreCheck.addEventListener("change", function validateTournamentNbre(){
    if (tournamentNbreFormat.test(tournamentNbre.value)){
      divTournament.setAttribute('data-error-visible', 'false');
    } else {
      divTournament.setAttribute('data-error', 'Merci de donner un nombre entre 1 et 99.');
      divTournament.setAttribute('data-error-visible', 'true');
    }
  });

  // function location  
  checkbox.forEach(element =>{
    element.addEventListener("change", function(){
      divCheckboxLoc.setAttribute('data-error-visible', 'false');
     })
  });
    
  // function checkbox1 usage conditions
  checkbox1Check.addEventListener("change", function validateCheckbox1(){
    if(!checkbox1.checked) {
      divCheckbox1.setAttribute('data-error', 'Merci de lire et d\'accepter les conditions d\'utilisation.');
      divCheckbox1.setAttribute('data-error-visible', 'true');
    } else {
      divCheckbox1.setAttribute('data-error-visible', 'false');
    }
  });


  function validate(event) {
    //vérifie si l'une des checkbox est checké ou pas
    checkbox.forEach(element => {
        if(element.checked){
            checkedCheckbox = true
        }
  })

    //si toutes les conditions sont remplis je valide
    if( regexMin.test(first.value) &&
        regexMin.test(last.value) &&
        regexEmail.test(email.value) &&
        birthdate.value.substr(0, 4) > 1900 &&
        birthdate.value !== "" &&
        quantity.value !== "" &&
        isNaN(quantity.value) == false &&
        checkedCheckbox == true &&
        checkbox1.checked == true
        ){
            event.preventDefault()
            //suppression du formulaire
            formulaire.style.display="none"

            setTimeout(()=> {
  // AJOUTER UNE CONFIRMATION QUAND L'ENVOIE DU FORMULAIRE EST REUSSI : ISSUE 4
              const divBground = document.querySelector(".bground");
              const divSuccess = document.querySelector("#divSuccess");
              const closeSuccess = document.querySelector(".divCloseSuccess")
        
              // close modal form
              closeSuccess.addEventListener('click', successCrossClose);

              // close success modal with cross
              function successCrossClose() {
              divSuccess.style.display = "none";
              } 

              // reset form 
              //document.querySelector(".subscribe").reset();
              divBground.style.display = "none";
              divSuccess.style.display= "block";
              }, 500)

              //reset le formulaire
              form.reset()
              textControl.forEach(element => {
                element.classList.remove("success")
              });

            //Je remet les checkbox a false
            checkedCheckbox = false
    } else {
        //si tout n'est pas rempli je mets les messages d'erreurs suivants :
        event.preventDefault()
        if(first.value == "") {
          divPrenom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
          divPrenom.setAttribute('data-error-visible', 'true');  
        }
        if(last.value == "") {
          divNom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
          divNom.setAttribute('data-error-visible', 'true');
        }
        if(email.value == "") {
          divEmail.setAttribute('data-error', 'Merci d\'écrire une adresse email valide.');
          divEmail.setAttribute('data-error-visible', 'true');
        }
        if(birthdate.value == "") {
          divBirthdate.setAttribute('data-error', 'Merci de donner une date valide.');
          divBirthdate.setAttribute('data-error-visible', 'true');
        } 
        if(quantity.value == "") {
          divTournament.setAttribute('data-error', 'Merci de donner un nombre entre 1 et 99.');
          divTournament.setAttribute('data-error-visible', 'true');
        }
        if(isNaN(quantity.value) == true) {
          divTournament.setAttribute('data-error', "Vous devez saisir un nombre.");
          divTournament.setAttribute('data-error-visible', 'true');
        }
        if(checkedCheckbox == false) {
          divCheckboxLoc.setAttribute('data-error', 'Merci de choisir une ville.');
          divCheckboxLoc.setAttribute('data-error-visible', 'true');
        }
        if(checkbox1.checked == false) {
          divCheckbox1.setAttribute('data-error', 'Merci de lire et d\'accepter les conditions d\'utilisation.');
          divCheckbox1.setAttribute('data-error-visible', 'true');
        }
    }
}