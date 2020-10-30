export const DISPLAY_TOOLTIP = 'DISPLAY_TOOLTIP';
export const SET_POSITION = 'SET_POSITION';

export function setShowTooltip(val) {
    return {
        type: DISPLAY_TOOLTIP,
        val
    }
}

export function setTooltipPosition(val) {
    return {
        type: SET_POSITION,
        val
    }
}