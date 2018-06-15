import React from 'react';
import pizzawizard from './pizzawizard.png';

const PizzaForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <img className="animated rollIn" style={{width: "250px"}} alt="Sorcier Pizza" src={pizzawizard}/>
            <p className='animated flash infinite subtitle'>
                {'Ce petit sorcier détecte les pizzas !'}
            </p>
            <div className='center'>
                <div className='form center pa5 br-pill shadow-4 bg-near-white '>
                    <input placeholder="superpizza.jpg..." className='f5 pa2 w-80 center' type='text' onChange={onInputChange}/>
                    <button className='w-15 grow f5 link ph3 pv2 dib code pointer' onClick={onButtonSubmit}>go</button>
                </div>
            </div>
        </div>
    )
}

export default PizzaForm;