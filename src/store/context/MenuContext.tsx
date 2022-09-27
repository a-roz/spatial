import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
    screenToLeft         : false,
    slideScreenToTheLeft : (toLeft : boolean) => {},
});

const MenuContextProvider = (props : any) => {
    const [screenToLeft, slideScreenToTheLeft] = useState(false);

    const MenuContextProviderValue = {
        screenToLeft,
        slideScreenToTheLeft,
    };
    return (
        <MenuContext.Provider value={ MenuContextProviderValue }>
            { props.children }
        </MenuContext.Provider>
    );
};
export default MenuContextProvider;
