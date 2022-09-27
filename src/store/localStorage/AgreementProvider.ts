import localStorageNames from "../../config/localStorageNames";

class AgreementProvider {
    name  : string;

    constructor() {
        this.name = localStorageNames.agreementDate;
    }

    _init() : string {
        const defaultAgreementDate = '';
        localStorage.setItem(this.name, defaultAgreementDate);
        return defaultAgreementDate;
    }

    setAgreementDate(agreementDate : string) {
        localStorage.setItem(this.name, agreementDate);
    }

    getAgreementDate() : string {
        const agreementDate = localStorage.getItem(this.name);
        if (!agreementDate) { return this._init(); }
        return agreementDate;
    }
}
export default new AgreementProvider();
