import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Pagination = ({nextPageFn, prevPageFn, pageNum}) => {

    return (
        <div className="flex justify-center items-center gap-10 mt-20">
            <BsChevronLeft onClick={prevPageFn} className="hover:cursor-pointer"/>
            {pageNum}
            <BsChevronRight onClick={nextPageFn} className="hover:cursor-pointer"/>
        </div>
    )
}

export default Pagination;