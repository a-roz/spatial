
const trimSlash = (str : string) : string =>
        str[str.length-1] === '/' ? str.slice(0,-1)
                                  : str;

export default trimSlash;
