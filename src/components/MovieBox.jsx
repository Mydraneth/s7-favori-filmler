import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieBox(props) {
  const { id, title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      {/*
        filme tıklanınca /filmler/:id route'una yönlenmeli.
        İpucu: ekleyeceğin tıklanacak şey:
          - movie-card içinde olmalı
          - alttaki h3 ve p'leri kapsamalı.
      */}
      <Link to={`/filmler/${id}`}>
        <h3>{title}</h3>
        <p>
          <strong>Director:</strong> {director}
        </p>
        <p>
          <strong>Metascore:</strong> {metascore}
        </p>
      </Link>
    </div>
  );
}
