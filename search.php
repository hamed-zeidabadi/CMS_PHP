<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Blog Post - Start Bootstrap Template</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/blog-post.css" rel="stylesheet">

  <!-- Custom styles -->
  <link rel="stylesheet" href="style.css">


</head>

<body>

  <!-- Navigation -->

  <?php include 'navigation.php' ?>

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">


        <!-- Start Post Content -->
        <?php

        $search_text = $_POST['search_text'];

        if (!empty($search_text)) {
          require_once 'includes/db.php';
          $sql_get_posts = "SELECT * FROM posts_tbl WHERE post_content LIKE '%$search_text%'";
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
        }else{
          echo '<h3 class ="m-3 h3 text-danger" >متاسفم ! چیزی پیدا نشد :( </h3>' ;
        };
        


        ?>



        <!--  End Post Content -->



        <!-- Comments Form -->
        <div class="card my-4">
          <h5 class="card-header">Leave a Comment:</h5>
          <div class="card-body">
            <form>
              <div class="form-group">
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <!-- Single Comment -->
        <div class="media mb-4">
          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
          <div class="media-body">
            <h5 class="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>

        <!-- Comment with nested comments -->
        <?php include 'comment.php' ?>

        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

          <!-- start Search Widget -->
          <?php include './search_bar.php' ?>
          <!--  end  Search Widget -->


          <!-- Categories Widget -->
          <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">Freebies</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Side Widget -->
          <div class="card my-4">
            <h5 class="card-header">Side Widget</h5>
            <div class="card-body">
              You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
            </div>
          </div>

        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
      <!-- /.container -->
    </footer>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>


</html>