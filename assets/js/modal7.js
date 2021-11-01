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
  const modalbg = document.querySelector(".bground");
  const btnModalClose = document.querySelector(".close");
  const modalBtn = document.querySelectorAll(".modal-btn");
  
  //DOM Elements for form 
  const form = document.querySelector("form");
  const firstName = document.querySelector("#first");
  const lastName = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector('#birthdate');
  const quantityTournament = document.querySelector("#quantity");
  const allRadio = document.querySelectorAll('input[name="location"]');
  const generalCondition = document.querySelector("#checkbox1");
   
  // DOM Div Elements use for form error
  const divPrenom = document.querySelector('#divPrenom');
  const divNom = document.querySelector('#divNom');
  const divEmail = document.querySelector('#divEmail');
  const divBirthdate = document.querySelector('#divBirthdate')
  const divTournament = document.querySelector('#divTournament');
  const divCheckboxLoc = document.querySelector('#divLocation');
  const divCheckbox1 = document.querySelector('#divCheckbox1');

  // DOM Elements use for form validate
  const btnSubmit = document.querySelector(".btn-submit");
  const formData = document.querySelectorAll(".formData");
  const modalEnd = document.querySelector(".modal-end");

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
  firstName.addEventListener("blur", (e) => {
    checkFirstName(e.target.value)
  });  
  
  // verify lastName
  lastName.addEventListener("blur", (e) => {
    checkLastName(e.target.value)
  });
  
  // verify email
  email.addEventListener("blur", (e) => {
   checkEmail(e.target.value)
  });
  
  //verify birthdate
  birthdate.addEventListener("blur", (e) => {
    console.log(e)
    checkBirthdate(e.target.value)
  })
  
  //block operator in input quantityTournament
  quantityTournament.addEventListener("keydown", function(e) {
    const invalidChars = [
    "-",
    "+",
    "e",
  ];
  
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
  
  // verify quantity tournament 
  quantityTournament.addEventListener("blur", (e) => {
    checkQuantityTournament(e.target.value)
  });

  ////////////////////////////////////////////////////////////////////////////////
  
  // no page reloading
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
  
  // Validate form
  function validate() {
  
    if(checkFirstName(firstName.value) &&
     checkLastName(lastName.value) &&
      checkEmail(email.value) &&
       checkBirthdate(birthdate.value) &&
        checkQuantityTournament(quantityTournament.value) &&
         checkRadio() &&
          checkCheckbox() === true ) {
            formEnd()
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