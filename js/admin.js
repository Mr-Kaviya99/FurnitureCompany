//Check Category Fields------------------------------------------
function checkValidationCategory() {
    let catId = $('#cgId').val();
    let catName = $('#cgName').val();

    if (catId != "") {
        if (catName) {
            return true;
        } else {
            $('#cgName').css({
                'border': '2px #FF0000FF solid'
            });
            $('#cgName').focus();
            alert("Please Enter Name");
            return false;
        }
    } else {
        $('#cgId').css({
            'border': '2px #FF0000FF solid'
        });
        $('#cgId').focus();
        alert("Please Enter Id");
        return false;
    }

}

//Save Category---------------------------------------------------
$('#btnCatSave').click(() => {

    if (checkValidationCategory()) {
        let cgId = $('#cgId').val();
        let cgName = $('#cgName').val();

        $.ajax({
            method: "POST",
            url: "http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/category",
            async: false,
            contentType: "application/json",
            data: JSON.stringify({
                cgId: cgId,
                cgName: cgName
            }),
            dataType: 'Json',

            success: function (res) {
                if (res.message == 'Success') {
                }
            },
            error: function (ob, textStatus, error) {
            }
        });
    }
});


//get all category-----------------------------------------------------
$('#btnCatGetAll').click(function () {
    loadAllCategory();
    console.log("hello");
});

function loadAllCategory() {
    $('#tblCatBody').empty();
    $.ajax({
        url: 'http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/category',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let cID = values[i].cgId;
                let cNIC = values[i].cgName;

                $('#tblCatBody').append(`<tr><td>${cID}</td><td>${cNIC}</td></tr>`)
            }
        }
    });
}


//update category-----------------------------------------------------
$('#btnCatUpdate').click(() => {
    updateCategory();
});

function updateCategory() {
    if (checkValidationCategory()) {
        let cgId = $('#cgId').val();
        let cgName = $('#cgName').val();

        $.ajax({
            method: "put",
            url: "http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/category",
            contentType: "application/json",
            async: false,
            data: JSON.stringify(
                {
                    "cgId": cgId,
                    "cgName": cgName,
                }
            ),
            success: function (data) {
                return true;
            }
        });
    }
}

//delete category-----------------------------------------------------
$('#btnCatDelete').click(function () {
    let cgId = $("#cgId").val();
    if (cgId != "") {
        $.ajax({
            method: "delete",
            url: 'http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/category/?id=' + cgId,
            async: true,
            success: function (response) {
            },
            error: function (response) {
            }
        });
    }

});


//Tabs -----------------------------------------------------
$('#btn_mainPage').click(function () {
    $('#dashboard-page').css({
        'display': 'block'
    });
    $('#product-page').css({
        'display': 'none'
    });
    $('#category-page').css({
        'display': 'none'
    });

});
$('#btn-category').click(function () {
    $('#dashboard-page').css({
        'display': 'none'
    });
    $('#product-page').css({
        'display': 'none'
    });
    $('#category-page').css({
        'display': 'block'
    });
});
$('#btn-product').click(function () {
    $('#dashboard-page').css({
        'display': 'none'
    });
    $('#product-page').css({
        'display': 'block'
    });
    $('#category-page').css({
        'display': 'none'
    });
});


//Check Prducts Fields------------------------------------------
function checkValidationProduct() {

    let productId = $('#productId').val();
    let productName = $('productName').val();
    let productType = $('#productType').val();
    let productDesc = $('#productDesc').val();
    let productUnitprize = $('#productUnitprize').val();

    if (productId != "") {
        if (productName != "") {
            if (productType != "") {
                if (productDesc != "") {
                    if (productUnitprize) {
                        return true;
                    } else {
                        $('#productUnitprize').css({
                            'border': '2px #FF0000FF solid'
                        });
                        $('#productUnitprize').focus();
                        alert("Please Enter Unit Price");
                        return false;
                    }
                } else {
                    $('#productDesc').css({
                        'border': '2px #FF0000FF solid'
                    });
                    $('#productDesc').focus();
                    alert("Please Enter Description");
                    return false;
                }
            } else {
                $('#productType').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#productType').focus();
                alert("Please Enter Type");
                return false;
            }
        } else {
            $('#productName').css({
                'border': '2px #FF0000FF solid'
            });
            $('#productName').focus();
            alert("Please Enter Name");
            return false;
        }
    } else {
        $('#productId').css({
            'border': '2px #FF0000FF solid'
        });
        $('#productId').focus();
        alert("Please Enter Id");
        return false;
    }

}

//Save Product---------------------------------------------------
$('#btnProductSave').click(() => {

    if (checkValidationProduct()) {
        let productId = $('#productId').val();
        let productName = $('#productName').val();
        let productType = $('#productType').val();
        let productDesc = $('#productDesc').val();
        let productUnitprize = $('#productUnitprize').val();
        let cgIDD = $('#cgIDD').val();

        $.ajax({
            method: "POST",
            url: "http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/product",
            async: false,
            contentType: "application/json",
            data: JSON.stringify({
                productId: productId,
                productName: productName,
                productType: productType,
                productDesc: productDesc,
                productUnitprize: productUnitprize+"",
                cgIDD:cgIDD

            }),
            dataType: 'Json',

            success: function (res) {
                if (res.message == 'Success') {
                }
            },
            error: function (ob, textStatus, error) {
            }
        });
    }
});


//Udate Product---------------------------------------------------
$('#btnProductUpdate').click(() => {
    updateProduct();
});

function updateProduct() {
    if (checkValidationProduct()) {
        let productId = $('#productId').val();
        let productName = $('#productName').val();
        let productType = $('#productType').val();
        let productDesc = $('#productDesc').val();
        let productUnitprize = $('#productUnitprize').val();
        let cgIDD = $('#cgIDD').val();

        $.ajax({
            method: "put",
            url: "http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/product",
            contentType: "application/json",
            async: false,
            data: JSON.stringify(
                {
                    "productId": productId,
                    "productName": productName,
                    "productType": productType,
                    "productDesc": productDesc,
                    "productUnitprize": productUnitprize,
                    "cgIDD": cgIDD,
                }
            ),
            success: function (data) {
                return true;
            }
        });
    }
}


//Delete Product---------------------------------------------------
$('#btnProductDelete').click(function () {
    let productId = $("#productId").val();
    if (productId != "") {
        $.ajax({
            method: "delete",
            url: 'http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/product/?id=' + productId,
            async: true,
            success: function (response) {
            },
            error: function (response) {
            }
        });
    }

});


//Get All Product---------------------------------------------------
$('#btnProductGetAll').click(function () {
    loadAllProduct();
});

function loadAllProduct() {
    $('#tblProductBody').empty();
    $.ajax({
        url: 'http://localhost:8080/ABC_Company_with_SpringMVC_war_exploded/api/v1/product',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {

                let productId = values[i].productId;
                let productName = values[i].productName;
                let productType = values[i].productType;
                let productDesc = values[i].productDesc;
                let productUnitprize = values[i].productUnitprize;
                let cgIDD = values[i].cgIDD;

                $('#tblProductBody').append(`<tr><td>${productId}</td><td>${productName}</td><td>${productType}</td><td>${productDesc}</td><td>${productUnitprize}</td><td>${cgIDD}</td></tr>`)
            }
        }
    });
}
