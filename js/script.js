'use strict'

$(function() {

	$('input').hover(function () {
		$(this).siblings('span').addClass('active');
	}, function () {
		$(this).siblings('span').removeClass('active');
	});
	$('span').hover(function () {
		$(this).removeClass('active');
	})
	$('button').on('click',function () {
		$('span').addClass('active');
	});

});
