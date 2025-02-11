import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { IMedia } from "../models/media/media.interface";

@Injectable({
    providedIn: 'root'
})
export class MoviesAndSeriesService {

    bookmarked: IMedia[] = [];
    private readonly _http = inject(HttpClient);
    private readonly _api = 'https://gist.githubusercontent.com/danielmrz-dev/eb5ffcc6d14f26c208dae2ef3b5fd6c2/raw/e8ae445b7f15a601dab6fbd25a6b3755b2031b36/gistfile1.txt';

    getMedia(): Observable<IMedia[]> {
        return this._http.get<IMedia[]>(this._api).pipe(
            map((list) => {
                this.bookmarked = list.filter((media) => media.isBookmarked);
                return list;
            })
        );
    }

    getMovies(): Observable<IMedia[]> {
        return this._http.get<IMedia[]>(this._api).pipe(
            map((mediaList) => {
                const movies = mediaList.filter((media) => media.category === 'Movie');
                return movies;
            })
        )
    }

    getTVSeries(): Observable<IMedia[]> {
        return this._http.get<IMedia[]>(this._api).pipe(
            map((mediaList) => {
                const movies = mediaList.filter((media) => media.category === 'TV Series');
                return movies;
            })
        )
    }

    getTrending(): Observable<IMedia[]> {
        return this._http.get<IMedia[]>(this._api).pipe(
            map((mediaList) => {
                const movies = mediaList.filter((media) => media.isTrending === true);
                return movies;
            })
        )
    }

    addBookmarked(media: IMedia) {
        if (!this.bookmarked.includes(media)) {
            this.bookmarked.push(media);
        }
    }

    removeBookmarked(media: IMedia) {
        const index = this.bookmarked.findIndex((item) => item === media);
        if (index !== -1) {
            this.bookmarked.splice(index, 1);
        }
    }
}