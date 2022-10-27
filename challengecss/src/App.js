import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const myCars = [
    { name:'Ferrari', km: 3000, color: 'red' },
    { name:'Volks', km: 15000, color: 'blue' },
    { name:'GM', km: 10000, color: 'black' },
  ];

  return (
    <div className="App">
      <h1>Carros</h1>
      <div className="car_container">
        {myCars.map((car) => (
          <CarDetails car={car} />
       ))}
      </div>
    </div>
    
  );
}

export default App;
