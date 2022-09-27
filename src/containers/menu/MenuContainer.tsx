import React, {useContext, useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";

import "./MenuContainer.css";

import { MenuContext }                from "../../store/context/MenuContext";

// import SettingsComponent              from "../../components/Menu/SettingsComponent/SettingsComponent";
// import FilmComponent                  from "../../components/Menu/FilmComponent/FilmComponent";
// import FavComponent                   from "../../components/Menu/FavComponent/FavComponent";
// import TVComponent                    from "../../components/Menu/TVComponent/TVComponent";
import TopMenu                        from "../../components/TopMenu/TopMenu";
// import AuthService                    from "../../services/AuthService";
// import {useNavigation}                from "../../store/context/NavigationContext";
// import NavigationEventListener        from "../Navigation/NavigationEventListener";
// import ExitModalForm                  from "../../components/Menu/ExitModalForm/ExitModalForm";

import {FocusContext, init, useFocusable} from '@noriginmedia/norigin-spatial-navigation';
import Menu from "../../components/NoriginMenu/NoriginMenu"
import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";
import NoriginMenu from "../../components/NoriginMenu/NoriginMenu";

export default function MenuContainer() {

    const { screenToLeft, slideScreenToTheLeft } = useContext(MenuContext);
    const [isTryToExit,    setTryToExit      ] = useState(false);
    const cancelExitAction = () => {
        setTryToExit(false);
    };


/*
    useEffect(() => {
        const backFunctionId = NavigationEventListener.addBackListener( () =>  {
            if (pos.x === 0) {
                setTryToExit(v => !v);
            }
            else {
                setPos({x:0, y:0 });
                slideScreenToTheLeft(false);
            }
        });

        return () => {
            NavigationEventListener.removeBackListener(backFunctionId);
        }
    },[ pos, isTryToExit ])
*/


    const TopMenuContent = () =>   (
        <div className="no-allow-overflow">
            <div className={ `grid-container ${ false ? 'moved' : '' }` }>
                <Routes>
                    <Route path="/favorites" element={<div>FAVORITES</div>} />
                    <Route path="/tv"        element={<div>TV</div>}        />
                    <Route path="/film"      element={<div>FILM</div>}      />
                    <Route path="/settings"  element={<div>SETTINGS</div>}  />
                </Routes>
            </div>
        </div>
        )

/*
    const MenuContent = <>
        {isTryToExit ?
            <ExitModalForm cancelAction={cancelExitAction}/>
            :
            <>
                <TopMenu
                    focusedRange={{x: {down: 0, up: 0}, y: {full: true}}}
                    videoClubEnabled={true}
                />

                <div className="no-allow-overflow">
                    <div className={`grid-container ${screenToLeft ? 'moved' : ''}`}>
                        <Switch>
                            <Route path="/favorites">
                                <FavComponent focusedRange={{
                                    x: {down: 1, up: 4},
                                    y: {full: true}
                                }}/>
                            </Route>
                            <Route path="/tv">
                                <TVComponent focusedRange={{
                                    x: {down: 1, up: 1},
                                    y: {full: true}
                                }}/>
                            </Route>

                            <Route path="/film">
                                <FilmComponent focusedRange={{
                                    x: {down: 1, up: 1},
                                    y: {full: true}
                                }}/>
                            </Route>

                            <Route path="/settings">
                                <SettingsComponent
                                    isAgreement={userAgreement}
                                    isPrivacy={privacyPolicy}
                                    focusedRange={{
                                        x: {down: 1, up: 1},
                                        y: {full: true}
                                    }}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </>
        }
    </>
*/
    return (
        <div className='Menu App'>
{/*
                <NoriginMenu focusKey={"MENU_CONTAINER"} />
*/}
                <TopMenu videoClubEnabled = { true } />
                <TopMenuContent />

        </div>
    );


};

