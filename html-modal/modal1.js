
var modal = document.getElementById('modalView');

var modalBtn = document.getElementById('modalBtn');

var cancel = document.getElementsByClassName('cancelButton')[0]

var continueBtn = document.getElementsByClassName('continueButton')[0]

modalBtn.addEventListener('click', openModal);

cancel.addEventListener('click', closeModal);

continueBtn.addEventListener('click', closeModal);


function openModal() {
   modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
 }

 function closeModal() {
    modal.style.display = 'none';
 }
