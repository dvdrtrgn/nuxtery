<script setup lang="ts">
const props = defineProps({
    open: { type: Boolean, required: true },
});
</script>

<template>
    <div
        v-if="props.open"
        id="AccountDropdown"
        class="vue-dropdown-contents"

        x-placement="bottom"
    >
        <div x-arrow="" style="left: 0px;"></div>
        <ul class="dropdown-content nav-top-dropdown-account-list">
            <li class="nav-top-dropdown-account-list-item">
                <a
                    href="/login/bizjournals?r=%2F"
                    data-ct="Nav : Account Anonymous User : Sign In"
                    data-cy="nav-account-dropdown-login"
                    class="nav-account-link"
                >
                    <b>Sign In</b> <small class="nav-account-link-sub">
                        Existing Members
                    </small>
                </a>
            </li> <li class="nav-top-dropdown-account-list-item">
                <a
                    href="/register/bizjournals?r=%2F"
                    data-ct="Nav : Account Anonymous User : Create Your FREE Account"
                    data-cy="nav-account-dropdown-register"
                    class="nav-account-link"
                >
                    <b>Become a Member</b>
                    <small class="nav-account-link-sub">
                        It’s FREE!
                    </small>
                </a>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<style lang="scss">
#AccountDropdown {
    background: white;
    border: 1px solid gray;
    right: 0;
    position: absolute;
    transform: translate3d(0px, 0px, 0px);
    will-change: transform;
    a {
        display: inline-block;
        padding: 0.5em 1em;
    }
}
</style>
