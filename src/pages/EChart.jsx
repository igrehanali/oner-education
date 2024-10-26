import ReactECharts from "echarts-for-react";

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "Universities",
        "High-Schools",
        "Language-Programs",
        "Vocational",
        "Summer Camps",
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      barWidth: "60%",
      data: [390, 300, 250, 150, 90], // Reduced data points to match categories
      itemStyle: {
        color: "#561f6f", // Set your desired color here
      },
    },
  ],
};

function EChart() {
  return (
    <div className="relative h-72 flex ">
      <ReactECharts
        option={option}
        style={{ height: "100%", width: "100%" }}
        className=""
      />
    </div>
  );
}

export default EChart;
