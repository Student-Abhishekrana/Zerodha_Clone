import React from "react";
import Brokrage from "./Brokrage";
import Hero from "./Hero";
import AccountOpeningCharges from "./Charges_for_account_opening";
import DematAmc from "./Demat_AMC";
import OptionalCharges from "./Charges_for_optional";
import Charges from "./Charges";
function Pricing() {
  return (
    <main className="container">
      <Hero />
      <Brokrage />
      <AccountOpeningCharges />
      <DematAmc />
      <OptionalCharges />
      <Charges />
    </main>
  );
}

export default Pricing;