import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import  { useState, useEffect } from 'react';
import AppAppBar from './modules/views/AppAppBar';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { setGlobalState,useGlobalState } from '../state/Global';
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];


export default function DiscreteSliderValues() {
    const [counts, setCounts] = useState({
        food: 0,
        finance: 0,
        water: 0
      });
      
const id = localStorage.getItem('id');
const isAuth = localStorage.getItem('isAuth');

      const [foodscale, setFoodscale] = useState(0)
      const [fooddesc, setFooddesc] = useState('')
      const [waterscale, setwaterscale] = useState(0)
      const [waterdesc, setwaterdesc] = useState('')
      const [financescale, setfinancescale] = useState(0)
      const [financedesc, setfinancedesc] = useState('')
      const handleCountChange = (category, count) => {
        axios.post('http://localhost:4000/api/update-count', {
          category,
          count
        })
          .then(res => {
            setCounts({
              ...counts,
              [category]: count
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
      const submitfood=()=>{
        if(id==1) {
          toast.error("Plz login first")
          return;
        }
        console.log(foodscale);
        console.log(fooddesc);
        toast.success("problems added successfully");
        axios.put(`http://localhost:4000/api/submitfood/${id}`, { food: foodscale, fooddesc: fooddesc })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
        
      }
      const submitwater=()=>{
        if(id==1) {
          toast.error("Plz login first")
          return;
        }
        console.log(waterscale);
        console.log(waterdesc);
        toast.success("problems added successfully");
        axios.put(`http://localhost:4000/api/submitwater/${id}`, { water: waterscale, waterdesc: waterdesc })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
        
      }
      const submitfinance=()=>{
        if(id==1) {
          toast.error("Plz login first")
          return;
        }
        console.log(financescale);
        console.log(financedesc);
        toast.success("problems added successfully");
        axios.put(`http://localhost:4000/api/submitfinance/${id}`, { finance: financescale, financedesc: financedesc })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
        
      }
      function valuetextfood(value) {
        setFoodscale(value)
      return `${value}°C`;
    }
    
    function valueLabelFormatfood(value) {
        
      return marks.findIndex((mark) => mark.value === value) + 1;
    }

    function valuetextwater(value) {
        setwaterscale(value)
      return `${value}°C`;
    }
    
    function valueLabelFormatwater(value) {
        
      return marks.findIndex((mark) => mark.value === value) + 1;
    }

    function valuetextfinance(value) {
        setfinancescale(value)
      return `${value}°C`;
    }
    
    function valueLabelFormatfinance(value) {
        
      return marks.findIndex((mark) => mark.value === value) + 1;
    }
    
    useEffect(() => {
        axios.get('http://localhost:4000/api/problem-counts')
          .then(res => {
            setCounts(res.data);
          })
          .catch(err => {
            console.log(err);
          });
          
      }, []);
  return (
    <>
    <div><Toaster/></div>
<AppAppBar/>
<div>
<br/>

</div>
<div>
<div>
      
<h1 class="mx-8 md:mx-12 mb-6 text-3xl md:text-5xl lg:text-6xl text-green-400 font-bold leading-tight text-gray-900 dark:text-white">
  Plz fill your Digital Age Home Problems
</h1>

<div className="bg-gray-100 p-4 rounded-md">
  <label htmlFor="food" className="font-medium text-gray-700 block mb-2">Food:</label>
  <textarea 
    name="fooddescription" 
    rows="4" 
    cols="50" 
    value={fooddesc} 
    onChange={(e) => setFooddesc(e.target.value)}
    className="border border-gray-300 rounded-md p-2 w-full mb-4"
  />
  <div className="w-full">
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormatfood}
        getAriaValueText={valuetextfood}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  </div>
  <button 
    onClick={submitfood} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
  >
    Submit Your Problem
  </button>
</div>
</div>



<div className="bg-gray-100 p-4 rounded-md">
  <div className="mb-4">
    <label htmlFor="water" className="font-medium text-gray-700 block mb-2">Water:</label>
    <textarea 
      name="waterdescription" 
      rows="4" 
      cols="50" 
      value={waterdesc} 
      onChange={(e) => setwaterdesc(e.target.value)}
      className="border border-gray-300 rounded-md p-2 w-full"
    />
  </div>
  <div className="w-full">
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormatwater}
        getAriaValueText={valuetextwater}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  </div>
  <button 
    onClick={submitwater} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
  >
    Submit Your Problem
  </button>
</div>





<div className="bg-gray-100 p-4 rounded-md">
  <div className="mb-4">
    <label htmlFor="finance" className="font-medium text-gray-700 block mb-2">Finance:</label>
    <textarea 
      name="financedescription" 
      rows="4" 
      cols="50" 
      value={financedesc} 
      onChange={(e) => setfinancedesc(e.target.value)}
      className="border border-gray-300 rounded-md p-2 w-full"
    />
  </div>
  <div className="w-full">
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormatfinance}
        getAriaValueText={valuetextfinance}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  </div>
  <button 
    onClick={submitfinance} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
  >
    Submit Your Problem
  </button>
</div>



    
      
    </div>

    
    </>
  );
}
