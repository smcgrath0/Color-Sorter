
export default function randomize( array ) {
  let randNum = Math.random() * 100 + 100;
  for (let i = 0; i < randNum; i++) {
   array.sort(() => Math.random() - 0.5);
  }
  return array;
};
