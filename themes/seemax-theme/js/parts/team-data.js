/*jshint multistr: true */
let localTeams = {
  "url": "https://www.wins-pool.com/wp-content/themes/seemax-theme/json/teams103119.json",
	"method": "GET"
};

$.ajax(localTeams).done(function(key, val) {

  $.each( key, function(k, v) {
    let conf = v.leagues.standard.confName;
    let teamId = v.teamId;
    let city = v.city;
    let nickname = v.nickname;
    let logo = v.logo;
    let owner = v.owner;
    let pick = v.pick;
    let isNBA = v.nbaFranchise;

    $('*[data-owner="'+owner+'"]').find('.owner-teams').append(
      "<div class='single-team c-width-100 "+conf.toLowerCase()+"-conf' \
      style='order:"+pick+"' \
      data-id='"+teamId+"' data-owned='"+owner+"'> \
        <div class='team-background c-block-fill'></div> \
        <div class='team-info'> \
          <div class='team-logo'> \
            <img src='"+logo+"'> \
          </div> \
          <div class='team-city'>"+city+"&nbsp;</div> \
          <div class='team-conference'>"+conf+"</div> \
          <div class='team-nickname'>"+nickname+"</div> \
        </div> \
      </div>");
  });
});



let settings = {
	"async": true,
	"crossDomain": true,
  "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2019",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "638e4165efmsh6d47844fdf824b6p126dc9jsneb5a38105a9b"
	}
};

$.ajax(settings).done(function(data) {

  $.each(data.api.standings, function(k, v) {
    let thisId = v.teamId;
    let thisWins = v.win;
    let thisStreak = v.winStreak;
    let thisPercent = v.winPercentage;
    let thisLosses = v.loss;
    let thisPlayed = parseInt(thisLosses) + parseInt(thisWins);

    let thisTeamInfo = $('*[data-id='+thisId+']');
    let thisTeam = $('*[data-id='+thisId+']');

    thisTeamInfo.append(
      "<div class='team-wins c-width-25'>"+thisWins+"</div> \
      <div class='team-played c-width-25'>"+thisLosses+"</div> \
      <div class='team-played c-width-25'>"+thisPercent +"</div> \
      <div class='team-loses c-width-25'>"+thisStreak+"</div> \
    ");

    thisTeam.attr({
      "data-wins":thisWins,"data-loses":thisLosses,"data-played":thisPlayed
    });
  });
  countWins();
  orderByWins();
  addRankIcon();
});

// Get The Total Win Count for Each Owner
function countWins() {
  $('.single-owner').each(function(){
    var sumW = 0;
    var sumP = 0;
    // Get The Wins for Each Team The owner has and add them
    $(this).find('.single-team').each(function(){
      sumW += Number($(this).data('wins'));
      sumP += Number($(this).data('played'));
    });

    // Add Total Wins as Data Attribute to the owner
    $(this).attr('data-totalw', sumW);
    $(this).attr('data-totalplayed', sumP);
    $(this).find('.wins-count').append(sumW);
    $(this).find('.played-count').prepend(sumP);
  });
}

// Count The Win Totals Data Attribute for each owner and Set the order of the owners
function orderByWins() {

  var $wrapper = $('.home-page');

  $wrapper.find('.single-owner').sort(function(a, b) {
      return +b.dataset.totalw - +a.dataset.totalw;
  }).appendTo($wrapper);
}

function addRankIcon() {

  let i = 0;
  $('.single-owner').each(function(){
      i++;
      $(this).find('.owner-rank').prepend('<div class="rank-icon">'+i+'</div>');
  });
}
