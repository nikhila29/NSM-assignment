import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/NavigationPanel.css";
import amblem from './../Study Case Icon/amblem.svg';
import rectangulaVerticalBox from './../Study Case Icon/rectangle-vertical-bars.svg'
import fileLines from './../Study Case Icon/file-lines.svg'
import calender from './../Study Case Icon/calender.svg'
import envelope from './../Study Case Icon/envelope.svg'
import file from './../Study Case Icon/file.svg'
import folder3 from './../Study Case Icon/folder-3.svg'
import sliders from './../Study Case Icon/sliders.svg';
import avatar from './../Study Case Icon/avatar.svg';

const NavigationPanel = () => {
  return (
    <div className='main' >
      <div className='header'>
        <div style={{display: 'grid'}}>
          <img src={amblem} alt="amblem" style={{ position: 'relative', left: '18px', top: '10px'}}/>
          <span style={{color:'white'}}>NSM</span>
        </div>
        <div style={{display: 'grid'}}>
          <img src={rectangulaVerticalBox} alt="rectangleVerticalBox" style={{ position: 'relative', left: '30px'}}/>
          <span style={{color:'white'}}>Muamele</span>
        </div>
        <div style={{display: 'grid'}}>
          <img src={fileLines} alt="fileLines" style={{ position: 'relative', left: '30px'}} />
          <span className='gap'></span>
        </div>
        <div style={{display: 'grid'}}>
          <img src={folder3} alt="folder3" style={{ position: 'relative', left: '30px'}} />
          <span className='gap'></span>
        </div>
        <div style={{display: 'grid'}}>
          <img src={envelope} alt="envelope" style={{ position: 'relative', left: '30px'}} />
          <span className='gap'></span>
        </div>
        <div style={{display: 'grid'}}>
          <img src={file} alt="file" style={{ position: 'relative', left: '30px'}} />
          <span className='gap'></span>
        </div>
        <div style={{display: 'grid'}}>
          <img src={sliders} alt="sliders" style={{ position: 'relative', left: '30px'}} />
          <span className='gap'></span>
        </div>
        <div style={{display: 'grid'}}>
          <img src={calender} alt="calender" style={{ position: 'relative', left: '30px'}}/>
          <span className='gap'></span>
        </div>
      </div>

      <div className='footer'>
        <div>
          <img src={avatar} alt="avatar" style={{ position: 'relative', left: '18px', top: '200px'}}/>
          <span></span>
        </div>
      </div>
     
    </div>
 
  );
};

export default NavigationPanel;
