Package.describe({
    summary: "PeerJS for Meteor"
});

Package.on_use(function(api) {
    api.add_files('peer.js', 'client');
    
    if (typeof api.export !== 'undefined') {
        api.export(['Peer', 'util', 'MediaConnection', 'DataConnection'], 'client');
    }
});