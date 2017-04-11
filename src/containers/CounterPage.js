import React from "react";
import {connect} from "react-redux";


const counterRender = ({count, increment, decrement}) => {
  return (
    <div>
      Current counter value: {count}
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

// counterRender.propTypes = {
//   count: PropTypes.object.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired
// };

const mapStateToProps = (state) => {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type:"INCREMENT"}),
  decrement: () => dispatch({type:"DECREMENT"})
});

export const counterPage = connect(mapStateToProps, mapDispatchToProps)(counterRender);
