import { Div } from 'tags';
import { Content } from './Content';
import { Intake } from './Intake';
import { Consumption } from './Consumption';

export const KcalList = (children = [], props = {}) => {
  return Div(
    [
      Content([children[0]]),
      props.type === 'consumption' ? Consumption([children[1]]) : Intake([children[1]]),
    ],
    {
      ...props,
      class: `kcal-list ${props.class && props.class}`,
      style: `${Style} ${props.type === 'consumption' ? ConsumptionStyle : IntakeStyle} ${
        props.style && props.style
      }`,
    }
  );
};

const Style = `
  display: grid;
  padding: .5rem 1rem;
  border-bottom: 1px solid lightgray;
`;

const ConsumptionStyle = `
  grid-template-columns: 2fr 1fr 1fr;
`;

const IntakeStyle = `
  grid-template-columns: 2fr 2fr;
`;
