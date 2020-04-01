let collapsed = true;
$("#menuIcon").click(() => {
    if (collapsed) {
        $("#linkContainer").css({
            padding: "20px",
            height: "185px"
        });
        collapsed = false;
    } else {
        $("#linkContainer").css({
            padding: "0",
            height: "0"
        });
        collapsed = true;
    }
});

let selectElement;
let filterCards = selectElement => {
    if (selectElement.value == "--select an option--") {
        $(".card").css("display", "inline-block");
    } else if (selectElement.value == "Mobile Phone") {
        $(".mobile").css("display", "inline-block");
        $(".card")
            .not(".mobile")
            .css("display", "none");
    } else if (selectElement.value == "Shoes") {
        $(".shoes").css("display", "inline-block");
        $(".card")
            .not(".shoes")
            .css("display", "none");
    } else if (selectElement.value == "Watch") {
        $(".watch").css("display", "inline-block");
        $(".card")
            .not(".watch")
            .css("display", "none");
    }
};

let totalItem = 0,
    totalCost = 0;

$(".card button").click(function() {
    $("#navBar span").html(++totalItem);
	// $("#cartContainer table tr:nth-child(2) td:first-child").html(`<img src='${$(this).parent().find("img").attr("src")}' />`);
	totalCost += Number($(this).parent().find("p").text().replace(/Rs/, "").replace(/,/, ""));
	if(totalItem != 1){
		$("#cartContainer table").append(`
			<tr>
				<td><img src='${$(this).parent().find("img").attr("src")}' /></td>
				<td><p>${$(this).parent().find("p").text()}</p></td>
			</tr>
		`);
		$("#cartContainer table tr:nth-child(2) td:last-child").html(`Rs ${totalCost}`).attr("rowspan", `${totalItem}`);
	}
	else {
		$("#cartContainer table").append(`
			<tr>
				<td><img src='${$(this).parent().find("img").attr("src")}' /></td>
				<td><p>${$(this).parent().find("p").text()}</p></td>
				<td rowspan="1">Rs ${totalCost}</td>
			</tr>
		`);
	}
});

// console.log(
//     Number(
//         $(".card p:nth-child(3)")
//             .eq(0)
//             .text()
//             .replace(/Rs/, "")
//             .replace(/,/, "")
//     )
// );

$("#cartContainer tr:nth-child(2) td:last-child").html(
    Number(
        $(".card p:nth-child(3)")
            .eq(0)
            .text()
            .replace(/Rs/, "")
            .replace(/,/, "")
    )
);

$("#linkContainer a:nth-child(3)").click(() => {
    totalCost = 0;
    $("#navBar span").html(totalCost);
});
