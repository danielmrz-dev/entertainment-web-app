import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IMedia } from "../models/media/media.interface";

@Injectable({
    providedIn: 'root'
})
export class MoviesAndSeriesService {

    private readonly _api = 'https://gist.githubusercontent.com/danielmrz-dev/eb5ffcc6d14f26c208dae2ef3b5fd6c2/raw/e8ae445b7f15a601dab6fbd25a6b3755b2031b36/gistfile1.txt'
    private readonly _http = inject(HttpClient)

    getMedia(): Observable<IMedia[]> {
        return this._http.get<IMedia[]>(this._api);
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
}