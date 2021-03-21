<template>
  <main class="container">
    <div class="card col-8 mx-auto">
      <div class="card-header">
        <h5>Login Form</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="" class="form-label">E-Mail</label>
            <input v-model="user.email" type="email" class="form-control" required autofocus />
          </div>
          <div class="form-group">
            <label for="" class="form-label">Password</label>
            <input v-model="user.password" type="password" class="form-control" />
          </div>
          <button class="btn btn-primary my-2" type="submit">Login</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import authStore from '@/store/auth'

export default {
  setup() {
    const router = useRouter()
    const user = reactive({
      email: '',
      password: ''
    })

    let login = async () => {
      await authStore.dispatch('login', user)
      router.replace({
        name: 'Dashboard'
      })
    }

    return { user, login }
  }
};
</script>

<style>
</style>