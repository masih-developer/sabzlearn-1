const testEmail = (value) => {
    const emailpattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
    return emailpattern.test(value);
};

const testPhone = (value) => {
    const phonePattern = /^09[0-9]{9}$/g;
    return phonePattern.test(value);
};

const testEnglishLetters = (value) => {
    const englishLettersPattern = /^[A-Za-z\-_ ]+$/g;
    return englishLettersPattern.test(value);
};

export default { testEmail, testPhone, testEnglishLetters };
