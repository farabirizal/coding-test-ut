const digitToLetter = {
    0: 'A',
    1: 'B',
    2: 'E',
    3: 'F',
    4: 'I',
    5: 'J',
    6: 'O',
    7: 'P',
    8: 'U',
    9: 'V'
  };
  
  function numberToSequence(total) {
    const sequence = [];
    let sum = 0;
    const pattern = [0, 1, 2, 3, 4, 5];
    let i = 0;
  
    while (sum < total) {
      const next = pattern[i % pattern.length];
      if (sum + next > total) {
        i++;
        continue;
      }
      sequence.push(next);
      sum += next;
      i++;
    }
  
    return sequence;
  }
  
  function step3_convertNumberToLetters(step2Result) {
    const total = Math.abs(step2Result);
    const numberSeq = numberToSequence(total);
    const letters = numberSeq.map(num => digitToLetter[num] || '?');
    return letters.join('');
  }
  
  // Tes
  console.log("Input 1:", 12, "→", step3_convertNumberToLetters(12));    // ABEFIABAB ✅
  console.log("Input 2:", -16, "→", step3_convertNumberToLetters(-16)); // ABEFIJAB ✅
  