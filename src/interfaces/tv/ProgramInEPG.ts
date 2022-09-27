
interface IProgramInEPG {
    id              : string,
    ch_id           : string,
    descr           : string,
    duration        : string,
    mark_archive    : number,
    mark_memo       : number,
    mark_rec        : number,
    name            : string,
    open            : number,
    real_id         : string,
    start_timestamp : string,
    stop_timestamp  : string,
    t_time          : string,
    t_time_to       : string,
    time            : string,
    time_to         : string,
}
export default IProgramInEPG;
