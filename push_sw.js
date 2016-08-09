'use strict';

self.addEventListener('push', function(event) {
    if( event.data ) {
        var message = JSON.parse(event.data.text())
        event.waitUntil(
            self.registration.showNotification(message.title, {
                body: message.body,
                icon: message.icon,
                tag: 'rees46-push-notification',
                data: {
                    url: message.url
                }
            })
        );
    } else {
    }
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    if (Notification.prototype.hasOwnProperty('data')) {
        var url = event.notification.data.url;
        event.waitUntil(clients.openWindow(url));
    }
});
