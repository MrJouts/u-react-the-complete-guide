import { useEffect, useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameIsTouch, setEnteredNameIsTouch] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) console.log("name is valid!");
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameIsTouch(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameIsTouch(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        setEnteredName("");
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouch;

    const nameInputClasses = nameInputIsInvalid
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
                    onBlur={nameInputBlurHandler}
                    onChange={nameInputChangeHandler}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
