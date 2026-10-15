import { isValidPhoneNumber, validatePhoneNumberLength } from 'libphonenumber-js';

// Phone rules per country. react-phone-input-2 gives us the typed value (dial
// code included) and the selected country; libphonenumber-js decides whether
// that number is actually valid there — India must be 10 digits, the UAE 9,
// Singapore 8, and so on, including the allowed starting digits.

// Countries without their own mask fall back to the library's default one,
// which is this many dots — not a real length, so we ignore it for messages.
const DEFAULT_MASK_DIGITS = 14;

export function nationalDigits(value, country) {
  const digits = String(value || '').replace(/\D/g, '');
  const dial = String((country && country.dialCode) || '');
  return dial && digits.startsWith(dial) ? digits.slice(dial.length) : digits;
}

// Digits the country's own mask expects, or null when it has no specific mask.
export function expectedDigits(country) {
  if (!country || !country.format) return null;
  const dots = (country.format.match(/\./g) || []).length;
  const n = dots - String(country.dialCode || '').length;
  return n > 0 && n !== DEFAULT_MASK_DIGITS ? n : null;
}

export function toE164(value, country) {
  const national = nationalDigits(value, country);
  const dial = String((country && country.dialCode) || '');
  return national ? `+${dial}${national}` : '';
}

/**
 * @returns '' when fine, otherwise a message to show under the field.
 */
// Extra rules where the bundled metadata is looser than reality.
const STRICT = {
  91: { re: /^[6-9]\d{9}$/, msg: 'Indian mobile numbers are 10 digits starting with 6–9' },
};

export function validatePhone(value, country, { required = false } = {}) {
  const national = nationalDigits(value, country);
  if (!national) return required ? 'Phone number is required' : '';

  const strict = STRICT[String((country && country.dialCode) || '')];
  if (strict && !strict.re.test(national)) return strict.msg;

  const e164 = toE164(value, country);
  if (isValidPhoneNumber(e164)) return '';

  const name = (country && country.name) || 'this country';
  const want = expectedDigits(country);
  if (want && national.length !== want) {
    return `${name} numbers are ${want} digits — you entered ${national.length}`;
  }

  // No mask to compare against: say whether it is short, long or just wrong.
  const len = validatePhoneNumberLength(e164);
  if (len === 'TOO_SHORT') return `Too short for ${name} — check the number`;
  if (len === 'TOO_LONG') return `Too long for ${name} — check the number`;
  return `Enter a valid ${name} phone number`;
}
