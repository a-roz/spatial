
export default interface DateDesription {
    month       : number,
    weekday     : number,
    date        : number,
    extended?   : string,
    dateFormat  : string,
    future      : boolean,
    weekend     : boolean,
    stampDayStart   : string,
    stampDayEnd     : string,
};
