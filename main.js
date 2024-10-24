// $(document).click

//  Sahifaga kirgan vaqti
//fani tark etishdan oldin qancha vaqt o'tganini hisoblash
// let startTime = new Date();

// window.addEventListener('beforeunload', function () {
//   let endTime = new Date();
//   let timeSpent = (endTime - startTime) / 1000; // Seconds

//   // Bu yerda Telegram API'si uchun so'rovni yuborish
//   let message = `Vaqt sarfi: ${timeSpent} soniya`;
// });


// // Fetch user's IP using ipify API
// fetch('https://api.ipify.org?format=json')
//     .then(response => response.json())
//     .then(data => {
//         console.log("User's IP address: ", data.ip);
//     })
//     .catch(error => console.error('Error fetching IP address:', error));

//     Check if the browser supports Geolocation
// if (navigator.geolocation) {
//     // Get the user's current position
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             // Success callback
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;

//             console.log('Latitude:', latitude);
//             console.log('Longitude:', longitude);

//             // You can now send this data to your server or use it in your app
//         },
//         (error) => {
//             // Error callback
//             console.error('Error getting location:', error.message);
//         }
//     );
// } else {
//     console.log('Geolocation is not supported by this browser.');
// }


$(".send_btn").on('click', function() {
var selected = $("#select-menu").val();	
	// console.log(selected); 
	var name = $("#name").val()
	var number = $("#number").val()
	var text =`
<b>
Ism: ${name}
</b><b>
Raqam: ${number}
</b><b>
Hudud: ${selected}
</b>
	` ;
	  let telegramUrl = `https://api.telegram.org/bot6974811678:AAGXRktffIrpej7gpm3nUmj7LwZ8MlBCRF8/sendMessage?text=${text}&chat_id=5955353365`;
	  $.ajax({
	  	url: "https://api.telegram.org/bot6974811678:AAGXRktffIrpej7gpm3nUmj7LwZ8MlBCRF8/sendMessage?parse_mode=html",
	  	type: "GET",
	  	data: {
	  		text: text,
	  		chat_id: "5955353365"
	  	},
	  	success: function() {
	  		alert("Sizning buyurtmangiz qabul qilindi. yaqin orada siz bilan bog'lanamiz 📞");
	  	}
	  })
})