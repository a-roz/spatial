const removeSpecialSymbols = (str : string) : string =>
    str ? str.replace(/[\(\)\$\+\,\/\:\;\=\?\@\#\<\>\[\]\{\}\|\\\^\%]/g, "") : '';

export default removeSpecialSymbols;
