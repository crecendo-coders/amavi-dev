import {FastField, ErrorMessage} from 'formik'
import TextError from './Error'

function Input(props) {
    const {label, name, ...rest} = props
  return (
    <div  className='mx-12 mt-8'>
        <label htmlFor={name}>{label}</label>
        < FastField id={name} name={name} {...rest} />
        <ErrorMessage name = {name}component = {TextError}/>
    </div>
  )
}

export default Input