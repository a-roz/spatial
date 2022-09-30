import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation /*useHistory*/  }    from 'react-router-dom';
import './TopMenu.css';

// import { useNavigation }        from '../../store/context/NavigationContext';
import { LocaleContext }        from '../../store/context/LocaleContext';
import IFocusedRange            from '../../interfaces/FocusedRange';
import symbols                  from '../../resourses/symbols';
// import { isEmpty }              from '../../utils';

import VerticalAlignedList      from '../ChooseableList/VerticalAlignedList';
import Sidebar                  from '../Sidebar/Sidebar';

import IRouteAndComponent       from '../../interfaces/settings/RouteAndComponent';
import {useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import styled from "styled-components";
import NoriginMenu,{MenuItem} from "../NoriginMenu/NoriginMenu";
import {isEmpty} from "../../utils";


export default function TopMenu(props : {
//    focusedRange : IFocusedRange,
    videoClubEnabled : boolean,
}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { translate : _t } = useContext(LocaleContext);
    const t = (key : string) : string => _t(`menu.${key}`);
//    const t = (key : string) : string => key;

    const [path,        setPath          ] = useState('');
    const [rootPath,    setRootPath      ] = useState('');

    const [lastIndex,   changeLastIndex  ] = useState(0);
    const [activeIndex, changeActiveIndex] = useState(0);
    const [isMenuOpen,  setIsMenuOpen    ] = useState(true);
//    const [isTryToExit, setTryToExit     ] = useState(false);
    /*
        const { pos, setPos } = useNavigation();
        const profileInfo = AuthService.cachedProfileInfo;
        const modulesInfo = AuthService.cachedModulesData;
    */
    /*
        useEffect(() => {
            // visible items of menu by profile
            Object.entries(profileInfo).map((el : any) => {
                const [key, value] = el;
                if (key === 'app_user_agreement') { setUserAgreement(true) }
                else
                if (key === 'app_privacy_policy') { setPrivacyPolicy(true) }
            })

            // visible items of menu by modules
            setVClub(modulesInfo.all_modules.includes('vclub') &&
              !modulesInfo.disabled_modules.includes('vclub'));
        },[])
    */

    const [vClub,          setVClub          ] = useState(false);
    const [userAgreement,  setUserAgreement  ] = useState(false);
    const [privacyPolicy,  setPrivacyPolicy  ] = useState(false);

/*
    const { newPos, isForceSetPos,
        update, isNewPos,
        checkFocusedRange,
        checkNewFocusedRange } = useNavigation();

    const focusedRef = useRef({} as HTMLAnchorElement);
    const inRangeNew = checkNewFocusedRange(props.focusedRange);
    const inRange    = checkFocusedRange(   props.focusedRange);
*/


/*
    useEffect(() => {
        if (!isEmpty(focusedRef.current)) {
            if (isNewPos())    { update(focusedRef.current);        }
            if (isForceSetPos) { update(focusedRef.current, false); }
        }

        if (inRange) {
            if (!isMenuOpen) { setIsMenuOpen(true); }
        } else {
            if (isMenuOpen) {
                changeLastIndex(activeIndex);
                setIsMenuOpen(false);
            }
        }
    });
*/


    useEffect(() => {
        const urlParts = pathname.split('/');
        /*
                if ( urlParts.length > 1 ) {
                    let idx = menuLinks.findIndex((item: IRouteAndComponent) => (`/${urlParts[1]}` === item.route));
                    changeActiveIndex( idx );
                    console.log(`changeActiveIndex( ${idx} )`)
                    if (!isMenuOpen) {
                        changeLastIndex(idx)
                    }
                    setRootPath(`/${urlParts[1]}`);
                    setPath(pathname);
        }
        */
    });


    const menuLinks : IRouteAndComponent[] = [
        {route: '/favorites',   title: t('fav.menuTitle'),      component: <symbols.Fav/>       },
        {route: '/tv',          title: t('tv.menuTitle'),       component: <symbols.Tv/>        },
        ... !props.videoClubEnabled? [] :
      [ {route: '/film',        title: t('film.menuTitle'),     component: <symbols.Film/>      } ],
        {route: '/settings',    title: t('settings.menuTitle'), component: <symbols.Settings/>  },
        {route: '/exit',        title: t('exit.menuTitle')+` ${activeIndex}`,     component: <symbols.Exit/>      },

    ];

    /*
    const indexOfExit  = menuLinks.findIndex((item : IRouteAndComponent) => (item.route === '/exit'));
    const onActiveClick = () => {
        if (activeIndex === indexOfExit) {
            setTryToExit(true);
        }
    };

    const cancelAction = () => {
        setTryToExit(false);
    };

    */

//         {isTryToExit ? <ExitModalForm cancelAction={ cancelAction }/> : undefined}



    const {
        ref,
        focusSelf,
        hasFocusedChild,
        focusKey,
        setFocus,            // -- to set focus manually to some focusKey
        // navigateByDirection, -- to manually navigate by direction
        // pause,               -- to pause all navigation events
        // resume,              -- to resume all navigation events
        // updateAllLayouts,    -- to force update all layouts when needed
        // getCurrentFocusKey   -- to get the current focus key
    } = useFocusable({
        focusable: true,
        saveLastFocusedChild: true,
        trackChildren: true,
        autoRestoreFocus: true,
        isFocusBoundary: false,
        focusKey: "TOP_MENU",
        // preferredChildFocusKey: null,
        onEnterPress: () => {},
        onEnterRelease: () => {},
        onArrowPress: () => true,
        onFocus: () => {},
        onBlur: () => {},
        extraProps: { foo: 'bar' }
    });



    useEffect(() => {
        focusSelf();
    }, [focusSelf]);




    /*
            <NoriginMenu focusKey={"TOP_MENU"} />
    */

    const handleChangeActive = (index: number) => {
        console.log(`handleChangeActive(${index})`);
        changeActiveIndex(index);
    }

    const handleSetFocus = (key: string) => {
        console.log(`handleSetFocus(${key})`);
        setFocus(key);
    }

    return (
        <FocusContext.Provider value={focusKey}>
            <Sidebar ref={ref} className={`top-menu ${ hasFocusedChild /*isMenuOpen || (activeIndex === indexOfExit)*/ ? 'active' : ''}`}>
                <VerticalAlignedList
                    navKey             = { "TOP_MENU_" }
                    redHighlighter     = { isMenuOpen  }
                    activeIndex        = { activeIndex }
                    handleChangeActive = { handleChangeActive }

                    handleSetFocus     = { handleSetFocus }

                    onActiveClick      = { () => {} } >
                    {
                        menuLinks.map((el : IRouteAndComponent, i : number) =>
                            <Link   to  = { (rootPath === el.route) ? path: el.route } key = { el.route } >
                                { el.component}
                                <span>{ el.title }</span>
                            </Link>
                        )
                    }
                </VerticalAlignedList>
            </Sidebar>
        </FocusContext.Provider>
    );

}
