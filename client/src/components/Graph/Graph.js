import { Div, Svg, G, Line, Text, Circle } from 'tags';

export const Graph = (children = [], props = {}) => {
  return Div(
    [
      Svg(
        [
          G([Line([], { x1: '90', x2: '90', y1: '5', y2: '371' })], {
            class: 'grid x-grid',
            id: 'xGrid',
            style: 'stroke: #ccc; stroke-dasharray: 0; stroke-width: 1;',
          }),
          G([Line([], { x1: '90', x2: '705', y1: '370', y2: '370' })], {
            class: 'grid y-grid',
            id: 'yGrid',
            style: 'stroke: #ccc; stroke-dasharray: 0; stroke-width: 1;',
          }),
          G(
            [
              Text(['2008'], { x: '100', y: '400' }),
              Text(['2009'], { x: '246', y: '400' }),
              Text(['2010'], { x: '392', y: '400' }),
              Text(['2011'], { x: '538', y: '400' }),
              Text(['2012'], { x: '684', y: '400' }),
              Text(['day'], {
                class: 'label-title',
                x: '400',
                y: '440',
                style:
                  'font-weight: bold; text-transform: uppercase; font-size: 12px; fill: black;',
              }),
            ],
            {
              class: 'labels x-labels',
              style: 'text-anchor: middle; font-size: 13px;',
            }
          ),
          G(
            [
              Text(['15'], { x: '80', y: '15' }),
              Text(['10'], { x: '80', y: '131' }),
              Text(['5'], { x: '80', y: '248' }),
              Text(['0'], { x: '80', y: '373' }),
              Text(['kcal'], { class: 'label-title', x: '50', y: '200' }),
            ],
            {
              class: 'labels y-labels',
              style:
                'font-weight: bold; font-size: 12px; fill: black; text-anchor: end; font-size: 13px;',
            }
          ),
          G(
            [
              Circle([], { cx: '90', cy: '192', r: '4', value: '7.2' }),
              Circle([], { cx: '240', cy: '141', r: '4', value: '8.1' }),
              Circle([], { cx: '388', cy: '179', r: '4', value: '7.7' }),
              Circle([], { cx: '531', cy: '200', r: '4', value: '6.8' }),
              Circle([], { cx: '677', cy: '104', r: '4', value: '6.7' }),
            ],
            { class: 'data', style: 'fill: red; stroke-width: 1;' }
          ),
        ],
        { class: 'graph', style: 'height: 500px; width: 800px;' }
      ),
    ],
    {
      ...props,
      class: `graph-container ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  display: flex;
  justify-content: center;
  margin: 3rem auto;
`;
