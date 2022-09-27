import localStorageNames from "../../config/localStorageNames";

class SearchHistoryProvider {
    name  : string;

    constructor() {
        this.name = localStorageNames.searchHistory;
    }

    _init() : string[] {
        const defaultSearchHistory = [] as string[];
        localStorage.setItem(this.name, JSON.stringify(defaultSearchHistory));
        return defaultSearchHistory;
    }

    setSearchHistory(searchHistory : string[]) {
        localStorage.setItem(this.name, JSON.stringify(searchHistory));
    }

    getSearchHistory() : string[] {
        const searchHistory = localStorage.getItem(this.name);
        if (!searchHistory) { return this._init(); }
        return JSON.parse(searchHistory);
    }
}
export default new SearchHistoryProvider();
