export interface MockItem {
  id: number;
  title: string;
  description: string;
}

const generateMockItems = (page: number, itemsPerPage: number): MockItem[] => {
  const startIndex = (page - 1) * itemsPerPage;
  return Array.from({ length: itemsPerPage }, (_, index) => ({
    id: startIndex + index + 1,
    title: `Item ${startIndex + index + 1}`,
    description: `This is a description for item ${startIndex + index + 1}`,
  }));
};

export const fetchMockData = async (
  page: number,
  itemsPerPage: number = 10
): Promise<{
  items: MockItem[];
  hasMore: boolean;
}> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate total of 50 items
  const totalItems = 50;
  const items = generateMockItems(page, itemsPerPage);
  const hasMore = page * itemsPerPage < totalItems;

  return {
    items,
    hasMore,
  };
};
