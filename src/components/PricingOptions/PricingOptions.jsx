import { use } from "react";
import DaisyPricing from "../DaisyPricing/DaisyPricing";
// import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({PricingOp}) => {
    // const PricingPromice = use(PricingOp);
    const PricingData = use (PricingOp);
    return (
        <div class ='grid-cols-3'>
            <h2 class='text-4xl text-orange-400'> 10K shopping and get out membership</h2>
            <div>
                {/* {
                    PricingPromice.map(Pricing => <PricingCard pricing = {Pricing}
                    key={Pricing.id}
                    >

                    </PricingCard>)
                } */}

                {
                    PricingData.map(Pricing => <DaisyPricing
                        key={Pricing.id}
                        Pricing = {Pricing}
                    >

                    </DaisyPricing>)
                }
            </div>

        </div>
    );
};

export default PricingOptions;