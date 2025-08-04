<script setup lang="ts">
  const activeClass = 'active'
</script>

<template>
  <nav class="navbar navbar-light bg-gray-200">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">
        Nuxt3
      </NuxtLink>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link" :active-class="activeClass">
            Home
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/editor" :active-class="activeClass">
            <i class="ion-compose" />&nbsp;New Article
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/login" class="nav-link" :active-class="activeClass">
            Sign in
          </NuxtLink>
        </li>
        <li class="nav-item" :active-class="activeClass">
          <NuxtLink to="/register" class="nav-link">
            Sign up
          </NuxtLink>
        </li>
        <li class="nav-item" :active-class="activeClass">
          <NuxtLink class="nav-link" to="/settings">
            <i class="ion-gear-a" />&nbsp;Settings
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" />
        </li>
      </ul>
    </div>
  </nav>
</template>