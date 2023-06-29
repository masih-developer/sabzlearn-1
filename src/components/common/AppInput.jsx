import { useEffect, useReducer } from "react";
import validator from "../../validators/validator";

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value, action?.validations),
            };
        }
        default: {
            return state;
        }
    }
};

const AppInput = (props) => {
    const { elem, type, placeholder, className, name, id, validations, onInputHandler } = props;
    const [mainInput, dispatch] = useReducer(reducer, { value: "", isValid: false });

    const { value, isValid } = mainInput;

    useEffect(() => {
        onInputHandler(id, value, isValid);
    }, [value]);

    const changeInputHandler = (event) => {
        dispatch({ type: "CHANGE", value: event.target.value, validations });
    };

    const element =
        elem === "input" ? (
            <input
                type={type}
                placeholder={placeholder}
                className={`outline-0 ${className} ${
                    mainInput.isValid ? "border border-green-500" : "border border-red-500"
                }`}
                id={id}
                name={name}
                onChange={changeInputHandler}
                value={mainInput.value}
            />
        ) : (
            <textarea
                name={name}
                id={id}
                className={`outline-0 ${className} ${
                    mainInput.isValid ? "border border-green-500" : "border border-red-500"
                }`}
                placeholder={placeholder}
                onChange={changeInputHandler}
                value={mainInput.value}
            ></textarea>
        );

    return element;
};

export default AppInput;
