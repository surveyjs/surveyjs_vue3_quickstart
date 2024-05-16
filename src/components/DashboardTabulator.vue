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
import "jspdf-autotable"
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

window["jsPDF"] = jsPDF;
window["XLSX"] = XLSX;

import { Tabulator } from "survey-analytics/survey.analytics.tabulator";

import { json, data } from "../../data/dashboard_data";

import "survey-analytics/survey.analytics.tabulator.min.css";
import "tabulator-tables/dist/css/tabulator.min.css";

const survey = new Model(json);

onMounted(() => {
    const dashboardTabulator = new Tabulator(survey, data);
    dashboardTabulator.render(document.getElementById("tableContainer") as HTMLElement);
});

</script>