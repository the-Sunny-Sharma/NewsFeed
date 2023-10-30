import './App.css';
import NewsFeed from './NewsFeed';
import FormikForm from './FormikForm';

function App() {
  return (
    <div className='main-wrapper'>
      <FormikForm />
        <NewsFeed />
    </div>
  );
}

export default App;
