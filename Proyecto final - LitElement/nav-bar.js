import {LitElement, html, css} from 'lit';

export class NavBar extends LitElement {
    
  createRenderRoot() {
return this;  
  }
  
  render() {
    return html`
    <nav class="z-depth-0">
    <div class="nav-wrapper container">
      <a href="/">Food<span>Ninja</span></a>
      <span @click = ${this.showMenu} class="right grey-text text-darken-1">
        <i class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
      </span>
    </div>
  </nav>
    `;
  }
  
  showMenu(){
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});
  }

}

customElements.define('nav-bar', NavBar);