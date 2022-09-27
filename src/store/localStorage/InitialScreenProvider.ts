import localStorageNames from '../../config/localStorageNames';


class InitialScreenProvider {
    name  : string;

    constructor() {
        this.name = localStorageNames.initialScreen;
    }

    _init() : string {
        const defaultInitialScreen = 'default';
        localStorage.setItem(this.name, defaultInitialScreen);
        return defaultInitialScreen;
    }

    setInitialScreen(initialScreen : string) {
        localStorage.setItem(this.name, initialScreen); 
    }

    getInitialScreen() : string {
        const initialScreen = localStorage.getItem(this.name);
        if (!initialScreen) { return this._init(); }
        return initialScreen;
    }
}
export default new InitialScreenProvider();
