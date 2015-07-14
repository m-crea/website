$('.launch-modal').on('click',function(e){
	e.preventDefault();
    var url = $(this).attr('href');

    $('div#modal').load(url).modal('show'); 

});

$('#wave_dateStart').datepicker({
	'dateFormat' :'dd/mm/yy'
});

$('#wave_dateEnd').datepicker({
	'dateFormat' :'dd/mm/yy'
});