import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

function App() {
  const { loading, hasMore, loadMore } = useInfiniteScroll();

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
          <p className="text-white p-4">
            Scroll container ready for implementation
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
