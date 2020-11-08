import { Div } from 'tags';
import { DateTitle } from './DateTitle';
import { KcalList } from './KcalList';

export const DateList = (children = [], props = {}) => {
  return Div(
    [DateTitle([props.date]), KcalList([props.content, props.kcal], { type: props.type })],
    {
      ...props,
      id: props.date,
      class: `date-list ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  margin: auto;
  width: 50%;
`;
