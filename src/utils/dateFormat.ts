import moment from "moment";

export function dateFormat(date?: string): string {
    if(!date) return  ''
    return (
        date &&
        moment(date, 'YYYY-MM-DD HH:mm:ss').locale('id').format('DD MMM yyyy')
    )
}