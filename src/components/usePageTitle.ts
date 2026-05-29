import { useEffect } from 'react';

const BASE = 'SIST ACM SIGAI';

const usePageTitle = (page?: string) => {
  useEffect(() => {
    document.title = page ? `${page} | ${BASE}` : BASE;
    return () => {
      document.title = BASE;
    };
  }, [page]);
};

export default usePageTitle;
