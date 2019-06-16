;
(function() {
  window.myModule = {
    getMin: function(arr) {
      if (!arr || !Array.isArray(arr) || arr.some(isNaN)) {
        return console.log("The argument is not valid!");
      }
      return Math.min(...arr);
    },
    getMax: function(arr) {
      if (!arr || !Array.isArray(arr) || arr.some(isNaN)) {
        return console.log("The argument is not valid!");
      }
      return Math.max(...arr);
    },
    getAvg: function(arr) {
      if (!arr || !Array.isArray(arr) || arr.some(isNaN)) {
        return console.log("The argument is not valid!");
      }
      let res = 0;
      arr.forEach((num) => {
        res += num;
      })
      return res / arr.length;
    },
    getCopy: function(arr) {
      return [...arr];
    }
  };
}());
