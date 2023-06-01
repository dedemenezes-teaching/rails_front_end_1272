import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    console.log('hello from nabar controller')
  }

  updateNavbar(event) {
    // this.element #=> references the element which contains DATA-CONTROLLER
    // console.log('scrolling....');
    console.log(window.innerHeight)
    console.log(window.scrollY)
    if (window.scrollY >= window.innerHeight) {
      this.element.classList.add("navbar-lewagon-white")
    } else {
      this.element.classList.remove("navbar-lewagon-white")
    }
  }
}
