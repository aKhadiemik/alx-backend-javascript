export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

/*start conditional*/
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
/*end cnoditional*/

  return [task, task2];
}
