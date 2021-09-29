import React, { useState ,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector , useDispatch} from "react-redux";
import { selectId,setId, setData, selectData } from "./data/dataSlice";
import { useHistory } from "react-router-dom";

function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState();
  const dispatch = useDispatch(); 
  const history = useHistory();
  
  

  function handleMobile(e) {
    e.preventDefault();
    setMobile(e.target.value);

    let x = e.target.value;
    if (x.length == 10) {
    
        axios({
            method: "POST",
            url: "https://niobooks.in/api/web/request_otp",
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                "client": "web"
            },
            data: {
                "mobile_number":x
            },
          })
        .then((res) => {
            console.log(res);
        })
    }
  }

  function handleSubmit(e) {
   
    e.preventDefault();
    
    axios({
        method: "POST",
        url: "https://niobooks.in/api/web/authenticate",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "client": "web"
        },
        data: {
            "mobile_number":mobile,
            "otp_code": parseInt(otp)
        },
      })
    .then((res) => {
        console.log(res.data);

        dispatch(setData({ data: res.data }));
        dispatch(setId({ id: res.data.id }));
        localStorage.setItem("current-user", JSON.stringify(res.data));
        history.push("/dashboard");
        
    })
    .catch((res)=>{
        console.log("error",res);
    })
  }

  return (
    <div>
      <h3>Login</h3>
      <br />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter Mobile Number</Form.Label>
          <Form.Control
            value={mobile}
            onChange={(e) => handleMobile(e)}
            type="text"
            placeholder="Mobile Number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="number"
            placeholder="OTP"
          />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} variant="dark">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
