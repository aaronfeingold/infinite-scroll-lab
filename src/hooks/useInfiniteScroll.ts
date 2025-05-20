import { useEffect, useRef, useState, useCallback } from "react";
import { fetchMockData } from "../utils/fetchMockData";
import type { MockItem } from "../utils/fetchMockData";

/**
 * TA React hook (useInfiniteScroll) that:

- Loads mock paginated data.
- Appends it to an existing list.
- Detects when to load the next page (via scroll position or an IntersectionObserver).
- Prepends it to an existing list.
- Prevents double loading and stops when there’s no more data.

 * @returns {Object}
 * @property {boolean} items - Items returned from the API
 * @property {boolean} loading - Whether the data is loading
 * @property {boolean} hasMore - Whether there is more data to load
 * @property {function} loadMore - A function to load more data
 * @property {function} prependItem - A function to prepend item to the list
 */

interface UseInfiniteScroll {
  items: MockItem[];
  loading: boolean;
  hasMore: boolean;
  sentinelRef: React.RefObject<HTMLDivElement | null>;
  loadMore: () => void;
  prependItem: (newItem: MockItem) => void;
}

export const useInfiniteScroll = (): UseInfiniteScroll => {
  const [items, setItems] = useState<MockItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const prependItem = useCallback((newItem: MockItem) => {
    setItems((prev) => [newItem, ...prev]);
  }, []);

  const loadMore = useCallback(async () => {
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
  }, [loading, hasMore, page]);

  useEffect(() => {
    if (loading) return;
    // create an observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    const current = sentinelRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [loading, hasMore, loadMore]);

  return {
    prependItem,
    items,
    loading,
    hasMore,
    sentinelRef,
    loadMore,
  };
};
