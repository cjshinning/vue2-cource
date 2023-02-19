<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="$router.back()" />
    <FormSubmit @submit="submit"></FormSubmit>
  </div>
</template>

<script>
import FormSubmit from '@/components/form-submit.vue';
export default {
  components: {
    FormSubmit
  },
  methods: {
    submit(values) {
      console.log(values);
    }
  }
};
</script>