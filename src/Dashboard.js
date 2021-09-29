import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Dashboard() {
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const [salesprice, setSalesprice] = useState();
  const [purchaseprice, setPurchaseprice] = useState();
  const [unit, setUnit] = useState();
  const [date, setDate] = useState();
  const [arr, setArr] = useState([]);
  const [saveid, setSaveid] = useState()

  function submitItem() {

    const elementsIndex = arr.findIndex((element) => element.id == saveid);

    if(elementsIndex === -1)
    { 
      let x = {
        id : Math.floor(Math.random() * 100000 + 1),
        name: name,
        code: code,
        salesprice: parseInt(salesprice),
        purchaseprice: parseInt(purchaseprice),
        unit: unit,
        date: date,
      };
      setArr([...arr , x ]);
      console.log(x);  
    }
    else{
      let x = {
        id : saveid,
        name: name,
        code: code,
        salesprice: parseInt(salesprice),
        purchaseprice: parseInt(purchaseprice),
        unit: unit,
        date: date,
      };
      let newArray = [...arr];
      newArray[elementsIndex] = x;
      setArr(newArray);

    }  
    setName("");
    setCode("");
    setSalesprice("");
    setPurchaseprice("");
    setUnit("");
    setDate("");

  }

  function editItem(e,id)
  {
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

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <h2>Items</h2>
            <hr/>
            {arr?.map((res) => {
              return (
                <div
                  key={res.id}
                  
                >
                    <h4>{res.id}</h4>
                    <h4> {res.name} {res.code} {res.salesprice}</h4>
                    <h4>{res.purchaseprice}</h4>
                    <h4>{res.unit}</h4>
                    <h4>{res.date}</h4>
                <button onClick={(e) => editItem(e, res.id)}>Edit</button>
                 <hr/>
                </div>
              );
            })}
          </div>
          <div className="col-md-4 my-auto">
            <h2>Creat/Edit items</h2>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Item Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Item name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Item Code</Form.Label>
                <Form.Control
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter Item Code"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Sales Price</Form.Label>
                <Form.Control
                  type="number"
                  value={salesprice}
                  onChange={(e) => setSalesprice(e.target.value)}
                  placeholder="₹ 0"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control
                  type="number"
                  value={purchaseprice}
                  onChange={(e) => setPurchaseprice(e.target.value)}
                  placeholder="₹ 0"
                />
              </Form.Group>

              <Form.Group className="mb-3">
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

              <Form.Group className="mb-3">
                <Form.Label>Opening Stock Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="date"
                />
              </Form.Group>

              <Button variant="primary" onClick={(e) => submitItem(e)}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
