app.get('/channels/:cname/messages', (req, res) => {
    let cname = req.params.canme;
    let messagesRef = admin.database().ref('channels/${canme}/messages').orderByChild('date').limitToLast(20);
    messagesRef.once('value', function(snapshot) {
        let items = new Array();
        snapshot.forEach(function(childSnapshot) {
            let message = childSnapshot.val();
            message.id = childSnapshot.key;
            items.push(message);
        });
        items.reverse();
        res.header('Content-Type', 'application/json; charset = utf-8');
        res.send({messages: items});
    });
});