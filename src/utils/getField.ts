
export default function getField(arr : object, keys : string, defaultValue? : any) {
    let arrPart = arr as { [key : string] : any };
    for(const key of keys.split('.')) {
        if (arrPart[key]) {
            arrPart = arrPart[key]
        } else {
            return defaultValue;
        }
    }
    return arrPart;
}
