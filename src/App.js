import {React} from 'react';
import './App.css';
import {StateWiseCollegePie,StateWiseCollegeBar,CourseWiseCollegePie,CourseWiseCollegeBar, YearWithColleges} from './chart';
import {CollegeInfo,stackBarChart} from './collegeInfo';
function App() {
  return (
    <div className="App">
      <div className="col">
        <h1>College Buddy</h1>
        <div className="graph"><StateWiseCollegePie /></div>
        <div className="graph"><StateWiseCollegeBar /></div>
        <div className="graph"><CourseWiseCollegePie/></div>
        <div className="graph"><CourseWiseCollegeBar/></div>
        <div className="graph"><YearWithColleges/></div> 
      </div>
    </div>
       

    
  );
}

export default App;
