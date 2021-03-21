<template>
  <main class="container">
    <div class="card col-8 mx-auto">
      <div class="card-header">
        <h5>Login Form</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="" class="form-label">E-Mail</label>
            <input type="email" class="form-control" required autofocus />
          </div>
          <div class="form-group">
            <label for="" class="form-label">Password</label>
            <input type="password" class="form-control" />
          </div>
          <button class="btn btn-primary my-2" type="submit">Login</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>