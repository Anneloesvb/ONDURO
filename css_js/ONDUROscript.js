function maakMenu(){
  document.getElementById('navigatieDiv').innerHTML = `
<nav class="navbar navbar-expand-sm navbar-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto">
          <a class="navbar-brand" href="../info/index.html">Logo</a>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Modules</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="../modules/rooster.html">Roosters</a></li>
              <li><a class="dropdown-item" href="../modules/uren.html">Uren</a></li>
              <li><a class="dropdown-item" href="../modules/beschikbaarheid.html">Beschikbaarheid</a></li>
              <li><a class="dropdown-item" href="../modules/checkinout.html">Check-in/out</a></li>
              <li><a class="dropdown-item" href="../modules/personeelszaken.html">Personeelszaken</a></li>
              <li><a class="dropdown-item" href="../modules/mobieleapp.html">Mobiele app</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Branches</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="../branches/horeca.html">Horeca</a></li>
              <li><a class="dropdown-item" href="../branches/beveiliging.html">Beveiliging</a></li>
              <li><a class="dropdown-item" href="../branches/hotel.html">Hotel</a></li>
              <li><a class="dropdown-item" href="../branches/zorgwelzijn.html">Zorg&Welzijn</a></li>
              <li><a class="dropdown-item" href="../branches/productie.html">Productie</a></li>
              <li><a class="dropdown-item" href="../branches/recreatie.html">Recreatie</a></li>
              <li><a class="dropdown-item" href="../branches/retail.html">Retail</a></li>
              <li><a class="dropdown-item" href="../branches/transport.html">Transport</a></li>
              <li><a class="dropdown-item" href="../branches/facilitairedienst.html">Facilitaire dienstverlening</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="../info/tarieven.html">Tarieven</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Meer</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="../meer/blog.html">Blog</a></li>
              <li><a class="dropdown-item" href="../meer/downloads.html">Downloads</a></li>
              <li><a class="dropdown-item" href="../meer/klant.html">Klant verhaal</a></li>
              <li><a class="dropdown-item" href="../meer/overons.html">Over ons</a></li>

            </ul>
          </li>
        </ul>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="btn btn-primary" href="../info/inlog.html">Inlog</a>
              </li>
              <li class="nav-item">
                <button class="btn btn-primary" href="../info/demo.html">Demo</button>
              </li>
              <li class="nav-item">
                <button class="btn btn-primary" href="../info/contact.html">Contact</button>
              </li>
            </ul>
          </div>

      </div>
    </nav>`
}