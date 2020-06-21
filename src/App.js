import React from 'react';
import TopBlock from './components/TopBlock';
import BotBlock from './components/BotBlock';
import {connect} from 'react-redux';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			haveSlider: false,
			amountArticles: 3,
			haveNewArrows: false
		}
		this.resizeFun = this.resizeFun.bind(this);
		this.setOpacity = this.setOpacity.bind(this);
	}
	render() {
		return  <main className="wrapper">
					<TopBlock amountArticles={this.state.amountArticles} articles={this.props.articles} haveSlider={this.state.haveSlider} />
					<BotBlock setOpacity={this.setOpacity} haveNewArrows={this.state.haveNewArrows} posts={this.props.posts} />
				</main>
	}
	setOpacity(index) {
    	let slides = document.querySelectorAll('.bot-block__item');
	    slides.forEach((item, ind) => {
    		item.style.opacity = item.dataset.opacity;
	    })
	    //slides[index].style.color = 'black';
    }
	resizeFun() {
		if(document.documentElement.clientWidth < 768) {
			this.setState({
				amountArticles: 3,
				haveSlider: true,
				haveNewArrows: true
			})
		} else if(document.documentElement.clientWidth < 1200) {
			this.setState({
				haveSlider: false,
				amountArticles: 2,
				haveNewArrows: true
			})
		} else {
			this.setState({
				haveSlider: false,
				amountArticles: 3,
				haveNewArrows: false
			})
		}
	}
	componentDidMount() {
		this.resizeFun();
		//this.setOpacity(0);
		window.addEventListener('resize', this.resizeFun);
	}
	componentWillUnmount () {
	  	window.removeEventListener('resize', this.resizeFun);
	}
}
let mapDispatchToProps = (state) => ({
	articles: state.main.articles,
	posts: state.main.posts
})
export default connect(mapDispatchToProps, {})(App);