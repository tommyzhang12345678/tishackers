document.getElementById('activationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var activationCode = document.getElementById('activationCode').value;
    var messageElement = document.getElementById('message');
    var secretKey = 'my-secret-key'; // This should be a secure, unique key

    // Encrypt the activation code
    var encryptedCode = CryptoJS.AES.encrypt(activationCode, secretKey).toString();

    // Store the encrypted code in local storage
    localStorage.setItem('activationCode', encryptedCode);

    // For demonstration purposes, let's just show a success message
    if (activationCode === '12345') { // example code for validation
        messageElement.textContent = 'Activation successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid activation code. Please try again.';
        messageElement.style.color = 'red';
    }
});

// Function to retrieve and decrypt the activation code from local storage
function getActivationCode() {
    var encryptedCode = localStorage.getItem('activationCode');
    var secretKey = 'my-secret-key';

    if (encryptedCode) {
        // Decrypt the activation code
        var bytes = CryptoJS.AES.decrypt(encryptedCode, secretKey);
        var originalCode = bytes.toString(CryptoJS.enc.Utf8);
        return originalCode;
    }

    return null;
}
