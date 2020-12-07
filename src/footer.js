const config = require("./config");
const fs = require("fs");

module.exports = config => `
<footer class="text-center">© ${(new Date().getFullYear())} Manaknightdigital INC.</footer>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="main.js" crossorigin="anonymous"></script>
</body>

</html>
`;