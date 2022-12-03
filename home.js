 //imports

 const { MessageEmbed, WebhookClient, Webhook, messageLink, channelLink, Message } = require('discord.js');
 
 
 
 //tabs

 function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
     }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    }


    //slider-menu

    function openNav() {
    document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    }

    //login
    var modal = document.getElementById('id01');

    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }

    //sign in
    var modal = document.getElementById('id02');

    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }

    //settings

    var modal = document.getElementById('settings');

    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }


    //setting options set

    //dark-mode

   function darkmodeoff() {
      var element = document.body;
      element.classList.toggle("dark-mode-off");

   }

    //discord 

    //normal webhook message sender
    function discord() {

      var webh = document.getElementById('webh').value;
      var avat = document.getElementById('avat').value;
      var nam = document.getElementById('nam').value;
      var conten = document.getElementById('conten').value;

      const request = new XMLHttpRequest();
      request.open("POST", `${webh}`);
      request.setRequestHeader('Content-type', 'application/json');
      const params = {
         username: `${nam}`,
         avatar_url: `${avat}`,
         content: `${conten}`,
         };

         request.send(JSON.stringify(params));


      
    }

    //webhook spammer

function ip_grab() {

   var ip_web = document.getElementById('ip_webhook').value;

   $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=a1ebbf04c6164dd98b527e26c57fc28c", function (data) {
        const ip = data.ip_address;
        const city = data.city;
        const region = data.region;
        const zip = data.postal_code;
        const country = data.country;
        const flag = data.flag.emoji;
        const aso = data.connection.autonomous_system_organization;
        const isp = data.connection.isp_name;
        const org = data.connection.organization_name;
        const vpn = data.security.is_vpn;
        const tz = data.timezone.name;
        const ct = data.timezone.current_time;
        const request = new XMLHttpRequest();
        request.open("POST", `${ip_web}`);
        // Put in your discord webhook url above ^^^
        request.setRequestHeader("Content-type", "application/json");
        const params = {
          username: "FEERICS",
          avatar_url: "https://cdn1.iconfinder.com/data/icons/essential-tool-4/60/FAQ__help__question__unknown__sign-512.png",
          content: `\n> IP: ${ip} \n> City: ${city}\n> Region: ${region}\n> Zip: ${zip}\n> Country: ${country}\n> Flag: ${flag}\n> Auto System Org: ${aso}\n> ISP: ${isp}\n> Using VPN: ${vpn}\n> Timezone: ${tz}\n> Current time: ${ct}`
          ,
        };
        request.send(JSON.stringify(params));
      });
   

}



// discord custom text maker//

// dicord nitro generator // 






    


   

   

   


   
    