/*Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.

All cards in the list are represented as strings, so that sorted list of cards looks like this:

['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

Example:

>>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']*/

function sortCards(array){
  const letters = {
    'A': '1', 
    'T': '10',     
    'J': '11',     
    'Q': '12',     
    'K': '13'
  }

  const numbers = Object.fromEntries(Object.entries(letters).map(([k, v]) => [v, k]));

  return array.map(n => letters[n] || n)
        .sort((a, b) => parseInt(a) - parseInt(b))  
        .map(String)
        .map(n => numbers[n] || n)
        .map(n => parseInt(n) || n)
}
