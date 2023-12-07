<script lang="ts" setup>
import { SurveyCreatorModel } from 'survey-creator-core';
const creator = new SurveyCreatorModel({});
</script>
<template>
    <div style="position: fixed; top: 52px; left: 0; width: 100vw; bottom: 0">
        <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
    </div>
</template>