import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

import './VerticalAlignedList.css';

const HALF_LI_COUNT = 10;
const HEIGHT_LI = 80;
const CENTER_WINDOW = 0.5 * window.innerHeight - 140;

export default function VerticalAlignedList(props : {
    redHighlighter?     : boolean,
    activeIndex         : number,
    handleChangeActive  : (index : number) => void,
    onActiveClick?      : () => void,
    children            : JSX.Element[],
    className?          : string,
    elCount?            : number,
}) {
    const activeClassName = props.redHighlighter ? 'red-highlighter' : 'white-highlighter';

    const marginTopUl = (): number => {
        return CENTER_WINDOW - (HEIGHT_LI * props.activeIndex) - (HALF_LI_COUNT * HEIGHT_LI);
    }

    const paddingTopDiv = (): number => {
        return HEIGHT_LI * props.activeIndex;
    }

    const styleUl = {marginTop: `${marginTopUl()}px`};
    const styleDiv = {paddingTop: `${paddingTopDiv()}px`};

    const handleClick = (index: number) => {
        if (index === props.activeIndex && props.redHighlighter &&
            typeof props.onActiveClick === 'function') {
            props.onActiveClick();
        }
        props.handleChangeActive(index);
    }

    const emptyLiElements = () => {
        const counts = HALF_LI_COUNT - props.activeIndex;
        const res = [];
        for (let i = 0; i < counts; i++) {
            res.push(<li key={i + 'el'} />)
        }
        return res
    }

    const isIndexInDisplayedArea = (index: number): boolean => {
        return index >= props.activeIndex - HALF_LI_COUNT && index <= props.activeIndex + HALF_LI_COUNT
    }

    const LiElement = (props : any) => {
        const { ref, focused } = useFocusable({onFocus: () => { props.onFocus(props.index as number) } });
        return <li ref={ref}
                   key={props.index}
                   className={ focused? activeClassName /*props.index === props.activeIndex ? activeClassName*/ : undefined  }
                   onClick={handleClick.bind(null, props.index)}
        >{props.element}
        </li>
    }

    const elements = [...emptyLiElements(), ...props.children.map((element, index: number) => {
        return isIndexInDisplayedArea(index)
            ? LiElement({
                index,
                activeIndex: props.activeIndex,
                onFocus: props.handleChangeActive,
                element
            })
            : null
    })];

    return (
        <div className="vertical-list-container" style={ styleDiv }>
            <ul className={ "vertical-aligned-list"+ ( props.className ? ' '+props.className : '') } style={ styleUl }>
                { elements }
            </ul>
        </div>
    );
}
