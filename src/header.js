const config = require("./config");
const fs = require("fs");

module.exports = config => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${config.blogDescription}" />
    <meta name="author" content="">
    <title>${config.blogName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" crossorigin="anonymous">
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" crossorigin="anonymous"></script>
    <!-- <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" crossorigin="anonymous"></script> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css">

    <!-- Favicons -->

    <link rel="apple-touch-icon" href="/assets/image/favicions.ico/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" href="/assets/image/favicions.ico/favicon-32x32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/assets/image/favicions.ico/favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="manifest" href="/assets/image/favicions.ico/manifest.json">
    <link rel="mask-icon" href="/assets/image/favicions.ico/safari-pinned-tab.svg" color="#563d7c">
    <link rel="icon" href="/assets/image/favicions.ico/favicon.ico">
    <meta name="msapplication-config" content="/assets/image/favicions.ico/browserconfig.xml">
    <meta name="theme-color" content="#563d7c">

     <!-- My Favicons -->
</head>
<body>
`;