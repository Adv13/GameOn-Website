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
    const radios = document.querySelector('.checkbox-input-location');
    const divCheckboxLoc = document.querySelector('#divLocation');
    // terms of use
    const checkbox1 = document.querySelector("#checkbox1");
    const divCheckbox1 = document.querySelector('#divCheckbox1');

    // firstCheck selection
    let firstCheck = document.querySelector("#first");

    // lastCheck selection
    let lastCheck = document.querySelector("#last");

    // email selection
    let emailCheck = document.querySelector("#email");

    // birthdate selection
    let birthdateCheck = document.querySelector("#birthdate");

    //tournamentNbre selection
    let tournamentNbreCheck = document.querySelector("#quantity");

    //location selection
    let locationCheck = document.querySelector('.checkbox-input-location');

    //usage checkbox1 selection
    let checkbox1Check = document.querySelector("#checkbox1");

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
    //define tournamentNbre format
    const tournamentNbreFormat = /^\d+$/; 

    // firstName function
    firstCheck.addEventListener("change", validateFirstName);
    function validateFirstName(){
        if(document.querySelector("#first").value.trim().length <2){
            divPrenom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
            divPrenom.setAttribute('data-error-visible', 'true');
            submitControl.disabled = true;
        } else {
            divPrenom.setAttribute('data-error-visible', 'false');
            counter++;
        }
    }

    // lastName function
    lastCheck.addEventListener("change", function validateLastName(){
        if(document.querySelector("#last").value.trim().length <2){
        divNom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
        divNom.setAttribute('data-error-visible', 'true');
        submitControl.disabled = true;
      } else {
        divNom.setAttribute('data-error-visible', 'false');
        counter++;
      }
    });

    // email function
    emailCheck.addEventListener("change", function validateEmail(){
        if (emailRegex.test(email.value)){
            divEmail.setAttribute('data-error-visible', 'false');
            counter++;
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
            counter++;
        }
    });

    // function number of tournaments
    tournamentNbreCheck.addEventListener("change", function validateTournamentNbre(){
      if (tournamentNbreFormat.test(tournamentNbre.value)){
        divTournament.setAttribute('data-error-visible', 'false');
        counter++;
      } else {
        divTournament.setAttribute('data-error', 'Merci de donner un nombre entre 0 et 99.');
        divTournament.setAttribute('data-error-visible', 'true');
      }
    });
    
    // function location
        let radioValid = true;
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
 
    
    // function checkbox1 usage conditions
    checkbox1Check.addEventListener("change", function validateCheckbox1(){
        if(!checkbox1.checked) {
            divCheckbox1.setAttribute('data-error', 'Merci de lire et d\'accepter les conditions d\'utilisation.');
            divCheckbox1.setAttribute('data-error-visible', 'true');
        } else {
            divCheckbox1.setAttribute('data-error-visible', 'false');
            counter++;
        }
    });

    if(counter===7) {
      submitControl.disabled = false;
    }

    document.querySelector('form').addEventListener('submit', e =>{ e.preventDefault();
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

  })