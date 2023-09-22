<template>
  <h2 class="title"><slot name="title"/></h2>
  <div class="row">
    <div class="col">
      <slot name="col-1"/>
    </div>
    <div class="col">
      <slot name="col-2"/>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <slot name="col-3"/>
    </div>
    <div class="col">
      <slot name="col-4"/>
    </div>
  </div>
</template>

<style>
  .title {
    text-align: center;
    text-decoration: underline;
  }

  .row {
    display: flex;
  }

  .col {
    padding: 8px;
    width: 50%;
    text-align: center;
    border: 1px solid black;
  }
</style>
