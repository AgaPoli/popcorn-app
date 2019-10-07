import { GenreType } from './genre.type';
import { CountryType } from './country.type';

export class MovieDetailType {
    public genres: GenreType[];
    public production_countries: CountryType[];
}
