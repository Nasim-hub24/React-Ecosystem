
const PricingCard = (Pricing) => {
    console.log(Pricing)
    return (
        <div>
            <h2 class='text-6xl' >{Pricing.name} </h2>
            <h4 class='text-3xl'>{Pricing.category} </h4>
        </div>
    );
};

export default PricingCard;