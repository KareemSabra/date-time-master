/**
 * English locale configuration
 */
export const en = {
    localeKey: 'en',
    dateFormats: {
        short: 'MM/DD/YYYY',
        medium: 'MMM DD, YYYY',
        long: 'MMMM DD, YYYY',
        full: 'EEEE, MMMM DD, YYYY',
        time: 'HH:mm:ss',
        dateTime: 'MM/DD/YYYY HH:mm:ss',
    },
    weekDays: {
        short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    months: {
        short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        long: [
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
            'December',
        ],
    },
    relativeTime: {
        past: {
            seconds: 'just now',
            minute: '1 minute ago',
            minutes: '{count} minutes ago',
            hour: '1 hour ago',
            hours: '{count} hours ago',
            day: '1 day ago',
            days: '{count} days ago',
            week: '1 week ago',
            weeks: '{count} weeks ago',
            month: '1 month ago',
            months: '{count} months ago',
            year: '1 year ago',
            years: '{count} years ago',
        },
        future: {
            seconds: 'in a few seconds',
            minute: 'in 1 minute',
            minutes: 'in {count} minutes',
            hour: 'in 1 hour',
            hours: 'in {count} hours',
            day: 'in 1 day',
            days: 'in {count} days',
            week: 'in 1 week',
            weeks: 'in {count} weeks',
            month: 'in 1 month',
            months: 'in {count} months',
            year: 'in 1 year',
            years: 'in {count} years',
        },
    },
} as const;

export type EnglishLocale = typeof en;
