export const formatMillis = (diff) => {
    var seconds = Math.floor(diff / 1000),
        minutes = Math.floor(seconds / 60),
        hours = Math.floor(minutes / 60),
        days = Math.floor(hours / 24),
        months = Math.floor(days / 30),
        years = Math.floor(days / 365);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 30;
    months %= 12;

    if (years > 0) {
        return `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}, ${days} day${days === 1 ? '' : 's'}, ${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, ${seconds} second${seconds === 1 ? '' : 's'}`;
    }

    if (months > 0) {
        return `${months} month${months === 1 ? '' : 's'}, ${days} day${days === 1 ? '' : 's'}, ${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, ${seconds} second${seconds === 1 ? '' : 's'}`;
    }

    if (days > 0) {
        return `${days} day${days === 1 ? '' : 's'}, ${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, ${seconds} second${seconds === 1 ? '' : 's'}`;
    }

    if (hours > 0) {
        return `${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, ${seconds} second${seconds === 1 ? '' : 's'}`;
    }

    if (minutes > 0) {
        return `${minutes} minute${minutes === 1 ? '' : 's'}, ${seconds} second${seconds === 1 ? '' : 's'}`;
    }

    if (seconds > 0) {
        return `${seconds} second${seconds === 1 ? '' : 's'}`;
    }

    return "0 Seconds"
}