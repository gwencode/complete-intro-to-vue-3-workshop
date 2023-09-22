<template>
  <div class="wrapper">
    <aside class="sidebar">
      <slot name="sidebar" />
    </aside>
    <main class="main">
      <slot name="main" />
    </main>
  </div>
  <footer class="footer">
    <slot name="footer" />
  </footer>
</template>

<style>
  .sidebar {
    border: 2px solid red;
    margin: 8px 0;
  }
  .main {
    border: 2px solid green;
    margin: 8px 0;
  }
  .footer {
    border: 2px solid blue;
    margin: 8px 0;
  }
</style>
