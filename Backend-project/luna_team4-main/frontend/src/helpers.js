export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  const formattedDate = date.toLocaleString('en-US', options).replace(',', '');

  return formattedDate;
}