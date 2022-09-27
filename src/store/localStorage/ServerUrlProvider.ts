import localStorageNames from '../../config/localStorageNames';
import urls              from '../../config/urls';

class ServerUrlProvider {
    name  : string;

    constructor() {
        this.name = localStorageNames.serverUrl;
    }

    _init() : string {
        const defaultSeverUrl = urls.serverUrl;
        localStorage.setItem(this.name, defaultSeverUrl);
        return defaultSeverUrl;
    }

    setServerUrl(newServerUrl : string) {
        localStorage.setItem(this.name, newServerUrl); 
    }

    getServerUrl() : string {
        const severUrl = localStorage.getItem(this.name);
        if (!severUrl) { return this._init(); }
        return severUrl;
    }
}
export default new ServerUrlProvider();
