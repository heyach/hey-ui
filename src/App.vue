<template>
  <div id="app">2
  </div>
</template>

<script>
export default {
  created () {
    setTimeout(() => {
      this.data = [{ a: 1 }]
      console.log(123)
    }, 3 * 1000)
  },
  data () {
    return {
      data: [],
      heads: [{ label: '1', prop: 'a' }],
      searchItem: [
        {
          label: '告警名称',
          labelWidth: '80px',
          tag: 'el-input',
          placeholder: '请输入告警名称',
          clearable: true,
          prop: 'alarmName',
          maxLength: 50
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
