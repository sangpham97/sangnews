export default function FormatDate(date) {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ]
  const d = new Date(date)
  let formatted_date =
    d.getDate() + '-' + months[d.getMonth()] + '-' + d.getFullYear()

  return formatted_date
}
