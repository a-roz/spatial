/**
 * Since this file is for development purposes only, some of the dependencies are in devDependencies
 * Disabling ESLint rules for these dependencies since we know it is only for development purposes
 */

import React, { useCallback, useEffect, useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { createGlobalStyle } from 'styled-components';
import shuffle from 'lodash/shuffle';

import {
  useFocusable,
  init,
  FocusContext,
  FocusDetails,
  FocusableComponentLayout,
  KeyPressDetails
} from "@noriginmedia/norigin-spatial-navigation";

import "../../App.css"

// import PDC from './lib/platformDependencyCall';
// import AVPlayService from "./services/AVPlayService";
import TopMenu from "../TopMenu/TopMenu";
import MenuContainer from "../../containers/menu/MenuContainer";

// const logo = require('../logo.png').default;

const rows = shuffle([
  { title: 'Recommended'  },
  { title: 'Movies'       },
  { title: 'Series'       },
  { title: 'TV Channels'  },
  { title: 'Sport'        }
]);

const assets = [
  { title: 'Asset 1', color: '#714ADD' },
  { title: 'Asset 2', color: '#AB8DFF' },
  { title: 'Asset 3', color: '#512EB0' },
  { title: 'Asset 4', color: '#714ADD' },
  { title: 'Asset 5', color: '#AB8DFF' },
  { title: 'Asset 6', color: '#512EB0' },
  { title: 'Asset 7', color: '#714ADD' },
  { title: 'Asset 8', color: '#AB8DFF' },
  { title: 'Asset 9', color: '#512EB0' }
];

const AppContainer = styled.div`
  background-color: #221c35;
  width: 100vw;
  height: 100vh;
  /*
  width: 1440px;
  height: 810px;
  */
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
`;
// background-color: #b056ed;
// border-width: ${({ focused }) => (focused ? '2px' : 0)};
// margin-bottom: 37px;
// border-style: solid;
const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 190px;
  height: 51px;
  background-color: ${({ focused }) => (focused ? 'red' : '#b056ed')};
  box-sizing: border-box;
  border-radius: 7px;

  display: flex;
  align-items: center;
  color: white;
  margin-top: 10px;
  padding-left: 10px;
  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 400;
`;

const MenuWrapper = styled.div<MenuWrapperProps>`
  flex: 1;
  max-width: 246px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ hasFocusedChild }) =>
  hasFocusedChild ? '#4e4181' : '#362C56'};
  padding-top: 37px;
`;

const NmLogo = styled.img`
  height: 57px;
  width: 175px;
  margin-bottom: 51px;
`;


interface MenuItemBoxProps {
  focused: boolean;
}

interface MenuItemProps {
  title: string;
//  onEnterPress: (props: object, details: KeyPressDetails) => void;
}

function MenuItem({ title  /*, onEnterPress */ }: MenuItemProps) {
  const { ref, focused} = useFocusable({
//      onEnterPress,
      extraProps: { title }
    });

  return (
    <MenuItemBox ref={ref} focused={focused} >
      {title}
    </MenuItemBox>
  )
}

interface MenuWrapperProps {
  hasFocusedChild: boolean;
}

interface MenuProps {
  focusKey: string;
}

function NoriginMenu({ focusKey: focusKeyParam }: MenuProps) {
  const {
    ref,
    focusSelf,
    hasFocusedChild,
    focusKey
    // setFocus, -- to set focus manually to some focusKey
    // navigateByDirection, -- to manually navigate by direction
    // pause, -- to pause all navigation events
    // resume, -- to resume all navigation events
    // updateAllLayouts, -- to force update all layouts when needed
    // getCurrentFocusKey -- to get the current focus key
  } = useFocusable({
    focusable: true,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
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

  const onMenuItemPress = useCallback((title: MenuItemProps) => {
    console.log('onMenuItemPress', title);
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <MenuWrapper ref={ref} hasFocusedChild={hasFocusedChild}>
        { rows.map(({ title}) => (
          <MenuItem
            title={title}
            // onEnterPress={onMenuItemPress}
          />
        ))}
      </MenuWrapper>
    </FocusContext.Provider>
  );
}

export default NoriginMenu;
export {MenuItem};
