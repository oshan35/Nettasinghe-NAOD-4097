import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { fetchTopFiveYearData } from "../../../api";
import { Box } from "@mui/material";
import { Inventory } from "@mui/icons-material";
import { useInventory } from "../../InventoryContext";

export default function BestSelledProductChartBar() {
  const [channelData, setChannelData] = useState([]);
  const [catData, setCatData] = useState([]);
  const {inventoryId} = useInventory();
  useEffect(() => {
    setChannelData([
      {
        data: [200, 500],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
        
  //       const response = await fetchTopFiveYearData(inventoryId);
  //       console.log(response.data);
  //       const data =[{
  //         data:response.data.values
  //       }];
  //       setChannelData(response.data.values);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

    console.log(channelData);

  const options3 = {
    colors: ["#5A4FCF", "#FFA500", "#C53500", "#FFBF00", "#FF3659", "#00C535", "#0055C5"],
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: true, // one on top of another
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetY: 0,
    },
    title: {
      text: "Top 5 Selled Product Over Year",
    },
    plotOptions: {
      bar: {
        distributed: true,
        barHeight: "40%",
        horizontal: true,
      },
    },

    xaxis: {
      categories: [
        "product 1",
        "product 2",
      ],
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", 
        offsetY: 30,
        offsetX: 60,
      },
    },
  };

  return (
    <div className="chart" style={{ width: '100%' }}>
      <ApexCharts
        options={options3}
        series={channelData}
        type="bar"
        width="100%"
        height={260}
        sx={{ padding: 0, margin: 0 }}
      />
    </div>

  );
}
