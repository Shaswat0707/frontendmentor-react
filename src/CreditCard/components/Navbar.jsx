const Navbar = () => {
  const formatAndSetCcNumber = (number) => {
    const inputVal = number.replace(/ /g, ""); //remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits

    if (inputNumbersOnly.length > 16) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" "); // Join all the splits with an empty space
    } // Set the new CC number
    return spacedNumber;
  };
  return (
    <section className="credit-card__navbar">
      <div className="container">
        <div className="credit-card__image credit-card__image-back">
          <div className="credit-card__image-back--cvv">333</div>
        </div>
        <div className="credit-card__image credit-card__image-front">
          <div className="credit-card__image-front--number">
            {formatAndSetCcNumber("1234567890123456")}
          </div>
          <div className="credit-card__image-font--bottom">
            <div className="credit-card__image-front--name">Shaswat Vaidya</div>
            <div className="credit-card__image-front--date">12/23</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
