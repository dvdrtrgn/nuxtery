<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, required: true },
});

</script>

<template>
    <div
        v-if="props.open"
        id="AccountDropdown"
        class=""
        x-placement="bottom"
    >
        <div x-arrow="" style="left: 0px;"></div>
        <ul class="">
            <li class="">
                <a
                    href="/login/bizjournals?r=%2F"
                    data-ct="Nav : Account Anonymous User : Sign In"
                    data-cy="nav-account-dropdown-login"
                    class=""
                >
                    <b>Sign In</b>
                    <small class="">
                        Existing Members
                    </small>
                </a>
            </li>
            <li class="">
                <a
                    href="/register/bizjournals?r=%2F"
                    data-ct="Nav : Account Anonymous User : Create Your FREE Account"
                    data-cy="nav-account-dropdown-register"
                    class=""
                >
                    <b>Become a Member</b>
                    <small class="">
                        It’s FREE!
                    </small>
                </a>
            </li>
        </ul>
    </div>
</template>
