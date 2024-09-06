import React from 'react';
import cardData from '../../cardData/cardData';

const Card = ({imageUrl, children}) => {
	return (
		<div className="card" style={{width: "18rem", margin: "0 auto", marginTop: 15}}>
			{imageUrl && <img src={imageUrl} className="card-img-top" alt="image-block"/>}
			{children}
		</div>
	)
}

const RenderCard = () => {
	return (
		<>
		{cardData.map((card, index) => (
			<Card key={index} imageUrl={card.imageUrl}>
						<div className="card-body">
							<h5 className="card-title">{card.title}</h5>
							<p className="card-text">{card.text}</p>
							<a href="#link" className="btn btn-primary">Перейти куда-нибудь</a>
						</div>
			</Card>
      	))}
		</>
	)
}

const App = () => {
	return <RenderCard/>
}

export default App;

