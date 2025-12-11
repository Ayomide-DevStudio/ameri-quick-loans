document.addEventListener('DOMContentLoaded', () => {
  const amount = document.getElementById('amount');
  const term = document.getElementById('term');
  const result = document.getElementById('result');

  if (amount && term && result) {
    const calculate = () => {
      const a = parseFloat(amount.value);
      const t = parseInt(term.value);
      if (a && t) {
        const monthly = (a * (1 + 0.0599 * t / 12) / t).toFixed(2); // Example 5.99% APR
        result.textContent = `Estimated Monthly Payment: $${monthly}`;
      }
    };
    amount.addEventListener('input', calculate);
    term.addEventListener('input', calculate);
  }
});