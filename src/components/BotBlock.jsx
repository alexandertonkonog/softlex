import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import arrow from '../images/arrow.svg';
import heart from '../images/heart.svg';

let BotBlock = (props) => {
	let [list, setList] = useState(props.posts);
	let [visiblePost, setVisiblePost] = useState(0);
	let [arrowTop, setArrowTop] = useState(false);
	let [arrowTopDis, setArrowTopDis] = useState(false);
	let [arrowBot, setArrowBot] = useState(false);
	let fun = () => {
		setList([...list.filter((u,index) => index!==0), list[0]])
	}
	let showPost = (id) => {
		setVisiblePost(id);
	}
	let showNextPost = (index) => {
		setVisiblePost(index);
	}
	
	let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      vertical: true,
      afterChange: index => {
      	showNextPost(index);
      	if(index === list.length-1) {
      		setArrowTop(false);
      		setArrowBot(true);
      		setArrowTopDis(true);
      	} else {
      		setArrowBot(false);
      	}
      	if(index === 0) {
      		setArrowBot(false)
      		setArrowTop(true);
      	} else {
      		setArrowTop(false);
      	}
      },
      responsive: [
      	{
      		breakpoint: 1200,
          	settings: {
	            slidesToShow: 3,
	            slidesToScroll: 1,
	            vertical: false
	          }
      	},
      	{
      		breakpoint: 768,
          	settings: {
	            slidesToShow: 3,
	            slidesToScroll: 1,
	            vertical: false
	          }
      	},		
      ]
    };
    let slider = React.createRef();
    
	return  <section className="bot-block" id="bot-block">
				<div className="main-block">
					<h2 className="h2-title"><span className="h2-title__dot">&#8226;</span>о пожертвованиях</h2>
					<div className="bot-block__content">
						<div className="bot-block__slider">
							<div className="bot-block__slider-inside">
								<Slider {...settings} className="bot-block__list" ref={c => slider = c } >
									{list.map((p,index) => <li data-opacity={1-(index/10*2.2)} key={index} style={{opacity: 1-(index/10)}} className="bot-block__item"><span>{p.name}</span></li>)}
								</Slider>
								{props.haveNewArrows && <button className={"bot-block__arrow-new"} onClick={()=>slider.slickNext()}>
									<img  className='bot-block__arrow-img' alt={arrow} src={arrow} />
								</button>}
							</div>
							<div className="bot-block__next-zone">
								<button className={"bot-block__arrow "} disabled={arrowBot} onClick={()=>slider.slickNext()}>
									<img  className={arrowBot ? 'bot-block__arrow-img bot-block__arrow-img-min' : 'bot-block__arrow-img'} alt={arrow} src={arrow} />
								</button>
								<button className={"bot-block__arrow "} disabled={arrowTop} style={{display: arrowTopDis && 'block'}} onClick={()=>slider.slickPrev()}>
									<img className={arrowTop ? 'bot-block__arrow-img bot-block__arrow-img-min' : 'bot-block__arrow-img'} alt={arrow} src={arrow} />
								</button>
							</div>
						</div>
						<div className="bot-block__des">
							<p className="bot-block__text">{list.find((p,index) => index === visiblePost).text}</p>
							<button className="bot-block__btn">
								<img  className="bot-block__des-img" alt={heart} src={heart} />
								<p className="bot-block__btn-text">рассчитать закят</p>
							</button>
						</div>
					</div>
				</div>
			</section>
}
export default BotBlock;