import React, {useState} from 'react';
import Article from './Article';
import Slider from "react-slick";

let TopBlock = (props) => {
	let [openArr, setOpenArr] = useState([]);
	let list = props.articles.filter(a => a.id <= props.amountArticles);
	let [activeLi, setActiveLi] = useState(0);
	let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 0,
      dots: false,
      arrows: false,
      adaptiveHeight: false,
      afterChange: index => {
      	setActiveLi(index);
      },
      responsive: [
      	{
      		breakpoint: 1200,
      		adaptiveHeight: false,
          	settings: {
	            slidesToShow: 2,
	            slidesToScroll: 0,
	          }
      	},
      	{
      		breakpoint: 768,
          	settings: {
          		adaptiveHeight: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	          }
      	},		
      ]
    };
    let slider = React.createRef();
	return  <section>
				<div className="main-block">
					<h2 className="h2-title"><span className="h2-title__dot">&#8226;</span>проекты, которым необходимо помочь</h2>
					<Slider className="article-list" {...settings} ref={c => slider = c } >
						{list.map(article => <Article arr={openArr} fun={setOpenArr} key={article.id} article={article} />)}
					</Slider>
					{props.haveSlider && <ul className="slider__pagination">
						{list.map((a,ind) => <li key={ind} onClick={()=>slider.slickGoTo(ind)} className={ind===activeLi && 'active'}></li>)}
					</ul>}
				</div>
				<div className="main-block show-more">
					<hr className="show-more__hr"/>
					<div className="show-more__inside">
						<button className="show-more__btn">Смотреть все проекты</button>
					</div>
				</div>
			</section>
}


export default TopBlock;