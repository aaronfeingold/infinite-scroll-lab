import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

function App() {
  const { items, loading, hasMore, sentinalRef } = useInfiniteScroll();

  return (
    <div className="bg-gray-900 h-screen min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 h-full px-6 py-4 flex flex-col rounded shadow max-w-md sm:max-w md:max-w-lg w-full">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Infinite Scroll Demo
        </h1>

        <div
          id="scroll-container"
          className="bg-gray-500 h-4/5 flex justify-center rounded-lg shadow overflow-y-auto space-y-4"
        >
          {/* Content will be added here */}
          {items.map((item) => (
            <div key={item.id} className="p-4 bg-gray-700 rounded-lg shadow">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
          {loading && (
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded">
              <h2 className="text-lg font-bold">Loading...</h2>
            </div>
          )}
          {!hasMore && (
            <div className="p-4 bg-gray-700 rounded-lg shadow">
              <h2 className="text-lg font-bold">No more items to load.</h2>
            </div>
          )}
          {/* sentinel div for IntersectionObserver */}
          <div ref={sentinalRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
