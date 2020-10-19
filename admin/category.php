<!-- Mirrored from motrila.iranneginhotel.ir/blank.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 02 Dec 2019 09:33:29 GMT -->

<?php require 'head.php'  ?>


<body>
    <!-- Preloader -->
    <div id="preloader">
        <div id="ctn-preloader" class="ont-preloader">
            <div class="animation-preloader">
                <div class="spinner"></div>
                <div class="txt-loading">
                    <span data-text-preloader=" پنل مدیریت" class="letters-loading">
                        پنل مدیریت
                    </span>
                </div>
                <p class="text-center">بارگذاری</p>
            </div>

            <div class="loader">
                <div class="row">
                    <div class="col-3 loader-section section-left">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-left">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-right">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-right">
                        <div class="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Preloader -->


    <!-- Setting Panel -->
    <?php include 'setting.php'  ?>

    <!-- ======================================
******* Page Wrapper Area Start **********
======================================= -->
    <div class="ecaps-page-wrapper">
        <!-- Sidemenu Area -->
        <div class="ecaps-sidemenu-area">
            <!-- Desktop Logo -->
            <div class="ecaps-logo">
                <a href="index.php"><img class="desktop-logo" src="img/shop-img/18.jpg" alt="لوگوی دسک تاپ"> <img class="small-logo" src="img/shop-img/18.jpg" alt="آرم موبایل"></a>
            </div>

            <!-- Side Nav -->
            <div class="ecaps-sidenav" id="ecapsSideNav">
                <!-- Side Menu Area -->
                <div class="side-menu-area">
                    <!-- Sidebar Menu -->

                    <?php include 'sidebar.php'  ?>



                </div>
            </div>
        </div>

        <!-- Page Content -->
        <div class="ecaps-page-content">
            <!-- Top Header Area -->
            <?php include 'header.php'  ?>

            <!-- Main Content Area -->
            <div class="main-content">
                <div class="container-fluid">

                    <div class="col-12 box-margin">
                        <div class="card">
                            <div class="card-body">
                                <div class="widgets-todo-list-area">
                                    <?php

                                    if (isset($_POST['add_cat_btn'])) {
                                        echo var_dump($_POST);
                                    }

                                    // $sql_add_cat = "INSERT INTO categories_tbl(category) VALUE category == {''}     "

                                    ?>

                                    <form action="category.php" method="post" id="form-add-todo" class="form-add-todo d-flex">
                                        <input type="text" id="new-todo-item" class="new-todo-item" name="add_cat" placeholder="نام دسته بندی جدید را وارد کنید">
                                        <input type="submit" id="add-todo-item" class="add-todo-item" name="add_cat_btn" value="اضافه کردن" form="form-add-todo">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card-body">
                        <h4 class="card-title">لیست دسته بندی ها</h4>
                        <!-- Table with outer spacing -->
                        <div class="table-responsive">
                            <table class="table">


                                <thead>
                                    <tr>
                                        <th>شناسه</th>
                                        <th>نام</th>
                                        <th>عمل</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <?php


                                    $sql_category = 'SELECT * FROM categories_tbl';
                                    $query = mysqli_query($connect, $sql_category);
                                    while ($row = mysqli_fetch_assoc($query)) {
                                        $category_id = $row['category_id'];
                                        $category_name = $row['category'];
                                    ?>

                                        <td><?php echo $category_id ?></td>
                                        <td><?php echo $category_name ?></td>
                                        <td><a href="#"><i class="zmdi zmdi-delete btn btn-danger btn-circle"></i></a></td>
                                        </tr>

                                    <?php

                                    };

                                    ?>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ======================================o
********* Page Wrapper Area End ***********
======================================= -->

    <!-- Must needed plugins to the run this Template -->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bundle.js"></script>
    <script src="js/default-assets/setting.js"></script>
    <script src="js/default-assets/fullscreen.js"></script>

    <!-- Active JS -->
    <script src="js/default-assets/active.js"></script>
    <script src="js/default-assets/bootstrap-growl.js"></script>
    <script src="js/default-assets/notification-active.js"></script>
    <!-- These plugins only need for the run this page -->
    <script src="js/default-assets/todolist.js"></script>
    <script src="js/default-assets/bootstrap-growl.js"></script>


</body>


</html>