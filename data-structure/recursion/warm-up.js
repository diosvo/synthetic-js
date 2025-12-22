function countdown(n) {
  // Base case
  if (n === 0) return;

  console.log('Entering', n);
  countdown(n - 1);
  console.log('Returning from', n);
}

countdown(2);
