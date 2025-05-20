import { useEffect, useRef, useState } from "react";
import { fetchMockData } from "../utils/fetchMockData";
import type { MockItem } from "../utils/fetchMockData";

/**
 * This is a placeholder - we'll implement the actual logic later
 * @returns {Object}
 * @property {boolean} items - Items returned from the API
 * @property {boolean} loading - Whether the data is loading
 * @property {boolean} hasMore - Whether there is more data to load
 * @property {function} loadMore - A function to load more data
 */

/*
A React hook (useInfiniteScroll) that:

- Loads mock paginated data.
- Appends it to an existing list.
- Detects when to load the next page (via scroll position or an IntersectionObserver).
- Prevents double loading and stops when there’s no more data.
*/

export const useInfiniteScroll = () => {
  const [items, setItems] = useState<MockItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinalRef = useRef<HTMLDivElement>(null);

  const loadMore = async () => {
    // if loading or no more, we can return anything
    if (loading || !hasMore) {
      return;
    }

    // otherwise let's get more, so set loading to true
    setLoading(true);

    // fetch the data
    const { items: newItems, hasMore: newHasMore } = await fetchMockData(page);

    // update the items and page
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setHasMore(newHasMore);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) return;
    // create an observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    const current = sentinalRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [loading, hasMore]);

  return {
    items,
    loading,
    hasMore,
    sentinalRef,
  };
};
