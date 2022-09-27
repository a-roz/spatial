const decodeHtml = (item: string) =>
    (item) && item.replace(/&amp;/g, "&");

export default decodeHtml;
