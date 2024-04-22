import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { fetchCostRevernewData } from "../../../api";
import { useInventory } from "../../InventoryContext";



export default function RevenueCostChart() {
  const [revenueCostData, setRevenueCostData] = useState([]);
  const { inventoryId, setInventoryId } = useInventory();


  useEffect(() => async () => {
      try {
        const response = await fetchCostRevernewData(inventoryId);
        setRevenueCostData(response.data);
      } catch (error) {
        console.log('Error fetching cost review data');
      }

  }, []);

  let totalArray = [];
  const total = revenueCostData.forEach((value) => {
    const data = value.data;
    if (totalArray.length === 0) totalArray = [...data];
    else {
      data.forEach((val, index) => (totalArray[index] += val));
    }
  });

  const options3 = {
    colors: ["#00D100", "#FF2E2E"],
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: false,
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
      text: "Cost & Revenue over Year",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        horizontal: false,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aut",
        "Spt",
        "Oct",
        "Nov",
        "Dec",
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
    <div style={{ width: '100%' }}>
      <ApexCharts
        options={options3}
        series={revenueCostData}
        type="bar"
        width="100%"
        height={250}
      />
    </div>
  );
}
