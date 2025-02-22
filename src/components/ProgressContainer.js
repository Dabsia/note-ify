import ProgressBar from "./ProgressBar";
import Circle from "./Circle";
import Flex from "./UI/Flex";
import './ProgressContainer.css';

function ProgressContainer(props) {
  return (
    <Flex className="progress-container">
      <ProgressBar progress={props.progress} />
      <Circle step={props.stages[0]} active={props.active === 0} />
      <Circle step={props.stages[1]} active={props.active === 1} />
      <Circle step={props.stages[2]} active={props.active === 2} />
      <Circle step={props.stages[3]} active={props.active === 3} />
    </Flex>
  );
}

/* This can be used instead of repeating 
{
  steps?.map((dot, id) => {
    return (
      <Circle key={id} step={dot} />
    )
  })
} */


export default ProgressContainer;