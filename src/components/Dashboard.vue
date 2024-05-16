<template>
  <div>
    <h1>SurveyJS Dashboard</h1>
    <div id="summaryContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { Model } from "survey-core";
import { VisualizationPanel } from "survey-analytics";
import { json, data } from "../../data/dashboard_data";
import { onMounted } from "vue";

import "survey-analytics/survey.analytics.min.css";

const survey = new Model(json);

onMounted(() => {
    const dashboard = new VisualizationPanel(
      survey.getAllQuestions(),
      data
    );
    dashboard.render(
      document.getElementById("summaryContainer") as HTMLElement
    );
});
</script>