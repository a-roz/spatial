
export default function throttle(f : (...args : any[]) => void, limit : number) {
    let block = false;
    return (...args : any[]) => {
        if (block) { return }
        block = true;
        setTimeout(() => { block = false; }, limit);
        f.apply(null, args);
    }
}
