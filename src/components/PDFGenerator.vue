<template>
  <div class="container">
    <h1>SurveyJS PDF Generator</h1>
    <div class="jumbotron">
      <p>SurveyJS PDF Generator is a client-side extension over the SurveyJS Form Library that enables users to save surveys as PDF documents.</p>
      <p>NOTE: Dynamic elements and characteristics (visibility, validation, navigation buttons) are not supported.</p>
      <p>Click the button below to export survey to a PDF document.</p>
      <button v-on:click="savePDF">Save as PDF</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Model } from "survey-core";
import { SurveyPDF } from "survey-pdf";
import { json } from "../../data/survey_json";

const model = new Model(json);
const savePDF = function() {
  const surveyPDF = new SurveyPDF(json);
  surveyPDF.data = model.data;
  surveyPDF.save();
};
</script>
