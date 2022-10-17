import { LitElement, html, css } from "lit";

class addRecipe extends LitElement{

    createRenderRoot(){
        return this;
    }

    render(){
    return html`
    <!-- add recipe side nav -->
  <div id="side-form" class="sidenav side-form">
    <form class="add-recipe container section">
      <h6 >New Recipe</h6>
      <div class="divider"></div>
      <div class="input-field">
        <input placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
        <label for="title">Recipe Title</label>
      </div>
      <div class="input-field">
        <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">
        <label for="ingredients">Ingredients</label>
      </div>
      <div class="input-field center">
        <button class="btn-small">Add</button>
      </div>
    </form>
  </div>
    `;
    }
}

customElements.define('add-recipe', addRecipe);