import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancle;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: {
        q: query,
        page: 10,
        limit: 10,
        offset: offset,
      },
      cancelToken: new axios.CancelToken((c) => (cancle = c)),
    })
      .then(
        (res) => (
          setBooks((prevBooks) => {
            return [
              ...new Set([
                ...prevBooks,
                ...res.data.docs.map((b) => ({
                  id: b.cover_i,
                  title: b.title,
                  workKey: b.key,
                  author: b.author_name,
                  publishDate: b.publish_date,
                  authorKey: b.author_key,
                  isLocal: false,
                })),
              ]),
            ];
          }),
          setLoading(false)
        )
      )

      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancle();
  }, [query, pageNumber, offset]);
  return { loading, error, books, setOffset, offset };
}
