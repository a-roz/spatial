import React, { createContext, useState } from 'react';

import factoryUseContext from './factoryUseContext';


interface IPreloaderContext {
    isPreloader  : boolean,
    setPreloader : (isPreloader : boolean) => void,
}

const PreloaderContext = createContext({} as IPreloaderContext);

export const usePreloader =
    factoryUseContext('Preloader', PreloaderContext) as () => IPreloaderContext;


const PreloaderContextProvider = (props : any) => {
    const [isPreloader, setPreloader] = useState(false);

    const PreloaderContextProviderValue : IPreloaderContext = {
        isPreloader,
        setPreloader,
    };

    return  <PreloaderContext.Provider value={ PreloaderContextProviderValue }>
                { props.children }
            </PreloaderContext.Provider>;
};
export default PreloaderContextProvider;
