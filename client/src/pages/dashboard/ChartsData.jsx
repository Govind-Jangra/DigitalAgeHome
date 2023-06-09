


import React,{useEffect,useState} from 'react'
import axios from "axios";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip, 
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import { chartsConfig } from "@/configs";
const ChartsData = () => {
  const [datasfood,setDatasfood]=useState([]);
  const [categoryfood,setCategoryfood]=useState([]);

  const [dataswater,setDataswater]=useState([]);
  const [categorywater,setCategorywater]=useState([]);

  const [datasfinance,setDatasfinance]=useState([]);
  const [categoryfinance,setCategoryfinance]=useState([]);
    const websiteViewsChartfood = {
        type: "bar",
        height: 220,
        series: [
          {
            name: "Views",
            data: datasfood,
          },
        ],
        options: {
          ...chartsConfig,
          colors: "#fff",
          plotOptions: {
            bar: {
              columnWidth: "16%",
              borderRadius: 5,
            },
          },
          xaxis: {
            ...chartsConfig.xaxis,
            categories: categoryfood,
          },
        },
      };
      

      const websiteViewsChartwater = {
        type: "bar",
        height: 220,
        series: [
          {
            name: "Views",
            data: dataswater,
          },
        ],
        options: {
          ...chartsConfig,
          colors: "#fff",
          plotOptions: {
            bar: {
              columnWidth: "16%",
              borderRadius: 5,
            },
          },
          xaxis: {
            ...chartsConfig.xaxis,
            categories: categorywater,
          },
        },
      };
      
      const websiteViewsChartfinance = {
        type: "bar",
        height: 220,
        series: [
          {
            name: "Views",
            data: datasfinance,
          },
        ],
        options: {
          ...chartsConfig,
          colors: "#fff",
          plotOptions: {
            bar: {
              columnWidth: "16%",
              borderRadius: 5,
            },
          },
          xaxis: {
            ...chartsConfig.xaxis,
            categories: categoryfinance,
          },
        },
      };


      let overall = [];
    
    
    async function fetchDatafinance() {
      console.log("Fetching data...");
      try {
        const response = await axios.get("/careplaceDetails/all");
        overall = response.data;
        const categoriesfinance = overall.map((data) => data.supid);
        const staffsizefinance = overall.map((data) => data.financecount);
        
        console.log(categoriesfinance);
        console.log(staffsizefinance);
        setCategoryfinance(categoriesfinance);
    setDatasfinance(staffsizefinance);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchDatawater() {
      console.log("Fetching data...");
      try {
        const response = await axios.get("/careplaceDetails/all");
        overall = response.data;
        const categorieswater = overall.map((data) => data.supid);
        const staffsizewater = overall.map((data) => data.watercount);
        
        console.log(categorieswater);
        console.log(staffsizewater);
        setCategorywater(categorieswater);
    setDataswater(staffsizewater);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchDatafood() {
      console.log("Fetching data...");
      try {
        const response = await axios.get("/careplaceDetails/all");
        overall = response.data;
        const categoriesfood = overall.map((data) => data.supid);
        const staffsizefood = overall.map((data) => data.foodcount);
        
        console.log(categoriesfood);
        console.log(staffsizefood);
        setCategoryfood(categoriesfood);
    setDatasfood(staffsizefood);
      } catch (error) {
        console.log(error);
      }
    }
    
    
    const statisticsChartsData = [
        {
          color: "blue",
          title: "Relative food shoratge scale in terms Age homes",
          description: "",
          footer: "Donate to reduce this scale ",
          chart: websiteViewsChartfood,
        },
        {
          color: "red",
          title: "Relative Water shoratge scale in terms Age homes",
          description: "",
          footer: "Donate to reduce this scale",
          chart: websiteViewsChartwater,
        },
        {
          color: "green",
          title: "Relative Finance shoratge scale in terms Age homes",
          description: "",
          footer: "Donate to reduce this scale",
          chart: websiteViewsChartfinance,
        },
       
      ];
      useEffect(() => {
        console.log("use")
        fetchDatafood();
        fetchDatafinance();
        fetchDatawater();
      }, []);
  return (
    <div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
    </div>
  )
}

export default ChartsData
