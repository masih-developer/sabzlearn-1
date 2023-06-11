import rules from "./rules";
import regex from "./regex";

const validator = (value, validations) => {
    for (const validate of validations) {
        if (validate.value === rules.requiredValue) {
            if (value.trim().length === 0) return false;
        }
        if (validate.value === rules.minValue) {
            if (value.trim().length < validate.min) return false;
        }
        if (validate.value === rules.maxValue) {
            if (value.trim().length > validate.max) return false;
        }
        if (validate.value === rules.emailValue) {
            if (!regex.testEmail(value)) return false;
        }
        if (validate.value === rules.phoneValue) {
            if (!regex.testPhone(value)) return false;
        }
        if (validate.value === rules.confirmPassword) {
            if (value.trim() !== validate.depenValue) return false;
        }
    }

    return true;
};
export default validator;
