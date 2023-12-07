<template>
  <div>
    <h1>Survey Analytics</h1>
    <div id="summaryContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { Model } from "survey-core";
import { VisualizationPanel } from "survey-analytics";
import { json, data } from "../../data/analytics_data";
import { ref, computed, onMounted } from "vue";

import "survey-analytics/survey.analytics.min.css";

const survey = new Model(json);

onMounted(() => {
    const surveyAnalytics = new VisualizationPanel(
      survey.getAllQuestions(),
      data
    );
    surveyAnalytics.render(
      document.getElementById("summaryContainer") as HTMLElement
    );
});
</script>
