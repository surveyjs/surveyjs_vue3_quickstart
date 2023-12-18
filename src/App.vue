<script setup lang="ts">
import RouterPage from "./router/RoutePage.vue";
import "bootstrap/dist/css/bootstrap.css";
</script>
<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">SurveyJS + Vue 3</a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/survey">Form Library</router-link>
          </li>
          <li>
            <router-link to="/creator">Survey Creator</router-link>
          </li>
          <li>
            <router-link to="/exportpdf">PDF Generator</router-link>
          </li>
          <li>
            <router-link to="/analytics">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/analyticstabulator">Results Table</router-link>
          </li>
          <li>
            <router-link to="/analyticsdatatables">Results Table (IE Support)</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <RouterPage class="view"></RouterPage>
  </div>
</template>