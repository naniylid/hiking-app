import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

import './styles/main.scss'
import ToDo from './components/ToDo/ToDo';
import ChoosePlan from './components/СhoosePlan/СhoosePlan';
import Weather from './pages/Weather/Weather';
import Map from './pages/Map/Map';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={ <Header/>} />
      <Route path='/todo' element={<ToDo/>} />
      <Route path="/weather" element={<Weather/>} />
      <Route path="/open-map" element={<Map/>} />
      <Route path="/choosePlan" element={ <ChoosePlan />} />
    </Route>

  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
