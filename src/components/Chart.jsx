import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexChart({ done, continued, delay }) {
  const [options, setOptions] = useState({
    series: [parseFloat(done), parseFloat(continued), parseFloat(delay)],
    options: {
      dataLabels: {
        enabled: false,
      },

      fill: {
        colors: [
          "rgb(10, 207, 151)",
          "rgb(114, 124, 245)",
          "rgb(250, 92, 124)",
        ],
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
          },
          hoverOffset: 35,
          expandOnClick: true,
          donut: {
            size: "65%",
            labels: {
              show: true,
              value: {
                show: true,
                fontSize: "28px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 400,
                color: "#AAB8C5",
                offsetY: -10,
                formatter: function (val) {
                  return val + "%";
                },
              },
              name: {
                show: true,
                fontSize: "14.4px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 400,
                color: "#AAB8C5",
                offsetY: 30,
                formatter: function (val) {
                  if (val === "series-1") return "Tamamlanmış";
                  if (val === "series-2") return "Davam edən";
                  if (val === "series-3") return "Gecikdirilən";
                },
              },

              total: {
                show: false,
                showAlways: false,
              },
            },
          },
        },
      },
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="donut"
        width={300}
      />
    </div>
  );
}
