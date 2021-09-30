import React, { useState, useEffect } from "react";
import { Form, Button, Navbar, Container ,Table} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setId, setData } from "./data/dataSlice";
import "./Dashboardbody.css";


function Dashboardbody() {
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const [salesprice, setSalesprice] = useState();
  const [purchaseprice, setPurchaseprice] = useState();
  const [unit, setUnit] = useState();
  const [date, setDate] = useState();
  const [arr, setArr] = useState([]);
  const [saveid, setSaveid] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const [currid, setcurrid] = useState();

  useEffect(() => {
    let data = localStorage.getItem("current-user");
    setcurrid(JSON.parse(data));
    let id = JSON.parse(data);
    const localdata = localStorage.getItem(`${id?.id}`);
    if (localdata) {
      let x = JSON.parse(localdata);
      x.sort(compare);
      setArr(x);
    }
  }, []);

  useEffect(() => {
    let data = localStorage.getItem("current-user");
    setcurrid(JSON.parse(data));
    let id = JSON.parse(data);
    localStorage.setItem(`${id?.id}`, JSON.stringify(arr));
  }, [arr]);

  //****************************************************************************

  function submitItem() {
    const elementsIndex = arr.findIndex((element) => element.id == saveid);

    if (elementsIndex === -1) {
      let x = {
        id: Math.floor(Math.random() * 100000 + 1),
        name: name,
        code: code,
        salesprice: parseInt(salesprice),
        purchaseprice: parseInt(purchaseprice),
        unit: unit,
        date: date,
      };
      let sorted = [...arr, x];
      sorted.sort(compare);
      setArr(sorted);
      console.log(x);
    } else {
      let x = {
        id: saveid,
        name: name,
        code: code,
        salesprice: parseInt(salesprice),
        purchaseprice: parseInt(purchaseprice),
        unit: unit,
        date: date,
      };
      let newArray = [...arr];
      newArray[elementsIndex] = x;
      newArray.sort(compare);
      setArr(newArray);
    }
    setName("");
    setCode("");
    setSalesprice("");
    setPurchaseprice("");
    setUnit("");
    setDate("");
  }

  //**********************************************************************

  function editItem(e, id) {
    setSaveid(id);
    let obj = {};
    console.log(id);

    arr?.map((e) => e.id == id && (obj = e));

    setName(obj.name);
    setCode(obj.code);
    setSalesprice(obj.salesprice);
    setPurchaseprice(obj.purchaseprice);
    setUnit(obj.unit);
    setDate(obj.date);
  }

  //*************************************************************************

  function logout() {
    localStorage.setItem("current-user", null);
    dispatch(setId({ id: null }));
    dispatch(setData({ data: null }));
    history.push("/");
  }

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <div className="full">
      <Navbar className="nav" variant="light">
        <Container>
          <Navbar.Brand>
            <h5 className="number">{currid?.mobile_number}</h5>
          </Navbar.Brand>
        </Container>
        <Form className="d-flex">
          <h2 className="logout" onClick={logout}>
            LOGOUT
          </h2>
        </Form>
      </Navbar>

      <div className="row">
        <div className="list">
          <h2 className="list-heading">Items</h2>

          <div className="list-inner">
            <div className="list-items">
              <Table bordered hover>
                <thead className="thead">
                  <tr>
                    <th><h2 className="table-heading">ITEM NAME</h2></th>
                    <th><h2 className="table-heading">ITEM CODE</h2></th>
                    <th><h2 className="table-heading">SELLING PRICE</h2></th>
                    <th><h2 className="table-heading">PURCHASING PRICE</h2></th>
                    <th><h2 className="table-heading">UNIT</h2></th>
                    <th><h2 className="table-heading">DATE</h2></th>
                    <th><h2 className="table-heading">ACTION</h2></th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {arr?.map((res) => {
                return (
                  <tr key={res.id}>
                    <td>
                      {res.name}  
                    </td>
                    <td>{res.code}</td>
                    <td>{res.salesprice}</td>
                    <td>{res.purchaseprice}</td>
                    <td>{res.unit}</td>
                    <td>{res.date}</td>
                    <td className="table-edit" onClick={(e) => editItem(e, res.id)}>Edit</td>
                    <hr />
                  </tr>
                );
              })}
                 
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="form">
          <h2 className="list-heading">Creat/Edit items</h2>

          <Form>
            <div className="form-position">
              <Form.Group className="form-input">
                <Form.Label>Item Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Item name"
                />
              </Form.Group>

              <Form.Group className="form-input">
                <Form.Label>Item Code</Form.Label>
                <Form.Control
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter Item Code"
                />
              </Form.Group>
            </div>

            <h2 className="form-bar">Stock and Pricing details(Optional)</h2>

            <div className="form-position">
              <Form.Group className="form-input">
                <Form.Label>Sales Price</Form.Label>
                <Form.Control
                  type="number"
                  value={salesprice}
                  onChange={(e) => setSalesprice(e.target.value)}
                  placeholder="₹ 0"
                />
              </Form.Group>

              <Form.Group className="form-input">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control
                  type="number"
                  value={purchaseprice}
                  onChange={(e) => setPurchaseprice(e.target.value)}
                  placeholder="₹ 0"
                />
              </Form.Group>
            </div>

            <div className="form-position">
              <Form.Group className="form-input">
                <Form.Label>Measuring UNIT</Form.Label>
                <Form.Control
                  as="select"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option>--Select Unit--</option>
                  <option value="pcs">pcs</option>
                  <option value="boxes">boxes</option>
                  <option value="gms">gms</option>
                  <option value="kgs">kgs</option>
                  <option value="ltr">ltr</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="form-input">
                <Form.Label>Opening Stock Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="date"
                />
              </Form.Group>
            </div>

            <Button
              style={{ backgroundColor: "#482cab" }}
              className="form-button"
              variant="primary"
              onClick={(e) => submitItem(e)}
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Dashboardbody;
