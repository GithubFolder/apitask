import React,{useState,useEffect} from 'react'

import { Form, FormElement} from '@progress/kendo-react-form';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import { Input } from '@progress/kendo-react-inputs';

import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from './redux/FetchSlice';

import {AddDataThunkApi,DeleteThunkApi, GetThunkApi,UpdateThunkApi} from './reduxThunkApi/FetchService';


// import {FetchDataThunkApi} from './reduxThunkApi/FetchService';



function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);

  const [item,setItem] = useState({
    nameOfInstitution:"",
    loanamount:"",
    principleamount:"",
    emiamount:"",
  });

  const [isedit,setIsEdit] = useState(false);

  const changeHandler = (e) => {
    setItem({...item,[(e).target.name]: (e).target.value})
 }

  
  useEffect (() => {
      var raw = JSON.stringify({
      
        "applicantId": 17,
        "internalApplicationId": 17,
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

  const addData = () => {
    if (item?.loanId){
   dispatch(UpdateThunkApi
    ({
    userId: "Trainee",
    loanId: item.loanId,
    nameOfInstitution: item.nameOfInstitution,
    applicantId: 17,
    internalApplicationId: 17,
    "customerId":null,
    "loanAmount": item.loanamount,
    "principalOutstandingAmount": item.principleamount,
    "emiAmount": item.emiamount
   })
   )
    }else{
      dispatch(
        AddDataThunkApi({
        internalApplicationId: 17,
        applicantId: 17,
        customerId:null,
        userId: "Trainee",
        nameOfInstitution: item.nameOfInstitution,
        loanAmount: parseInt(item.loanamount),
        principalOutstandingAmount: parseInt(item.principleamount),
        emiAmount: parseInt(item.emiamount),
      }),
      )
    }
    console.log(dispatch);
  }

  const deleteData = (props) =>{
    dispatch(
      DeleteThunkApi({
       "userId": "Trainee",
       "applicantId": 17,
       "internalApplicationId": 17,
       "customerId": "",
       "loanId": props.dataItem.loanId

      })
    )
    console.log(dispatch);
  }
  


  const updateData = (props) => {
    setIsEdit(true);
    console.log(props.dataItem);
    setItem({...item,
      nameOfInstitution:props.dataItem.nameOfInstitution,
      loanamount:props.dataItem.loanAmount, 
      principleamount:props.dataItem.principalOutstandingAmount,
      emiamount:props.dataItem.emiAmount,
      loanId:props.dataItem.loanId

    })
  }

  console.log(item);



  return (
    <div>

      <Form 
        render={formRenderProps => (
          <FormElement>
              <div style={{width:"500px",paddingTop:"20px"}}>
                <Label for = "nameOfInstitution">Name of the Institution</Label>
                <Input
                  name="nameOfInstitution"
                  onChange={ changeHandler}
                  value={item.nameOfInstitution}
                />
              </div>
              <div  style={{width:"500px",paddingTop:"20px"}}>
                 <Label for = "loanamount">Loan Amount</Label>
                <Input
                name='loanamount'
                value={item.loanamount}
                onChange={ changeHandler}
                />
              </div>
              <div  style={{width:"500px",paddingTop:"20px"}}>
                <Label for = "principleamount">Principle Amount Outstanding</Label>
                <Input
                 value={item.principleamount}
                name='principleamount'
                onChange={changeHandler}
                // {(item.principleamount)}
                />
              </div>

            
            <div  style={{width:"500px",paddingTop:"20px",paddingBottom:'20px'}}>
              <Label for = "emiamount">EMI Amount</Label>
                <Input
                value={item.emiamount}
                name='emiamount'
                onChange={ changeHandler}
                // {(item.emiamount)}
                />
              </div> 

              <div>
               
                   <Button onClick={addData}>
                     {isedit == true?"Edit":"add"}
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
                     
                      onClick={() => updateData(props)}
                    />
                    &nbsp; &nbsp;
                    <FiTrash2
                      className="deleteButton"
                      style={{ fontSize: '18px' }}
                      onClick={() => deleteData(props)}
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