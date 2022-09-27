
export default function generateArray(beginIndex : number, endIndex : number) : number[] {

    const arr = [] as number[];
    for (let index = beginIndex; index <= endIndex; index++) {
        arr.push(index);
    }
    return arr;
}
