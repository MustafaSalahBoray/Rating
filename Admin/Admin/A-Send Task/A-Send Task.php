<html lang="en">

<head>
    <!-- meta tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send Task-Modern Academy</title>
    <link rel="icon" href="../A-Send Task/img/profile man.png" type="image/x-icon">

    <!-- links -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../A-Send Task/css/bootstrap.min.css">
    <link rel="stylesheet" href="../A-Send Task/css/all.min.css">
    <link rel="stylesheet" href="../A-Send Task/css/A-Send Task.css">

</head>

<body>


    <div class="d-flex main">

        <!-- sidebar -->

        <aside class="px-3 pt-3 sidebar vh-100 flex-shrink-0">
            <div class="d-flex flex-column">
                <a href="../A-Send Task/A-Send Task.html"
                    class="text-decoration-none d-flex justify-content-center align-items-center">
                    <img src="../../Home/img/mam-logo-light-roboto.png" alt="moden-academy" class="logo-icon">
                     
                </a>

                <ul class="p-0  list-unstyled mt-3 d-inline flex-column">
                  

                    <li>
                        <a  href="../A-Dashboard/A-Dashboard.html" class="d-inline align-items-center  py-3  text-decoration-none here" type="button"
                            >
                            <i class="fa-solid fa-house-chimney list-icon fa-fw"></i>
                            <span class="list-text ">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a  href="../A-Send Task/A-Send Task.html" class="d-inline align-items-center  py-3  text-decoration-none" type="button"
                            >
                            <i class="fa-solid fa-book-open-reader list-icon fa-fw fw-bold here "></i>
                            <span class="list-text fw-bold here">Tasks</span>
                        </a>
                    </li>
                    
                    <li>
                        <a  href="../A-profile/A-profile.html" class="d-inline align-items-center  py-3  text-decoration-none" type="button"
                            >
                            <i class="fa-solid fa-user list-icon fa-fw"></i>
                            <span class="list-text">profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="../A-Rating/A-Rating.html" class="d-inline align-items-center  py-3  text-decoration-none" type="button">
                          <i class="fa-regular fa-star fa-solid list-icon fa-fw  "></i>
                          <span class="list-text ">Rating</span>
                        </a>
                      </li>
                  
                
                </ul>
            </div>
        </aside>

        <!-- End of sidebar -->

        <section class="container-fluid  ps-4">
            <div class="row">

                <!-- navbar -->

                <nav class="col-lg-12 py-4 px-3">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-5 col-sm-12 search d-flex order-lg-0 order-sm-1">
                        </div>

                        <div id="user-box" class="col-lg-5 col-sm-12 m-sm-auto m-lg-0 mt-lg-0 mb-sm-4 profile d-flex order-lg-0 order-sm-0">
                            <div class="user-info d-flex align-items-center pe-2">
                                <a href="#" class="text-decoration-none d-flex flex-column">
                                    <span id="userName" class="user-name">Ahmed Essam</span>
                                    <small>Admin Profile</small>
                                </a>

                            </div>
                            <div class="user-image">
                                <a href="#">
                                    <img id="user-photo" src="../A-Send Task/img/profile man.png" alt="user photo">
                                </a>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- End of navbar -->

            <!-- profile section -->

            <section class="profile-main  mt-3">
                <div class="d-flex flex-column align-items-center">
                    <div class="profile d-flex flex-column align-items-center mb-2">

                         <div id="details" class="container-form mt-5">
  
                            

  
        <form method="POST">
            
          <label for="manger" class="fw-bold">Mangers</label>
            <select id="manger" class="form-select" aria-label="Default select example" name="manger">
            <option value="all ">Select manger </option>
            <option value="Doctor">DR/Ahmed </option>
            <option value="Doctor">DR/mohammed </option>
            <option value="Doctor">DR/ali </option>
            <option value="Doctor">DR/raouf </option>
            <option value="officer">Mr/sami</option>
            <option value="officer">Mr/samer</option>
            <option value="officer">Mr/Emad</option>
        </select> 
        <div class="mb-3">
          
            <label for="subject" class="form-label subject fw-bold">Subject...</label>
            <input type="text" class="form-control" id="formGroupExampleInput" name="Subject" placeholder="name subject">
          </div>          
        <div class="mb-3">
            <label for="formFile" class="form-label fw-bold">Default file input</label>
            <input class="form-control" type="file" name="file" id="formFile">
          </div>

         
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label fw-bold">Comment of tasks</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Comment"></textarea>
          </div>
        <input  class="align-items-end" type="submit" value="submit" name="submit">
        </form>
      </div> 

      <?php 
            require '../DB.php'; 
            if(isset($_POST['submit'])){
                $file=$_FILES['file']['name'];
                //$fileType=$_FILES['file']["type"];
                $filetmp=$_FILES['file']['tmp_name'];
        $Insert=$db->prepare("INSERT INTO task (manger,Subject,fileName,file,filetype,comment) VALUES(:manger,:Subject,:fileName,:comment)");
        $Insert->bindparam("manger",$_POST['manger']);
         $Insert->bindparam("Subject",$_POST['Subject']);
         $Insert->bindparam("fileName",$file); 
         //  $Insert->bindparam("file",$filetmp);
         //  $Insert->bindparam("filetype",$fileType);
             $Insert->bindparam("comment",$_POST['Comment']);
            if ($Insert->execute()) {
                 // move_uploaded_file($filetmp, "../fils/$file");
            }
            else{
                echo "string";
            }


   }

      ?>



    </div>
  </div>
    </div>
</section>

            <!-- End of profile section -->

        </section>
    </div>


    <!-- profile card -->

    <div class="profile-container d-none">
        <i id="card-close" class="fa-solid fa-xmark"></i>
        <div class="profile-card">
            <div class="card" style="width: 18rem;">
                <img id="user-card-image" src="../A-Dashboard/img/profile man.png" class="card-img-top w-100"
                    alt="user-photo">
                <div class="card-body">
                    <h5 id="cardName" class="card-title fw-bolder">Ahmed Essam</h5>
                    <small id="cardEmail">example@gmail.com</small>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item "><a href="../A-profile/A-profile.html" class="fw-bold text-decoration-none text-black">Profile</a>
                    </li>
                    <li class="list-group-item "><a id="change-password-list" href="#"
                            class="fw-bold text-decoration-none text-black">Change passward</a>
                    </li>
                    <li class="list-group-item "><a id="cardSignOut" href="../../Register/index.html"
                            class="fw-bold text-decoration-none text-black">Signout</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- end of profile card -->

    <!-- change passward card -->


    <!-- end of change passward card -->

    <script src="../A-Send Task/js/jquery-3.6.0.slim.min.js"></script>
    <script src="../A-Send Task/js/bootstrap.bundle.min.js"></script>
    <script src="../A-Send Task/js/navbar.js"></script>
    <script src="../A-Send Task/js/profile_user_name.js"></script>
    <script src="../A-Send Task/js/change-password.js"></script>
    <script src="../A-Send Task/js/stuProfileMat.js"></script>
    <script src="../A-Send Task/js/SignOut.js"></script>
</body>

</html>