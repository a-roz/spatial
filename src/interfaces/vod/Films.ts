import IFilm from './Film';

export default interface IFilms {
    data: IFilm[],
    max_page_items: number,
    total_items: number,
}