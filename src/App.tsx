import Header from './components/Header/Header';
import Navigation from './components/Navigation/Nav';
import СhoosePlan from './components/СhoosePlan/СhoosePlan';
import './styles/main.scss';

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <СhoosePlan />
    </div>
  );
};

export default App;
