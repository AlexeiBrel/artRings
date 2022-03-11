function create_item(title, pwd, email, phone) {
    var htm = $.ajax({
        type: "GET",
        data: "&title=" + title + "&pwd=" + pwd + "&email=" + email + "&phone=" + phone + "&rnd=" + Math.random(),
        url: "/art-rings/server/create_user
.php",
        async: false,
    }).responseText;
    // console.log(htm);
    return htm;
}