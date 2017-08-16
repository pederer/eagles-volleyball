
$(function() {

	// Show the schedule information
	
	// Date, Time, Location, Opponent
	var schedule = [
		['18 Aug', '4:30p', '(JV Only) 1365 Woodville Pike, Milford, OH 45150', 'Milford Christian Bulldogs'],
		['22 Aug', '5:30p', 'Hillsboro Christian Academy, 849 South High St. Hillsboro, OH 45133', 'Hillsboro Christian Crusaders'],
		['26 Aug', '9:00a', 'Sports Plus, 10765 Reading Road in Sharonville, 45241', 'Trailblazers Tournament'],
		['29 Aug', '6:30p', 'Wilmington High School', 'Fayette Christian Crusaders'],
		['31 Aug', '6:00p', 'Sports Plus, 10765 Reading Road in Sharonville, 45241', 'Cincinnati Trailblazers'],
		['5 Sept', '6:30p', 'Wilmington High School', 'Dayton Golden Angels'],
		['8 Sept', '6:30p', 'Wilmington High School', 'Liberty Bible Academy Patriots'],
		['15 Sept', '6:00p', 'Vandalia Recreation Center, 1111 Stonequarry Rd. Dayton, OH 45414', 'Miami Valley Saints'],
		['21 Sept', '6:00p', 'Wilmington High School', 'Cincinnati Trailblazers'],
		['26 Sept', '5:00p', '1315 Dayton Ave NW, Washington Ct Hs, OH 43160', 'Fayette Christian Crusaders'],
		['2 Oct', '6:00p', '4900 Old Irwin Simpson Rd, Mason, OH 45040', 'Liberty Bible Academy Patriots'],
		['3 Oct', '7:15p', 'Wilmington High School', 'Hillsboro Christian Crusaders'],
		['10 Oct', '5:00p', '3655 E. Patterson Rd, Beavercreek, OH 45430', 'Dayton Golden Angels'],
		['13 Oct', '6:30p', 'Wilmington High School', 'Miami Valley Saints'],
		['21 Oct', '?:??', 'Hillsboro Christian Academy, 849 South High St. Hillsboro, OH 45133', 'Hillsboro Tournament']
	];
	// var schedule = [
	// 	['27 Aug', '9:00a', 'Sports Plus, 10765 Reading Road in Sharonville, 45241', 'Trailblazers Tournament'],
	// 	['30 Aug', '6:00p', 'Sports Plus, 10765 Reading Road in Sharonville, 45241', 'Cincinnati Trailblazers'],
	// 	['1 Sept', '6:30p', 'Wilmington High School', 'Miami Valley Saints'],
	// 	['8 Sept', '6:00p', '495 Old 122 Rd, Lebanon, OH 45036', 'Emmanuel Baptist Crusaders'],
	// 	['13 Sept', '5:00p', 'Southern State, 100 Hobart Drive Hillsboro, OH 45133', 'Hillsboro Christian Crusaders'],
	// 	['16 Sept', '6:00p', 'Vandalia Recreation Center, 1111 Stonequarry Rd. Dayton, OH 45414', 'Miami Valley Saints'],
	// 	['22 Sept', '6:00p', 'Sports Plus, 10765 Reading Road in Sharonville, 45241', 'Cincinnati Trailblazers'],
	// 	['23 Sept', '6:30p', 'Wilmington High School', 'Dayton Golden Angels'],
	// 	['30 Sept', '6:30p', 'Wilmington High School', 'Fayette Christian Crusaders'],
	// 	['4 Oct', '6:30p', 'Wilmington High School', 'Hillsboro Christian Crusaders'],
	// 	['11 Oct', '5:00p', '1365 Woodville Pike, Milford, OH 45150', 'Milford Christian Bulldogs'],
	// 	['17 Oct', '5:00p', '1315 Dayton Ave NW, Washington Ct Hs, OH 43160', 'Fayette Christian Crusaders'],
	// 	['18 Oct', '6:30p', 'Wilmington High School', 'Milford Christian Bulldogs']
	// ];

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
