export default function reloadCardsImages() {
  document.getElementById('amex').setAttribute('class', 'card amex cdisabled');
  document.getElementById('jcb').setAttribute('class', 'card jcb cdisabled');
  document.getElementById('diners_club').setAttribute('class', 'card diners_club cdisabled');
  document.getElementById('visa').setAttribute('class', 'card visa cdisabled');
  document.getElementById('master').setAttribute('class', 'card master cdisabled');
  document.getElementById('discover').setAttribute('class', 'card discover cdisabled');
  document.getElementById('mir').setAttribute('class', 'card mir cdisabled');
}
