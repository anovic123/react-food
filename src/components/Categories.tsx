import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
}

const categories = ['Усі', 'Пiца', 'Комбо', 'Закуска', 'Сушi', 'Напої', 'Десерти', 'Соуси']

const Categories: React.FC<CategoriesProps> = React.memo(({value, onChangeCategory}) => {

  return (
    <nav className="categories">
      <ul>
      {categories.map((categoryName, i) => (
        <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>{categoryName}</li>
      ))}
      </ul>
    </nav>
  );
});

export default Categories;