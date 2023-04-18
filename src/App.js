import React,{useState,useEffect} from 'react'

import { Form, FormElement} from '@progress/kendo-react-form';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import { Input } from '@progress/kendo-react-inputs';

import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from './redux/FetchSlice';



// import  {FetchDataThunkApi} from './reduxThunkApi/FetchService';



function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);

  const [item,setItem] = useState({
    institutionName:"",
    loanamount:"",
    principleamount:"",
    emiamount:"",
  });

  const handleClick = (e) => {
    setItem(e.target.values);
    // alert(JSON.stringify(data));
  }

  useEffect (() => {
    // var raw = JSON.stringify({
      var raw = JSON.stringify({
        "applicantId": 2,
        "internalApplicationId": 2,
        "customerId": null
    });
    
    var requestOptions = {
      method: 'POST',
      headers: {
          "Content-Type":"application/json"
      },
      body: raw,
    };
    dispatch(fetchData(requestOptions));
    // dispatch(FetchDataThunkApi(requestOptions));
  },[]);
  return (
    <div>

      <Form 
        render={formRenderProps => (
          <FormElement>
              <div style={{width:"500px",paddingTop:"20px"}}>
                <Label for = "institutionName">Name of the Institution</Label>
                <Input
                  name="institutionName"
                  onChange={(e) => setItem(e.target.value)}
                />
              </div>
              <div  style={{width:"500px",paddingTop:"20px"}}>
                 <Label for = "loanamount">Loan Amount</Label>
                <Input
                name='loanamount'
                onChange={(e) => setItem(e.target.value)}
                />
              </div>
              <div  style={{width:"500px",paddingTop:"20px"}}>
                <Label for = "principleamount">Principle Amount Outstanding</Label>
                <Input
                name='principleamount'
                onChange={(e) => setItem(e.target.value)}
                />
              </div>

            
            <div  style={{width:"500px",paddingTop:"20px",paddingBottom:'20px'}}>
              <Label for = "emiamount">EMI Amount</Label>
                <Input
                name='emiamount'
                onChange={(e) => setItem(e.target.value)}
                />
              </div> 

              <div>
                <Button onClick={handleClick}>
                  ADD
                </Button>
              </div>
           

            <br />
            <br />

            <Grid data={data?.loanList}>
              <GridColumn
                field="nameOfInstitution"
                title="Name of Institution"
              />
              <GridColumn
                field="loanAmount"
                title="Loan Amount (in INR)"
              />
              
              <GridColumn
                field="principalOutstandingAmount"
                title="Principle amount outstanding (in INR)"
              />

              <GridColumn
                field="emiAmount"
                title="EMI Amount (in INR)"
              />
              
              <GridColumn
                field="action"
                title="Action"
                cell={props => (
                  <td>
                    <FiEdit3
                      className="editButton"
                      style={{ fontSize: '18px' }}
                      onClick={() => {
                      }}
                    />
                    &nbsp; &nbsp;
                    <FiTrash2
                      className="deleteButton"
                      style={{ fontSize: '18px' }}
                    />
                  </td>
                )}
              />
            </Grid>
          </FormElement>
        )}
      />
    </div>
  )
}

export default App