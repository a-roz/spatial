import React, { createContext, useState } from "react";

import IResultMessage    from "../../interfaces/ResultMessage";
// import ITVService        from "../../services/ITVService";
import locales           from "../../locales";
import config            from "../../config";
import { getField }      from "../../utils";
import AuthDataProvider  from "../localStorage/AuthDataProvider";
import factoryUseContext from "./factoryUseContext";


interface ILocaleContext {
    locale          : string,
    allowedLocale   : string[],
//    setLocale       : (newLocale : string) => IResultMessage,
    translate       : (key : string) => string,
}

export const LocaleContext = createContext({} as ILocaleContext);

export const useLocale =
    factoryUseContext('Locale', LocaleContext) as () => ILocaleContext;


const LocaleContextProvider = (props : any) => {
    const [currentLocale, setCurrentLocale] = useState(AuthDataProvider.getAuthData().lang);
    const allowedLocale = config.allowedLocale;

    const LocaleContextProviderValue : ILocaleContext = {
        allowedLocale,

        locale    : currentLocale,

/*
        // removed for debug

        setLocale : (newLocale : string) : IResultMessage => {
            if (allowedLocale.includes(newLocale)) {
                setCurrentLocale(newLocale);
                AuthDataProvider.setLang(newLocale);
                ITVService.resetCache();
                return { ok : true };
            }
            return { ok    : false,
                     error : "err_locale_not_allowed" };
        },
*/

        translate : (key : string) : any => {
            return getField(locales, `${ currentLocale }.${ key }`, 'no_translation');
        },
    };
    return (
        <LocaleContext.Provider value={ LocaleContextProviderValue }>
            { props.children }
        </LocaleContext.Provider>
    );
};
export default LocaleContextProvider;
