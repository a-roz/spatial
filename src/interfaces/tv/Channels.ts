import IChannel from './Channel';

export default interface IChannels {
    data            : IChannel[],
    max_page_items  : number,
    total_items     : number,
}
