import useInputBasic from "../hooks/use-input-basic";

const BasicForm = (props) => {
    const {
        value: name,
        isValid: inputNameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameInputChangeHandler,
        valueBlurHandler: nameInputBlurHandler,
        reset: nameReset,
    } = useInputBasic((value) => value.trim() !== "");

    const {
        value: lastName,
        isValid: inputLastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameInputChangeHandler,
        valueBlurHandler: lastNameInputBlurHandler,
        reset: lastNameReset,
    } = useInputBasic((value) => value.trim() !== "");

    const {
        value: email,
        isValid: inputEmailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailInputChangeHandler,
        valueBlurHandler: emailInputBlurHandler,
        reset: emaillReset,
    } = useInputBasic((value) =>
        value.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    );

    let formIsValid = false;

    if (inputNameIsValid && inputLastNameIsValid && inputEmailIsValid) {
        formIsValid = true;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log("formData", { name, lastName, email });

        nameReset();
        lastNameReset();
        emaillReset();
    };

    const inputNameClasses = nameHasError
        ? "form-control invalid"
        : "form-control";

    const inputLastNameClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";

    const inputEmailClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="control-group">
                <div className={inputNameClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={nameInputChangeHandler}
                        onBlur={nameInputBlurHandler}
                    />
                    {nameHasError && (
                        <small className="error-text">
                            Name must not be empty.
                        </small>
                    )}
                </div>
                <div className={inputLastNameClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={lastName}
                        onChange={lastNameInputChangeHandler}
                        onBlur={lastNameInputBlurHandler}
                    />
                    {lastNameHasError && (
                        <small className="error-text">
                            Last Name must not be empty.
                        </small>
                    )}
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="email"
                    id="name"
                    value={email}
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
                {emailHasError && (
                    <small className="error-text">
                        Please, provide a valid email.
                    </small>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
