import React, { createContext, useState } from 'react';

import IWhereFromItWasOpened from '../../interfaces/WhereFromItWasOpened';
import LiveVideoDataProvider from '../localStorage/LiveVideoDataProvider';
import factoryUseContext     from './factoryUseContext';

export interface ILiveVideoContext {
    currentChannelNumber : string,
    whereFromItWasOpened : IWhereFromItWasOpened,
    parentUrl            : string,
}
export interface ILiveVideoActionContext {
    setCurrentChannelNumber : (currentChannelNumber : string)     => void,
    setWhereFromItWasOpened : (whereFrom : IWhereFromItWasOpened) => void,
    setParentUrl            : (parentUrl : string)                => void,
}

export interface ILiveVideo extends ILiveVideoContext, ILiveVideoActionContext {}



const LiveVideoContext       = createContext({} as ILiveVideoContext);
const LiveVideoActionContext = createContext({} as ILiveVideoActionContext);

export const useLiveVideoContext =
    factoryUseContext('LiveVideo',       LiveVideoContext)       as () => ILiveVideoContext;
export const useLiveVideoActionContext =
    factoryUseContext('LiveVideoAction', LiveVideoActionContext) as () => ILiveVideoActionContext;

export const useLiveVideo = () : ILiveVideo => {
    return { ...useLiveVideoContext(),
             ...useLiveVideoActionContext() };
};


const LiveVideoContextProvider = (props : any) => {

    const videoContextFromStorage = LiveVideoDataProvider.getLiveVideoContext();

    const [currentChannelNumber, setCurrentChannelNumber] = useState(videoContextFromStorage.currentChannelNumber);
    const [parentUrl,            setParentUrl           ] = useState(videoContextFromStorage.parentUrl);
    const [whereFromItWasOpened, setWhereFromItWasOpened] = useState(videoContextFromStorage.whereFromItWasOpened);

    const VideoContextProviderValue : ILiveVideoContext = {
        currentChannelNumber,
        whereFromItWasOpened,
        parentUrl,
    };

    const VideoActionContextProviderValue : ILiveVideoActionContext = {
        setCurrentChannelNumber : (channelNumber : string) => {
            setCurrentChannelNumber(channelNumber);
            LiveVideoDataProvider.setCurrentChannelNumber(channelNumber);
        },
        setWhereFromItWasOpened : (whereFrom : IWhereFromItWasOpened) => {
            setWhereFromItWasOpened(whereFrom);
            LiveVideoDataProvider.setWhereFromItWasOpened(whereFrom);
        },
        setParentUrl : (url : string) => {
            setParentUrl(url);
            LiveVideoDataProvider.setParentUrl(url);
        },
    };

    return  <LiveVideoContext.Provider value={ VideoContextProviderValue }>
                <LiveVideoActionContext.Provider value={ VideoActionContextProviderValue }>
                    { props.children }
                </LiveVideoActionContext.Provider>
            </LiveVideoContext.Provider>;
};
export default LiveVideoContextProvider;
