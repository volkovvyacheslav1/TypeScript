import { checkDateFormat, hasForbiddenSymbols, validateCity } from './validation';

describe('Проверка даты', () => {
  it('принимает правильный формат даты', () => {
    expect(checkDateFormat('31.12.2099')).toBe(true);
  });

  it('отклоняет спецсимволы в дате', () => {
    expect(checkDateFormat('22@04@2025')).toBe(false);
  });

  it('отклоняет буквенные символы в дате', () => {
    expect(checkDateFormat('22.apr.2025')).toBe(false);
  });

  it('отклоняет дату из прошлого', () => {
    expect(checkDateFormat('01.01.2000')).toBe(false);
  });
});

describe('Проверка города на спецсимволы', () => {
  it('обнаруживает экранирующие символы', () => {
    expect(hasForbiddenSymbols('<Paris>')).toBe(true);
  });

  it('разрешает название с восклицательными знаками и дефисами', () => {
    expect(validateCity('Saint-Louis-du-Ha! Ha!')).toBe(true);
  });

  it('разрешает название с диакритическими знаками', () => {
    expect(validateCity('Ağrı')).toBe(true);
  });

  it('принимает односимвольное название города', () => {
    expect(validateCity('Ö')).toBe(true);
  });
});

