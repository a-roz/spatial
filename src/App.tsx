import React from 'react';
import './App.css';

import MainContainer                from "./containers/MainContainer";

// import Navigator                    from "./containers/Navigation/Navigator";
// import NoConnectionContextProvider  from "./store/context/WatchdogContext";
// import ArchivedVideoContextProvider from "./store/context/ArchiveVideoContext";
// import NavigationContextProvider    from "./store/context/NavigationContext";
import PreloaderContextProvider     from "./store/context/PreloaderContext";
// import LiveVideoContextProvider     from "./store/context/LiveVideoContext";
// import VodVideoContextProvider      from "./store/context/VodVideoContext";
import LocaleContextProvider        from "./store/context/LocaleContext";
// import ErrorContextProvider         from "./store/context/ErrorContext";
import MenuContextProvider          from "./store/context/MenuContext";
// import AuthContextProvider          from "./store/context/AuthContext";
// import EpgContextProvider           from "./store/context/EpgContext";
import Compose                      from "./store/context/Compose";
import { init }                     from "@noriginmedia/norigin-spatial-navigation";


const App = () => {

    init({
      debug: false,
      visualDebug: false
    });

    return (
        <Compose components= {[
//          ArchivedVideoContextProvider,
//          NoConnectionContextProvider,
//          NavigationContextProvider,
//          LiveVideoContextProvider,
            PreloaderContextProvider,
//          VodVideoContextProvider,
            LocaleContextProvider,
//          ErrorContextProvider,
            MenuContextProvider,
//          AuthContextProvider,
//          EpgContextProvider,
            ]}>

            <MainContainer />

        </Compose>
    );
}

export default App;
