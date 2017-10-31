//A classic example: a swiss army knife!
//My swiss army knife has a few tools, and they do a few different things.
var my_swiss_army_knife = {
    'tools':['tweezer','file','toothpick','scissor'],
    cut: function(thing){ return thing/2 },
    pick: function(stuff, what_i_want){ return stuff[what_i_want] },
    file: function(thing){ return thing -=1 },
}

//As you may know, the swiss army knife's tweezer is removable. So we need to make sure it's there before we try to use it.
function tweeze(stuff, item){
    //The best way to make sure an item exists in an array is to try to check what index it's at.
    if(my_swiss_army_knife.tools.indexOf('tweezer') != -1){
        return my_swiss_army_knife.pick(stuff, item)
    }
    else return 'could not tweeze!'
}

//Call the function above:
var my_stuff = ['lint','twine','lighter','button']
console.log(tweeze(my_stuff, 2)) //trying to tweeze out the lighter, since the other stuff is crap


//Maybe as we're using it, we lose it? This function models that notion.
function lose_tool(array, element) {
    const index = array.indexOf(element); //looking for where the item is in the tool array.
    array.splice(index, 1); //delete the item!
}

lose_tool(my_swiss_army_knife.tools, 'tweezer')
console.log(tweeze(my_stuff, 0)) 

//Suppose we find the tweezer after browsing around on the floor.
//We need to push the tweezer back into its resting place.
my_swiss_army_knife.tools.push('tweezer')
//Now we've recovered the tweezer and we can use it again.
console.log(tweeze(my_stuff, 0)) 

