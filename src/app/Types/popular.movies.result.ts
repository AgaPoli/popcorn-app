import { MovieListType } from './movie.list.type';


export class PopularMoviesResultType {
    public page: number;
    public total_results: number;
    public total_pages: number;
    public results: MovieListType[];
}
