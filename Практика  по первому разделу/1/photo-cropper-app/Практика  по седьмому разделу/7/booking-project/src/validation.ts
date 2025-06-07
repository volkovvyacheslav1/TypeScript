export function checkDateFormat(dateInput: string): boolean {
  const pattern = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!pattern.test(dateInput)) return false;

  const [day, month, year] = dateInput.split('.').map(Number);
  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  return (
    inputDate.getDate() === day &&
    inputDate.getMonth() === month - 1 &&
    inputDate.getFullYear() === year &&
    inputDate >= currentDate
  );
}

export function hasForbiddenSymbols(text: string): boolean {
  const forbidden = /[<>&"]/;
  return forbidden.test(text);
}

export function validateCity(name: string): boolean {
  return !hasForbiddenSymbols(name);
}

