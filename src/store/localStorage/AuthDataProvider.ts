import localStorageNames from '../../config/localStorageNames';
import IAuthData         from '../../interfaces/AuthData';
import config            from "../../config";

class AuthDataProvider {
    name            : string;
    defaultAuthData : IAuthData;

    constructor() {
        this.name = localStorageNames.authData;
        this.defaultAuthData = {
            token      : '',
            lang       : 'en',
            timeZone   : config.defaultTimeZone,
        };
    }

    _init() : IAuthData {
        localStorage.setItem(this.name, JSON.stringify(this.defaultAuthData));
        return this.defaultAuthData;
    }

    _setItem(type : string, item : string) {
        const authData = this.getAuthData();
        if (!authData) { return; }
        authData[type] = item;
        localStorage.setItem(this.name, JSON.stringify(authData));
    }

/*
    setMac(mac : string) {
        this._setItem('mac', mac);
    }
*/

    setToken(token : string) {
        this._setItem('token', token);
    }

    setTimeZone(timeZone : string) {
        this._setItem('timeZone', timeZone);
    }

    setDefaultTimeZone() {
        this._setItem('timeZone', config.defaultTimeZone);
    }

    setLang(lang : string) {
        this._setItem('lang', lang);
    }

    removeToken() {
        const authData = this.getAuthData();
        if (!authData) { return; }
        authData.token = '';
        localStorage.setItem(this.name, JSON.stringify(authData));
    }

/*
    setAuthData(data : IAuthData) {
        localStorage.setItem(this.name, JSON.stringify(data));
    }
*/

    getAuthData() : IAuthData {
        const stringifyAuthData = localStorage.getItem(this.name);
        if (!stringifyAuthData) { return this._init(); }
        return JSON.parse(stringifyAuthData);
    }
}
export default new AuthDataProvider();
