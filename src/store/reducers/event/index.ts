import { EventActionEnum, EventActions, EventState } from "./types";

const initialState: EventState = {
    events: [], 
    guests: [],
}

export default function EventReducer (state = initialState, action: EventActions): EventState {
    switch (action.type) {
        case EventActionEnum.SET_GUEST:
            return {...state, guests: action.payload}
        case EventActionEnum.SET_EVENTS:    
            return {...state, events: action.payload}

        default:
            return state;
    }
}