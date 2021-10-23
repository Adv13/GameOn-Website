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

    // button submit selection
    let submitControl = document.querySelector(".btn-submit");
    submitControl.disabled = true;

    //add a counter to check each form input
    let counter = 0;

    // input values dont accept blanks
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
        
    //define email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //de'fine tournamentNbre format
    const tournamentNbreFormat = /\d+/g; 
    
  

    
    // firstName function
    firstName.addEventListener("change", function validateFirstName(){
        if(firstNameValue.value <2){
            divPrenom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
            divPrenom.setAttribute('data-error-visible', 'true');
            button.disabled = true;
        } else {
            divPrenom.setAttribute('data-error-visible', 'false');
            button.disabled = false;
            counter++;
        }
    });
/*
    // lastName function
    lastName.addEventListener("change", function validateLastName(){
        if(lastNameValue.value <2){
        divNom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
        divNom.setAttribute('data-error-visible', 'true');
        button.disabled = true;
      } else {
        divNom.setAttribute('data-error-visible', 'false');
        button.disabled = false;
        counter++;
      }
    });

    // email function
    email.addEventListener("change", function validateEmail(){
        if (emailRegex.test(email.value)){
            divEmail.setAttribute('data-error-visible', 'false');
            button.disabled = false;
            counter++;
          } else {
            divEmail.setAttribute('data-error', 'Merci d\'écrire une adresse email valide.');
            divEmail.setAttribute('data-error-visible', 'true');
            button.disabled = true;
          } 
    });
    
    // birthdate function
    birthDate.addEventListener("change", function validateBirthdate(){
        if (birthDate ===""){
            divBirthdate.setAttribute('data-error', 'Merci de donner une date valide.');
            divBirthdate.setAttribute('data-error-visible', 'true');
            button.disabled = true;
          } else {
            divBirthdate.setAttribute('data-error-visible', 'false');
            button.disabled = false;
            counter++;
          }
    });

    // function number of tournaments
    tournamentNbre.addEventListener("change", function validateTournamentNbre(){
      if (tournamentNbreFormat.test(tournamentNbre.value)){
        divTournament.setAttribute('data-error-visible', 'false');
        button.disabled = false;
        counter++;
      } else {
        divTournament.setAttribute('data-error', 'Merci de donner un nombre entre 0 et 99.');
        divTournament.setAttribute('data-error-visible', 'true');
        button.disabled = true;
      }
    });
    
    // function location
    radios.addEventListener("change", function validateLocation(){
        let radioValid = false;
        for (let i = 0; i<radios.length; i++) {
              
          if(radios[i].checked) {
            radioValid = true;
            divCheckboxLoc.setAttribute('data-error-visible', 'false');
            button.disabled = false;
            counter++;
            break;
          } 
        } if(!radioValid) {
          divCheckboxLoc.setAttribute('data-error', 'Merci de choisir une ville.');
          divCheckboxLoc.setAttribute('data-error-visible', 'true');
          button.disabled = true;
        }
    });
    
    // function checkbox1 usage conditions
    checkbox1.addEventListener("change", function validateCheckbox1(){
        if(!checkbox1.checked) {
            divCheckbox1.setAttribute('data-error', 'Merci de lire et d\'accepter les conditions d\'utilisation.');
            divCheckbox1.setAttribute('data-error-visible', 'true');
            button.disabled = true;
        } else {
            divCheckbox1.setAttribute('data-error-visible', 'false');
            button.disabled = false;
            counter++;
        }
    });

    /*document.querySelector('form').addEventListener('submit', e =>{
        e.preventDefault();*/
   
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
        const validate = () => {
        document.querySelector(".subscribe").reset();
        }

        // if all mandatory inputs are filled launch validate
        if(button.disabled === false) {
          divBground.style.display = "none";
          divSuccess.style.display= "block";
          validate();
        }


   // })