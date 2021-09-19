import { Fragment,useState  } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = props => {

    const [summaryshow, setsummary] = useState(true);

  const onSetSummary = () => {
      setsummary(false);
  };
    return (<Fragment>
        {summaryshow && <MealsSummary onShowSummary={onSetSummary}/>}
        <AvailableMeals/>
    </Fragment>);
};


export default Meals;