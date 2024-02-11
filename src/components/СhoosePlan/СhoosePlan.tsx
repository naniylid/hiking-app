import { vacationing, listOf } from './liProps';
import MainButton from '../Button/Button';
import './СhoosePlan.module.scss';

const СhoosePlan: React.FC = () => {
  return (
    <div className="choose-plan">
      <h1>Build Your Own Trip Plan</h1>
      <div className="vacationing">
        <h2>Vacationing:</h2>
        <ul>
          {vacationing.map((vac) => {
            const { image, title } = vac;
            return (
              <li>
                <img src={image} alt="" />
                <p>{title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="list-of">
        <h2>List of:</h2>
        <ul>
          {listOf.map((list) => {
            const { image, title } = list;
            return (
              <li>
                <img src={image} alt="" />
                <p>{title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="choose-button">
        <MainButton />
      </div>
    </div>
  );
};

export default СhoosePlan;
