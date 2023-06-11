import { useEffect, useReducer, useRef } from "react";
import styless from "./UserInfo.module.scss";
import ReducerFun, { intialUserState } from "../store/ReducerFun";

const UserInfo = () => {
  const [state, dispatch] = useReducer(ReducerFun, intialUserState);

const ageInputRef : any = useRef();
const dialogRef : any = useRef();

useEffect(() => {
    console.log('ageInput 1',ageInputRef?.current?.value)
  }, [ageInputRef?.current?.value])


  const submitData = () => {

if(dialogRef?.current.open) {dialogRef.current.close()
}else{
    dialogRef?.current.showModal()
}

console.log("dialogRef",dialogRef?.current);

if(ageInputRef?.current){
    console.log("ageInputRef",ageInputRef.current);
}

    // console.log("state", state);
  };

  const userDispatchFun = (newName: any) => {
    dispatch({ type: "setUserName", payload: { newName } });
  };

  const ageDispatchFun = (newAge: any) => {
    dispatch({ type: "setUserAge", payload: { newAge } });
  };

  const cmpDispatchFun = (newCmp: any) => {
    if (state.userName === newCmp) {
      alert("company name can not be same as user name");
      return;
    }
    dispatch({ type: "setUserCmp", payload: { newCmp } });
  };

  return (
    <div className={styless["user-wrapper"]}>
      <div className="dialog">
        <dialog id="dialogTest" ref={dialogRef}>
          <p id="ptag">Greetings, one and all!</p>

          <button type="button" onClick={() => dialogRef.current.close()}>
            OK
          </button>
        </dialog>
      </div>
      ageInput.value {ageInputRef?.current?.value}
      <div className={styless["form-control"]}>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          id="username"
          value={state.userName}
          onChange={(e) => userDispatchFun(e.target.value)}
        />
      </div>
      <div className={styless["form-control"]}>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          id="age"
          value={state.age}
          onChange={(e) => ageDispatchFun(e.target.value)}
        />
      </div>
      <div className={styless["form-control"]}>
        <label htmlFor="cmp">Company</label>
        <input
          type="text"
          name="cmp"
          placeholder="Enter your company name"
          id="cmp"
          value={state.cmp}
          onChange={(e) => cmpDispatchFun(e.target.value)}
        />
      </div>
      <button type="button" onClick={submitData}>
        {" "}
      Submit
      </button>
    </div>
  );
};
export default UserInfo;
