const DateFormat = {
    timeFromNow(date) {
        const fromDate = new Date(date);
        const difference = fromDate - (new Date());
        const units = {
            year: 1000 * 60 * 60 * 24 * 365,
            month: 1000 * 60 * 60 * 24 * (365 / 12),
            day: 1000 * 60 * 60 * 24,
            hour: 1000 * 60 * 60,
            minute: 1000 * 60,
            second: 1000,
        };
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        let result;
        // eslint-disable-next-line no-restricted-syntax
        for (const unit in units) {
            if (Math.abs(difference) > units[unit] || unit === 'second') {
                result = rtf.format(Math.round(difference / units[unit]), unit);
                break;
            }
        }
        return result;
    },
};
export default DateFormat;
