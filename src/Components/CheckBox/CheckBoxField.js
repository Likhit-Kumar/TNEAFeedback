// // import { useEffect, useState } from 'react'
// import './CheckBoxField.css'

// const fieldData = [
//     { fieldName: "Grievance"},
//     { fieldName: "Queries"},
// ]

// function CheckBoxField() {

//     // const [fields, setFields] = useState([]);

//     // useEffect(() => {
//     //   setFields(fieldData);
//     // }, []);
  
//     // const handleChange = (e) => {
//     //   const { name, checked } = e.target;
//     //   console.log(name)
//     //   let tempField = fields.map((field) =>
//     //     field.fieldName === name ? { ...field, isChecked: checked } : field
//     //   );
//     //   setFields(tempField);
//     // };

//     // return (
      
//     // )
    
//     // return (
//     //   <div className="container my-4" style={{ width: "500px" }}>
//     //   <form className="form w-100">
//     //     <h3>Select Issues</h3>
//     //     {fields.map((field, index) => (
//     //       <div className="form-check" key={index}>
//     //         <input
//     //           type="checkbox"
//     //           className="form-check-input"
//     //           name={field.fieldName}
//     //           checked={field?.isChecked || false}
//     //           onChange={handleChange}
//     //         ></input>
//     //         <label className="form-check-label ms-2">{field.fieldName}</label>
//     //         <div class="hidden-input">
//     //           <input type="text" placeholder="enter your Feedback"/>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </form>
//     //   </div>
//     // )
// }


// export default CheckBoxField