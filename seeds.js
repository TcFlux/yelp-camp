var mongoose = require("mongoose"),
Campground   = require("./models/campgrounds"),
Comment      = require("./models/comments");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://i.pinimg.com/originals/a1/23/27/a12327ad4a03a6ea3c1376f07cb02b02.jpg",
        description: "Bacon ipsum dolor amet pastrami leberkas cow, ground round jerky tenderloin porchetta shankle shank short loin sausage pig frankfurter. Jowl ground round turkey meatloaf kielbasa burgdoggen drumstick bresaola beef biltong pancetta flank swine shank tri-tip. Pig alcatra shankle, drumstick short ribs shoulder t-bone landjaeger ground round meatloaf brisket spare ribs pastrami. Short loin rump turkey andouille pork chop."
    },
    {
        name: "Comfy Camper",
        image: "https://mevosndapsblog.files.wordpress.com/2013/01/dsc04364.jpg",
        description: "Bacon ipsum dolor amet pastrami leberkas cow, ground round jerky tenderloin porchetta shankle shank short loin sausage pig frankfurter. Jowl ground round turkey meatloaf kielbasa burgdoggen drumstick bresaola beef biltong pancetta flank swine shank tri-tip. Pig alcatra shankle, drumstick short ribs shoulder t-bone landjaeger ground round meatloaf brisket spare ribs pastrami. Short loin rump turkey andouille pork chop."
    },
    {
        name: "Leaky Creek",
        image: "https://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/1477611389/river_access.jpg?itok=6hAS9O9Hg",
        description: "Bacon ipsum dolor amet pastrami leberkas cow, ground round jerky tenderloin porchetta shankle shank short loin sausage pig frankfurter. Jowl ground round turkey meatloaf kielbasa burgdoggen drumstick bresaola beef biltong pancetta flank swine shank tri-tip. Pig alcatra shankle, drumstick short ribs shoulder t-bone landjaeger ground round meatloaf brisket spare ribs pastrami. Short loin rump turkey andouille pork chop."
    }
]

function seedDB(){
    //Remove all campgrouds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("Removed shit!");
        //     //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //       if(err){
        //           console.log(err);
        //       } else {
        //           console.log("added a campground");
        //           //Create a comment
        //           Comment.create(
        //               {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //           }, function(err, comment){
        //               if(err){
        //                   console.log(err);
        //               } else {
        //                   campground.comments.push(comment);
        //                   campground.save();
        //                   console.log("created new comment");
        //               }
        //           });
        //       }
        // });
        // });
    });
};


module.exports = seedDB;