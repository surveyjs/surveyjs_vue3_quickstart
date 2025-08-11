<template>
  <div>
    <h1>SurveyJS Dashboard - Table View</h1>
    <span>Uses Tabulator supported only by modern browsers.</span>
    <div id="tableContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { Model } from "survey-core";
import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable"
applyPlugin(jsPDF);
import * as XLSX from "xlsx";

import { Tabulator } from "survey-analytics/survey.analytics.tabulator";
import "survey-analytics/survey.analytics.tabulator.min.css";
import "tabulator-tables/dist/css/tabulator.min.css";
import { json, data } from "../../data/dashboard_data";

const survey = new Model(json);

onMounted(() => {
  const dashboardTabulator = new Tabulator(survey, data, {
    jspdf: jsPDF,
    xlsx: XLSX
  });
  dashboardTabulator.render(document.getElementById("tableContainer") as HTMLElement);
});

</script>