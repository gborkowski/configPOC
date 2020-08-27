<style src="./Configurator.scss" lang="scss"></style>
<i18n src="./Configurator.txt"></i18n>
<script src="./Configurator.js"></script>

<template>

  <div class="config-wrap">
      <div class="config-form">
             <form id="configurator__form" :onSubmit="processConfig" @submit.prevent="processConfig">
                <div class="sin-config">
                 <label>Wood Species</label>
                 <select name="species" v-model="form.species">
                    <option value="walnut">Walnut</option>
                    <option value="maple">Maple</option>
                    <option value="whiteOak">White Oak</option>
                    <option value="redOak">Red Oak</option>
                    <option value="alder">Alder</option>
                    <option value="pine">Pine</option>
                    <option value="cherry">Cherry</option>
                </select>
                <label>Width</label>
                <input
                    name="width"
                    class="input"
                    v-model="form.width"
                >
                <label>Length</label>
                <input
                    name="length"
                    class="input"
                    v-model="form.length"
                >
                <label>Thickness</label>
                <input
                    name="thickness"
                    class="input"
                    v-model="form.thickness"
                >
                <label>Bread board ends</label>
                <select name="breadBoards" v-model="form.breadBoards">
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
                <label>Minimum Board Width</label>
                <input
                    name="minBoardWidth"
                    class="input"
                    v-model="form.minBoardWidth"
                >
                <label>Rustic (i.e. knots and defects)</label>
                <select name="rustic" v-model="form.rustic">
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
                <label>Add Color (dye / stain vs. natural wood)</label>
                <select name="addColor" v-model="form.addColor">
                    <option value="false">False</option>
                    <option value="true">True</option>
                </select>
                <label>Finish (top coat)</label>
                 <select  name="finish" v-model="form.finish">
                    <option value="varnishSatin">Varnish (Arm-R-Seal) Satin</option>
                    <option value="varnishSemiGloss">Varnish (Arm-R-Seal) Semi-Gloss</option>
                    <option value="varnishGloss">Varnish (Arm-R-Seal) Gloss</option>
                    <option value="rubioMonocoatPure">Rubio Monocoat (Pure)</option>
                    <option value="odiesOil">Odies Oil</option>
                    <option value="polyurethane">Polyurethane</option>
                    <option value="shellac">Shellac</option>
                </select>
                <br />
                <br />
                <button type="submit">Get Price</button>
            </div>
            </form>
      </div>
      <div class="config-results">
        <b>Material Cost: ${{results.costFixed}}</b>
        <br />
        <ul>
          <li v-for="details in results.materialDetails" :key="details">
          {{details}}
          </li>
        </ul>
        <br />
        <b>Labor Cost: ${{results.laborFixed}}</b>
        <br />
        <ul>
          <li v-for="details in results.laborDetails" :key="details">
          {{details}}
          </li>
        </ul>
        <br />
          <b>Project Total: ${{results.projectTotal}}</b>
        <br />
      </div>
   </div>
</template>
