import { useEffect, useRef } from 'react';
import config   from '../config';
import throttle from './throttle';


export default function useEventListener(eventName : string, handler : (event : any) => void, element : any = window) {

    const savedHandler : React.MutableRefObject<any> = useRef();

    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {

        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        const eventListener : EventListener = throttle((event : any) => {
            savedHandler.current(event);
        }, config.throttleLimitForEvents);

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
      }, [eventName, element]);
};
