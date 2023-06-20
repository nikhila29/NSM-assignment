import React from 'react';
import houseSolid from './../Study Case Icon/house-solid.svg';
import chevronLeft from './../Study Case Icon/chevron-left.svg';
import chevronRight from './../Study Case Icon/chevron-right.svg';

import chevronDown from './../Study Case Icon/chevron-down.svg';
import search from './../Study Case Icon/search.svg';
import wordBlue from './../Study Case Icon/word-blue.svg';
import folder from './../Study Case Icon/folder.svg';
import arrowDownToLine from './../Study Case Icon/arrow-down-to-line.svg';
import filter from './../Study Case Icon/filter.svg';
import caretDown from './../Study Case Icon/caret-down.svg';
import caretRight from './../Study Case Icon/caret-right.svg';

import message from './../Study Case Icon/message.svg';


import microphone from './../Study Case Icon/microphone.svg';
import "./styles/Section2.css";
import Section3 from './Section3';
import Section4 from './Section4';

// import { Link } from 'react-router-dom';

const Section2 = () => {
	return (
		<div>

			<div className='main-header'>
				<img src={houseSolid} alt="houseSolid" style={{width: '35px',height: '13px'}}/>
				<img src={chevronRight} alt="chevronRight" className='chevronRight'/>
				<span className='main-header-name'>CLIENT</span>
				<img src={chevronRight} alt="chevronRight"  className='chevronRight'/>
				<span className='main-header-name'>MATTER</span>
				<img src={chevronRight} alt="chevronRight"  className='chevronRight'/>
				<span className='main-header-name'>MUAMELE DETAY SAYFASI</span>
				<img src={chevronRight} alt="chevronRight"  className='chevronRight'/>
				<span className='main-header-name' 
					style={{ font: 'normal normal bold 12px/14px Mecellem',color:' #0A1421'}}>MUAMELE MÜNDERECATI
				</span>
			</div>

			<div style={{display:'flex'}}>

				<div>

					<div style={{display:'flex'}}>

						<div className='top'>
							<img src={folder} alt="folder" className='top-folder'/>
							<span 
								style={{
								font: 'normal normal normal 11px/14px Mecellem',
								letterSpacing: '-0.36px',
								color: '#06090F', 
								position: 'relative'}}>All (selected folder)</span>
							<img src={chevronDown} alt="chevronDown" className='top-chevronDown'/>
							<img src={search} alt="search" className='top-search'/>
							<span className='search-name'>Search within all folders and content, or a specific folder’s content</span>
							<img src={microphone} alt="microphone" className='microphone'/>
						</div>

						<div className='all-status'>
							<span className='all-status-name'>All Status</span>
							<img src={chevronDown} alt="chevronDown" className='all-status-chevron'/>
						</div>

						<div className='arrow-down'><img src={arrowDownToLine} alt="arrowDownToLine" style={{margin: '10px'}}/></div>
						<div className='filter-img'><img src={filter} alt="filter" style={{margin: '10px'}}/></div>
 
					</div>

					<div>
						<span className='ele'>#</span>
						<span className='ele-name' style={{position:'relative', left:'115px'}}>Phase <img src={caretDown} alt="caretDown" className='caret-down'/></span>
				
						<span className='ele-name' style={{position:'relative', left:'297px'}}>Status <img src={caretDown} alt="caretDown" className='caret-down'/></span>
					
						<span className='ele-name' style={{position:'relative', left:'325px'}}>Document <img src={caretDown} alt="caretDown" className='caret-down'/></span>
					
						<span className='ele-name' style={{position:'relative', left:'337px'}}>Responsible Party <img src={caretDown} alt="caretDown" className='caret-down'/></span>
					 
						<span className='ele-name' style={{position:'relative', left:'415px'}}>Update Date<img src={caretDown} alt="caretDown" className='caret-down'/></span>
					</div>

					<Section4/>

				</div>

				<Section3/>

			</div>
		</div>
	);
};

export default Section2;
