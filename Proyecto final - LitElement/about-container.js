import { LitElement, html, css } from "lit";

class aboutContainer extends LitElement{

    createRenderRoot(){
        return this;
    }

    render(){
    return html`
   <!-- content -->
  <!-- content -->
  <div class="container grey-text">
    <h5 class="center">About Food Ninja</h5>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus omnis, ea doloremque exercitationem id necessitatibus. Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus amet iure, non dignissimos illo.</p>
  </div>
    `;
    }
}

customElements.define('about-container', aboutContainer);