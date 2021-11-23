import "./notFound.css";

export default function NotFound() : JSX.Element{
  return (
    <div className="notFound">
      <h2>404</h2>
      <img className="notFound__img" src="/stavrovadv-JSFE2021Q1/english-for-kids/img/404.gif" alt="" />
      <p>Страница не найдена</p>
    </div>
  )
}