import { Div, Svg, G, Line, Text, Circle } from 'tags';
import { getDayKcal } from 'utils/kcal-calculator';

export const Graph = (children = [], props = {}) => {
  const VerticalText = [
    ...createVerticalGraph(),
    Text(['kcal'], { class: 'label-title', x: '25', y: '200' }),
  ];

  const HorizontalText = [
    ...createHorizontalGraph(),
    Text(['day'], { class: 'label-title', x: '400', y: '440' }),
  ];

  const GraphCirlce = createGraphContent();

  return Div(
    [
      Svg(
        [
          // 세로축
          G([Line([], { x1: '90', x2: '90', y1: '5', y2: '371' })], {
            class: 'grid x-grid',
            id: 'xGrid',
            style: 'stroke: #ccc; stroke-dasharray: 0; stroke-width: 1;',
          }),

          // 세로축 텍스트
          G(VerticalText, {
            class: 'labels y-labels',
            style:
              'font-weight: bold; font-size: 12px; fill: black; text-anchor: end; font-size: 13px;',
          }),

          // 가로축
          G([Line([], { x1: '90', x2: '705', y1: '370', y2: '370' })], {
            class: 'grid y-grid',
            id: 'yGrid',
            style: 'stroke: #ccc; stroke-dasharray: 0; stroke-width: 1;',
          }),

          // 가로축 텍스트
          G([...HorizontalText], {
            class: 'labels x-labels',
            style:
              'font-weight: bold; font-size: 12px; fill: black; text-anchor: middle; font-size: 13px;',
          }),

          // 점
          G(GraphCirlce, { class: 'data', style: 'fill: red; stroke-width: 1;' }),
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

const createVerticalGraph = () => {
  const dayKcalData = getDayKcal();
  const MAX_VALUE = Math.max(...Object.values(dayKcalData));
  const result = [Text([0], { x: '80', y: '373' })];
  for (let key in dayKcalData) {
    result.push(
      Text([dayKcalData[key]], {
        x: '80',
        y: String(15 + 358 * (1 - dayKcalData[key] / MAX_VALUE)),
      })
    );
  }
  return result;
};

const createHorizontalGraph = () => {
  const dayKcalData = getDayKcal();
  const dayList = Object.keys(dayKcalData).map((value) => value.substr(8, 2) + '일');
  const result = dayList.map((value, idx) => {
    return Text([value], {
      x: String(684 - 534 * (idx / (dayList.length - 1))),
      y: '400',
    });
  });
  return result;
};

const createGraphContent = () => {
  const dayKcalData = getDayKcal();
  const MAX_VALUE = Math.max(...Object.values(dayKcalData));
  const dayList = Object.keys(dayKcalData);
  const result = dayList.map((key, idx) => {
    // 점 cx: (가로축 텍스트 위치 - 6~10), cy: 세로축 위치 역으로 계산, r: 반지름
    return Circle([], {
      cx: String(684 - 534 * (idx / (dayList.length - 1))),
      cy: String(15 + 358 * (1 - dayKcalData[key] / MAX_VALUE)),
      r: '4',
      value: dayKcalData[key],
    });
  });
  return result;
};
