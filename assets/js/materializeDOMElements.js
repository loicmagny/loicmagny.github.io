$(document).ready(function () {
    $("#degreesList").click(function () {
        $("#degrees").toggle();
        $("#pro").hide();
        $("#optional").hide();
        $("#miscellaneous").hide();
        $("#languages").hide();
        $("#plugin").hide();
        return false;
    });
    $("#proList").click(function () {
        $("#pro").toggle();
        $("#degrees").hide();
        $("#optional").hide();
        $("#miscellaneous").hide();
        $("#languages").hide();
        $("#plugin").hide();
        return false;
    });
    $("#notImportant").click(function () {
        $("#optional").toggle();
        $("#degrees").hide();
        $("#pro").hide();
        $("#miscellaneous").hide();
        $("#languages").hide();
        $("#plugin").hide();
        return false;
    });
    $("#misc").click(function () {
        $("#miscellaneous").toggle();
        $("#degrees").hide();
        $("#pro").hide();
        $("#optional").hide();
        $("#languages").hide();
        $("#plugin").hide();
        return false;
    });
    $("#language").click(function () {
        $("#languages").toggle();
        $("#degrees").hide();
        $("#pro").hide();
        $("#optional").hide();
        $("#miscellaneous").hide();
        $("#plugin").hide();
        return false;
    });
    $("#plugins").click(function () {
        $("#plugin").toggle();
        $("#degrees").hide();
        $("#pro").hide();
        $("#optional").hide();
        $("#miscellaneous").hide();
        $("#languages").hide();
        return false;
    });
    $("#course").click(function () {
        $("#courses").toggle();
        $("#degrees").hide();
        $("#pro").hide();
        $("#optional").hide();
        $("#miscellaneous").hide();
        $("#languages").hide();
        $("#plugin").hide();
        $("#perks").hide();
        $("#hobbies").hide();
    });
    $("#perk").click(function () {
        $("#perks").toggle();
        $("#degrees").hide();
        $("#pro").hide();
        $("#optional").hide();
        $("#miscellaneous").hide();
        $("#languages").hide();
        $("#plugin").hide();
        $("#courses").hide();
        $("#hobbies").hide();
    });
    $("#hobby").click(function () {
        $("#hobbies").toggle();
        $("#degrees").hide();
        $("#pro").hide();
        $("#optional").hide();
        $("#miscellaneous").hide();
        $("#languages").hide();
        $("#plugin").hide();
        $("#courses").hide();
        $("#perks").hide();
    });



    $("#closeHobbies").click(function () {
        $("#hobbies").hide();
    });
    $("#closeCourses").click(function () {
        $("#courses").hide();
    });
    $("#closePerks").click(function () {
        $("#perks").toggle();
        $("#degrees").hide();
    });


    $("#courses").css("display", "none");
    $("#perks").css("display", "none");
    $("#hobbies").css("display", "none");
    $(".button-collapse").sideNav();
    $(".button-collapse").sideNav({
        menuWidth: 250, // Default is 300
        edge: "left", // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
    });


    $(".modal").modal();
});