import IStringDictionary from './StringDictionary';

export default interface IAuthData extends IStringDictionary {
    token      : string,
//    timeOffset : string,
    lang       : string,
    timeZone   : string;
};
