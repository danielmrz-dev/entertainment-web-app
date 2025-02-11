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

    bookmarkedItems = new BehaviorSubject<IMedia[]>([]);
    bookmarkedItems$ = this.bookmarkedItems.asObservable();

    private readonly _http = inject(HttpClient);
    private readonly _api = 'https://gist.githubusercontent.com/danielmrz-dev/eb5ffcc6d14f26c208dae2ef3b5fd6c2/raw/e8ae445b7f15a601dab6fbd25a6b3755b2031b36/gistfile1.txt';

    constructor() {
        this.getMedia();
    }

    getMedia(): void {
        this._http.get<IMedia[]>(this._api).pipe(take(1)).subscribe((list) => {
            this.mediaList.next(list);
            const bookmarked = list.filter(item => item.isBookmarked)
            this.bookmarkedItems.next(bookmarked);
            console.log(this.bookmarkedItems);            
        });
    }

    addBookmarked(media: IMedia) {
        this.bookmarkedItems$.pipe(take(1)).subscribe((list) => {
            if (!list.some((item) => item.title === media.title)) {
                list.push(media)
                this.bookmarkedItems.next(list);
            }
        })
    }
    
    removeBookmarked(media: IMedia) {
        this.bookmarkedItems$.pipe(take(1)).subscribe((list) => {
            const index = list.findIndex((item) => item.title === media.title)
            if (index !== -1) {
                list.splice(index, 1)
                this.bookmarkedItems.next(list);
            }
        });
    }
}