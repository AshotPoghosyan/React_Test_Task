import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {myImages} from "../db/FakeDB";


class ReactCarusel extends React.Component{

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="container carusel">
            <Carousel autoPlay infiniteLoop={true} showStatus={false} showIndicators={false} width={"75"}>
                {
                    myImages.map((item, index) => {
                        return <div key={index}>
                            <img src={item.imgUrl} alt={item.legend}/>
                            <p className="legend">{item.legend}</p>
                        </div>
                    })
                }
            </Carousel>
            </div>

        )
    }
}

export default ReactCarusel;