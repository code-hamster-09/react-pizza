export default function Categories({ value, setCategoryId }) {
  let categoryName = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoryName.map((c, i) => {
          return (
            <li
              className={value === i ? "active" : null}
              onClick={() => setCategoryId(i)}
              key={i}
            >
              {c}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
