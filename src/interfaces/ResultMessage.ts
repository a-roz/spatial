
// Always fill field [error] , if status isn't OK
export default interface IResultMessage {
    ok     : boolean,
    error? : string,
    data?  : any,
};
