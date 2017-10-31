<template>
  <div>
    <TagPanel :tags="tags" v-model="newTag" v-on:remove-tag="removeTag" v-on:add-tag="addTag"></TagPanel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: {
        default: [],
        customer: []
      },
      newTag: ''
    }
  },
  mounted() {
    let length = Math.round(Math.random() * 5) + 5
    for (let index = 0; index < length; index++) {
      this.tags.default.push({ text: '生活娱乐' + index, selected: false, showClose: false, isDefault: true })
    }
    length = Math.round(Math.random() * 5) + 5
    for (let index = 0; index < length; index++) {
      this.tags.customer.push({ text: '职业规划' + index, selected: false, showClose: true, isDefault: false })
    }
  },
  methods: {
    removeTag(value) {
      //根据实际业务处理，成功后移除此tag
      this.tags[value.tag.type].splice(value.tag.tag, 1)
    },
    addTag() {
      this.tags.customer.push({ text: this.newTag, selected: false, showClose: true, isDefault: false })
      //根据实际业务处理，添加成功后清除 newtag
      setTimeout(() => {
        this.newTag = ''
      }, 500)
    }
  }
}
</script>
