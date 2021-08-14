import {React} from 'react';
import Sunburst from 'sunburst-chart';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

function CollegeInfo(){

  const myChart = Sunburst();
  let courseCollegeDict = {};
  courseCollegeDict = { 
    'course':['CS','IT','MECH'],
    'num':[50,60,30]
  };
return (
<div>
<Plot
data={[
  {
    type: "choroplethmapbox", locations: ["NY", "MA", "VT"], z: [-50, -10, -20],
    geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json"
    
  },
]}
layout={ {
  mapbox: {center: {lon: -74, lat: 43}, zoom: 3.5},
  width: 600, height:400
  } }
/>
      </div>
  // {x: [1, 2, 3],y: [2, 6, 3],type: 'scatter',mode: 'lines+markers',marker: {color: 'purple'},},
);
}

function stackBarChart(){
  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'
  };

  return(
    <div>
      <Plot 
        data = {[
          {
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            name: 'SF Zoo',
            type: 'bar'
            
          },{
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [12, 18, 29],
            name: 'LA Zoo',
            type: 'bar'
          }



        ]}
        
        layout = {{
          width:1000,
          height:1000, 
          barmode: 'stack'
        }}
      />
    </div>
  )
}


export {CollegeInfo,stackBarChart};
