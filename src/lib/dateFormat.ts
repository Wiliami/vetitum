export function formatDateIntl(isoString: string | Date | null | undefined, locale: string = 'pt-BR'): string {
  if (!isoString) return '—'; // se for null ou undefined

  const date = typeof isoString === 'string' ? new Date(isoString.trim()) : isoString;

  if (isNaN(date.getTime())) {
    console.error('Data inválida recebida:', isoString);
    return '—';
  }

  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}
