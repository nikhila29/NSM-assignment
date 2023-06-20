import React from 'react';
import arrowLeft from './../Study Case Icon/arrow-left.svg';
import filterBars from './../Study Case Icon/filter-bars.svg';
import caretRight from './../Study Case Icon/caret-right.svg';
import caretDown from './../Study Case Icon/caret-down.svg';
import folder from './../Study Case Icon/folder.svg';
import info from './../Study Case Icon/info.svg';
import "./styles/Section1.css";

const Section1 = () => {
	return (
		<div className='container'>
			<div className='section1'>
				<div className='header-name'>Muamele Münderecatı</div>
				<div className='arrow-left'><img className='arrow-left-img' src={arrowLeft} alt="arrowLeft" /></div>
			</div>
			<div className='section2'>
				<div className='asama-content'>
					<span className='asama-number'>12</span>
					<span className='asamaaa-name'>Aşama</span>
				</div>
				<div className='asama-content'>
					<span className='asama-number'>23</span>
					<span className='asamaaa-name'>Alt Klasör</span>
				</div>
				<div className='asama-content'>
					<span className='asama-number'>1235</span>
					<span className='asamaaa-name'>Alt Klasör</span>
				</div>
				<div className='filter-bar'><img src={filterBars} alt="filterBars" /></div>
			</div>
			<div className='filter'>
				<div className='filter-name'>Filter by Client/Matter name</div>
				<img src={filterBars} className='filter-bars' alt="filterBars" />
			</div>
			<div className='asama'style={{display: 'flex', padding:'10px'}}>

				<div className='asama-data'>
					<div className='asamaa'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 1</span>
						<img className='info' src={info} alt="info" />
					</div>

					<div>
						<div className='asamaa'>
							<img src={caretDown} alt="caretDown" />
							<img style={{marginRight:'10px'}} src={folder} alt="folder" />
							<span className='asama-name'>Aşama 2</span>
							<img className='info' src={info} alt="info" />
							<div className='asamaa' style={{position: 'relative', left: '10px', border:'none'}}>
								<img src={caretDown} alt="caretDown" />
								<img style={{marginRight:'10px'}} src={folder} alt="folder" />
								<span className='asama-name'>2.1 Aşama</span>
								<img style={{position:'relative', left:'128px'}} src={info} alt="info" />

								<div className='asamaa' style={{position: 'relative', left: '10px', border:'none'}}>
									<img src={caretRight} alt="caretRight" />
									<img style={{marginRight:'10px'}} src={folder} alt="folder" />
									<span className='asama-name'>2.1 Aşama</span>
									<img style={{position:'relative', left:'118px'}} src={info} alt="info" />
								</div>
								<div className='asamaa' style={{position: 'relative', left: '23px', border:'none'}}>
									<img style={{marginRight:'10px'}} src={folder} alt="folder" />
									<span className='asama-name'>2.2 Aşama</span>
									<img style={{position:'relative', left:'128px'}} src={info} alt="info" />
								</div>
							</div> 
						</div>
					</div>

					<div className='asamaa'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 3</span>
						<img className='info' src={info} alt="info" />
					</div>

					<div className='asamaa'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 4</span>
						<img className='info' src={info} alt="info" />
					</div>

					<div className='asamaa'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 5</span>
						<img className='info' src={info} alt="info" />
					</div>

					<div className='asamaa'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 6</span>
						<img className='info' src={info} alt="info" />
					</div>

					<div className='asamaa'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 7</span>
						<img className='info' src={info} alt="info" />
					</div>

					<div className='asamaa'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 8</span>
						<img className='info' src={info} alt="info" />
					</div>

					<div className='asamma'>
						<img src={caretRight} alt="caretRight" />
						<img style={{marginRight:'10px'}} src={folder} alt="folder" />
						<span className='asama-name'>Aşama 9</span>
						<img className='info' src={info} alt="info" />
					</div>

				</div>
				<div >
				<div className='slider-move'></div>
				<div style={{display:'flex'}}>
					<div className='line1'></div>
					<div className='line2'></div>
				</div>
			</div>
			</div>

	 
				
		</div>
	);
};

export default Section1;
