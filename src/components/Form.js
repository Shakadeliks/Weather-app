import React from 'react';

// input form where the user will enter the city and country that they want the weather for
const Form = props => {

    // function to display error message when no city and country have been entered into the input fields

    function error(){
        return (
            <div className='alert alert-danger mx-5' data-test-id='error' role='alert'>
                Please enter City & Country
            </div>

        )
    }

    return(
        <div className='container'>
            <div>{props.error ? error() : null}</div>
            <form onSubmit={ props.loadWeather }>
                <div className='row'>
                    <div className='col-md-3 offset-md-2'>
                        <input type='text' className='form-control' name='city' autoComplete='off' placeholder='City' title='city-input' />
                    </div>
                    <div className='col-md-3'>
                        <input type='text' className='form-control' name='country' autoComplete='off' placeholder='Country' title='country-input'/>
                    </div>
                    <div className='col-md-3 mt-md-0 py-3 text-md-left'>
                        <button className='btn btn-warning' name='get-weather' data-test-id='weatherBtn'>Get Weather</button>
                    </div>
                </div>    
            </form>    
                    
        </div>
    )
}



export default Form;