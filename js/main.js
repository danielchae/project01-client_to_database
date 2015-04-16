function collectData() {
	
	//	declare variable and attach respective answers as their value
	var response_animal 	= $('#in01').val();
	var response_1stnumber 	= $('#in02').val();
	var response_2ndnumber	= $('#in03').val();
	var response_checkbox;
	
	//	declare checkbox value as boolean TRUE/FALSE
	if	($('#in04').is(':checked')) {
		response_checkbox	= true;
	} else {
		response_checkbox	= false;
	}

	//	calculate more data based on user-inputted values
	var generated_3rdnumber	= parseInt(response_1stnumber,10) - parseInt(response_2ndnumber,10);
	var generated_timestamp	= new Date().getTime();
	
	//	print all collected data
	console.log('========================================')
	console.log('COLLECTED DATA  ------------------------')
	console.log('Animal:         ' + response_animal);
	console.log('1st Number:     ' + response_1stnumber);
	console.log('2nd Number:     ' + response_2ndnumber);
	console.log('Checkbox:       ' + response_checkbox);
	console.log('CALCULATED DATA ------------------------')
	console.log('#1 - #2:        ' + generated_3rdnumber);
	console.log('timestamp:      ' + generated_timestamp);
};

$('.submit').click(function(){
	collectData();
	
	//	SUBMIT COLLECTED DATA TO SERVER
});