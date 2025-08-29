export function isValidEmail(email: string): boolean {
  // Basic email regex
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
