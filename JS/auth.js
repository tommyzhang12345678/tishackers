document.addEventListener('DOMContentLoaded', function() {
    var secretKey = 'my-secret-key'; // This should be a secure, unique key

    // Function to retrieve and decrypt the activation code from local storage
    function getActivationCode() {
        var encryptedCode = localStorage.getItem('activationCode');
        
        if (encryptedCode) {
            // Decrypt the activation code
            var bytes = CryptoJS.AES.decrypt(encryptedCode, secretKey);
            var originalCode = bytes.toString(CryptoJS.enc.Utf8);
            return originalCode;
        }

        return null;
    }

    var activationCode = getActivationCode();

    // Redirect to the activation page if the activation code is missing or invalid
    if (!activationCode || activationCode !== '12345') { // replace '12345' with your validation logic
        window.location.href = 'index.html'; // Change to the URL of your activation page
    }
});
