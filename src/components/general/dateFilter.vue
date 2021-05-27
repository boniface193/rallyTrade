<template>
  <div class="text-center calender">
    <!-- displays calendar filter -->
    <date-range-picker
      ref="picker"
      v-model="dateRange"
      :opens="opens"
      :minDate="minDate"
      :maxDate="maxDate"
      autoApply
      :ranges="ranges"
      :linkedCalendars="linkedCalendars"
      :showWeekNumbers="showWeekNumbers"
      :singleDatePicker="singleDatePicker"
      :alwaysShowCalender="alwaysShowCalender"
    >
      <template v-slot:input="picker" style="min-width: 350px">
        {{ picker.startDate | moment("MMM Do YY") }} -
        {{ picker.endDate | moment("MMM Do YY") }}
      </template>
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import moment from "moment";

// this is to initialize the date ranges
let today = new Date();

today.setHours(0, 0, 0, 0);
// last 7 days
let lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);
// 1 day ago
let yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
yesterday.setHours(0, 0, 0, 0);

export default {
  components: { DateRangePicker },
  props: {
    minDate: null,
    maxDate: null,
    showWeekNumbers: Boolean,
    linkedCalendars: Boolean,
    singleDatePicker: Boolean,
    showDropdowns: Boolean,
    timePicker: Boolean,
    timePicker24Hour: Boolean,
    alwaysShowCalender: Boolean,
  },
  data() {
    return {
      opens: "left",
      dateToStart: false,
      dateToEnd: false,
      dateToString: "",
      // To specify ranges you need to pass and array where each element is an array with exactly two Date objects (from, to) or their timestamp equivalent.
      ranges: {
        Today: [today, today],
        Yesterday: [yesterday, yesterday],
        "Last 7 days": [lastWeek, today],
        "Last Month": [
          new Date(today.getFullYear(), today.getMonth() - 1, 1),
          new Date(today.getFullYear(), today.getMonth(), 0),
        ],
        "This year": [
          new Date(today.getFullYear(), 0, 1),
          new Date(today.getFullYear(), 11, 31),
        ],
      },
      dateRange: {
        startDate: moment(new Date(today.getFullYear(), 0, 0)).format("l"),
        endDate: moment(new Date()).format("l"),
      },
    };
  },

  created() {},

  methods: {
    updateValues() {
      this.$emit("updateDate", this.dateRange);
    },
  },
};
</script>
<style lang="scss" >
.reportrange-text[data-v-4391f606] {
  background: #fff;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 10px !important;
  box-shadow: 0 0.25rem 1rem rgba(13, 110, 253, 0.175) !important;

}
.daterangepicker.opensleft[data-v-4391f606] {
  right: 10px;
  left: auto;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    margin-bottom: 10%;
}
.daterangepicker td.active, .daterangepicker td.active:hover {
    background-color:var(--v-primary-base) !important;
    color: white !important;
}
.ranges.col-12.col-md-auto {
  width: 20%;
}

.daterangepicker .ranges li.active {
    background-color: #fb8c00;
    color: #fff;
}

</style>
