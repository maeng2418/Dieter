const store = {};

const setEvent = (key, eventHandler) => {
  // 등록된 키에 이벤트를 등록해준다.
  // 데이터가 바뀌고 나서 실행하고 싶은 이벤트를 등록하면 될 것 같다.
  store[key] = { ...store[key], eventHandler };
};

const getState = (key) => {
  // store에 등록한 키의 데이터를 리턴시켜준다.
  return store[key].data;
};

const setState = (key, data) => {
  // store에 등록한 키의 데이터를 업데이트 한다.
  store[key] = { ...store[key], data };
  // 데이터가 변경되고 등록된 이벤트를 실행한다.
  store[key].hasOwnProperty('eventHandler') && store[key].eventHandler(store[key].data);
};

export { setEvent, setState, getState };
