<script setup lang="ts">
  import { Model } from "survey-core";
  import("survey-core/defaultV2.css");

  let json = {
    focusFirstQuestionAutomatic: true,
    "title": "Minimum data reporting form – for suspected and probable cases of COVID-19",
    "pages": [{
      "name": "page1",
      "navigationTitle": "Sign In",
      "navigationDescription": "... to continue purchasing.",
      "elements": [
        {
          "name": "q1",
          type: "text"
        }
      ]
    }, {
      "name": "page2",
      "navigationTitle": "Shipping",
      "title": "Shipping",
      "navigationDescription": "Enter shipping information.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "q1",
          "title": "Select a shipping method.",
          "choices": ["FedEx", "DHL", "USP", "In-Store Pickup"]
        },
      ]
    }, {
      "name": "page3",
      "navigationTitle": "Payment",
      "navigationDescription": "Select a payment method.",
      "elements": [
        {
          "name": "q1",
          type: "text"
        }
      ]
    }, {
      "name": "page4",
      "navigationTitle": "Gift Options",
      "navigationDescription": "Choose your gift.",
      "elements": [
        {
          "name": "q1",
          type: "text"
        }
      ]
    }, {
      "name": "page5",
      "navigationTitle": "Place Order",
      "navigationDescription": "Finish your purchasing.",
      "elements": [{
        "name": "q1",
        type: "text"
      }]
    }],
    "showProgressBar": "top",
    // "progressBarType": "buttons"
    "progressBarType": "pages"
  };

  let survey = new Model(json)
</script>

<template>
  <SurveyComponent :survey="survey"></SurveyComponent>
</template>