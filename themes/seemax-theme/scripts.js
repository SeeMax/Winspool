(function ($, root, undefined) {$(function () {
'use strict';
//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES

$(function mobileMenu() {

	$(".menuToggle").on('click', function() {
		console.log("click");

		var tl = new TimelineMax(),
				$this = $(this),
				fullMenu = $(".main-nav"),
				links = $("nav li"),
				ham1 = $(".hamTop"),
				ham2 = $(".hamMid"),
				ham3 = $(".hamBot"),
				uniTime2 = 0.15,
				uniEase = Back.easeIn.config(1),
				uniEase2 = Back.easeOut.config(1);

		if ($this.hasClass("navOpen")) {
			$this.removeClass("navOpen");
			tl.set($(".wrapper"), {height:"auto",overflow:"visible"})
				.staggerTo(links, 0.3, {opacity:0, x:"50%", ease: uniEase2}, 0.03, "menuClose")
				.to(fullMenu, 0.3, {left:"101%"}, "menuClose+=0.2")
				.to(ham1, uniTime2, {width:"100%", rotation:0, y:0}, "menuClose")
				.to(ham2, uniTime2, {width:"100%", x:0, opacity:1}, "menuClose")
				.to(ham3, uniTime2, {width:"100%", rotation:0, y:0}, "menuClose");


		} else {
			$this.addClass("navOpen");
			tl.set($(".wrapper"), {height:"100%", overflow:"hidden"})
				.set(links, {opacity:0, x:"50%"})
				.to(fullMenu, 0.3, {left:"0%"}, "menuOpen")
				.staggerTo(links, 0.2, {opacity:1, x:"0%", ease: uniEase2}, 0.05, "menuOpen+=0.05")
				.to(ham1, uniTime2, {rotation:227, y:5, width:"80%"}, "menuOpen")
				.to(ham2, uniTime2, {width:"70%", x:5, opacity:0}, "menuOpen")
				.to(ham3, uniTime2, {rotation:-227, y:-5, width:"80%"}, "menuOpen");
		}
	});

});

$(function preLoaderOn() {
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
});

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

});})(jQuery, this);
