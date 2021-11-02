function checkValidationCategory() {

    let adminCgId = $('#adminCgId').val();
    let adminCgName = $('#adminCgName').val();

    if (adminCgId != "") {
            if (adminCgName) {
                return true;
            } else {
                $('#adminCgName').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#adminCgName').focus();
                alert("Please Enter Name");
                return false;
            }
    } else {
        $('#adminCgId').css({
            'border': '2px #FF0000FF solid'
        });
        $('#adminCgId').focus();
        alert("Please Enter Id");
        return false;
    }
}

$('#btnCgSave').click(() => {

    if (checkValidationCategory()) {
        let cgId = $('#adminCgId').val();
        let cgName = $('#adminCgName').val();

        $.ajax({
            method: "POST",
            url: "http://localhost:8081/ABC_Company_with_SpringMVC_war_exploded/api/v1/product",
            data: JSON.stringify({
                "cgId": cgId,
                "cgName": cgName,
            }),
            dataType: 'Json',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                if (res.message == 'Success') {
                }
            },
            error: function (ob, textStatus, error) {
            }
        });
    }
});