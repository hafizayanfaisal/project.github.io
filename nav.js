

let head= document.getElementById("header").innerHTML=
`
<nav class="navbar navbar-expand-lg navbar-light bg-">
      <div class="container-fluid ">
        <img src="assets/image/BagBag_logo_100px-removebg-preview.png" id="mu" alt="">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="about.html">About Us</a>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Bags
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="backpack.html">Backpack</a>
                
                </li>
                
                <li><a class="dropdown-item" href="sling.html">Sling Bags</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
              </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active"  href="Gallery.html">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="Contact.html">Contact</a>
              </li>
              
               <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="feedback form.html">Feedback form</a>
            </li>

          </ul>
        </div>
      </div>

    </nav>
`;