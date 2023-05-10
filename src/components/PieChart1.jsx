import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";
import React, { useState, useEffect } from "react";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [runStatus, setRunStatus] = useState([]);
  const mockPieData = [
    {
      id: "運作中",
      label: "運作中",
      value: 5,
      color: "hsl(41, 70%, 50%)",
    },
    {
      id: "待機中",
      label: "待機中",
      value: 2,
      color: "hsl(41, 70%, 50%)",
    },
    {
      id: "警告",
      label: "警告",
      value: 1,
      color: "hsl(0, 100%, 50%)",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3702/macStatus")
      .then((res) => res.json())
      .then((data) => {
        const macStatusData = [
          {
            id: "訂單數",
            color: "hsl(249, 70%, 50%)",
            data: data.map((d) => ({ x: "Q" + d.x, y: d.y })),
          },
        ];
        setRunStatus(macStatusData);
      });
  }, []);

  return (
    <ResponsivePie
      colors={["#4caf50", "#ff9800", "#ef5350"]}
      colorBy="index"
      data={data}
      theme={{
        fontSize: 20, //字體大小
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;