import { Col, Image, Row } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../App";
import { type } from "@testing-library/user-event/dist/type";

export default function ShoeDetailPage() {
  const params = useParams();
  const [shoeDetail, setShoeDetail] = useState();
  const divElement = useRef();
  const [globalData, dispatch] = useContext(GlobalContext);
  const navigate = useNavigate();

  console.log("☣️👻👻 >>> ShoeDetailPage >>> globalContext: ", globalData);

  useEffect(() => {
    fetchShoeDetail();
  }, []);

  const fetchShoeDetail = async () => {
    try {
      const res = await axios({
        url: "https://66532115813d78e6d6d74b82.mockapi.io/shoes/" + params?.id,
      });

      if (res.status === 200) {
        setShoeDetail(res.data);
      }
    } catch (err) {
      dispatch({ type: "UPDATE_MESSAGE", payload: err.response.data });
      navigate("/");
    }
  };

  return (
    <div id="a" ref={divElement} className="container wrapper">
      <Row gutter={32}>
        <Col span={12}>
          <Image src={shoeDetail?.image} />
        </Col>
        <Col span={12}>
          <h3>{shoeDetail?.name}</h3>
          <p style={{ marginTop: 20 }}>{shoeDetail?.description}</p>
        </Col>
      </Row>
    </div>
  );
}
