export const DEFAULT_WHATSAPP_NUMBER = '966552993899';

/**
 * Cleans a phone number for use in WhatsApp URL (wa.me).
 * WhatsApp requires only digits with country code: NO '+', NO spaces, NO dashes, NO leading '00'.
 * Also normalizes local Saudi numbers (e.g. 05xxxxxxxx -> 9665xxxxxxxx).
 */
export function cleanWhatsAppNumber(number) {
  if (!number) return DEFAULT_WHATSAPP_NUMBER;

  let cleaned = String(number).replace(/\D/g, ''); // strip all non-digits
  cleaned = cleaned.replace(/^00/, ''); // strip leading 00

  // Local Saudi mobile format 05xxxxxxxx (10 digits) -> 9665xxxxxxxx
  if (cleaned.startsWith('05') && cleaned.length === 10) {
    cleaned = '966' + cleaned.substring(1);
  }
  // Saudi mobile format without leading zero 5xxxxxxxx (9 digits) -> 9665xxxxxxxx
  else if (cleaned.startsWith('5') && cleaned.length === 9) {
    cleaned = '966' + cleaned;
  }

  return cleaned || DEFAULT_WHATSAPP_NUMBER;
}

/**
 * Builds a valid WhatsApp URL.
 * Safely handles both pre-encoded and unencoded text, avoiding double-encoding.
 */
export function getWhatsAppUrl(number, message = '') {
  const cleaned = cleanWhatsAppNumber(number);
  if (!message) {
    return `https://wa.me/${cleaned}`;
  }

  const text = typeof message === 'string' ? message : String(message);
  let encoded = '';
  try {
    const decoded = decodeURIComponent(text);
    encoded = encodeURIComponent(decoded);
  } catch {
    encoded = encodeURIComponent(text);
  }

  return `https://wa.me/${cleaned}?text=${encoded}`;
}

/**
 * Navigates to WhatsApp using window.location.href
 */
export function openWhatsApp(number, message = '') {
  window.location.href = getWhatsAppUrl(number, message);
}
