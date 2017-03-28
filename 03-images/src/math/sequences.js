export function fibonacci(n) {
  return (
    n === 0 ? 0 :
    n === 1 ? 1 :
    fibonacci(n - 1) + fibonacci(n - 2)
  );
}

export function factorial(n) {
  return (
    n <= 1 ? 1 :
    n * factorial(n - 1)
  );
}
