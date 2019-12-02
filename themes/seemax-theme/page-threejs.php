<?php /* Template Name: ThreeJS */ get_header(); ?>
	<main class="threejs-page">
    <?php while (have_posts()) : the_post(); ?>

    <canvas id="c"></canvas>


    <?php endwhile; ?>
  </main>
<?php get_footer(); ?>
