import { Div } from 'tags';
import { Graph } from 'components';

const GraphPage = () => {
  return Div([Graph()], {
    class: 'graph-page',
  });
};

export default GraphPage;
