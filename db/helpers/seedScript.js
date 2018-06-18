    var cassie = require('cassie-odm');
    var config = {keyspace: "CassieTest", hosts: ["127.0.0.1:9042"]};
    cassie.connect(config);
    
    var CatSchema = new cassie.Schema({name: String});
    var Cat = cassie.model('Cat', CatSchema);
    
    cassie.syncTables(config, function(err, results) {
    
        var kitty = new Cat({ name: 'Eevee'});
        kitty.save(function(err) {
            if(err) return console.log(err);
            console.log("meow");
            cassie.close();
        });
        
    });

module.exports = {
 seed
};