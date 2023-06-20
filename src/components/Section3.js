import React from 'react';
import house from './../Study Case Icon/house.svg';
import ellipsis from './../Study Case Icon/ellipsis.svg';
import clockCircle from './../Study Case Icon/clock-circle.svg';
import reports from './../Study Case Icon/reports.svg';
import clipBoardPen from './../Study Case Icon/clipboard-pen.svg';
import calenderDays from './../Study Case Icon/calender-days-2.svg';
import listLineAlignRight from './../Study Case Icon/list-line-align-right.svg';
import analysis from './../Study Case Icon/analysis.svg';
import tasks from './../Study Case Icon/tasks.svg';
import bookMark from './../Study Case Icon/bookmark.svg';
import "./styles/Section3.css";
// import { Link } from 'react-router-dom';

const Section3 = () => {
	return (
		<div className='right-menu-bar'>
		
			<div style={{display:'grid'}}>
				<img src={house} alt="house" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>Muamele</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={listLineAlignRight} alt="listLineAlignRight" 
						style={{justifySelf: 'center',
							padding: '20px',
							boxShadow: '0px 0px 12px #101C2414',
							borderRadius: '6px',
							background:' #1F94FF1A 0% 0% no-repeat padding-box'
				}}/>
				<span className='menu-name'>Münderecat</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={tasks} alt="tasks" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>Görevler</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={clockCircle} alt="clockCircle" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>Safahat</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={clipBoardPen} alt="clipBoardPen" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>İmza Takibi</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={bookMark} alt="bookMark" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>Künye Ayarları</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={analysis} alt="analysis" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>Safahat Analiz</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={calenderDays} alt="calenderDays" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>Takvimler</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={reports} alt="reports" style={{justifySelf: 'center',padding: '10px'}}/>
				<span className='menu-name'>İşlem Kayıtları</span>
			</div>
			<div style={{display:'grid'}}>
				<img src={ellipsis} alt="ellipsis" style={{justifySelf: 'center',position: 'relative',top: '100px'}}/>
			</div>
		</div>
	);
};

export default Section3;
