import React from "react";
import { Descriptions, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { resetRoute, isToggleRoute } from "../../modules/route/actions";

export default function MapMessage() {
  const { route } = useSelector((state) => state.route);
  const dispatch = useDispatch();
  const fnResetRoute = () => {
    dispatch(resetRoute());
    dispatch(isToggleRoute(false));
  };
  return (
    <div className="map-modal">
      <Descriptions title="Заказ принят">
        <Descriptions.Item>
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут
        </Descriptions.Item>
      </Descriptions>
      <Button onClick={fnResetRoute} type="primary">
        Новый заказ
      </Button>
    </div>
  );
}
