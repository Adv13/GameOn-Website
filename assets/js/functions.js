//FUNCTIONS FOR VALIDATION FORM
function isEmpty(input) { //creation de la function isEmpty
    if (input === "") { // si input is empty
      return false //retourne false
    }
  }
  
  function minTwoChar(input) { //creation de la function minTwoChar
    if (input.length < 2) { // si input is <2
      return false //retourne false
      }
  }
  
  function checkFirstName(input) { //creation de la function checkFirstName
    if (minTwoChar(input) === false) { // si function minTwoChar appliquée à l'input retourne strictement false
      divPrenom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');//afficher contenu du msg d'erreur
      divPrenom.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
    } else { //sinon
      divPrenom.setAttribute('data-error-visible', 'false');//cacher msg d'erreur
      return true;//retourne true
    }
  }
  
  function checkLastName(input) { //creation de la function checkLastName
    if (minTwoChar(input) === false) {// si function minTwoChar appliquée à l'input retourne strictement false
      divNom.setAttribute('data-error', 'Merci d\'écrire 2 caractères minimum.');//afficher contenu du msg d'erreur
      divNom.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
    } else {//sinon
      divNom.setAttribute('data-error-visible', 'false');//cacher msg d'erreur
      return true;//retourne true
    }
  }
  
  function checkEmail(input) { //creation de la function checkEmail
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) { // si l'input est pas au bon format regex attendu pour emails
      divEmail.setAttribute('data-error', 'Merci d\'écrire une adresse email valide.');//afficher contenu du msg d'erreur
      divEmail.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
    } else {//sinon
      divEmail.setAttribute('data-error-visible', 'false');//cacher msg d'erreur
      return true;//retourne true
    }
  }
  
  function checkBirthdate(input) { //creation de la function checkBirthdate
  
    let today = new Date(); // initialisation variable today avec new date de la function Date
    let year = today.getFullYear(); // initialisation variable year qui récupère l'année complète dans la variable today
  
    if(isEmpty(input) === false) { //si la function isEmpty appliquée à l'input retour un strictement false
      divBirthdate.setAttribute('data-error', 'Vous devez entrer une date de naissance valide.');//afficher contenu du msg d'erreur
      divBirthdate.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
    } 
    else if (input.slice(0, 4) > year - 16) {//sinon si la methode slice (extraire une partie d'un string, ici les 4 premiers caractères en partant de 0) qui prend l'année est supérieure à l'année en cours - 16 ans alors :
      divBirthdate.setAttribute('data-error', 'Vous devez avoir plus de 16 ans.');//afficher contenu du msg d'erreur
      divBirthdate.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
    }
    else if (input.slice(0, 4) < year - 200) {//sinon si la methode slice (extraire une partie d'un string, ici les 4 premiers caractères en partant de 0) qui prend l'année est inférieure à l'année en cours - 16 ans alors :
      divBirthdate.setAttribute('data-error', 'Plus de 200 ans, sérieusement ?');//afficher contenu du msg d'erreur
      divBirthdate.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
    }
      else {//sinon
      divBirthdate.setAttribute('data-error-visible', 'false');//cacher msg d'erreur
      return true;//retourne true
    }
  }
  
  function checkQuantityTournament(input) {//creation de la function checkQuantityTournament
      if (isEmpty(input) === false) {//si la function isEmpty appliqée à l'input retourne strictement false
        divTournament.setAttribute('data-error', 'Merci de donner un nombre entre 1 et 99.');//afficher contenu du msg d'erreur
        divTournament.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
        } else {//sinon
            divTournament.setAttribute('data-error-visible', 'false');//cacher msg d'erreur
          return true;//retourne true
        }
  }
  
  function checkRadio() {//creation de la function checkRadio
        for (let i = 0; i < allRadio.length; i++) { //pour toutes les données contenues dans allRadio
          if(!allRadio[i].checked) { // si il n'y a pas une donnée de checked alors:
            divCheckboxLoc.setAttribute('data-error', 'Merci de choisir une ville.');//afficher contenu du msg d'erreur
            divCheckboxLoc.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
          } else {//sinon
            divCheckboxLoc.setAttribute('data-error-visible', 'false');//cacher msg d'erreur
          return true;//retourne true
        }
      }
  }
  
  function checkCheckbox() {//creation de la function checkCheckbox
      if(!generalCondition.checked) {//si generalCondition n'est pas cochée alors
        divCheckbox1.setAttribute('data-error', 'Merci de lire et d\'accepter les conditions d\'utilisation.');//afficher contenu du msg d'erreur
        divCheckbox1.setAttribute('data-error-visible', 'true');//afficher msg d'erreur
        } else {//sinon
          divCheckbox1.setAttribute('data-error-visible', 'false');//cacher msg d'erreur
          return true;//retourne true
        }
  }
  
  function formEnd() { // creation function formEnd
    btnSubmit.style.display = "none"; // enlever l'affichage du bouton submit sur le message de thanks
    
    //btnSubmit.addEventListener('click', closeModal);
    
    // delete content form 
    for(let i = 0; i < formData.length; i++) { // pour toutes les données contenues dans formData
      formData[i].classList.replace("formData", "formDelete"); //replacer formData par formDelete pour supprimer
    }
  
    // ajouter text thanks et ajuster height pour text
    form.classList.add("form");
  
    form.style.height = `${formHeight}`;
  
    modalEnd.style.padding = `${formHeight / 2.5}px 0`;
  
    modalEnd.style.display = "block";

  }