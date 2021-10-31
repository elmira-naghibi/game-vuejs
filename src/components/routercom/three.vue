
<template>
    <div style="border:1px solid red; width:200px; margin:10px; padding:10px; cursor:pointer">
            <h1>three</h1>
            <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="'/one/' + $route.params.id + '/edit'"
      class="btn btn-primary"
    >Edit User</router-link>
  </div>
    </div>
</template>