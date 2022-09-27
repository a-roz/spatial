
export default function insertSymbol(originStr : string, insertString : string, position : number) {
    return [originStr.slice(0, position), insertString, originStr.slice(position)].join('');
}