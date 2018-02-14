export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName () {
  const adjectives = [
    'aaa', 'bbb', 'ccc', 'ddd'
  ];
  const nouns = [
    'woman', 'man', 'people', 'feet'
  ]

  return`${rando(adjectives)}-${rando(nouns)}`
  
}