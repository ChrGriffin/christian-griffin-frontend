const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export function dateToMonthString(date: Date) {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
