import React, { useState } from 'react'
import Resistration from './Resistration/Resistration'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../Firebase/FirebaseSDK';
import { collection, addDoc } from "firebase/firestore"; 

const App = () => {
  const auth = getAuth();
  console.log(auth);
  
const [InputData,setInputData]= useState({
  FirstName: "",
  Lastname: "",
  Email: "",
  Password: "",
  RepeatPassword: "",
  Gender: "",

});

const [InputDataError,setInputDataError]= useState({
  FirstNameErr: "",
  LastnameErr: "",
  EmailErr: "",
  PasswordErr: "",
  RepeatPasswordErr: "",
  PassNotmatchErr: "",
  GenderErr: "",

});


// HandleInput function start Here

const HandleInput = (e) => {
   setInputData({
        ...InputData,
        [e.target.id]: e.target.value,
   })
   
}

// HandleSubmit function start here
 const HandleSubmit = () => {
    const { FirstName, Lastname, Email, Password, RepeatPassword, Gender } =
      InputData;
    if(!FirstName){
      setInputDataError({
        ...InputDataError,
        LastnameErr: "",
        EmailErr: "",
        PasswordErr: "",
        RepeatPasswordErr: "",
        PassNotmatchErr: "",
        GenderErr: "",
        FirstNameErr: "First Name Missing",
      });
    }else if(!Lastname){
      setInputDataError({
        ...InputDataError,
        FirstNameErr: "",
        EmailErr: "",
        PasswordErr: "",
        RepeatPasswordErr: "",
        PassNotmatchErr: "",
        GenderErr: "",
        LastnameErr:"Last Name Missing",     
      })
    }else if(!Email){
      setInputDataError({
        ...InputDataError, 
        FirstNameErr: "",
        LastnameErr: "",
        PasswordErr: "",
        RepeatPasswordErr: "",
        PassNotmatchErr: "",
        GenderErr: "",   
        EmailErr:"Email Missing",    
      })
    }else if(!Password){
      setInputDataError({
        ...InputDataError, 
        FirstNameErr: "",
        LastnameErr: "",
        EmailErr: "",
        RepeatPasswordErr: "",
        PassNotmatchErr: "",
        GenderErr: "",   
        PasswordErr:"Password Missing",    
      })
    }else if(!RepeatPassword){
      setInputDataError({
        ...InputDataError,
        FirstNameErr: "",
        LastnameErr: "",
        EmailErr: "",
        PasswordErr: "",
        PassNotmatchErr: "",
        GenderErr: "",       
        RepeatPasswordErr:"Repeat Password Missing",  
      })
    }else if(Password !== RepeatPassword){
      setInputDataError({
        ...InputDataError,
        FirstNameErr: "",
        LastnameErr: "",
        EmailErr: "",
        PasswordErr: "",
        RepeatPasswordErr: "",
        GenderErr: "",       
        PassNotmatchErr:"Password Not Match",   
      })
    }else if(!Gender){
      setInputDataError({
        ...InputDataError,
        FirstNameErr: "",
        LastnameErr: "",
        EmailErr: "",
        PasswordErr: "",
        RepeatPasswordErr: "",
        PassNotmatchErr: "",       
        GenderErr:"Gender Missing",  
      })
    }else{
        
      // create useer with firebase
      createUserWithEmailAndPassword(auth,InputData.Email,InputData.Password).then((userCredential) => {
        console.log("resistration Done",userCredential);
        
      }).then(() => {
        addDoc(collection(db, "signUp/"), InputData)
          .then((signData) => {
            console.log(signData);
          })
          .catch((err) => {
            console.log(err);
          });
      }).catch((err) => {
        console.log(err);
        
      }).finally(() => {
        setInputData({
          FirstName: "",
          Lastname: "",
          Email: "",
          Password: "",
          RepeatPassword: "",
          Gender: "",
        })
      });
      
    }

 };

  return (
    <>
      <div className="bg-blue-200">
        <div className="container">
          <div className="flex items-center justify-center h-[100vh]">
            <div className="bg-gray-100 w-[400px] h-[600px] rounded-md shadow-md">
              <div className="flex items-center justify-center mt-2">
                <h2 className="font-bold text-3xl font-sans text-green-500">
                  Resistration
                </h2>
              </div>
              <div className="mt-3">
                <div>
                  <Resistration
                    labelInput={"First Name"}
                    InputType={"text"}
                    InpuPlaceholder={"Enter Your First Name"}
                    InputId={"FirstName"}
                    InputName={"FirstName"}
                    OnValue={InputData.FirstName}
                    OnclickValue={HandleInput}
                    className={`${
                      InputDataError.FirstNameErr
                        ? "border-2 border-red-500 py-1 w-[350px] pl-2 rounded-md"
                        : "border-2 border-gray-500 py-1 w-[350px] pl-2 rounded-md"
                    }`}
                  />
                  {InputDataError.FirstNameErr && (
                    <p className="pl-6 text-red-500">
                      {InputDataError.FirstNameErr}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <Resistration
                    labelInput={"Last Name"}
                    InputType={"text"}
                    InpuPlaceholder={"Enter Your Last Name"}
                    InputId={"Lastname"}
                    InputName={"Lastname"}
                    OnValue={InputData.Lastname}
                    OnclickValue={HandleInput}
                    className={`${
                      InputDataError.LastnameErr
                        ? "border-2 border-red-500 py-1 w-[350px] pl-2 rounded-md"
                        : "border-2 border-gray-500 py-1  w-[350px] pl-2 rounded-md"
                    }`}
                  />
                  {InputDataError.LastnameErr && (
                    <p className="pl-6 text-red-500">
                      {InputDataError.LastnameErr}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <Resistration
                    labelInput={"Email"}
                    InputType={"text"}
                    InpuPlaceholder={"Enter Your Email"}
                    InputId={"Email"}
                    InputName={"Email"}
                    OnValue={InputData.Email}
                    OnclickValue={HandleInput}
                    className={`${
                      InputDataError.EmailErr
                        ? "border-2 border-red-500 py-1 w-[350px] pl-2 rounded-md"
                        : "border-2 border-gray-500 py-1  w-[350px] pl-2 rounded-md"
                    }`}
                  />
                  {InputDataError.EmailErr && (
                    <p className="pl-6 text-red-500">
                      {InputDataError.EmailErr}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <Resistration
                    labelInput={"Password"}
                    InputType={"password"}
                    InpuPlaceholder={"Enter Your Password"}
                    InputId={"Password"}
                    InputName={"Password"}
                    OnValue={InputData.Password}
                    OnclickValue={HandleInput}
                    className={`${
                      InputDataError.PasswordErr
                        ? "border-2 border-red-500 py-1 w-[350px] pl-2 rounded-md"
                        : "border-2 border-gray-500 py-1  w-[350px] pl-2 rounded-md"
                    }`}
                  />
                  {InputDataError.PasswordErr && (
                    <p className="pl-6 text-red-500">
                      {InputDataError.PasswordErr}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <Resistration
                    labelInput={"Repeat Password"}
                    InputType={"password"}
                    InpuPlaceholder={"Enter Your Repeat Password"}
                    InputId={"RepeatPassword"}
                    InputName={"RepeatPassword"}
                    OnValue={InputData.RepeatPassword}
                    OnclickValue={HandleInput}
                    className={`${
                      InputDataError.RepeatPasswordErr
                        ? "border-2 border-red-500 py-1 w-[350px] pl-2 rounded-md"
                        : "border-2 border-gray-500 py-1  w-[350px] pl-2 rounded-md"
                    }`}
                  />
                  {InputDataError.RepeatPasswordErr && (
                    <p className="pl-6 text-red-500">
                      {InputDataError.RepeatPasswordErr}
                    </p>
                  )}
                  <div>
                    {InputDataError.PassNotmatchErr && (
                      <p className="pl-6 text-red-500">
                        {InputDataError.PassNotmatchErr}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="pl-6">
                  <label htmlFor="Gender">Gender</label>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <select
                    name="Gender"
                    id="Gender"
                    value={InputData.Gender}
                    onChange={HandleInput}
                    className={`${
                      InputDataError.GenderErr
                        ? "border-2 border-red-500 py-1 w-[350px] pl-2 rounded-md"
                        : "border-2 border-gray-500 py-1  w-[350px] pl-2 rounded-md"
                    }`}
                  >
                    <option value="Select">Please Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  {InputDataError.GenderErr && (
                    <p className="pl-6 text-red-500">
                      {InputDataError.GenderErr}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center">
                <button
                  className="w-[350px] py-2 bg-green-400 font-bold text-white rounded-md"
                  onClick={HandleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
