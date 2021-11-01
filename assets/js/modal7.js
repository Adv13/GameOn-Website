function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  ////////////////////////////////////////////////////////////////////////////////////////

  // DOM Elements
  const modalbg = document.querySelector(".bground"); // sélectionne toute ce qui concerne la class bground dans une variable const
  const btnModalClose = document.querySelector(".close"); // sélectionne toute ce qui concerne la class close dans une variable const
  const modalBtn = document.querySelectorAll(".modal-btn"); // sélectionne toute ce qui concerne la class modal-btn dans une variable const
  
  //DOM Elements for form 
  const form = document.querySelector("form");// sélectionne toute ce qui concerne le form dans une variable const
  const firstName = document.querySelector("#first");//sélectionne l'ID first dans une variable const
  const lastName = document.querySelector("#last");//sélectionne l'ID last dans une variable const
  const email = document.querySelector("#email");//sélectionne l'ID email dans une variable const
  const birthdate = document.querySelector('#birthdate');//sélectionne l'ID birthdate dans une variable const
  const quantityTournament = document.querySelector("#quantity");//sélectionne l'ID quantity dans une variable const
  const allRadio = document.querySelectorAll('input[name="location"]');//sélectionne les input avec le name location dans une variable const
  const generalCondition = document.querySelector("#checkbox1");//sélectionne l'ID checkbox1 dans une variable const
   
  // DOM Div Elements use for form error
  const divPrenom = document.querySelector('#divPrenom');//sélectionne l'ID divPrenom dans une variable const
  const divNom = document.querySelector('#divNom');//sélectionne l'ID divNom dans une variable const
  const divEmail = document.querySelector('#divEmail');//sélectionne l'ID divEmail dans une variable const
  const divBirthdate = document.querySelector('#divBirthdate')//sélectionne l'ID divBirthdate dans une variable const
  const divTournament = document.querySelector('#divTournament');//sélectionne l'ID divTournament dans une variable const
  const divCheckboxLoc = document.querySelector('#divLocation');//sélectionne l'ID divLocation dans une variable const
  const divCheckbox1 = document.querySelector('#divCheckbox1');//sélectionne l'ID divCheckbox1 dans une variable const

  // DOM Elements use for form validate
  const btnSubmit = document.querySelector(".btn-submit");// sélectionne toute ce qui concerne la class btn-submit dans une variable const
  const formData = document.querySelectorAll(".formData");// sélectionne toute ce qui concerne la class formData dans une variable const
  const modalEnd = document.querySelector(".modal-end");// sélectionne toute ce qui concerne la class modal-end dans une variable const

  ////////////////////////////////////////////////////////////////////////////

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  //close modal event
  btnModalClose.addEventListener('click', closeModal);
  let formHeight = '';
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block"; // affiche le block contenant le form
    formHeight = form.offsetHeight; // adapte la taille du block au form
  }
  
  // close modal form
  function closeModal(){
    modalbg.style.display = "none";
    document.querySelector(".subscribe").reset(); // reset les données écrites dans le form à la fermeture du block
  }
  
  // close with 'Escape' key
  function escapeModal(e) {
    if (e.key === 'Escape' && modalbg.style.display === "block") { // si key pressée est la touche espace, fermer le block
      closeModal();
    }
  }
  document.addEventListener('keydown', escapeModal); // si key pressée, lancée la function espaceModal
  
  //close with click button
  document.querySelectorAll('.close').forEach(elem => { // si clic sur element contenant class ".close", fermer le block
    elem.onclick = closeModal;
  });

  //////////////////////////////////////////////////////////////////////////////
  
  // verify firstName
  firstName.addEventListener("blur", (e) => { //quand firstName perd son focus, lancer la function checkFirstName sur la value
    checkFirstName(e.target.value) //applique la fucntion à la value de la cible lorsque l'event "lost focus" se produit
  });  
  
  // verify lastName
  lastName.addEventListener("blur", (e) => { //quand lastName perd son focus, lancer la function checkLastName sur la value
    checkLastName(e.target.value) //applique la fucntion à la value de la cible lorsque l'event "lost focus" se produit
  });
  
  // verify email
  email.addEventListener("blur", (e) => { //quand email perd son focus, lancer la function checkEmail sur la value
   checkEmail(e.target.value) //applique la fucntion à la value de la cible lorsque l'event "lost focus" se produit
  });
  
  //verify birthdate
  birthdate.addEventListener("blur", (e) => { //quand birthdate perd son focus, lancer la function checkBirthdate sur la value
    console.log(e) // affiche event
    checkBirthdate(e.target.value) //applique la fucntion à la value de la cible lorsque l'event "lost focus" se produit
  })
  
  //block operator in input quantityTournament
  quantityTournament.addEventListener("keydown", function(e) { //quand touche pressée, déclanche la function qui crée une const avec les caractères invalides
    const invalidChars = [
    "-",
    "+",
    "e",
  ];
  
    if (invalidChars.includes(e.key)) { // si le champ comporte des caractères invalides, stoper envoi form et lancer msg d'erreur
      e.preventDefault(); // contient liste des messages d'erreur
    }
  });
  
  // verify quantity tournament 
  quantityTournament.addEventListener("blur", (e) => {//quand quantityTournament perd son focus, lancer la function checkQuantityTournament sur la value
    checkQuantityTournament(e.target.value) //applique la fucntion à la value de la cible lorsque l'event "lost focus" se produit
  });

  ////////////////////////////////////////////////////////////////////////////////
  
  // no page reloading
  form.addEventListener('submit', (e) => { // quand le form est submit, lancer la fucntino preventDefault à l'event
    e.preventDefault();
  })
  
  // Validate form
  function validate() { // function appelée "onsubmit" pour valider les données encore une fois à l'envoi du form
  
    if(checkFirstName(firstName.value) && //applique la function checkFirstName à la value dans l'input/const first
     checkLastName(lastName.value) && //applique la function checkLastName à la value dans l'input/const last
      checkEmail(email.value) && //applique la function checkEmail à la value dans l'input/const email
       checkBirthdate(birthdate.value) && // applique la function checkBirthdate à la value dans l'input/const birthdate
        checkQuantityTournament(quantityTournament.value) &&// applique la function checkQuantityTournament à la value dans l'input/const quantityTournament
         checkRadio() && // lance la function checkRadio 
          checkCheckbox() === true ) { //vérifie que le résultat de la functino checkCheckbox est strictement égal à true
            formEnd() //lance la function formEnd si toutes les contraintes précédentes sont respected
          }
    //  to show all the errors at the same time
    // else {
    //   checkFirstName(firstName.value) 
    //   checkLastName(lastName.value) 
    //   checkEmail(email.value)  
    //   checkBirthdate(birthdate.value)  
    //   checkQuantityTournament(quantityTournament.value)  
    //   checkRadio()  
    //   checkCheckbox()
    // }
  }