import { CardGrid } from '../component/CardGrid';
import Hero from '../component/Hero'

const Home = ({ features }) => {
  console.log(features)
  return (
    <div>
      <Hero/>
      <CardGrid features={features}/>
    </div>
  );
};

export default Home;
