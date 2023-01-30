import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameInputReset,
    } = useInput((value) => value.trim() !== "");

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredEmailIsValid = enteredEmail.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredEmailTouched(true);

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        nameInputReset();

        setEnteredEmail("");
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onBlur={nameBlurHandler}
                    onChange={nameChangeHandler}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-mail</label>
                <input
                    type="email"
                    id="email"
                    value={enteredEmail}
                    onBlur={emailInputBlurHandler}
                    onChange={emailInputChangeHandler}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Email is not correct.</p>
                )}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
