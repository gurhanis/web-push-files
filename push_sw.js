"use strict";self.addEventListener("push",function(t){if(t.data){var o=JSON.parse(t.data.text());o.shop_id&&fetch("https://api.rees46.com/web_push_subscriptions/received",{mode:"cors",method:"post",credentials:"include",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"url="+encodeURIComponent(o.url)+"&shop_id="+encodeURIComponent(o.shop_id)}),t.waitUntil(self.registration.showNotification(o.title,{body:o.body,icon:o.icon,tag:"rees46-push-notification",actions:o.actions||[],data:{shop_id:o.shop_id,url:o.url,action_urls:o.action_urls||[]}}))}}),self.addEventListener("notificationclick",function(t){if(t.notification.close(),Notification.prototype.hasOwnProperty("data")){var o=t.notification.data.url,i=t.notification.data.action_urls||[];"b0"===t.action&&"undefined"!=typeof i[0]?o=i[0]:"b1"===t.action&&"undefined"!=typeof i[1]&&(o=i[1]),t.notification.data.shop_id&&fetch("https://api.rees46.com/web_push_subscriptions/clicked",{mode:"cors",method:"post",credentials:"include",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"url="+encodeURIComponent(t.notification.data.url)+"&shop_id="+encodeURIComponent(t.notification.data.shop_id)}),t.waitUntil(clients.openWindow(o))}});