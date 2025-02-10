import { Regular } from "./regular.interface"
import { Trending } from "./trending.interface"

export interface Thumbnail {
    trending?: Trending
    regular: Regular
}