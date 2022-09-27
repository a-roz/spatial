import localStorageNames from '../../config/localStorageNames';


class ParentalControlProvider {
    name  : string;

    constructor() {
        this.name = localStorageNames.parentControl;
    }

    _init() : string {
        const defaultParentControl = 'enabled';
        localStorage.setItem(this.name, defaultParentControl);
        return defaultParentControl;
    }

    setParentControl(parentControl : string) {
        localStorage.setItem(this.name, parentControl);
    }

    getParentControl() : string {
        const parentControl = localStorage.getItem(this.name);
        if (!parentControl) { return this._init(); }
        return parentControl;
    }
}
export default new ParentalControlProvider();
