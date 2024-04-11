import React from 'react'
import { useState, useEffect } from 'react';

export default function usePage() {
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("Valor de page useEffect navpage: " + page);
  }, [page]);

  return { page, setPage }
}









