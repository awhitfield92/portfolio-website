import React from 'react';
import images from '../content/img/images';
import portfolio from '../content/content';

export class Portfolio extends React.Component {

  render() {

    const portfolioContent = portfolio.map(({id, title, type, desc}) => 
            <ul key={id}>
                <li>{title}</li>
                <li>{type}</li>
                <li>{desc}</li>
            </ul>
        )

    const imgSrc = images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)
 
    return (
        <section>
            <div>
                <header>
                        <h3>
                            Portfolio
                        </h3>
                </header>
                <div>
                    <div>{portfolioContent}</div>
                    <div>{imgSrc}</div>
                </div>
            </div>
        </section>
    );
  }
}