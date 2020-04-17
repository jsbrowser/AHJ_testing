import luhnAlgorithm from './luhnAlgorithm';
import choosingCard from './choosingCard';
import reloadCardsImages from './reloadCardsImages';

function readValue() {
  const val = document.getElementById('card_number');
  const text = document.getElementById('textField');
  const type = choosingCard(val.value);
  const classVal = document.getElementById(type);

  const output = luhnAlgorithm(val.value);
  let bool = false;
  reloadCardsImages();
  if (output === true && classVal !== null) {
    text.innerHTML = 'Номер верный!';
    text.style.color = 'green';
    val.classList.add('valid');
    if (val.classList.contains('unvalid')) {
      val.classList.remove('unvalid');
    }
    bool = true;


    classVal.setAttribute('class', `card ${type}`);
  } else {
    text.innerHTML = 'Номер неверный!';
    text.style.color = 'red';
    val.classList.add('unvalid');
    if (val.classList.contains('valid')) {
      val.classList.remove('valid');
    }
    bool = false;
  }
  return bool;
}

document.getElementById('submitform').onclick = readValue;
