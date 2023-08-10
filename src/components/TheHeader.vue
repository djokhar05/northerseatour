<template>
  <nav class="navbar navbar-expand-lg" style="z-index: 3000">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img src="https://i.ibb.co/QYLVbGc/logo.png" style="height: 35px"
      /></router-link>

      <div>
        <span class="d-lg-none"><LocaleSwitcher /></span> &nbsp;
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-sharp fa-solid fa-bars text-light"></i>
        </button>
      </div>

      <div
        class="collapse navbar-collapse justify-content-lg-end"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link active text-light"
              aria-current="page"
              to="/"
              >{{ $t("homeLink") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/rates">{{
              $t("ratesLink")
            }}</router-link>
          </li>
          <li class="d-none d-lg-inline-block">
            <LocaleSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    z-index: 3000;
    color: white;
  }
  @media screen and (min-width: 1000px) {
    .navbar {
      padding: 10px 10%;
    }
  }
</style>
