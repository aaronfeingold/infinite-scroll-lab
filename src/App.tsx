import { useState } from "react";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import Modal from "./components/Modal";
import Form from "./components/Form";
import Button from "./components/Button";
import type { MockItem } from "./utils/fetchMockData";

function App() {
  const { prependItem, items, loading, hasMore, sentinelRef } =
    useInfiniteScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: Omit<MockItem, "id">) => {
    const newItem: MockItem = {
      id: Date.now(),
      ...data,
    };
    prependItem(newItem);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-900 h-screen min-h-screen flex items-center justify-center p-6">
      {/* Main Container */}
      <div className="bg-gray-800 h-full px-8 py-4 space-y-4 flex flex-col rounded shadow max-w-md sm:max-w md:max-w-lg w-full">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Infinite Scroll Demo
        </h1>
        {/* Scroll Container */}
        <div
          id="scroll-container"
          className="bg-gray-500 h-4/5 flex flex-col rounded-lg shadow overflow-y-auto space-y-4 p-4"
        >
          {/* Items List with Infinite Scroll*/}
          {items.map((item) => (
            <div key={item.id} className="p-4 bg-gray-700 rounded-lg shadow">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
          {loading && (
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900 opacity-50 rounded-lg">
                <span className="animate-bounce text-white text-lg font-bold">
                  Loading...
                </span>
              </div>
              <div className="space-y-4">
                {/* Loading Skeleton */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-700 rounded-lg shadow animate-pulse"
                  >
                    <div className="h-4 w-1/3 mb-2 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full mb-2 rounded"></div>
                      <div className="h-3 w-5/6 mb-2 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!hasMore && (
            <div className="p-4 bg-gray-700 rounded-lg shadow">
              <h2 className="text-lg font-bold">No more items to load.</h2>
            </div>
          )}
          {/* sentinel div for IntersectionObserver */}
          <div ref={sentinelRef} />
        </div>
        <Button
          text="Add Item"
          onClick={() => setIsModalOpen(true)}
          className="mx-4 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-mint-600"
        />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Form
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
