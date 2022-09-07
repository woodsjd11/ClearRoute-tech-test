export default function findIndex(numbers) {
  const length = numbers.length;
  let index = 1;
  let leftSum = 0;
  let rightSum = 0;

  while (index < length) {
    //reset sums for each new index
    leftSum = 0;
    rightSum = 0;
    //left sum logic
    for (let i = 0; i < index; i++) {
      leftSum += numbers[i];
    }
    //right sum logic
    for (let i = length - 1; i > index; i--) {
      rightSum += numbers[i];
    }
    //exit loop
    if (leftSum === rightSum) {
      break;
    }
    // if index not found then continue
    index++;
  }
  return index;
}
