
// if type === action-button , then should be onClick
// if type === route         , then should be component
interface IRouteAndComponent {
    title           : string,
    route           : string,
    component?      : JSX.Element,
    onClick?        : () => void,
};
export default IRouteAndComponent;
