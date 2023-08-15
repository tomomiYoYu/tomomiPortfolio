//円グラフ
var data = {
  labels: ["Webデザイナー", "エンジニア", "営業職"],
  series: [4, 3.8, 3.2],
};

var options = {
  labelInterpolationFnc: function (value) {
    return value[0];
  },
};

var responsiveOptions = [
  [
    "screen and (max-width: 599px)",
    {
      chartPadding: 0,
      labelOffset: 6,
      labelDirection: "explode",
      labelInterpolationFnc: function (value) {
        return value;
      },
    },
  ],
  [
    "screen and (min-width: 600px)",
    {
      chartPadding: 0,
      labelOffset: 10,
      labelDirection: "explode",
      labelInterpolationFnc: function (value) {
        return value;
      },
    },
  ],
];
new Chartist.Pie(".ct-chart", data, options, responsiveOptions);

//棒グラフ
var barData = {
  labels: ["2018年", "2019年", "2020年"],
  series: [[10, 13, 28]],
};
var barOptions = {
  axisY: {
    offset: 55,
    scaleMinSpace: 30,
    labelInterpolationFnc: function (value) {
      if (Number.isInteger(value)) {
        return value + "人";
      } else {
        return;
      }
    },
  },
  width: "100%",
};
new Chartist.Bar(".ct-chart02", barData, barOptions);
