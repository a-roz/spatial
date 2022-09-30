import React, {useEffect} from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

import './VerticalAlignedList.css';

const HALF_LI_COUNT = 10;
const HEIGHT_LI = 80;
const CENTER_WINDOW = 0.5 * window.innerHeight - 140;

export default function VerticalAlignedList(props : {
    navKey              : string,
    redHighlighter?     : boolean,
    activeIndex         : number,
    handleChangeActive  : (index : number) => void,

    handleSetFocus      : (key: string) => void,

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

    const handleClick = (index: number, focusKey: string) => {
        console.log(`handleClick(${index}, ${focusKey})`);

        props.handleSetFocus(focusKey);
/*
        if (index === props.activeIndex && props.redHighlighter &&
            typeof props.onActiveClick === 'function') {
            props.onActiveClick();
        }
*/
//        if (index !== props.activeIndex) props.handleChangeActive(index);
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

    /* =======================================================
        list element object
     ======================================================= */
    const LiElement = (props : {
        index: number
        navKey: string
        onElementFocus: (i: number) => void
        element: JSX.Element
    }) => {

        const { ref, focused, focusKey } = useFocusable({
            focusKey: `${props.navKey}${props.index}`,
            onFocus: () => { console.log(`onFocus(${props.index})`); ref.current.click(); props.onElementFocus(props.index) },
            onEnterPress: () => { console.log(`onEnterPress(${props.index})`); (ref.current).click() },
        });

        const InnerElement = React.forwardRef<HTMLAnchorElement>((props:any, ref) => (
            <li
                key={props.index}
                className={ focused? activeClassName : undefined  }
            >
                {props.element}

            </li>
        ));

        return (

            <li ref={ref}
                   key={props.index}
                   className={ focused? activeClassName  : undefined  }
                   onClick={() => console.log(`LI CLICK !`) }
/*
                   onClick={handleClick.bind(null, props.index, focusKey)}
*/

        >
                {props.element}
        </li>

        )
    }

    const elements = [...emptyLiElements(), ...props.children.map((element, index: number) => {
        return isIndexInDisplayedArea(index)
            ? LiElement({
                index,
                element,
                navKey: props.navKey,
                onElementFocus: props.handleChangeActive,
//                onClick: props.handleChangeActive,
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
