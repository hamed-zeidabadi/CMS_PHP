  <?php
  require_once 'includes/db.php';

  $sql_get_posts = 'SELECT * FROM posts_tbl ';
  $query = mysqli_query($connect, $sql_get_posts);
  while ($row = mysqli_fetch_assoc($query)) {

    $title = $row['post_title'];
    $author = $row['post_author'];
    $date = $row['post_date'];
    $image = $row['post_image'];
    $content = $row['post_content'];
    $tags = $row['post_tags'];


    // gregorian_to_jalali
    list($year, $month, $day) = explode('-', $date);
    include_once 'includes/jdf.php';
    $persian_date = gregorian_to_jalali($year, $month, $day, '/');

  ?>

    <?php ?>

    <!-- Title -->
    <h1 style="font-size: 1.8em;" class="mt-4"><?php echo $title ?></h1>

    <!-- Author -->
    <p style="font-size: 1em;" class="lead">
      توسط
      <a href="#"><?php echo $author ?></a>
    </p>

    <hr>

    <!-- Date/Time -->
    <p> آخرین بروزرسانی مقاله : <?php echo $persian_date ?></p>

    <hr>

    <!-- Preview Image -->
    <img class="img-fluid rounded" src="<?php echo $image ?>" alt="">

    <hr>

    <!-- Post Content -->
    <p style="font-size: 1.2em;" class="lead"><?php echo $content ?></p>

    <hr>

  <?php

  };

  ?>