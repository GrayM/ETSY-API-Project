window.onload = app;

function app() {
    
    EtsyClient.prototype.setupRouting = function(){
    var self = this;

    Path.map("#/").to(function() {
        self.showListings();
    });

    Path.map("#/listing/:id").to(function() {
        console.log(this);
        self.showListing(this.params.id);
    });

    // set the default hash
    Path.root("#/");
    Path.listen();

    $( "#clickme" ).click(function() {
    $( "#/Listings" ).fadeOut( "slow", function() {
    // Animation complete.
    });
    });

}
	
app();
