import React, {useContext, useEffect, useState} from "react";
import { useNavigation, useMatch }     from "react-router-dom";

// import '../components/VideoInterface/VideoInterface.css';


import InitialScreenProvider    from "../store/localStorage/InitialScreenProvider";
// import { useNavigation }        from "../store/context/NavigationContext";
import { usePreloader }         from "../store/context/PreloaderContext";
// import { useAuth }              from "../store/context/AuthContext";
// import { useWatchdog }          from "../store/context/WatchdogContext";
import { MenuContext }          from "../store/context/MenuContext";
// import { ErrorContext }         from "../store/context/ErrorContext";
// import AgreementProvider        from "../store/localStorage/AgreementProvider";

import Preloader                from "../features/Preloader/Preloader";
// import MessagePopup             from "../features/MessagePopup/MessagePopup";
// import ShowError                from "../features/ShowError/ShowError";

// import RequestErrorHandler      from "../services/RequestErrorHandler";
// import AVPlayService            from "../services/AVPlayService";
// import AuthService              from "../services/AuthService";
// import AuthContainer            from "./auth/AuthContainer";
import MenuContainer            from "./menu/MenuContainer";
// import Watchdog                 from "../components/Watchdog/Watchdog";
// import Agreement                from "../components/Agreement/Agreement";
// import IWatchDogData,
//        {defaultWatchDogData}    from "../interfaces/WatchDogData";
// import WatchdogService          from "../services/WatchdogService";

// import VodVideoContainer        from "./video/VodVideoContainer";
// import ArchivedVideoContainer   from "./video/ArchivedVideoContainer";
// import LiveVideoContainer       from "./video/LiveVideoContainer";

const MainContainer = () => {

//    const history                   = useNavigation();
    const { slideScreenToTheLeft  } = useContext(MenuContext);
//    const { setPos                } = useNavigation();
//    const { authenticated,
//            logout                } = useAuth();
//    const { isPreloader           } = usePreloader();
//    const { setDisconnected, isForceWatchdog,setForceWatchdog } = useWatchdog();
//    const { errors,
//            addError,
//            removeErrorByMessage  } = useContext(ErrorContext);

//    const [ agreementDate,   setAgreementDate   ] = useState(AgreementProvider.getAgreementDate());
//    const [ isConnecting,    setConnecting      ] = useState( true );
//    const [ watchdogMessage, setWatchdogMessage ] = useState( defaultWatchDogData as IWatchDogData) ;
//    const [ userAgreement,   setUserAgreement   ] = useState(false);
//    const [ privacyPolicy,   setPrivacyPolicy   ] = useState(false);

    // вынесено сюда из LiveVideoContainer
//    const [isTimeShift,      setTimeShift       ] = useState(false);

/*
    const initScreen = InitialScreenProvider.getInitialScreen();
    const defaultUrl =   initScreen === 'playLastChannel'     ? '/video/live'
                       : initScreen === 'showChannelList'     ? '/tv'
                       : initScreen === 'showFavoriteChannel' ? '/favorites'
                       : initScreen === 'default'             ? '/settings'
                       : '';
*/

    /* -----------------------------------------
       handlers for communication errors
     ------------------------------------------- */
/*
    RequestErrorHandler.init(
        {
        handlerLogout : () => {
            AVPlayService.close();              // закрываем плеер
            logout();                           // убираем флаг isUserLogin
            history.push(defaultUrl);           // init screen url
            setPos({x: 0, y: 1});               // cursor to username field
            slideScreenToTheLeft(false);        // open full menu column
            AuthService.logout();               // clear Token and Cache
        },
        handlerConnection : ( ok : boolean ) => {
            setDisconnected( !ok );
            if ( ok ) {
                removeErrorByMessage("err_failed_to_fetch");
            }
            else {
                addError("login", "err_failed_to_fetch");
            }
        },
    });
*/

/*
    const matchVideoRoute = useMatch('/video');
    const matchRootRoute  = useMatch('/');
    const matchIndexRoute = useMatch('/index.html');

    const matchRouteFilm  = useMatch('/video/film');
    const matchRouteArchive = useMatch('/video/archived');
    const matchRouteLive  = useMatch('/video/live');
*/

/*
    useEffect(() => {
        if (matchIndexRoute?.isExact || matchRootRoute?.isExact) {
            history.push(defaultUrl);
            setPos({ x : 1, y : 0 });
        }
    }, [matchIndexRoute, matchRootRoute]);
*/

/*
    const closeMessage = () => {
        if (watchdogMessage.need_confirm === '1') {
            WatchdogService.confirmWatchDogEvent(watchdogMessage.id);
        }
        setWatchdogMessage(defaultWatchDogData)
    }
*/
    /* -----------------------------------------
        Force watchdog check
     ------------------------------------------- */
/*
    useEffect(() => {
        if (isForceWatchdog){
            setForceWatchdog(false);
            setConnecting(true);
        }
    },[isForceWatchdog]);
*/

    /* -----------------------------------------
       вытаскиваем из профиля, нужны ли Соглашения
     ------------------------------------------- */
/*
    useEffect(() => {
        if(!authenticated) return;
        Object.entries(AuthService.cachedProfileInfo).map((el : any) => {
            const [key, value] = el;
            if (key === 'app_user_agreement') { setUserAgreement(true) }
            else
            if (key === 'app_privacy_policy') { setPrivacyPolicy(true) }
        })
    },[authenticated]);
*/

    return (
        <MenuContainer />
    )
}

export default MainContainer;
