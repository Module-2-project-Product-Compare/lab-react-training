import IdCard from './components/IdCard';
import './App.css';
import Grettings from './components/Greetings';
import Random from './components/Random';

const userIdCard = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 1.78,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 1.72,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  },
]

function App() {
  return (
    <div className="App">
      <h1>User profile</h1>
      {userIdCard.map((elem, i) => {
        return (
          <IdCard key={i} user={elem} />
        )
      })}

      <Grettings className="card-user" lang="de">Ludwig</Grettings>
      <Grettings lang="fr">François</Grettings>
      <Grettings lang="es">Carlos</Grettings>
      <Grettings lang="en">Jhon</Grettings>

      <p>Random value between 1 and 6 <Random min={1} max={6} /></p>
      <p>Random value between 1 and 6 <Random min={1} max={100} /></p>
    </div>
  );
}

export default App;
