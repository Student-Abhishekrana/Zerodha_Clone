import React from 'react'
import Brokrage from './Brokrage';
import Hero from './Hero';
import Charges_for_account_opening from './Charges_for_account_opening';
import Demat_AMC from './Demat_AMC';
import Charges_for_optional from './Charges_for_optional';
import Charges from './Charges';
function Pricing() {
    return ( 
        <main className='container'>
        <Hero/>
        <Brokrage/>
        <Charges_for_account_opening/>
        <Demat_AMC/>
        <Charges_for_optional/>
        <Charges/>
        </main>
     );
}

export default Pricing;