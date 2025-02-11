import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, pipe, take } from "rxjs";
import { IMedia } from "../models/media/media.interface";

@Injectable({
    providedIn: 'root'
})
export class MoviesAndSeriesService {

    mediaList = new BehaviorSubject<IMedia[]>([]);
    mediaList$ = this.mediaList.asObservable();
    private readonly _http = inject(HttpClient);
    private readonly _api = 'https://gist.githubusercontent.com/danielmrz-dev/eb5ffcc6d14f26c208dae2ef3b5fd6c2/raw/e8ae445b7f15a601dab6fbd25a6b3755b2031b36/gistfile1.txt';

    constructor() {
        this.getMedia();
    }

    getMedia(): void {
        this._http.get<IMedia[]>(this._api).pipe(take(1)).subscribe((list) => {
            this.mediaList.next(list);
        });
    }

    addBookmarked(media: IMedia) {
        this.mediaList$.pipe(take(1)).subscribe((list) => {
            if (!list.some((item) => item.title === media.title)) {
                const updatedList = [...list, media]
                this.mediaList.next(updatedList);
            }
        })
    }
    
    removeBookmarked(media: IMedia) {
        this.mediaList$.pipe(take(1)).subscribe((list) => {
            const updatedList = list.filter((item) => item.title !== media.title);
            this.mediaList.next(updatedList);
        });
    }
}