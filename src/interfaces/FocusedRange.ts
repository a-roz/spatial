
// up && down OR full
export default interface IFocusedRange {
    x : {
        down? : number,
        up?   : number,
        full? : boolean,
    },
    y : {
        down? : number,
        up?   : number,
        full? : boolean,
    }
}
