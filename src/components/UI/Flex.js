import './Flex.css';

function Flex(props) {
    const classes = 'flex ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Flex;
