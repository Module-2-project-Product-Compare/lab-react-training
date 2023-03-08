import IdCard from './components/IdCard';
import './App.css';
import Grettings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import creditCardData from './creditCardData.json';
import Rating from './components/Rating';
import driverData from './driverData.json';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';

const userIdCard = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 1.78,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 1.72,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className="App">
      {userIdCard.map((elem, i) => {
        return <IdCard key={i} user={elem} />;
      })}

      <Grettings className="card-user" lang="de">
        Ludwig
      </Grettings>
      <Grettings lang="fr">François</Grettings>
      <Grettings lang="es">Carlos</Grettings>
      <Grettings lang="en">Jhon</Grettings>

      <p>
        Random value between 1 and 6 <Random min={1} max={6} />
      </p>
      <p>
        Random value between 1 and 6 <Random min={1} max={100} />
      </p>

      <BoxColor r={255} g={0} b={0}>rgb</BoxColor>
      <BoxColor r={128} g={255} b={0}></BoxColor>

      <section className="credit-card-container">
        {creditCardData.map((elem, i) => {
          return <CreditCard key={i} info={elem} />;
        })}
      </section>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <section className="driver-card-container">
        {driverData.map((elem, i) => {
          return <DriverCard key={i} info={elem} />;
        })}
      </section>
      <LikeButton />

      <Dice />

    </div>
  );
}

export default App;
