<template>
    <div>
      <div><el-button type="primary" icon="document" @click='handleCopy(password,$event)'>copy</el-button></div>
      用户管理
      <input type="text" :placeholder="$t('login.password')" @blur="test" v-model="password">
    </div>
</template>

<script>
    import clip from '@/utils/clipboard'
    export default {
      name: 'manage',
      data() {
        return {
          password: ''
        }
      },
      methods: {
        handleCopy(text, event) {
          clip(text, event).then(() => {
            this.$message({
              message: 'copy',
              type: 'success'
            })
          }).catch(() => {
            this.$message({
              message: 'copy',
              type: 'error'
            })
          })
        },
        test() {
          // this.$message({
          //   message: this.$t('login.password'),
          //   type: 'success'
          // })
        }
      }
    }
</script>

<style scoped>

</style>
