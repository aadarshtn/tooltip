// ACTION_TYPES
export const DISPLAY_TOOLTIP = 'DISPLAY_TOOLTIP';
export const SET_POSITION = 'SET_POSITION';

// ACTION_CREATORS

// ACTION CREATOR FOR DISPLAYING AND HIDING TOOLTIP BY CHANGING showTooltip value between true & false
export function setShowTooltip(val) {
    return {
        type: DISPLAY_TOOLTIP,
        val
    }
}

// ACTION CREATOR FOR setting toolPosition value between left, right, top & bottom
export function setTooltipPosition(val) {
    return {
        type: SET_POSITION,
        val
    }
}