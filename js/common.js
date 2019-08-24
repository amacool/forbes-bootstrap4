$(function() {
	$(".btn-read-more").click(function() {
		$(this).css('display', 'none');
		$(".extra-text").css('display', 'inline');
	});

	// $( "a.btn-find-your-council" ).click(function( event ) {
 //        event.preventDefault();
 //        $("html, body").animate({ scrollTop: 0 }, 800);
 //    });

	function sendEmail(data) {
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send",
		  "method": "POST",
		  "headers": {
		    "authorization": "Bearer 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",
		    "content-type": "application/json"
		  },
		  "processData": false,
		  "data": data
		};

		$.ajax(settings).done(function (response) {
		  location.href = "./index-thank-you.html";
		});
	}
	var emailAddr = 'info@swag.xyz';
    $(".btn-send-contact-email").click(function() {
    	var data = '{"personalizations":[{"to":[{"email":"' + emailAddr + '","name":"receiver"}],"dynamic_template_data":{"email":"' + $("#email").val() + '","firstName":"' + $("#firstName").val() + '","lastName":"' + $("#lastName").val() + '","phone":"' + $("#phone").val() + '","membership":"' + $("#membership").val() + '"},"subject":"contact"}],"from":{"email":"' + $("#email").val() + '","name":"' + $("#firstName").val() + ' ' + $("#lastName").val() + '"},"reply_to":{"email":"'+ emailAddr + '","name":"receiver"},"template_id":"d-5c7718392d604968b24cb90ee758df1f"}"}';
		sendEmail(data);
    });

    $(".btn-send-nominate-email").click(function() {
    	var data = '{"personalizations":[{"to":[{"email":"' + emailAddr + '","name":"receiver"}],"dynamic_template_data":{"email":"' + $("#email").val() + '","firstName":"' + $("#firstName").val() + '","lastName":"' + $("#lastName").val() + '","phone":"' + $("#phone").val() + '","type":"' + $("#type").val() + '","firstName1":"' + $("#firstName1").val() + '","lastName1":"' + $("#lastName1").val() + '","linkedIn":"' + $("#linkedIn").val() + '","companyName":"' + $("#companyName").val() + '","companyPosition":"' + $("#companyPosition").val() + '","companyWebsite":"' + $("#companyWebsite").val() + '","membership":"' + $("#membership").val() + '"},"subject":"first email"}],"from":{"email":"' + $("#email").val() + '","name":"' + $("#firstName").val() + ' ' + $("#lastName").val() + '"},"reply_to":{"email":"' + emailAddr + '","name":"receiver"},"template_id":"d-cdd65a3cca29433cb7ea864245581e02"}"}';
		sendEmail(data);
    });

    $(".btn-send-comment-email").click(function() {
    	var data = '{"personalizations":[{"to":[{"email":"' + emailAddr + '","name":"receiver"}],"dynamic_template_data":{"email":"' + $("#email").val() + '","name":"' + $("#name").val() + '","website":"' + $("#website").val() + '","comment":"' + $("#comment").val() + '"},"subject":"contact"}],"from":{"email":"' + $("#email").val() + '","name":"sender"},"reply_to":{"email":"' + emailAddr + '","name":"receiver"},"template_id":"d-ef82fbd294284dadac4c4cbea4a2b3c8"}"}';
		sendEmail(data);
    });

    $(".btn-send-email").click(function() {
    	var data = '{"personalizations":[{"to":[{"email":"' + emailAddr + '","name":"receiver"}],"dynamic_template_data":{"email":"' + $("#email").val() + '","firstName":"' + $("#firstName").val() + '","lastName":"' + $("#lastName").val() + '","phone":"' + $("#phone").val() + '","type":"' + $("#type").val() + '","firstName1":"' + $("#firstName1").val() + '","lastName1":"' + $("#lastName1").val() + '","linkedIn":"' + $("#linkedIn").val() + '","companyName":"' + $("#companyName").val() + '","companyPosition":"' + $("#companyPosition").val() + '","companyWebsite":"' + $("#companyWebsite").val() + '","membership":"' + $("#membership").val() + '"},"subject":"first email"}],"from":{"email":"' + $("#email").val() + '","name":"' + $("#firstName").val() + ' ' + $("#lastName").val() + '"},"reply_to":{"email":"' + emailAddr + '","name":"receiver"},"template_id":"d-cdd65a3cca29433cb7ea864245581e02"}"}';
		sendEmail(data);
    });
});