import React from "react";
import { asyncTimer, stopTimer, restartTimer } from "../../redux/actions";
import { connect } from "react-redux";
import { Button } from "antd";

const Timer = ({
  asyncTimer,
  curentTime,
  stopTimer,
  restartTimer,
  started,
}) => {
  return (
    <div>
      <h1 className="text-color-grey">Timer</h1>
      <h2 className="text-color-grey">{curentTime}</h2>
      <Button onClick={asyncTimer} disabled={started}>
        Start
      </Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={restartTimer}>Restart</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    curentTime: state.curentTime,
    started: state.started,
  };
};

export default connect(mapStateToProps, {
  asyncTimer,
  stopTimer,
  restartTimer,
})(Timer);
