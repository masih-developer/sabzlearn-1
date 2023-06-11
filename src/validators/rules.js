const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const emailValue = "EMAIL_VALUE";
const phoneValue = "PHONE_VALUE";
const confirmPassword = "CONFIRM_PASSWORD";

export const requiredValidator = () => ({ value: requiredValue });

export const minValidator = (min) => ({ value: minValue, min });

export const maxValidator = (max) => ({ value: maxValue, max });

export const emailValidator = () => ({ value: emailValue });

export const phoneNumberValidator = () => ({ value: phoneValue });

export const confirmPassValidator = (depenValue) => ({ value: confirmPassword, depenValue });

export default { requiredValue, minValue, maxValue, emailValue, phoneValue, confirmPassword };
