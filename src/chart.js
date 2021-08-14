import {React, useState, useEffect} from 'react';
import Plotly from "plotly.js-basic-dist";
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
const URL = "https://college-buddy123.herokuapp.com/"

//Statewise Colleges-
function StateWiseCollegePie(){

  const [stateCollegeDict, setStateCollegeDict] = useState({});
  

  useEffect(() => {
    
    const fetchData = async() => {
      const res = await axios.get(`${URL}`);
      console.log("res", res);
      const {state} = res.data.data;
      const stateData = {'state': Object.keys(state), 'num': Object.values(state)};
      setStateCollegeDict(stateData);
    } 
    fetchData();
  }, []);
  
  // let stateCollegeDict = {};
  // stateCollegeDict = { 
  //   'state':['MP','UP','MH'],
  //   'num':[10,20,30]
  // };
return (
<div>
<Plot
data={[
  {
    type: 'pie', labels: stateCollegeDict['state'], values: stateCollegeDict['num'],marker:{opacity:0.3,line:{width:2}},hovertemplate: '<b>COUNT</b>: %{value}' +
    '<br><b>STATE</b>: %{label}<br><extra></extra>'
    
  },
]}
layout={ {
  width: 800, height: 800, title: 'STATEWISE NUMBER OF COLLEGES',font: {family: 'Roboto, sans-serif',size: 20,color: '#7f7f7f'},template:'plotly_dark',
  } }
/>
      </div>
  // {x: [1, 2, 3],y: [2, 6, 3],type: 'scatter',mode: 'lines+markers',marker: {color: 'purple'},},
);
}


function StateWiseCollegeBar(){
  const [stateCollegeDict, setStateCollegeDict] = useState({});
 

  useEffect(() => {
    
    const fetchData = async() => {
      const res = await axios.get(`${URL}`);
      console.log("res1", res);
      const {state} = res.data.data;
      const stateData = {'state': Object.keys(state), 'num': Object.values(state)};
      console.log("stateData", stateData)
      setStateCollegeDict(stateData);
      
    } 
    fetchData();
  }, []);
  // let stateCollegeDict = {};
  // stateCollegeDict = { 
  //   'state':['MP','UP','MH'],
  //   'num':[10,20,30]
  // };
return (
<div>
<Plot
data={[
  {
    type: 'bar', x: stateCollegeDict['state'], y: stateCollegeDict['num'],marker: { color: 'rgb(158,202,225)',
    opacity: 0.6,
    line: {
      color: 'rgb(269,48,107)',
      width: 2
    }},hovertemplate: '<b>COUNT</b>: %{y}' +
    '<br><b>STATE</b>: %{x}<br><extra></extra>'
    
  },
]}
layout={ {
  width: 800, height: 1120, title: 'STATEWISE NUMBER OF COLLEGES',font: {family: 'Roboto, sans-serif',size: 20,color: '#7f7f7f'},template:'presentation'
  } }
/>
      </div>
);
}

function CourseWiseCollegePie(){
  
  const [courseCollegeDict, setCourseCollegeDict] = useState({});

  useEffect(() => {
    
    const fetchData = async() => {
      const res = await axios.get(`${URL}`);
      console.log("res2", res);
      const {courses} = res.data.data;
     
      const courseData = {'course': Object.keys(courses), 'num': Object.values(courses)};
  
      setCourseCollegeDict(courseData);
    } 
    fetchData();
  }, []);
  // let courseCollegeDict = {};
  // courseCollegeDict = { 
  //   'course':['CS','IT','MECH'],
  //   'num':[50,60,30]
  // };

return (
<div>
<Plot
data={[
  {
    type: 'pie', labels: courseCollegeDict['course'], values: courseCollegeDict['num'],marker:{opacity:0.3,line:{width:2}},hovertemplate: '<b>COUNT</b>: %{value}' +
    '<br><b>COURSE</b>: %{label}<br><extra></extra>'
    
  },
]}
layout={ {
  width: 800, height: 700, title: 'COURSEWISE NUMBER OF COLLEGES',font: {family: 'Roboto, sans-serif',size: 20,color: '#7f7f7f'},
  template:"presentation"
  } }
/>
      </div>
);
}

function CourseWiseCollegeBar(){
 
  const [courseCollegeDict, setCourseCollegeDict] = useState({});

  useEffect(() => {
    
    const fetchData = async() => {
      const res = await axios.get(`${URL}`);
      console.log("res3", res);
      const {courses} = res.data.data;
      const courseData = {'course': Object.keys(courses), 'num': Object.values(courses)};
      setCourseCollegeDict(courseData);
    } 
    fetchData();
  }, []);
  // let courseCollegeDict = {};
  // courseCollegeDict = { 
  //   'course':['CS','IT','MECH'],
  //   'num':[50,60,30]
  // };

return (
<div>
<Plot
data={[
  {
    type: 'bar', x: courseCollegeDict['course'], y: courseCollegeDict['num'],marker: {color: 'rgb(158,202,225)',opacity: 0.6,line: {
      color: 'rgb(8,48,107)',
      width: 2
    }},hovertemplate: '<b>COUNT</b>: %{y}' +
    '<br><b>COURSE</b>: %{x}<br><extra></extra>'
  },
]}
layout={ {
  width: 800, height: 1000, title: 'COURSEWISE NUMBER OF COLLEGES',font: {family: 'Roboto, sans-serif',size: 20,color: '#7f7f7f'},
  template:"presentation"
  } }
/>
      </div>
);
}

function YearWithColleges(){
  const [yearCollegeDict, setYearCollegeDict] = useState({});

  useEffect(() => {
    
    const fetchData = async() => {
      const res = await axios.get(`${URL}`);
      const {yearFounded} = res.data.data;
      const yearData = {'year': Object.keys(yearFounded), 'num': Object.values(yearFounded)};
      setYearCollegeDict(yearData);
    } 
    fetchData();
  }, []);
  // let yearCollegeDict = {};
  // yearCollegeDict = {
  //   'year':[1989,1991,1993,1996,1997,1998,1999,2000,2001],
  //   'num':[12,13,14,16,11,12,15,13,14]
  // }
  return(
<div>
  <Plot 
data={[
  {
    type: 'scatter', x: yearCollegeDict['year'], y: yearCollegeDict['num'],mode:'lines+markers',marker:{color:'purple',width:2},line :{color:'#DC1C13',width:3,dash:'dashdot'}
    
  },
]}
layout={{
  width: 800, height: 1000, title: 'YEARWISE NUMBER OF COLLEGES',font: {family: 'Roboto, sans-serif',size: 20,color: '#7f7f7f'},
  template:"presentation"}}
  />
  </div>
  );
}

export {StateWiseCollegePie,StateWiseCollegeBar,CourseWiseCollegePie,CourseWiseCollegeBar, YearWithColleges};