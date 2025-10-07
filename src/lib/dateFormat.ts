export function formatDateFromISO(isoString: string): string {
  const date = new Date(isoString);

  // Verifica se a data é válida
  if (isNaN(date.getTime())) {
    throw new Error('Data inválida');
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}


// formatDate()

