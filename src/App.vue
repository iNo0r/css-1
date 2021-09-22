<template>
  <div class="backdrop"></div>
  <div class="modal">
    <h1 class="modal__title">Do you want to continue?</h1>
    <div class="modal__actions">
      <a href="start-hosting/index.html" class="modal__action">Yes!</a>
      <button class="modal__action modal__action--negative" type="button">
        No!
      </button>
    </div>
  </div>
  <header class="main-header">
    <div>
      <button class="toggle-button">
        <span class="toggle-button__bar"></span>
        <span class="toggle-button__bar"></span>
        <span class="toggle-button__bar"></span>
      </button>
      <a href="index.html" class="main-header__brand">
        <img
          src="./images/uhost-icon.png"
          alt="uHost - Your favorite hosting company"
        />
      </a>
    </div>
    <nav class="main-nav">
      <ul class="main-nav__items">
        <li class="main-nav__item">
          <a href="packages/index.html">Packages</a>
        </li>
        <li class="main-nav__item">
          <a href="customers/index.html">Customers</a>
        </li>
        <li class="main-nav__item main-nav__item--cta">
          <a href="start-hosting/index.html">Start Hosting</a>
        </li>
      </ul>
    </nav>
  </header>
  <nav class="mobile-nav">
    <ul class="mobile-nav__items">
      <li class="mobile-nav__item">
        <a href="packages/index.html">Packages</a>
      </li>
      <li class="mobile-nav__item">
        <a href="customers/index.html">Customers</a>
      </li>
      <li class="mobile-nav__item mobile-nav__item--cta">
        <a href="start-hosting/index.html">Start Hosting</a>
      </li>
    </ul>
  </nav>

  <router-view></router-view>

  <footer class="main-footer">
    <nav>
      <ul class="main-footer__links">
        <li class="main-footer__link">
          <a href="#">Support</a>
        </li>
        <li class="main-footer__link">
          <a href="#">Terms of Use</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
}

.backdrop {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.main-header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: #2ddf5c;
  padding: 0.5rem 1rem;
  z-index: 1;
}

.main-header > div {
  display: inline-block;
  vertical-align: middle;
}

.toggle-button {
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  vertical-align: middle;
}

.toggle-button:focus {
  outline: none;
}

.toggle-button__bar {
  width: 100%;
  height: 0.2rem;
  background: black;
  display: block;
  margin: 0.6rem 0;
}

.main-header__brand {
  color: #0e4f1f;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  height: 1.5rem;
  /* width: 20px; */
  display: inline-block;
  vertical-align: middle;
}

.main-header__brand img {
  height: 100%;
  /* width: 100%; */
}

.main-nav {
  display: block;
}

.main-nav__items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-nav__item {
  display: block;
  text-align: center;
  margin: 0 1rem;
}

.main-nav__item a,
.mobile-nav__item a {
  text-decoration: none;
  color: #0e4f1f;
  font-weight: bold;
  display: block;
  margin-bottom: 1rem;
}

.main-nav__item a:hover,
.main-nav__item a:active {
  color: white;
  /* border-bottom: 5px solid white; */
}

.main-nav__item--cta a,
.mobile-nav__item--cta a {
  color: white;
  background: #ff1b68;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
@media (min-width: 40rem) {
  .main-nav {
    display: inline-block;
    text-align: right;
    width: calc(100% - 122px);
    vertical-align: middle;
  }
  .main-nav__item {
    display: inline-block;
    margin: 0 1rem;
  }
}

.main-nav__item--cta a:hover,
.main-nav__item--cta a:active,
.mobile-nav__item--cta a:hover,
.mobile-nav__item--cta a:active {
  color: #ff1b68;
  background: white;
  border: none;
}

.main-footer {
  background: black;
  padding: 2rem;
  margin-top: 3rem;
}

.main-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.main-footer__link {
  display: inline-block;
  margin: 0 1rem;
}

.main-footer__link a {
  color: white;
  text-decoration: none;
}

.main-footer__link a:hover,
.main-footer__link a:active {
  color: #ccc;
}

.mobile-nav {
  display: none;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  background: white;
  width: 80%;
  height: 100vh;
}

.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  text-align: center;
}

.mobile-nav__item {
  margin: 1rem 0;
}

.mobile-nav__item a {
  font-size: 1.5rem;
}

.button {
  background: #0e4f1f;
  color: white;
  font: inherit;
  border: 1.5px solid #0e4f1f;
  padding: 0.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.button:hover,
.button:active {
  background: white;
  color: #0e4f1f;
}

.button:focus {
  outline: none;
}

.open {
  display: block !important;
}
</style>