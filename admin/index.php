<?php require_once 'head.php'  ?>

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
                    <!-- <div class="height-800">
                    </div> -->
                    <p>صفحه اصلی</p>
                </div>
            </div>
        </div>
    </div>

    <!-- ======================================
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


</body>


</html>