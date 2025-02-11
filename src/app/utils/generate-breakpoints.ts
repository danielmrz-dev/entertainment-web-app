import { IBreakpoint } from "../models/breakpoint.interface";

export function generateBreakpoints(): { [key: number]: { slidesPerView: number } } {
    const breakpoints: IBreakpoint = {};
    let slidesPerView = 2;
    for (let i = 375; i <= 1440; i += 50) {
        breakpoints[i] = { slidesPerView };
        slidesPerView = Number((slidesPerView + 0.2).toFixed(1));
    }
    return breakpoints;
}