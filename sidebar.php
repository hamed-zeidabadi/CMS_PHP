  <?php require_once 'includes/db.php' ?>

  <!-- Sidebar Widgets Column -->
  <div class="col-md-4">

      <!-- start Search Widget -->
      <?php include './search_bar.php' ?>
      <!--  end  Search Widget -->


      <!-- Categories Widget -->
      <div class="card my-4">
          <h5 style="font-size: 1.1em;" class="card-header">دسته بندی موضوعی</h5>
          <div class="card-body">
              <div class="row">
                  <div class="col-lg-6">
                      <ul class="list-unstyled mb-0">


                          <?php

                            $sql_category = 'SELECT * FROM categories_tbl';
                            $query = mysqli_query($connect, $sql_category);
                            while ($row = mysqli_fetch_assoc($query)) {
                                $category_name = $row['category']
                            ?>
                              <li>
                                  <a style="font-size: 0.88em; line-height: 25px;" href="#"> <?php echo $category_name ?></a>
                              </li>

                          <?php

                            };

                            ?>
                      </ul>
                  </div>

              </div>
          </div>
      </div>