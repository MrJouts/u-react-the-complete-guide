import { useReducer } from "react";

const initialInputState = {
    value: "",
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return {
            value: action.value,
            isTouched: state.isTouched,
        };
    }

    if (action.type === "BLUR") {
        return {
            value: state.value,
            isTouched: true,
        };
    }

    if (action.type === "RESET") {
        return {
            value: "",
            isTouched: false,
        };
    }

    return initialInputState;
};

const useInputBasic = (validateFunction) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const isValid = validateFunction(inputState.value);

    const hasError = !isValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: "INPUT", value: event.target.value });
    };

    const valueBlurHandler = () => {
        dispatch({ type: "BLUR" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        value: inputState.value,
        isValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    };
};

export default useInputBasic;
