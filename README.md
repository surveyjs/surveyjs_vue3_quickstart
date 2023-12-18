# SurveyJS + Vue 3 Quickstart Template 

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template uses Vue 3 and the following SurveyJS components:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

> NOTE: If you are looking for a similar quickstart template for a Vue 2 application, refer to the following project: [SurveyJS + Vue 2 Quickstart Template](https://github.com/surveyjs/surveyjs_vue_quickstart/).

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs_vue3_quickstart.git
cd surveyjs_vue3_quickstart
npm i
npm run dev
```

Open http://localhost:5173/ in your web browser.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [data/survey_json.js](data/survey_json.js)
  - [src/components/Survey.vue](src/components/Survey.vue)
- Add Survey Creator to a page
  - [src/components/Creator.vue](src/components/Creator.vue)
- Export a survey to a PDF document
  - [src/components/PDFGenerator.vue](src/components/PDFGenerator.vue)
- Visualize survey results
  - As charts
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [src/components/Dashboard.vue](src/components/Dashboard.vue)
  - As a table (modern browsers)
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [src/components/DashboardTabulator.vue](src/components/DashboardTabulator.vue)
  - As a table (old browsers)
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [src/views/DashboardDatatables.vue](src/components/DashboardDatatables.vue)