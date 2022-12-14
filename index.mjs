window.addEventListener('message', (e) => {
     msg = e.data;
     
     if (typeof msg !== "string") {
          return;
     }
     
     lastIndex = msg.lastIndexOf(",");
     key = msg.substring(0, lastIndex);
     product = msg.substring(lastIndex + 1);
     var days = 3;
     var date = new Date();
     date.setTime(date.getTime() + (days*24*60*60*1000));
     expires = "; expires=" + date.toUTCString();
     document.cookie = "name=" + key + expires + "; path=/; SameSite=None; Secure";
     window.location.href = "./check-cookie.html"
}, false);

