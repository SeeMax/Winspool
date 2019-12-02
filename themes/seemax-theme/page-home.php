<?php /* Template Name: Home */ get_header(); ?>
	<main class="home-page">
		<?php while (have_posts()) : the_post(); ?>
			<section class='single-owner' data-owner='1'>
				<div class="content">
					<div class='owner-area'>
						<div class="owner-background c-block-fill"></div>
						<div class="owner-rank"></div>
						<div class="owner-info">
							<div class="owner-names">
								Turek & Jonah
							</div>
							<div class='owner-wins'>
								<span class="wins-count"></span> Wins <div class="owner-played">/ <span class="played-count"></span> Played</div>
							</div>
							<div class='owner-projections'>
								<span class="single-projection">Book Projection: <span class="digits">242 Wins</span></span>
								<span class="projection-bar"></span>
								<span class="single-projection">538 Projection: <span class="digits">249 Wins</span></span>
							</div>
						</div>
					</div>
					<div class='owner-teams'>
						<div class="chart-titles">
							<div class="single-chart-title">
								Team
							</div>
							<div class="single-chart-title">
								Wins
							</div>
							<div class="single-chart-title">
								Loses
							</div>
							<div class="single-chart-title">
								Win%
							</div>
							<div class="single-chart-title">
								Streak
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class='single-owner' data-owner='2'>
				<div class="content">
					<div class='owner-area'>
						<div class="owner-background c-block-fill"></div>
						<div class="owner-rank"></div>
						<div class="owner-info">
							<div class="owner-names">
								Turtle & Egg
							</div>
							<div class='owner-wins'>
								<span class="wins-count"></span> Wins <div class="owner-played">/ <span class="played-count"></span> Played</div>
							</div>
							<div class='owner-projections'>
								<span class="single-projection">Book Projection: <span class="digits">242 Wins</span></span>
								<span class="projection-bar"></span>
								<span class="single-projection">538 Projection: <span class="digits">236 Wins</span></span>
							</div>
						</div>
					</div>
					<div class='owner-teams'>
						<div class="chart-titles">
							<div class="single-chart-title">
								Team
							</div>
							<div class="single-chart-title">
								Wins
							</div>
							<div class="single-chart-title">
								Loses
							</div>
							<div class="single-chart-title">
								Win%
							</div>
							<div class="single-chart-title">
								Streak
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class='single-owner' data-owner='3'>
				<div class="content">
					<div class='owner-area'>
						<div class="owner-background c-block-fill"></div>
						<div class="owner-rank"></div>
						<div class="owner-info">
							<div class="owner-names">
								Splotchy & Old Blue
							</div>
							<div class='owner-wins'>
								<span class="wins-count"></span> Wins <div class="owner-played">/ <span class="played-count"></span> Played</div>
							</div>
							<div class='owner-projections'>
								<span class="single-projection">Book Projection: <span class="digits">239 Wins</span></span>
								<span class="projection-bar"></span>
								<span class="single-projection">538 Projection: <span class="digits">235 Wins</span></span>
							</div>
						</div>
					</div>
					<div class='owner-teams'>
						<div class="chart-titles">
							<div class="single-chart-title">
								Team
							</div>
							<div class="single-chart-title">
								Wins
							</div>
							<div class="single-chart-title">
								Loses
							</div>
							<div class="single-chart-title">
								Win%
							</div>
							<div class="single-chart-title">
								Streak
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class='single-owner' data-owner='4'>
				<div class="content">
					<div class='owner-area'>
						<div class="owner-background c-block-fill"></div>
						<div class="owner-rank"></div>
						<div class="owner-info">
							<div class="owner-names">
								Snidal & Shmug
							</div>
							<div class='owner-wins'>
								<span class="wins-count"></span> Wins <div class="owner-played">/ <span class="played-count"></span> Played</div>
							</div>
							<div class='owner-projections'>
								<span class="single-projection">Book Projection: <span class="digits">251 Wins</span></span>
								<span class="projection-bar"></span>
								<span class="single-projection">538 Projection: <span class="digits">246 Wins</span></span>
							</div>
						</div>
					</div>
					<div class='owner-teams'>
						<div class="chart-titles">
							<div class="single-chart-title">
								Team
							</div>
							<div class="single-chart-title">
								Wins
							</div>
							<div class="single-chart-title">
								Loses
							</div>
							<div class="single-chart-title">
								Win%
							</div>
							<div class="single-chart-title">
								Streak
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class='single-owner' data-owner='5'>
				<div class="content">
					<div class='owner-area'>
						<div class="owner-background c-block-fill"></div>
						<div class="owner-rank"></div>
						<div class="owner-info">
							<div class="owner-names">
								Kid & Matty Bulls
							</div>
							<div class='owner-wins'>
								<span class="wins-count"></span> Wins <div class="owner-played">/ <span class="played-count"></span> Played</div>
							</div>
							<div class='owner-projections'>
								<span class="single-projection">Book Projection: <span class="digits">257 Wins</span></span>
								<span class="projection-bar"></span>
								<span class="single-projection">538 Projection: <span class="digits">266 Wins</span></span>
							</div>
						</div>
					</div>
					<div class='owner-teams'>
						<div class="chart-titles">
							<div class="single-chart-title">
								Team
							</div>
							<div class="single-chart-title">
								Wins
							</div>
							<div class="single-chart-title">
								Loses
							</div>
							<div class="single-chart-title">
								Win%
							</div>
							<div class="single-chart-title">
								Streak
							</div>
						</div>
					</div>
				</div>
			</section>
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>
