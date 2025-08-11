<script setup lang="ts">
import { Model } from "survey-core";
import { json } from "../../data/survey_json.js";

const survey = new Model(json);
</script>

<template>
  <SurveyComponent :model="survey"></SurveyComponent>
</template>