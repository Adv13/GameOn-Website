//FUNCTIONS FOR VALIDATION FORM
function isEmpty(input) {
    if (input === "") {
      return false
    }
  }
  
  function minTwoChar(input) {
    if (input.length < 2) {
      return false
      }
  }
  
  function checkFirstName(input) {
    if (minTwoChar(input) === false) {
      divPrenom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
      divPrenom.setAttribute('data-error-visible', 'true');
    } else {
      divPrenom.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkLastName(input) {
    if (minTwoChar(input) === false) {
      divNom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');
      divNom.setAttribute('data-error-visible', 'true');
    } else {
      divNom.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkEmail(input) {
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
      divEmail.setAttribute('data-error', 'Merci d\'écrire une adresse email valide.');
      divEmail.setAttribute('data-error-visible', 'true');
    } else {
      divEmail.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkBirthdate(input) {
  
    let today = new Date();
    let year = today.getFullYear();
  
    if(isEmpty(input) === false) {
      divBirthdate.setAttribute('data-error', 'Vous devez entrer une date de naissance valide.');
      divBirthdate.setAttribute('data-error-visible', 'true');
    } 
    else if (input.slice(0, 4) > year - 16) {
      divBirthdate.setAttribute('data-error', 'Vous devez avoir plus de 16 ans.');
      divBirthdate.setAttribute('data-error-visible', 'true');
    }
    else if (input.slice(0, 4) < year - 200) {
      divBirthdate.setAttribute('data-error', 'Plus de 200 ans, sérieusement ?');
      divBirthdate.setAttribute('data-error-visible', 'true');
    }
      else {
      divBirthdate.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkQuantityTournament(input) {
      if (isEmpty(input) === false) {
        divTournament.setAttribute('data-error', 'Merci de donner un nombre entre 1 et 99.');
        divTournament.setAttribute('data-error-visible', 'true');
        } else {
            divTournament.setAttribute('data-error-visible', 'false');
          return true;
        }
  }
  
  function checkRadio() {
        for (let i = 0; i < allRadio.length; i++) {
          if(!allRadio[i].checked) {
            divCheckboxLoc.setAttribute('data-error', 'Merci de choisir une ville.');
            divCheckboxLoc.setAttribute('data-error-visible', 'true');
          } else {
            divCheckboxLoc.setAttribute('data-error-visible', 'false');
          return true;
        }
      }
  }
  
  function checkCheckbox() {
      if(!generalCondition.checked) {
        divCheckbox1.setAttribute('data-error', 'Merci de lire et d\'accepter les conditions d\'utilisation.');
        divCheckbox1.setAttribute('data-error-visible', 'true');
        } else {
          divCheckbox1.setAttribute('data-error-visible', 'false');
          return true;
        }
  }
  
  function formEnd() {
    btnSubmit.value = "Fermer";
  
    btnSubmit.addEventListener('click', closeModal);
    
    // delete content form 
    for(let i = 0; i < formData.length; i++) {
      formData[i].classList.replace("formData", "formDelete");
    }
  
    // add text thanks and adjust height for text
    form.classList.add("form");
  
    form.style.height = `${formHeight}`;
  
    modalEnd.style.padding = `${formHeight / 2.5}px 0`;
  
    modalEnd.style.display = "block";
  }