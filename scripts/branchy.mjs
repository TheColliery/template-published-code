export function sign(n) {
  if (n > 0) return 1;
  if (n < 0) return -1;
  return 0;
}
export function neverCalled() {
  return 'uncovered';
}
