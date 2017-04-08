require('./CardWelcome.less');
import { Carousel, Button } from "antd-mobile"; 
import { Control } from 'react-keeper';

function CardWelcome ({ images }){ //请展开传入的属性

    function handleClick(key){
        Control.go('/home')
    }

    return (
        <div className="card-welcome"> 
            <Button className='my-button' onClick={handleClick} >开始</Button>          
            <Carousel
                className='my-carousel' autoplay={true} infinite
                autoplayInterval={5000}
                >
                <img src= {require('assets/img/a.jpg')} />
                <img src= {require('assets/img/b.jpg')} />
            </Carousel>
        </div>
    );
};

export default  CardWelcome ;