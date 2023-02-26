import IdCard from './components/IdCard';
import './App.css';
import Grettings from './components/Greetings';

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

      <Grettings lang="de">Ludwig</Grettings>
      <Grettings lang="fr">François</Grettings>
      <Grettings lang="es">Carlos</Grettings>
      <Grettings lang="en">Jhon</Grettings>
    </div>
  );
}

export default App;
