
import { Link } from "react-router-dom";

interface CardNoticiaProps {
  id: string;
  title: string;
  img: string;
  summary: string;
  date: string;
}

const CardNoticia = ({ id, title, img, summary, date }: CardNoticiaProps) => (
  <article className="rounded-xl shadow bg-white flex flex-col overflow-hidden hover-scale">
    <img src={img} alt={title} className="h-40 w-full object-cover" />
    <div className="flex-1 p-4 flex flex-col">
      <span className="text-xs text-gray-500 mb-1">{date}</span>
      <h3 className="text-lg font-semibold text-[#2545B8] mb-2">{title}</h3>
      <p className="text-gray-700 flex-1">{summary}</p>
      <Link
        to={`/noticias/${id}`}
        className="mt-4 self-end font-semibold text-[#2545B8] hover:underline"
        aria-label={`Ler mais sobre ${title}`}
      >
        Ler mais
      </Link>
    </div>
  </article>
);

export default CardNoticia;
