import s from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={s.root}>
      <h1>Нічого не знайдено</h1>
      <p className={s.description}>Нажаль дана сторінка відсутня у нашому інтернет-магазині</p>
    </div>
  );
};

export default NotFoundBlock;
