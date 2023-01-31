import { useState } from "react";

const useInputBasic = (validateFunction) => {
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateFunction(value);

    const hasError = !isValid && isTouched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const valueBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue("");
        setIsTouched(false);
    };

    return {
        value,
        isValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    };
};

export default useInputBasic;
