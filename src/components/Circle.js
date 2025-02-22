import Flex from './UI/Flex';
import './Circle.css';

function Circle(props) {
    let active = props.active ? "active" : "";
    let classes = "circle " + active;
    return <Flex className={classes} >{props.step}</Flex>
}

export default Circle;