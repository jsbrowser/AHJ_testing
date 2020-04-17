export default function choosingCard(value) {
  const arr = Array.from(value);
  let cardType = '';
  if (arr[0] === '3') {
    if ((arr[1] === '4' || arr[1] === '7') && arr.length === 15) {
      cardType = 'amex'; // American Express
    } else if ((arr[1] === '1' || arr[1] === '5') && arr.length === 16) {
      cardType = 'jcb'; // jcb
    } else if ((arr[1] === '0' || arr[1] === '6' || arr[1] === '8') && arr.length === 14) {
      cardType = 'diners_club'; // Dinersclub
    }
  } else if (arr[0] === '2' && arr.length === 16) {
    cardType = 'mir'; // МИР
  } else if (arr[0] === '4' && arr.length === 16) {
    cardType = 'visa'; // Visa
  } else if (arr[0] === '5' && arr.length === 16
        && (arr[1] === '1' || arr[1] === '2' || arr[1] === '3' || arr[1] === '4' || arr[1] === '5')) {
    cardType = 'master'; // MasterCard
  } else if (arr[0] === '6' && arr[1] === '0' && arr.length === 16) {
    cardType = 'discover'; // Discover
  }

  return cardType;
}
