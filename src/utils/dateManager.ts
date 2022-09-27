import AuthDataProvider from '../store/localStorage/AuthDataProvider';
import IDateDescription from '../interfaces/DateDescription';


const convertToCurrentTimezone = (dateInServerTimezone : string) : string => {
    if (!dateInServerTimezone) { return ''; }
    const [hours, minutes] = dateInServerTimezone.split(':');
    const convertedTime =
        `${ hours.padStart(2, '0')}:${ minutes }`
    return convertedTime;
}

const convertStampToZoneDate = (stamp : number, timeZone: string) : Date => {
    const date = new Date(stamp * 1000).toLocaleString("en-US", {timeZone: timeZone});
    return new Date(date);
}

const convertStampToAppDate = (stamp : number) : Date => {
    return convertStampToZoneDate(stamp, AuthDataProvider.getAuthData().timeZone);
}

const convertStampToString = (stamp : number, strip:boolean=true, sec:boolean=true, h24:boolean=false ) : string => {
    const d = convertStampToAppDate(stamp);
    let h = d.getHours();
    if (h24 && h === 0) { h=24 };
    const m = d.getMinutes();
    const s = d.getSeconds();
    return ( (h === 0 && strip )? '' :
        `${ String(h).padStart( strip?1:2, '0')}:` +
        `${ String(m).padStart(2, '0') }` +
        (sec?
        `:${ String(s).padStart(2, '0') }`:''));
}

const getCurrentSystemTime = (sec:boolean=false) : string => {
    const stringDate = new Date().toLocaleString("en-US", {timeZone: AuthDataProvider.getAuthData().timeZone});
    const d = new Date(stringDate);
    return `${ String(d.getHours()).padStart(2, '0')}:${ String(d.getMinutes()).padStart(2, '0') }${sec?':'+String(d.getSeconds()).padStart(2, '0'):''}`;
}


const getDateFormat = (d : Date) : string  => {
    const dd   = String(d.getDate()).padStart(2, '0');
    const mm   = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = d.getFullYear();
    return `${ yyyy }-${mm}-${ dd }`;
}

const getDatesInRange = (downVal : number, upVal : number) : IDateDescription[] => {
    const currentDate = {} as IDateDescription;

    const yesterdayDate = new Date();
    const tomorrowDate  = new Date();
    
    {
        let date = new Date();
        currentDate.month   = date.getMonth();
        currentDate.weekday = date.getDay();
        currentDate.date    = date.getDate();

        yesterdayDate.setDate(date.getDate() - 1);
        tomorrowDate.setDate( date.getDate() + 1);
    }

    const datesInDiapasone = [] as IDateDescription[];

    const today = new Date();
    today.setDate(currentDate.date);

    const from = new Date();
    from.setDate(currentDate.date - downVal);

    const to   = new Date();
    to.setDate(currentDate.date + upVal);

    for (let d = from; d <= to; d.setDate(d.getDate() + 1)) {
        datesInDiapasone.push({
            month    : d.getMonth(),
            weekday  : d.getDay(),
            date     : d.getDate(),
            extended : d.getDate()  === currentDate.date         &&
                       d.getMonth() === currentDate.month        ? 'today'     :
/*
                       d.getDate()  === yesterdayDate.getDate()  &&
                       d.getMonth() === yesterdayDate.getMonth() ? 'yesterday'  :

                       d.getDate()  === tomorrowDate.getDate()   &&
                       d.getMonth() === tomorrowDate.getMonth()  ? 'tomorrow' :
 */
                undefined,
            dateFormat : getDateFormat(d),
            future     : d > today,
            weekend    : (d.getDay() === 0) || (d.getDay() === 6),
            stampDayStart : (d.setHours(0,0,0,0) / 1000).toFixed(0),
            stampDayEnd   : (d.setHours(23,59,59,999) / 1000).toFixed(0),
        });
    }
    return datesInDiapasone;
}

const msToTime = (duration: number, strip?: boolean, sign:boolean=false) => {
    const minus = duration < 0;
    duration = Math.abs(duration);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours   = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return `${sign? (minus? '-':'+') : ''}` +
           `${ (strip && hours === 0)?'' : String(hours).padStart( strip? 1 : 2,'0')+":"}` +
           `${ String(minutes).padStart(2, '0') }:` +
           `${ String(seconds).padStart(2, '0') }`;
}

const secToTime = (duration : number) => {
    const seconds = Math.floor((duration) % 60);
    const minutes = Math.floor((duration /  60) % 60);
    const hours   = Math.floor((duration / ( 60 * 60 )) % 24);

    return ((hours !== 0)?`${   String(hours).padStart(1, '0') }:` : '') +
                          `${ String(minutes).padStart(2, '0') }:` +
                          `${ String(seconds).padStart(2, '0') }`;
}

const now = () : number => {
    // const d = new Date();

    const nowTimestamp = Date.now(); // UTC
    // console.log(Date.now(), d.getTime());
    
    return nowTimestamp;
}

const dateManager = {
    getDateFormat, getDatesInRange, msToTime,
    convertToCurrentTimezone, getCurrentSystemTime,
    now,secToTime,

    convertStampToZoneDate,
    convertStampToAppDate,
    convertStampToString,

};
export default dateManager;
