import React from 'react';
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
import "./styles/Section4.css";
// import { Link } from 'react-router-dom';

const Section4 = () => {
  return (
	<div>

		<div className='top-data'style={{display: 'flex', padding:'10px'}}>

			<div className='mid-data'>
				<div className='dataa'>
					<img src={caretRight} alt="caretRight"/>
					<span>1</span>

					<div style={{display:'grid'}} className='sub-data'>
						<span>İŞLEM DOSYALARI / TRANSACTION…</span>
						<span>4 Sub Phase</span>
					</div>

					<button className='button'>Devam Etmekte</button>
					<span  className='word'><img src={wordBlue} alt="wordBlue"/>V6</span>
					<span className='goksu'>Goksu Safi Işık Avukatlık…</span>
					<span className='message'><img src={message} alt="message"/></span>
					<span className='date'>11.12.2022</span>
				</div>

				<div>
					<div className='data-dataa'>

						<img src={caretDown} alt="caretDown" style={{position: 'relative',top: '6px'}}/>
						<span>2</span>
						<span style={{position: 'relative',
							left: '15px',
							color: '#0A0E12',
							color:' #7E8B9F',
							font: 'normal normal normal 11px/26px Mecellem'}}>Aşama / Phase</span>
						<button className='button' style={{position: 'relative',left: '215px', backgroundColor:'#00BD8B', opacity:'1'}}>Tamamlandı</button>
						<span className='word' style={{position: 'relative',left: '235px'}}><img src={wordBlue} alt="wordBlue" />V6</span>
						<span className='goksu' style={{position: 'relative',left: '272px'}}>Goksu Safi Işık Avukatlık…</span>
						<span className='message' style={{position: 'relative',left: '290px'}}><img src={message} alt="message"/></span>
						<span className='date' style={{position: 'relative',left: '329px'}}>11.12.2022</span>

						<div className='data-data' style={{position: 'relative', left: '10px', border:'none'}}>

							<img src={caretDown} alt="caretDown"  style={{position: 'relative',top: '6px'}}/>
							<span>2.1</span>
							<span style={{position: 'relative',
								left: '15px',
								color: '#0A0E12',
								color:' #7E8B9F',
								font: 'normal normal normal 11px/26px Mecellem'}}>Aşama / Phase</span>
							<button className='button' style={{
								position: 'relative',
								left: '195px',
								background: '#F72142 0% 0% no-repeat padding-box',
								opacity: 1}}>Tamamlandı</button>
							<span className='word' style={{position: 'relative',left: '216px'}}><img src={wordBlue} alt="wordBlue"/>V6</span>
							<span className='goksu' style={{position: 'relative',left: '252px'}}>Goksu Safi Işık Avukatlık…</span>
							<span className='message' style={{position: 'relative',left: '268px'}}><img src={message} alt="message"/></span>
							<span className='date' style={{position: 'relative',left: '310px'}}>11.12.2022</span>

						<div className='data-data' style={{position: 'relative', left: '10px', border:'none'}}>
							<img src={caretRight} alt="caretRight"  style={{position: 'relative',top: '6px'}}/>
							<span>2.1.1</span>
							<span style={{position: 'relative',
								left: '15px',
								color: '#0A0E12',
								color:' #7E8B9F',
								font: 'normal normal normal 11px/26px Mecellem'}}>Aşama / Phase</span>
							<button className='button' style={{position: 'relative',left: '172px',backgroundColor:'#00BD8B', opacity:'1'}}>Başlanmadı</button>
							<span  className='word' style={{position: 'relative',left: '197px'}}><img src={wordBlue} alt="wordBlue"/>V6</span>
							<span className='goksu' style={{position: 'relative',left: '230px'}}>Goksu Safi Işık Avukatlık…</span>
							<span style={{position: 'relative',left: '246px'}}><img src={message} alt="message"/></span>
							<span className='date' style={{position: 'relative',left: '289px'}}>11.12.2022</span>
						</div>

						<div className='data-data' style={{position: 'relative', left: '23px', border:'none'}}>

							<img src={caretRight} alt="caretRight"  style={{position: 'relative',top: '6px'}}/>
							<span>2.2</span>
							<span style={{position: 'relative',
								left: '15px',
								color: '#0A0E12',
								color:' #7E8B9F',
								font: 'normal normal normal 11px/26px Mecellem',color:'black'}}>Gizililik Sozlesmesi</span>
							<button className='button' style={{position: 'relative',left: '148px',backgroundColor:'#00BD8B', opacity:'1'}}>Tamamlandı</button>
							<span className='word' style={{position: 'relative',left: '170px'}}><img src={wordBlue} alt="wordBlue"/>V1.2</span>
							<span className='goksu' style={{position: 'relative',left: '195px'}}>Goksu Safi Işık Avukatlık…</span>
							<span className='message' style={{position: 'relative',left: '210px'}}><img src={message} alt="message"/></span>
							<span className='date' style={{position: 'relative',left: '255px'}}>11.12.2022</span>

						</div>

					</div> 
					</div>
				</div>

				<div className='dataa'>
					<img src={caretRight} alt="caretRight"/>
					<span>3</span>
					<div style={{display:'grid'}} className='sub-data'>
					<span>İŞLEM DOSYALARI / TRANSACTION…</span>
					<span>4 Sub Phase</span>
					</div>
					<button className='button' style={{  background: '#F72142 0% 0% no-repeat padding-box',opacity: 1}}>Devam Etmekte</button>
					<span className='word'><img src={wordBlue} alt="wordBlue" />V6</span>
					<span className='goksu'>Goksu Safi Işık Avukatlık…</span>
					<span className='message'><img src={message} alt="message"/></span>
					<span className='date'>11.12.2022</span>
				</div>

				<div className='dataa'>
					<img src={caretRight} alt="caretRight"/>
					<span>4</span>
					<div style={{display:'grid'}} className='sub-data'>
						<span>İŞLEM DOSYALARI / TRANSACTION…</span>
						<span>4 Sub Phase</span>
					</div>
					<button className='button'  style={{  background: '#F72142 0% 0% no-repeat padding-box',opacity: 1}}>Devam Etmekte</button>
					<span  className='word'><img src={wordBlue} alt="wordBlue"/>V6</span>
					<span className='goksu'>Goksu Safi Işık Avukatlık…</span>
					<span className='message'><img src={message} alt="message"/></span>
					<span className='date'>11.12.2022</span>
				</div>

				<div className='dataa'>
					<img src={caretRight} alt="caretRight"/>
					<span>5</span>
					<div style={{display:'grid'}} className='sub-data'>
						<span>İŞLEM DOSYALARI / TRANSACTION…</span>
						<span>4 Sub Phase</span>
					</div>
					<button className='button' style={{  background: '#F72142 0% 0% no-repeat padding-box',opacity: 1}}>Devam Etmekte</button>
					<span className='word'><img src={wordBlue} alt="wordBlue" />V6</span>
					<span className='goksu'>Goksu Safi Işık Avukatlık…</span>
					<span className='message'><img src={message} alt="message"/></span>
					<span className='date'>11.12.2022</span>
				</div>

				<div className='dataa'>
					<img src={caretRight} alt="caretRight"/>
					<span>6</span>
					<div style={{display:'grid'}} className='sub-data'>
						<span>İŞLEM DOSYALARI / TRANSACTION…</span>
						<span>4 Sub Phase</span>
					</div>
					<button className='button'>Devam Etmekte</button>
					<span className='word'><img src={wordBlue} alt="wordBlue" />V6</span>
					<span className='goksu'>Goksu Safi Işık Avukatlık…</span>
					<span className='message'><img src={message} alt="message"/></span>
					<span className='date'>11.12.2022</span>
				</div>

			</div>
		</div>
	</div>
  );
};

export default Section4;
