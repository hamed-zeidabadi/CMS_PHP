 <?php require_once 'includes/db.php' ?>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
     <div class="container">
         <a class="navbar-brand" href="./index.php">آموزش برنامه نویسی</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarResponsive">
             <ul class="navbar-nav ml-auto">
                 <?php

                    $sql_category = 'SELECT * FROM categories_tbl';
                    $query = mysqli_query($connect, $sql_category);
                    while ($row = mysqli_fetch_assoc($query)) {
                        $category_name = $row['category']
                    ?>
                     <li class="nav-item active">
                         <a class="nav-link" href="#">
                             <?php echo $category_name ?>
                         </a>

                     <?php

                    };

                        ?>
             </ul>
         </div>
     </div>
 </nav>