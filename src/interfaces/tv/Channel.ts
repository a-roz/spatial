
export interface ICmd {
    id                  : string,
    ch_id               : string,
    url                 : string,
    status              : string,
    use_http_tmp_link   : string,
    use_load_balancing  : string,
}

export default interface IChannel {
    id                  : string,
    censored            : string,
    open                : number,
    status              : string,
    fav                 : number,
    enable_tv_archive   : string,
    name                : string,
    number              : string,
    cmds                : ICmd[],
}
