<template>
    <transition mode="out-in"
    enter-class="animate__animated animate__flipInX"
    leave-active-class="animate__animated animate__flipOutX"
    >
    <slot></slot>
    </transition>
</template>

<script>

export default {}
</script>
