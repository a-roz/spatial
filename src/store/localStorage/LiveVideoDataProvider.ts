import IWhereFromItWasOpened from '../../interfaces/WhereFromItWasOpened';
import localStorageNames     from '../../config/localStorageNames';
import { ILiveVideoContext } from '../context/LiveVideoContext';

class LiveVideoDataProvider {
    name                 : string;
    saveLiveVideoContext : ILiveVideoContext;

    constructor() {
        this.name = localStorageNames.videoDataProvider;
        this.saveLiveVideoContext = {
            currentChannelNumber : '',
            parentUrl            : '/tv/all',
            whereFromItWasOpened : {
                blockName    : 'channels',
                parentType   : 'tv',
                genreId      : '*'
            },
        };
    }

    _init() : ILiveVideoContext {
        localStorage.setItem(this.name, JSON.stringify(this.saveLiveVideoContext));
        return this.saveLiveVideoContext;
    }

    setCurrentChannelNumber(item : string) {
        const videoData = this.getLiveVideoContext();
        if (!videoData) { return; }
        videoData.currentChannelNumber = item;
        localStorage.setItem(this.name, JSON.stringify(videoData));
    }

    setParentUrl(item : string) {
        const videoData = this.getLiveVideoContext();
        if (!videoData) { return; }
        videoData.parentUrl = item;
        localStorage.setItem(this.name, JSON.stringify(videoData));
    }

    setWhereFromItWasOpened(item : IWhereFromItWasOpened) {
        const videoData = this.getLiveVideoContext();
        if (!videoData) { return; }
        videoData.whereFromItWasOpened = item;
        localStorage.setItem(this.name, JSON.stringify(videoData));
    }

    setLiveVideoContext(data : ILiveVideoContext) {
        localStorage.setItem(this.name, JSON.stringify(data));
    }

    removeLiveVideoContext() {
        localStorage.removeItem(this.name);
    }

    getLiveVideoContext() : ILiveVideoContext {
        const stringifyLiveVideoContext = localStorage.getItem(this.name);
        if (!stringifyLiveVideoContext) { return this._init(); }
        return JSON.parse(stringifyLiveVideoContext);
    }
}
export default new LiveVideoDataProvider();
