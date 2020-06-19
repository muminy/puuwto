export default function ({ slug, link, info }) {
  return (
    <div className="my_apps j_script">
      <div className="type_lang">Javascript</div>
      <div className="apps_info">
        <h3>{slug}</h3>
        <a href={link}>Open Source</a>
      </div>
      <p>{info}</p>
    </div>
  );
}
