import choosingCard from '../../js/choosingCard';
import luhnAlgorithm from '../../js/luhnAlgorithm';


test('test AmericanExpress -> true', () => {
  const cardNum = '371449635398431';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['amex', true];
  expect(recieved).toEqual(expected);
});

test('test JSB -> true', () => {
  const cardNum = '3530111333300000';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['jcb', true];
  expect(recieved).toEqual(expected);
});

test('test DinnersClub -> true', () => {
  const cardNum = '30569309025904';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['diners_club', true];
  expect(recieved).toEqual(expected);
});

test('test Discover -> true', () => {
  const cardNum = '6011111111111117';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['discover', true];
  expect(recieved).toEqual(expected);
});

test('test MasterCard -> true', () => {
  const cardNum = '5555555555554444';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['master', true];
  expect(recieved).toEqual(expected);
});

test('test Visa -> true', () => {
  const cardNum = '4111111111111111';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['visa', true];
  expect(recieved).toEqual(expected);
});

test('test MIR -> true', () => {
  const cardNum = '2202200223948454';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['mir', true];
  expect(recieved).toEqual(expected);
});

test('test card -> false', () => {
  const cardNum = '2200000223948454';
  const expected = [choosingCard(cardNum), luhnAlgorithm(cardNum)];
  const recieved = ['mir', false];
  expect(recieved).toEqual(expected);
});
