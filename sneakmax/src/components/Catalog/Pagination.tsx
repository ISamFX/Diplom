import styled from "./style.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { loadMore } from "../../redux/sneak/sneakSlice"
import { RootState } from "../../store"

export const Pagination = () => {
  const { currentPage, totalPages } = useSelector((state: RootState) => ({
    currentPage: state.sneak.currentPage,
    totalPages: state.sneak.totalPages,
  }));
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(loadMore());
    }
  };

  return (
    <div className={styled.pagination_container}>
      {currentPage < totalPages && (
        <button onClick={handleLoadMore} className={styled.btn_show}>
          Показать еще
        </button>
      )}
    </div>
  );
};
