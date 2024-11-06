import { Provider } from 'react-redux';
import { store } from './store/store';
import Feed from './components/Feed/Feed.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16 md:pt-6 max-w-[680px] mx-auto">
          <Feed />
        </main>
      </div>
    </Provider>
  );
}

export default App;