import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  // Ensure the amount is formatted correctly
  const formattedAmount = numeral(amount).format("$0,0.00");

  return <div> {formattedAmount} </div>;
};

export default CurrencyFormat;
