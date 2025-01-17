import { IClickEvent } from "./IClickEvent";
import { IHoverEvent } from "./IHoverEvent";
import { IDivEvent } from "./IDivEvent";
export interface IEvents {
    /**
     * @deprecated use the new onClick instead
     */
    onclick: IClickEvent;
    /**
     * @deprecated use the new onHover instead
     */
    onhover: IHoverEvent;
    /**
     * @deprecated use the new onDiv instead
     */
    ondiv: IDivEvent;
    onClick: IClickEvent;
    onHover: IHoverEvent;
    onDiv: IDivEvent;
    resize: boolean;
}
