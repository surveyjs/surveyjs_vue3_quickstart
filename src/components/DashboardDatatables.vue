<template>
  <div>
    <h1>SurveyJS Dashboard - Table View (old browsers support)</h1>
    <span>Uses DataTables (compatible with IE10+)</span>
    <div id="tableContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { Model } from "survey-core";
import { DataTables } from "survey-analytics/survey.analytics.datatables";
import { json, data } from "../../data/dashboard_data";

import $ from "jquery";
import "datatables.net/js/jquery.dataTables.js";
import "datatables.net-dt/js/dataTables.dataTables.js";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-colreorder/js/dataTables.colReorder.js";
import "datatables.net-rowgroup/js/dataTables.rowGroup.js";

import "survey-analytics/survey.analytics.datatables.min.css";
import "datatables.net-colreorder-dt/css/colReorder.dataTables.css";

const survey = new Model(json);

onMounted(() => {
    DataTables.initJQuery($);
    const dashboardDataTables = new DataTables(survey, data);
    dashboardDataTables.render(document.getElementById("tableContainer") as HTMLElement);
});
</script>