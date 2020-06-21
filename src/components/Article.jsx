import React from 'react';
import mark from '../images/mark.png';
import arm from '../images/arm.svg';

let Article = ({article, arr, fun}) => {
	let procent = Math.floor(article.money.have/(article.money.need/100));
	let border = Math.floor(procent*0.3);
	let addToArr = () => {
		fun([...arr, article.id])
	}
	let cutStr = (str, num = 80) => {
		if (str.length <= num) return str;
		for(let i = num; i<str.length; i++){
			if (str[i] === ' ') {
				return (str.slice(0, i)+'...');
			}
		}
	}
	return  <div className="article-wrapper" onClick={addToArr}>
				<div className="article" style={{backgroundColor: arr.includes(article.id) && '#F3F3F3'}}>
					<div className="article__img-shadow">
						<a href="#" className="article__img" style={{backgroundImage: `url(${article.img})`}} >
							<img className="article__mark mark" src={mark} alt="" />
						</a>
					</div>
					<h3 className="article__title"><a href="#">{article.name}</a></h3>
					<p className="article__text">{arr.includes(article.id) ? article.text : cutStr(article.text)}</p>
					<div className="article__money">
						<div className="article__diagramma">
							<div className="article__diagramma-inside" style={{borderBottom: border+'px solid #8DCA78'}} ></div>
							<p className="article__diagramma-value" style={{color: procent>55 && 'white'}}>{procent}%</p>
						</div>
						<div className="article__need-money">
							<p className="article__money-title">необходимо собрать</p>
							<p className="article__money-info">
								<span className="green">{article.money.have}</span> из 
								<span className="article__have-money"> {article.money.need}</span> 
								<span className="article__type-money"> RUB</span>
							</p>
						</div>
						<div className="article__time">
							<p className="article__money-title">конец</p>
							<p className="article__money-info">завтра</p>
						</div>
					</div>
					<p className="article__tags">
						{article.tags.map(t => <a href="#" className="article__tag">{t}</a>)}
					</p>
				</div>
				<div className="article__help-zone">
					<button style={{display: arr.includes(article.id) && 'flex'}} className="article__help"><img src={arm} alt="help"/></button>
				</div>
			</div>
}
export default Article;