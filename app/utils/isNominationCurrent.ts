export default function isNominationCurrent(closing_date: string) {
    
   const todayString = formatToday();
   const closingDateString = new Date(closing_date).toString();
console.log({todayString, closingDateString});
    return new Date(closing_date) > new Date() || closing_date == todayString;
}

const formatToday = () => {
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

return [year, month, day].join('-');

}