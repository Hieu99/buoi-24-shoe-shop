import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";

export default function HomePage() {
  const navigate = useNavigate();
  const [globalState, dispatch] = useContext(GlobalContext);

  console.log("☣️👻👻 >>> HomePage >>> globalContext: ", globalState);
  useEffect(() => {
    fetchListShoe();
  }, []);

  const fetchListShoe = useCallback(async () => {
    try {
      const res = await axios({
        url: "https://66532115813d78e6d6d74b82.mockapi.io/shoes",
        method: "GET",
      });

      if (res.status === 200) {
        dispatch({ type: "UPDATE_DATA", payload: res.data });
      }
    } catch (err) {
      dispatch({ type: "UPDATE_MESSAGE", payload: err.response.data });
      console.log(err);
    }
  }, []);

  const handleRenderListShoe = () => {
    return globalState.data.map((shoe, index) => {
      return (
        <Col key={index} span={12} xs={24} sm={12} lg={8} xxl={6}>
          <Card
            onClick={() => {
              navigate(`shoe-detail/${shoe.id}`);
            }}
            hoverable
            style={{
              width: "100%",
            }}
            cover={<img alt="example" src={shoe.image} />}
          >
            <div>
              <p>Price: {shoe.price}</p>
              <p>Size: {shoe.size}</p>
            </div>
            <Meta title={shoe.name} description={shoe.description} />
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="container wrapper">
      <Row gutter={32}>
        {globalState.data.length > 0 && handleRenderListShoe()}
      </Row>
    </div>
  );
}
