function generatePassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers;
    
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    
    return password;
}

function checkPassword(password, confirmPassword) {
    return password === confirmPassword ? "Passwords match" : "Passwords do not match";
}

function generateAndCheckPassword(length = 8) {
    const generatedPassword = generatePassword(length);
    
    if (confirm('Бажаєте побачити згенерований пароль?')) {
        alert(generatedPassword);
    }
    
    const userPassword = prompt('Введіть свій пароль для перевірки:');
    
    const result = checkPassword(generatedPassword, userPassword);
    alert(result);
}

generateAndCheckPassword(8);
