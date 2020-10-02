import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51HXggILfBcJAaUV1UarkIc8QCtzmQ6nH4SfGRZh8jqkVDzQ1BfvCrDMmQtGMjRXo3lpaRzUpH2xIpgV4KCCLEHDp00Y6ge8e9k';

  const onToken = (token) => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Naw"
      name="CRWN Clothing Ltd."
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
