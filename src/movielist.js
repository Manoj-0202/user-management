import react, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const MovieList = () =>{


    let[stdetails , setstdetails] = useState([]);
    let[name , setname] = useState("");
    let[age , setage] = useState("");
    let[school , setschool] = useState("");
    let[classs , setclasss] = useState("");
    let[section , setsection] = useState("");

    const save = (obj) =>{
        obj.preventDefault();

        let newstudent = {"sname" : name , "sage" : age , "sschool" : school , "sclass" : classs , "ssection" : section};

        if(stid == "noindex"){
            setstdetails(stdetails = [...stdetails , newstudent]);
        }else{
            stdetails[stid] = newstudent;
            setstdetails(stdetails = [...stdetails]);
            setstid("noindex");
        }
        
        setname("");setage("");setschool("");setclasss("");setsection("");
    }

    const delstudent = (index) =>{
        stdetails.splice(index , 1);
        setstdetails(stdetails = [...stdetails]);
    }

    let[stid , setstid] = useState("noindex");
    const editstudent = (sd , index) =>{
        setstid(index);
        setname(sd.sname);setage(sd.sage);setschool(sd.sschool);setclasss(sd.sclass);setsection(sd.ssection);
    }

    return(
        <div className="container mt-5">
            <div className="row">
            

                <div className="col-xl-6">
                    <h1 className="text-center"> Enter Student Details </h1>
                    <form className="form-control" onSubmit={save}>
                        <p> Enter Name  <input type="text" className="form-control" placeholder="Enter Name" onChange={obj=>setname(obj.target.value)} value={name} /> </p>
                        
                        <p> Enter Age <input type="text" className="form-control" placeholder="Enter Age" onChange={obj=>setage(obj.target.value)} value={age}  /> </p>
                        
                        <p> Enter School Name <input type="text" className="form-control" placeholder="Enter School Name" onChange={obj=>setschool(obj.target.value)} value={school}  /> </p>
                        
                        <p> Enter Class <input type="text" className="form-control" placeholder="Enter Class" onChange={obj=>setclasss(obj.target.value)} value={classs}  /> </p>
                        
                        <p> Select Section 
                        <select className="form-control" placeholder="Enter Section" onChange={obj=>setsection(obj.target.value)} value={section}  >
                            <option> Choose </option>
                            <option> A </option>
                            <option> B </option>
                            <option> C </option>
                        </select>
                        </p>
                        
                        <div className="text-center"> <button className="btn btn-primary mt-3"> Save </button> </div>
                    </form>
                </div>
                <div className="col-xl-3">
                    <h1 className="text-center">Students List </h1>
                    {
                        stdetails.map((sd , index) =>{
                            return(
                                <div key={index} className="form-control m-2">
                                    <p> Name : {sd.sname}</p>
                                    <p> Age : {sd.sage} Y </p>
                                    <p>School : {sd.sschool}</p>
                                    <p>Class : {sd.sclass} </p>
                                    <p>Section: {sd.ssection}</p>
                                    <p className="text-center"><button className="btn btn-success" onClick={obj=>editstudent(sd , index)} > Edit </button> <button className="btn btn-danger" onClick={obj=>delstudent(index)}> Delete </button> </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;