/**
 * Spanish locale configuration
 */
export const es = {
    localeKey: 'es',
    dateFormats: {
        short: 'DD/MM/YYYY',
        medium: 'DD MMM, YYYY',
        long: 'DD de MMMM de YYYY',
        full: 'EEEE, DD de MMMM de YYYY',
        time: 'HH:mm:ss',
        dateTime: 'DD/MM/YYYY HH:mm:ss',
    },
    weekDays: {
        short: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        long: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    },
    months: {
        short: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        long: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ],
    },
    relativeTime: {
        past: {
            seconds: 'ahora mismo',
            minute: 'hace 1 minuto',
            minutes: 'hace {count} minutos',
            hour: 'hace 1 hora',
            hours: 'hace {count} horas',
            day: 'hace 1 día',
            days: 'hace {count} días',
            week: 'hace 1 semana',
            weeks: 'hace {count} semanas',
            month: 'hace 1 mes',
            months: 'hace {count} meses',
            year: 'hace 1 año',
            years: 'hace {count} años',
        },
        future: {
            seconds: 'en unos segundos',
            minute: 'en 1 minuto',
            minutes: 'en {count} minutos',
            hour: 'en 1 hora',
            hours: 'en {count} horas',
            day: 'en 1 día',
            days: 'en {count} días',
            week: 'en 1 semana',
            weeks: 'en {count} semanas',
            month: 'en 1 mes',
            months: 'en {count} meses',
            year: 'en 1 año',
            years: 'en {count} años',
        },
    },
} as const;

export type SpanishLocale = typeof es;
