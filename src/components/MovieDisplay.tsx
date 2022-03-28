/* eslint-disable @next/next/no-img-element */
import style from '../styles/MovieDisplay.module.css';

interface IProps {
  imgURL: string;
  title: string;
  release_date?: string;
  vote_average?: number;
  media_type?: string;
  genre_ids?: Array<number>;
  overview?: string;
}

const MovieDisplay = (props:IProps): JSX.Element => (
  <div className={style.card}>
    <img
      className={style.cover}
      src={props.imgURL}
      alt={`imagem da capa do titulo: ${props.title}`}
    />
    <h1 className={style.title}>{props.title}</h1>
    <div className={style.subtitle}>
    <p>Lançado em: {props.release_date?.split('-')[0]}</p>
    <p>Nota do publico: {props.vote_average}</p>
    </div>
  </div>
);

export default MovieDisplay;