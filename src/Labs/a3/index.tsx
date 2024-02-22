import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import CLasses from "./CLasses";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./HighLight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <ConditionalOutput />
            <Styles />
            <CLasses />
            <PathParameters />
            <JavaScript />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Add a={3} b={4} />
            <TodoList/>
        </div>
    );
}
export default Assignment3;