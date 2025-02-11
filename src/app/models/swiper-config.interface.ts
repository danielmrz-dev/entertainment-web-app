import { IBreakpoint } from "./breakpoint.interface";

export interface ISwiperConfig {
    slidesPerView: number,
    spaceBetween: number,
    breakpoints: IBreakpoint,
}