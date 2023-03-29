export function notNumber(value) {
  return isNaN(value) || value === "" || !value;
};