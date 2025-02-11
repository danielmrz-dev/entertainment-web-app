import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, take } from "rxjs";
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
        this.mediaList$.pipe(
            map((list) => {
                if (!list.includes(media)) {
                    list.push(media);
                    this.mediaList.next(list);
                }
            })
        )
    }

    removeBookmarked(media: IMedia) {
        this.mediaList$.pipe(
            map((list) => {
                const index = list.findIndex((item) => item === media);
                if (index !== -1) {
                    list.splice(index, 1);
                    this.mediaList.next(list);
                }
            })
        )
    }
}