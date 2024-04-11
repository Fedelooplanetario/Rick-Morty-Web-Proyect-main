import React from 'react'
import usePage from '../hooks/usePage';
export default function hadlePage() {

    const {page,setPage} = usePage()
    const handleNextPage = () => {
      setPage(page + 1);
     
  };
  
  const handlePrevPage = () => {
      if (page > 1) {
          setPage(page - 1);
      }
  };


 return {hadlePage, handleNextPage}
}
