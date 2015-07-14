  $('.critere').hide();
  $('#check_request').hide();

  $('#choix_recherche').change(function(event){
    $('.bloc-search').hide();
    $('.' + $(this).val()).show();
    if($(this).val() == 'critere'){ $('#extract_groupe').val(''); $('#check_request').show() }
    else { $('#check_request').hide() }
  });

  $('#search-group').click(function(e){
  	e.preventDefault();
  	post = $("#groupe_name").val();
  	if(post == '') {
  		alert('champs recherche groupe vide');
  		return false;
  	}else {
	  	url = $(this).attr('href');	

	  	findName = new RegExp("\\?name=.*?");

	  	if(!findName.test(url)) {
		  	url = url + '?name=' + encodeURIComponent(post);
	  	} else {
	  		url = url.replace(/\?name=.*/,'?name=' + encodeURIComponent(post));
	  	}
	  	$(this).attr('href', url);
      $('div#modal .modal-body').html("<img src='/bundles/viadeocampagne/images/ajax-loader.gif' />");
      $('div#modal').modal('show');
		  $('div#modal').load(url).modal('show');
  	}
  });

$('#check_request').click(function(e){
  e.preventDefault();
  var params = $('#form_extract').serialize();
  var url = $(this).attr('href'); 
  $('div#modal .modal-body').html("<img src='/bundles/viadeocampagne/images/ajax-loader.gif' />");
  $('div#modal').modal('show');
  $('div#modal').load(url + '?' + decodeURIComponent(params)).modal('show');
});
  