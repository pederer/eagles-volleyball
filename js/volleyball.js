
$(function() {
	
	// Date, Time, Location, Opponent
	var schedule = [
		['27 Aug', '9:00a', 'Sports Plus, 10765 Reading Road in Sharonville, 45241', 'Trailblazers Tournament'],
		['30 Aug', '6:00p', 'Clinton Massie?', 'Cincinnati Trailblazers'],
		['1 Sept', '6:30p', 'Wilmington High School', 'Miami Valley Saints'],
		['8 Sept', '6:00p', '495 Old 122 Rd, Lebanon, OH 45036', 'Emmanuel Baptist Crusaders'],
		['9 Sept', 'UNKNOWN', '1365 Woodville Pike, Milford, OH 45150', 'Milford Tournament'],
		['10 Sept', 'UNKNOWN', '1365 Woodville Pike, Milford, OH 45150', 'Milford Tournament'],
		['13 Sept', '6:00p', '849 South High Street, Hillsboro OH 45133', 'Hillsboro Christian Crusaders'],
		['16 Sept', '6:00p', '140 Elva CT Vandlia, Ohio 45371', 'Miami Valley Saints'],
		['22 Sept', '6:00p', 'Sports Plus, 10765 Reading Road in Sharonville, 45241', 'Cincinnati Trailblazers'],
		['23 Sept', '6:30p', 'Wilmington High School', 'Dayton Golden Angels'],
		['30 Sept', '6:30p', 'Wilmington High School', 'Fayette Christian Crusaders'],
		['4 Oct', '6:30p', 'Wilmington High School', 'Hillsboro Christian Crusaders'],
		['11 Oct', '5:00p', '1365 Woodville Pike, Milford, OH 45150', 'Milford Christian Bulldogs'],
		['17 Oct', '5:00p', '1315 Dayton Ave NW, Washington Ct Hs, OH 43160', 'Fayette Christian Crusaders'],
		['18 Oct', '6:30p', 'Wilmington High School', 'Milford Christian Bulldogs']
	];

	var i, match, $tr, $td;
	for (i = 0; i < schedule.length; i++) {
		match = schedule[i];
		$tr = $('<tr></tr>');
		
		// Date
		$td = $('<td></td>').text(match[0]);
		$tr.append($td);
		
		// Time
		$td = $('<td></td>').text(match[1]);
		$tr.append($td);
		
		// Location
		$td = $('<td></td>').text(match[2]);
		$tr.append($td);
		
		// Opponent
		$td = $('<td></td>').text(match[3]);
		$tr.append($td);
		
		$('#schedule_table > tbody').append($tr);
	}
});
