
const spaceToUnderscore = (str : string) : string =>
        str ? str.replace(/ /g,"_") : '';

export default spaceToUnderscore;
