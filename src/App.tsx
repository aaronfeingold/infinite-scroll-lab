import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

function App() {
  const { loading, hasMore, loadMore } = useInfiniteScroll();

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-800 items-center justify-center p-8 rounded shadow min-h-screen w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Infinite Scroll Demo
        </h1>

        <div
          id="scroll-container"
          className="flex justify-center bg-gray-500 rounded-lg shadow min-h-screen max-h-screen overflow-y-auto"
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
