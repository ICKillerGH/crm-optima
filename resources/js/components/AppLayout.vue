<template>
  <div class="root">
    <nav class="sidebar">
      <a href="#" class="menu-link">
        <i class="bi bi-house"></i>
      </a>
      <a href="#" class="menu-link">
        <i class="bi bi-person-badge-fill"></i>
      </a>
    </nav>

    <div class="content">
      <div class="top-navbar">
        <div class="dropdown ms-auto">
          <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">alex@gmail.com</button>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click="logout">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
      <main class="main-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import useLogout from '../hooks/useLogout';

export default {
  setup() {
    const {loading: loggingOut, logout} = useLogout();

    return {
      loggingOut,
      async logout() {
        await logout();
        window.location.reload();
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.root {
  height: 100vh;
  display: flex;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 100%;
  padding: 1rem;
  border-right: 1px solid $gray-300;
}

.menu-link {
  font-size: 1.8rem;
  line-height: 1;
  padding: .3rem;
  color: inherit;
  margin-bottom: 1rem;
  border-radius: $border-radius;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: $gray-200;
  }
}

.content {
  min-width: 0;
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
}

.top-navbar {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid $gray-300;
  padding: $spacer;
}

.main-content {
  padding: $spacer;
}
</style>
