import { IBreakpoint } from "../models/breakpoint.interface";

export function generateBreakpoints(): IBreakpoint {
    const breakpoints: IBreakpoint = {};
    let slidesPerView = 2;
    let slidesPerViewTablet = 1.8;
    let slidesPerViewDesktop = 2;

    for (let i = 375; i <= 1440; i += 50) {
        if (i < 768) {
            breakpoints[i] = { slidesPerView };
            slidesPerView = Number((slidesPerView + 0.2).toFixed(1));
        } else if (i >= 768 && i <= 1024) {
            breakpoints[i] = { slidesPerView: slidesPerViewTablet };
            slidesPerViewTablet = Number((slidesPerViewTablet + 0.1).toFixed(1));
        } else {
            breakpoints[i] = { slidesPerView: slidesPerViewDesktop };
            slidesPerViewDesktop = Number((slidesPerViewDesktop + 0.065).toFixed(1));
        }
    }
    
    return breakpoints;
}
