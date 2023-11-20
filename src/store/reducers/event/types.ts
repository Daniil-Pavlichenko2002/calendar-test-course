import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}

export enum EventActionEnum {
    SET_GUEST = "SET_GUEST",
    SET_EVENTS = "SET_EVENTS",
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUEST;
    payload: IUser[]
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}
export type EventActions = 
    SetGuestsAction |
    SetEventsAction