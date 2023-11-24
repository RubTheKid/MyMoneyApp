import React, { Component } from "react"
import { reduxForm , Field } from 'redux-form'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { init } from "./billingCycleActions"
import labelAndInput from "../src/common/form/labelAndInput"

class BillingCycleForm extends Component {

    render(){
        const { handleSubmit, readOnly } = this.props

        return(
            <form role='form' onSubmit={ handleSubmit }>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly}/>
                    <Field name='month' component={labelAndInput} label='Mês' type='number' cols='12 4' placeholder='Informe o mês' readOnly={readOnly}/>
                    <Field name='year' component={labelAndInput}  label='Ano' type='number' cols='12 4' placeholder='Informe o Ano' readOnly={readOnly}/>
                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default  connect(null, mapDispatchToProps)(BillingCycleForm)