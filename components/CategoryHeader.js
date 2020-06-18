export default function ({ id, info }) {
  return (
    <div className="info_company">
      <header className="header_blogs">
        <div className="title_blog mb_custom">{id}</div>
        <p>{info}</p>
      </header>
    </div>
  );
}
