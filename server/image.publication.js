Meteor.publish('images',function(){
    return PeopleAvatars.find();
});

Meteor.publish('image',function(docId){
    return PeopleAvatars.find({_id : docId});
});

Meteor.publish('booksCover',function(){
    return BooksCover.find();
})