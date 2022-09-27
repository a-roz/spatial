
export default function cropText(text : string, maxSize : number) : string {
    if (text.length <= maxSize) { return text; }

    const regex = /\b(?=([\p{P}\p{M}]?[\p{Z}\s]?[\p{L}\p{N}]*$))/u;

    text = text.slice(0, maxSize);
    text = text.slice(0, text.search(regex));

    return text + '...';
}
