function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID"; // optional safety
  const k = Math.floor((m - 1) / n);
  return n * k * (k + 1) / 2;
}