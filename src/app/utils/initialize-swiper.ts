import { ElementRef } from "@angular/core";
import { ISwiperConfig } from "../models/swiper-config.interface";

export function initializeSwiper(swiper: ElementRef, swiperConfig: ISwiperConfig) {
    if (swiper) {
        Object.assign(swiper.nativeElement, swiperConfig);
        swiper.nativeElement.initialize();
    }
}