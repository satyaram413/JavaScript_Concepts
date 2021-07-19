let counter = 0;
const getData = () => {
  //calls an api and gets data
  console.log("fetching data");
};

const debouncer = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const betterFunction = debouncer(getData, 300);

/*Use Cases 
calling an api/function when scrolling in a page, we can use debouncer in that case
resizing a window*/
