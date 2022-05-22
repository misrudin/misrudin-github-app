import moment from "moment";

export function dateFormat(date: string): string {
    return (
        date &&
        moment(date, 'YYYY-MM-DD HH:mm:ss').locale('id').format('DD MMM yyyy')
    )
}