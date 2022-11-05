import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ProductBlock, Pagination, Categories, Skeleton, Slider, Search, ErrorMessage, Sort} from '../components';

import { sortList } from '../components/Sort';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectProductData } from '../redux/product/selectors';
import { setCategoryId, setCurrentPage, setFilters} from '../redux/filter/slice';
import { fetchProduct } from '../redux/product/asyncActions';
import { SearchProductParams } from '../redux/product/types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectProductData);
  const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, [])

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }
  
  const getProducts = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;
    dispatch(
      fetchProduct({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  }

  // Якщо змінили параметри і був перший рендер
  React.useEffect(() => {
    // if (isMounted.current) {
    //   const params = {
    //     categoryId: categoryId > 0 ? categoryId : null,
    //     sortProperty: sort.sortProperty,
    //     currentPage,
    //   };

    //   const queryString = qs.stringify(params, { skipNulls: true });

    //   navigate(`/?${queryString}`);
    //   }
      
    //   const params = qs.parse(window.location.search.substring(1)) as unknown as SearchProductParams;
    //   const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);
    //   dispatch(
    //     setFilters({
    //       searchValue: params.search,
    //       categoryId: Number(params.category),
    //       currentPage: Number(params.currentPage),
    //       sort: sortObj || sortList[0],
    //     }),
    //   )
      
      getProducts();
      // isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage])


  // Якщо був перший рендер, то запитуємо
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchProductParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       })
  //     )
  //   }
  //   isMounted.current = true
  // }, []);

  const products = items.map((obj: any) => <ProductBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
    <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
    <Slider />
    <div className="content__top">
    <Search />
    <Sort value={sort} />
    </div>
    {
      status === 'error' ? (
        <ErrorMessage />
      ) : (
        <>
        <div className="product__column">
          {
            status === 'loading' ? skeletons : products
          }
        </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
      )
    }
    </div>
  )
}

export default Home;


