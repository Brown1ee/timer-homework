import React from "react";
import { asyncTimer, stopTimer, restartTimer } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

const Timer = () => {
  const dispatch = useDispatch();
  const curentTime = useSelector((state) => state.curentTime);
  const started = useSelector((state) => state.started);

  return (
    <div>
      <h1 className="text-color-grey">Timer</h1>
      <h2 className="text-color-grey">{curentTime}</h2>
      <Button onClick={() => dispatch(asyncTimer())} disabled={started}>
        Start
      </Button>
      <Button onClick={() => dispatch(stopTimer())}>Stop</Button>
      <Button onClick={() => dispatch(restartTimer())}>Restart</Button>
    </div>
  );
};

export default Timer;
