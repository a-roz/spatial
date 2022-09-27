import IProgramInEPG from "../interfaces/tv/ProgramInEPG";
import decodeHtml    from "./decodeHtml";

const decodeHtmlProgram = (item: IProgramInEPG) => {
    item.name = decodeHtml(item.name);
     item.descr = decodeHtml(item.descr);
    return item;
}

export default decodeHtmlProgram;
