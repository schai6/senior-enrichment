// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import DropdownList from 'react-widgets/lib/DropdownList'
// import SelectList from 'react-widgets/lib/SelectList'
// import Multiselect from 'react-widgets/lib/Multiselect'
// import 'react-widgets/dist/css/react-widgets.css'

// const colors = [ { color: 'Red', value: 'ff0000' },
//   { color: 'Green', value: '00ff00' },
//   { color: 'Blue', value: '0000ff' } ]

// let CampusForm = props => {
//   const { handleSubmit, pristine, reset, submitting, students } = props;
//   return (
//     <form onSubmit={handleSubmit(values => props.handleFormSubmit(values, props.campuses, props.students, event)))}>
//       <div>
//         <label>Favorite Color</label>
//         <Field
//           name="favoriteColor"
//           component={DropdownList}
//           data={colors}
//           valueField="value"
//           textField="color"/>
//       </div>
//       <div>
//         <label>Hobbies</label>
//         <Field
//           name="hobbies"
//           component={Multiselect}
//           defaultValue={[]}
//           onBlur={() => props.onBlur()}
//           data={[ 'Guitar', 'Cycling', 'Hiking' ]}/>
//       </div>
//       <div>
//         <label>Sex</label>
//         <Field
//           name="sex"
//           component={SelectList}
//           onBlur={() => props.onBlur()}
//           data={[ 'male', 'female' ]}/>
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
//         </button>
//       </div>
//     </form>
//   )
// }

// CampusForm = reduxForm({
//   form: 'CampusForm'  // a unique identifier for this form
// })(CampusForm);

// export default CampusForm;
