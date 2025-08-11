<script lang="ts" setup>
import { SurveyCreatorModel } from 'survey-creator-core';
import { json } from "../../data/survey_json.js";
// Enable Ace Editor in the JSON Editor tab
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-searchbox";

const creator = new SurveyCreatorModel({});
creator.JSON = json;
</script>
<template>
    <div style="position: fixed; top: 52px; left: 0; width: 100vw; bottom: 0">
        <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
    </div>
</template>