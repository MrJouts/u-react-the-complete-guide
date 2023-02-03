import { useRef, useState } from "react";
import classes from "./Checkout.module.scss";

const isEmpty = (value: String = ""): boolean => value.trim() === "";
const isFiveChars = (value: String = ""): boolean => value.trim().length === 5;

type Props = {
  onCancel: () => void;
  onConfirm: (value: Object) => void;
};

const Checkout = ({ onCancel, onConfirm }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const [formsInputsValidity, setFormsInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredPostalCode = postalCodeInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormsInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    return true;
  };

  const nameFormControlClasses = `${classes.control} ${
    formsInputsValidity.name ? "" : classes.invalid
  }`;

  const streetFormControlClasses = `${classes.control} ${
    formsInputsValidity.street ? "" : classes.invalid
  }`;

  const postalCodeFormControlClasses = `${classes.control} ${
    formsInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityFormControlClasses = `${classes.control} ${
    formsInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameFormControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formsInputsValidity.name && (
          <small className="text-error">Please enter a valid name!</small>
        )}
      </div>
      <div className={streetFormControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formsInputsValidity.street && (
          <small className="text-error">Please enter a valid street!</small>
        )}
      </div>
      <div className={postalCodeFormControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formsInputsValidity.postalCode && (
          <small className="text-error">
            Please enter a valid postal code (5 characters)!
          </small>
        )}
      </div>
      <div className={cityFormControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formsInputsValidity.city && (
          <small className="text-error">Please enter a valid city!</small>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
