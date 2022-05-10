"use strict";

$(document).ready(function () {
  $('.course').click(function () {
    $('#courses').toggle();
    $('#degrees').hide();
    $('#pro').hide();
    $('#optional').hide();
    $('#miscellaneous').hide();
    $('#languages').hide();
    $('#plugin').hide();
    $('#perks').hide();
    $('#about').hide();
    $('canvas').hide();
  });
  $('.perk').click(function () {
    $('#perks').toggle();
    $('#degrees').hide();
    $('#pro').hide();
    $('#optional').hide();
    $('#miscellaneous').hide();
    $('#languages').hide();
    $('#plugin').hide();
    $('#courses').hide();
    $('#about').hide();
    $('canvas').hide();
  });
  $('.hobby').click(function () {
    $('#about').toggle();
    $('#degrees').hide();
    $('#pro').hide();
    $('#optional').hide();
    $('#miscellaneous').hide();
    $('#languages').hide();
    $('#plugin').hide();
    $('#courses').hide();
    $('#perks').hide();
    $('canvas').hide();
  });
  $('.option').click(function () {
    $('#options').toggle();
    $('#perks').hide();
    $('#degrees').hide();
    $('#pro').hide();
    $('#optional').hide();
    $('#miscellaneous').hide();
    $('#languages').hide();
    $('#plugin').hide();
    $('#courses').hide();
    $('#about').hide();
    $('canvas').hide();
  });
  $('#closeAbout').click(function () {
    $('#about').hide();
    $('canvas').show();
  });
  $('#closeCourses').click(function () {
    $('#courses').hide();
    $('canvas').show();
  });
  $('#closePerks').click(function () {
    $('#perks').toggle();
    $('#degrees').hide();
    $('canvas').show();
  });
  $('#closeOptions').click(function () {
    $('#options').toggle();
    $('#degrees').hide();
    $('canvas').show();
  });
  $('#courses').css('display', 'none');
  $('#perks').css('display', 'none');
  $('#about').css('display', 'none');
  $('.options').sideNav({
    menuWidth: 500,
    // Default is 300
    edge: 'left',
    // Choose the horizontal origin
    closeOnClick: false,
    // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens

  }); // START OPEN
  // $('.button-collapse').sideNav('show');

  $('.modal').modal();
  $('.parallax').parallax();
  $('.tap-target').tapTarget('open'); // $('.fixed-action-btn').floatingActionButton();
});